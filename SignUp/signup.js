
var dbUsers = localStorage.getItem("dbRides"); //get data from localStorage
dbUsers = JSON.parse(dbUsers); // Change an object
if (dbUsers === null) 
dbUsers = [];



//function for adding a ride
function addUser () {
    
    var user_data = JSON.stringify({
        Name : $("#name").val(),
        Username : $("#username").val(),
        Phone : $("#phone").val(),
        Password : $("#password").val(),
        ConfirmPassword : $("#confirm_password").val()
    });

    dbUsers.push(user_data); 
    localStorage.setItem("dbUsers", JSON.stringify(dbUsers));



    listUsers();
}



function listUsers(){
    $("#dbUsers").html(
            "<thead>" +
                "<tr>" +
                    "<th> Name </th>" +
                    "<th> Username </th>" +
                    "<th> Phone </th>" +
                    "<th> Password </th>" +
                    "<th> ConfirmPassword </th>" +
                    "<th> </th>" +
                    "<th>  </th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
    );

    for (var i in dbUsers) {
        var d = JSON.parse(dbUsers[i]);
        $("#dbUsers").append(
                        "<tr>" +
                            "<td>" + i + "</td>" +
                            "<td>" + d.Name + "</td>" +
                            "<td>" + d.Username + "</td>" +
                            "<td>" + d.Phone + "</td>" +
                            "<td>" + d.Password + "</td>" +
                            "<td>" + d.ConfirmPassword + "</td>" +
                            "<td> <a id='"+ i +"' class='btnEdit' href='#'> <span class='glyphicon glyphicon-pencil'> </span>  </a> </td>" +
                            "<td> <a id='" + i + "' class='btnDelete' href='#'> <span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
                        "</tr>"
                           );
    }

}


if (dbUsers.length !== 0) {
    listUsers();
} else {
    $("#dbUsers").append("<h2> You don't have any data recorded </h2>");
}


function deleteUser(e){
    dbUsers.splice(e, 1); 
    localStorage.setItem("dbUsers", JSON.stringify(dbUsers));
    
}

function editUser() {
    dbUsers[index] = JSON.stringify({
        Nç : $("#name").val(),
        Username : $("#username").val(),
        Phone : $("#phone").val(),
        Password : $("#password").val(),
        ConfirmPassword : $("#confirm_password").val()
    });
    localStorage.setItem("dbUsers", JSON.stringify(dbUsers));
    return true;

}

$(".btnDelete").bind("click", function(){
    alert("Do you really want to delete this ride?");
    index = $(this).attr("ide"); 
    console.log(index);
    console.log(this);
    deleteUser(index); 
    listUsers();
});

$(".btnEdit").bind("click", function() {
    alert("Do you want to edit it?");
    index = $(this).attr("id");
    console.log(index);
    console.log(this);

    var usersData = JSON.parse(dbUsers[index]);
    $("#name").val(usersData.Name);
    $("#username").val(usersData.Username);
    $("#phone").val(usersData.Phone);
    $("#password").val(usersData.Password);
    $("#confirm_password").val(usersData.ConfirmPassword);
});


