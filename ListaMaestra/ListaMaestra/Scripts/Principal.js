$(document).ready(function () {

    prueba()
    $("#btnBuscar").click(function () {
        var habilitado = $("#cbmHabilitado option:selected").val();
        var area = $("#cbmArea option:selected").val();
        var nivel = $("#cbmNivel option:selected").val();

        
    })
    //alert($("#2LP01").attr('checked'))
})

function check()
{
    if ($(this).attr('checked')) {
        $(this).removeAttr('checked')
        var a = $(this).attr('checked')
        alert(a)
    } else {
        $(this).attr('checked', 'checked')
        var a = $(this).attr('checked')
        alert(a)
    }
}
function busqueda(){

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

function obtData() {
    var data=[];
    data[0].Nivel = "2"
    data[0].Area = "LP"
    data[0].Numero="01"
    data[0].Codigo = "2-LP-01"
    data[0].Originador = "Marisela Domínguez"
    data[0].Nombre = "Procedimiento de Inspeccion Recibo Pelota"
    data[0].FechaElaboracion = "09-11-18"
    data[0].RevisionAct = "0"
    data[0].Elaboracion = "ok"
    data[0].RevisionAprobacion = "ok"
    data[0].Aprobado = "ok"
    data[0].Difusion = "ok"
    data[0].FechaRevision = "09-11-18"
    data[0].Observacion = ""
    data[0].Estatus="Habilitado"

    return data;

}
