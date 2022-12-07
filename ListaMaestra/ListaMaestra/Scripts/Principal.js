$(document).ready(function () {

    //prueba()

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
    var htmlTbody=""
    for (i = 0; i < data.length; i++) {
        htmlTbody += '<tr>'
        htmlTbody += '<td><input type="checkbox" id="' + data[i].nivel + data[i].area + data[i].Doc + '" onclick="check()"/></td>'
        htmlTbody += '<td>' + data[i].nivel + '</td>'
        htmlTbody += '<td>' + data[i].area + '</td>'
        htmlTbody += '<td>' + data[i].Doc + '</td>'
        htmlTbody += '<td>' + data[i].Codigo + '</td>'
        htmlTbody += '<td>' + data[i].Originador + '</td>'
        htmlTbody += '<td>' + data[i].NomDocumento + '</td>'
        htmlTbody += '<td>' + data[i].FechaElaboracion + '</td>'
        htmlTbody += '<td>' + data[i].RevisionActual + '</td>'
        htmlTbody += '<td>' + data[i].Elaboracion + '</td>'
        htmlTbody += '<td>' + data[i].RevisionAprobacion + '</td>'
        htmlTbody += '<td>' + data[i].AprobadoInvolucrados + '</td>'
        htmlTbody += '<td>' + data[i].Difusion + '</td>'
        htmlTbody += '<td>' + data[i].FechaUltimaRevision + '</td>'
        htmlTbody += '<td>' + data[i].Observaciones + '</td>'
        htmlTbody += '<td>' + data[i].estatus + '</td>'
        htmlTbody += '</tr>'

    }

    $("#tbodyPrincipal").append(htmlTbody)
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



function prueba() {
    var htmlTbody = '<tr>'
    //var data = obtData()
    //alert(data.length)

    htmlTbody += '<td><input type="checkbox" id="2LP01" onclick="check()"/></td>'
    htmlTbody += '<td>2</td>'
    htmlTbody += '<td>LP</td>'
    htmlTbody += '<td>01</td>'
    htmlTbody += '<td>2-LP-01</td>'
    htmlTbody += '<td>Marisela Domínguez</td>'
    htmlTbody += '<td>Procedimiento de Inspeccion Recibo Pelota</td>'
    htmlTbody += '<td>09-11-18</td>'
    htmlTbody += '<td>0</td>'
    htmlTbody += '<td>ok</td>'
    htmlTbody += '<td>ok</td>'
    htmlTbody += '<td>ok</td>'
    htmlTbody += '<td>ok</td>'
    htmlTbody += '<td>10-ene-18</td>'
    htmlTbody += '<td></td>'
    htmlTbody += '<td>Habilitado</td>'
    htmlTbody += '</tr>'

    htmlTbody += '<tr>'
    htmlTbody += '<td><input class="check" type="checkbox" id="2LP02"/></td>'
    htmlTbody += '<td>2</td>'
    htmlTbody += '<td>LP</td>'
    htmlTbody += '<td>02</td>'
    htmlTbody += '<td>2-LP-02</td>'
    htmlTbody += '<td>Marisela Domínguez</td>'
    htmlTbody += '<td>Procedimiento de Formulacion de plastico de pelota</td>'
    htmlTbody += '<td>14-12-18</td>'
    htmlTbody += '<td>0</td>'
    htmlTbody += '<td>P</td>'
    htmlTbody += '<td>P</td>'
    htmlTbody += '<td>P</td>'
    htmlTbody += '<td>P</td>'
    htmlTbody += '<td>10-ene-18</td>'
    htmlTbody += '<td></td>'
    htmlTbody += '<td>Habilitado</td>'
    htmlTbody += '</tr>'

    $("#tbodyPrincipal").append(htmlTbody)
}

