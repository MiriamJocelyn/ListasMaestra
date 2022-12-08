$(document).ready(function () {
    //$('#contenidoTabla').DataTable({
    //    dom: 'Bfrtip',
    //    buttons: [
    //       'pdf'
    //    ]
    //});
    //html2canvas($('#contenidoTabla'), {
    //    onrendered: function (canvas) {
    //        var data = canvas.toDataURL();
    //        var docDefinition = {
    //            content: [{
    //                image: data,
    //                width: 500
    //            }]
    //        };
    //        pdfMake.createPdf(docDefinition).download("Table.pdf");
    //    }
    //});
    //var myDocument = new jsPDF();
    //var specialElementHandlers = {
    //    "#contenidoTabla": function (element, rendrer) {
    //        return true;
    //    }
    //};
    //myDocument.fromHTML($("#contenidoTabla").html(), 15, 15, {
    //    "width": 170,
    //    "elementHandlers": specialElementHandlers
    //});

    //myDocument.save("File.pdf");
    jQuery.ajax({
        async: true,
        url: "http://localhost:57199/ListaM/ConsultaNivel",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        success: function (data) {
            llenadoComboN(data)
            if (data.length > 0)
                $("#lblNivel").text(data[0].nivel)
        },
        error: function (data) {
            console.log(data)
            alert(data)
        }
    });

    jQuery.ajax({
        async: true,
        url: "http://localhost:57199/ListaM/ConsultaArea",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        success: function (data) {
            llenadoComboA(data)
            if (data.length > 0)
                $("#lblArea").text(data[0].area)
        },
        error: function (data) {
            console.log(data)
            alert(data)
        }
    });

    $("#cmbNivel").change(function () {
        $("#lblNivel").text($(this).val())
    })

    $("#cmbArea").change(function () {
        $("#lblArea").text($(this).val())
    })

    $("#btnBuscar").click(function () {
        var habilitado = $("#cbmHabilitado option:selected").val();
        var area = $("#lblArea").text()
        var nivel = $("#lblNivel").text()

        var object = { estatus: habilitado, area: area, nivel: nivel }
        console.log(object)
        jQuery.ajax({
            async: true,
            url: "http://localhost:57199/ListaM/ConsultaLista",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(object),
            success: function (data) {
                console.log('lista')
                console.log(data)
                llenadoGrid(data)
            },
            error: function (data) {
                console.log(data)
                alert(data)
            }
        });


    })
    //alert($("#2LP01").attr('checked'))
})

function llenadoComboN(data) {
    for (i = 0; i < data.length; i++)
        $("#cmbNivel").append($("<option>", { value: data[i].nivel, text: data[i].nivel }))
}

function llenadoComboA(data) {
    for (i = 0; i < data.length; i++)
        $("#cmbArea").append($("<option>", { value: data[i].area, text: data[i].area }))
}

function llenadoGrid(data) {
    $("#tbodyPrincipal").empty()
    var htmlTbody = ""
    for (i = 0; i < data.length; i++) {
        htmlTbody += '<tr>'
        htmlTbody += '<td><input type="checkbox" id="' + data[i].nivel + data[i].area + data[i].Doc + '" onclick="check()"/></td>'
        if (data[i].nivel == 0)
            htmlTbody += '<td></td>'
        else
            htmlTbody += '<td>' + data[i].nivel + '</td>'
       
        htmlTbody += '<td>' + data[i].area + '</td>'
        htmlTbody += '<td>' + data[i].Doc + '</td>'
        htmlTbody += '<td>' + data[i].Codigo + '</td>'
        htmlTbody += '<td>' + data[i].Originador + '</td>'
        htmlTbody += '<td>' + data[i].NomDocumento + '</td>'
        htmlTbody += '<td>' + fecha(data[i].FechaElaboracion) + '</td>'
        
        if (data[i].RevisionActual = "-1")
            htmlTbody += '<td></td>'
        else
            htmlTbody += '<td>' + data[i].RevisionActual + '</td>'
        htmlTbody += '<td>' + data[i].Elaboracion + '</td>'
        htmlTbody += '<td>' + data[i].RevisionAprobacion + '</td>'
        htmlTbody += '<td>' + data[i].AprobadoInvolucrados + '</td>'
        htmlTbody += '<td>' + data[i].Difusion + '</td>'
        htmlTbody += '<td>' + fecha(data[i].FechaUltimaRevision) + '</td>'
        htmlTbody += '<td>' + data[i].Observaciones + '</td>'
        htmlTbody += '<td>' + data[i].estatus + '</td>'
        htmlTbody += '<td><button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="ver(\'' + data[i].Elaboracion + '\',\'' + data[i].RevisionAprobacion + '\',\'' + data[i].AprobadoInvolucrados + '\',\'' + data[i].Difusion + '\',\'' + data[i].Codigo + '\')"> Ver</button></td>'
        htmlTbody += '</tr>'

    }

    $("#tbodyPrincipal").append(htmlTbody)
}
function fecha(dataFecha) {
    if (dataFecha.substring(0, 10))
        return '';
    else
      return  dataFecha.substring(0, 10)
}

function check() {
    //if ($(this).attr('checked')) {
    //    $(this).removeAttr('checked')
    //    var a = $(this).attr('checked')
    //    alert(a)
    //} else {
    //    $(this).attr('checked', 'checked')
    //    var a = $(this).attr('checked')
    //    alert(a)
    //}
}

function ver(elaboracion,revAprobado,aprobado,difusion,codigo) {
    console.log(elaboracion)
    $("#lblCodigo").text(codigo)
    $("#cmbElab").val(elaboracion)
    $("#cmbRevApro").val(revAprobado)
    $("#cmbApro").val(aprobado)
    $("#cmbDif").val(difusion)
    //$("#lblPrueba").text(data.area)
}
function guardar() {
    var elaboracion = $("#cmbElab").val();
    var revAprobado = $("#cmbRevApro").val()
    var aprobado = $("#cmbApro").val()
    var difusion = $("#cmbDif").val()
    var codigo = $("#lblCodigo").text()
    var object = { codigo: codigo, revision: revAprobado, aprobado: aprobado,elaboracion:elaboracion,difusion:difusion}
    jQuery.ajax({
        async: true,
        url: "http://localhost:57199/ListaM/EdicionLista",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(object),
        success: function (data) {
            console.log(data)
            $('#btnBuscar').trigger('click');
            alert(data[0].Descripcion)
        },
        error: function (data) {
            console.log(data)
            alert(data)
        }
    });
}



