
$(function(){
    var operation = "A"; 
    var indice_selecionado = -1; 
    var tbUsers = localStorage.getItem("tbUsers");
    tbUsers = JSON.parse(tbUsers);

		if(tbUsers == null){ 
            tbUsers = [];
		}

		$("#frmUsers").on("submit",function(){	
            Listar(tbUsers);
            var userN =$("#username").val();
            var Pass=$("#password").val();
            console.log(userN);
            console.log(Pass);

              for(var i in tbUsers){
                var cli = JSON.parse(tbUsers[i]);      
               if(cli.username===userN && cli.password===Pass){
                location.replace = '../Dashboard/dashboard.html';
                 alert('Bienvenido');
                 return true;
               }
            

            }
		   return alert('Usuario o contraseña invalidos');
		});

		Listar(tbUsers);

		$("#tblListar").on("click", ".btnEditar", function(){
	    operacao = "E";
	    indice_selecionado = parseInt($(this).attr("alt"));
			var cli = JSON.parse(tbUsers[indice_selecionado]);
	    $("#txtName").val(cli.name);
	    $("#txtUsername").val(cli.username);
	    $("#txtPhone").val(cli.phone);
        $("#txtPassword").val(cli.password);
        $("#txtConfirmPassword").val(cli.confirm_password);
			$("#txtUsername").attr("readonly","readonly");
		    $("#txtName").focus();
		});

		$("#tblListar").on("click", ".btnExcluir",function(){
	    indice_selecionado = parseInt($(this).attr("alt"));
			Excluir(tbUsers, indice_selecionado);
	    Listar(tbUsers);
		});
});


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
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}
