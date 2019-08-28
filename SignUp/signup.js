
$(function(){
    var operation = "A"; 
    var indice_selecionado = -1; 
    var tbUsers = localStorage.getItem("tbUsers");
    tbUsers = JSON.parse(tbUsers); 

		if(tbUsers == null){ 
            tbUsers = [];
		}

		$("#frmUsers").on("submit",function(){
			if(operation == "A"){
			    return Adicionar(tbUsers);
			}else{
			    return Editar(tbUsers,indice_selecionado);
			}
		});

		Listar(tbUsers);

		$("#tblListar").on("click", ".btnEditar", function(){
	    operation = "E";
	    indice_selecionado = parseInt($(this).attr("alt"));
			var cli = JSON.parse(tbUsers[indice_selecionado]);
	    $("#name").val(cli.name);
	    $("#username").val(cli.username);
	    $("#phone").val(cli.phone);
        $("#password").val(cli.password);
        $("#confirm_password").val(cli.confirm_password);
			$("#username").attr("readonly","readonly");
		    $("#name").focus();
		});

		$("#tblListar").on("click", ".btnExcluir",function(){
	    indice_selecionado = parseInt($(this).attr("alt"));
			Excluir(tbUsers, indice_selecionado);
	    Listar(tbUsers);
		});
});

function Adicionar(tbUsers){

		var usuario = JSON.stringify({
        name   : $("#name").val(),
        username     : $("#username").val(),
        phone : $("#phone").val(),
        password    : $("#password").val(),
        confirm_password  : $("#confirm_password").val()
    });
    tbUsers.push(usuario);
		console.log("tbUsers - " + tbUsers);
    localStorage.setItem("tbUsers", JSON.stringify(tbUsers));
    alert("Usuario Creado.");
    location.href = '../SignIn/index.html';
    return true;
}


function Listar(tbUsers){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Name</th>"+
        "   <th>Username</th>"+
        "   <th>Phone</th>"+
        "   <th>Password</th>"+
        "   <th>Confirm password</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbUsers){
        var cli = JSON.parse(tbUsers[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='localStorage/edit.png' alt='"+i+"'class='btnEditar'/><img src='localStorage/delete.png' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.name+"</td>");
        $("#tblListar tbody").append("<td>"+cli.username+"</td>");
        $("#tblListar tbody").append("<td>"+cli.phone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.password+"</td>");
        $("#tblListar tbody").append("<td>"+cli.confirm_password+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}
