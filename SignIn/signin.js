
$(function(){
    var operacao = "A";
    var indice_selecionado = -1; 
    var tbUsers = localStorage.getItem("tbUsers");
    tbUsers = JSON.parse(tbUsers); 

		if(tbUsers == null){ 
            tbUsers = [];
        }

        function click_me() {
            Listar(tbUsers);
            var userN = document.getElementById('username').value;
            var Pass = document.getElementById('password').value;
            console.log(userN+Pass)
            for(var i in tbUsers){
                var cli = JSON.parse(tbUsers[i]);      
               if(cli.username===userN && cli.password===Pass){
                document.location.href = '../Dashboard/dashboard.html',true;
                location.href = '../SignUp/index.html';
                 alert('Bienvenido');
                 return true;
               }
            

            }
		   return alert('Usuario o contraseña invalidos');

          }
          

          $('#form_id').submit(function(){	
            Listar(tbUsers);
            var userN =$("#username").val();
            var Pass=$("#password").val();
            console.log(userN);
            console.log(Pass);

              for(var i in tbUsers){
                var cli = JSON.parse(tbUsers[i]);      
               if(cli.username===userN && cli.password===Pass){
                document.location.href = '../Dashboard/dashboard.html',true;
                window.location.href = '../Dashboard/dashboard.html';
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

function Adicionar(tbUsers){

		var usuario = JSON.stringify({
        name   : $("#txtName").val(),
        username     : $("#txtUsername").val(),
        phone : $("#txtPhone").val(),
        password    : $("#txtPassword").val(),
        confirm_password  : $("#txtConfirmPassword").val()
    });
    tbUsers.push(usuario);
		console.log("tbUsers - " + tbUsers);
    localStorage.setItem("tbUsers", JSON.stringify(tbUsers));
    alert("Registro adicionado.");
    return true;
}

function Editar(tbUsers,indice_selecionado){
    //location.href = 'index.html';
    location.replace('index.html');
    tbUsers[indice_selecionado] = JSON.stringify({
        name   : $("#txtName").val(),
        username     : $("#txtUsername").val(),
        phone : $("#txtPhone").val(),
        password    : $("#txtPassword").val(),
        confirm_password    : $("#txtConfirmPassword").val()
        });
    localStorage.setItem("tbUsers", JSON.stringify(tbUsers));
    alert("Informações editadas.")
    operacao = "A"; 
    return true;
}

function Excluir(tbUsers, indice_selecionado){
    
    tbUsers.splice(indice_selecionado, 1);
    localStorage.setItem("tbUsers", JSON.stringify(tbUsers));
    alert("Registro excluído.");

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
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }

    function msg(){  
        alert("Hello Javatpoint");  
       }  

       function DoSubmit(){
           alert('hello')
        document.myform.myinput.value = '1';
        return true;
        
      }
      $(document).ready(function() {
        $('#btnSun').click(myFunction);
      });
      
      function myFunction() {
        Listar(tbUsers);
        var userN = document.getElementById('username').value;
        var Pass = document.getElementById('password').value;
        
        for(var i in tbUsers){
            var cli = JSON.parse(tbUsers[i]);      
           if(cli.username===userN && cli.password===Pass){
            document.location.href = '../Dashboard/dashboard.html',true;
            window.location.href = '../Dashboard/dashboard.html';
             alert('Bienvenido');
             return true;
           }
        

        }
       return alert('Usuario o contraseña invalidos');
      }
}
