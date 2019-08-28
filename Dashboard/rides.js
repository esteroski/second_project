var dbRides= localStorage.getItem("dbRides"); //Obtener datos de localStorage
var operation = "A"; //"A"=add; "E"=edit
dbRides = JSON.parse(dbRides); // Covertir a objeto
if (dbRides === null) // Si no existe, creamos un array vacio.
    dbRides = [];

function addRide () {
    // Select the inputs.
    var ridesData = JSON.stringify({
        ridename : $("#ridename").val(),
        from : $("#from").val(),
        ends : $("#ends").val(),
        description : $("#description").val(),
        departure : $("#departure").val(),
        estimated_arrival : $("#estimated_arrival").val(),
    });

    dbRides.push(ridesData); // Save data in the array
    localStorage.setItem("dbRides", JSON.stringify(dbRides));



    listRides();
}



function listRides (){
    $("#dbRides-list").html(
            "<thead>" +
                "<tr>" +
                    "<th> ID </th>" +

                    "<th> Ridename </th>" +
                    "<th> StartsFrom </th>" +
                    "<th> Ends </th>" +
                    "<th> Description </th>" +
                    "<th> Departure </th>" +
                    "<th> EstimatedArrival </th>" +
                    "<th> </th>" +
                    "<th>  </th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
    );

    for (var i in dbRides) {
        var d = JSON.parse(dbRides[i]);
        $("#dbRides-list").append(
                        "<tr>" +
                            "<td>" + i + "</td>" +
                            "<td>" + d.Ridename + "</td>" +
                            "<td>" + d.StartsFrom + "</td>" +
                            "<td>" + d.Ends + "</td>" +
                            "<td>" + d.Description + "</td>" +
                            "<td>" + d.Departure + "</td>" +
                            "<td>" + d.EstimatedArrival + "</td>" +
                            "<td> <a id='"+ i +"' class='btnEdit' href='#'> <span class='glyphicon glyphicon-pencil'> </span>  </a> </td>" +
                            "<td> <a id='" + i + "' class='btnDelete' href='#'> <span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
                        "</tr>"
                           );
    }

}


    if (dbRides.length !== 0) {
        ListarVacas();
    } else {
        $("#dbRides-list").append("<h2>You don't have rides </h2>");
    }
+
    function deleteRide(e){
        dbRides.splice(e, 1); // number of items for deleting
        localStorage.setItem("dbRides", JSON.stringify(dbRides));
    }

    function editRide() {
        dbRides[index] = JSON.stringify({
            ridename : $("#ridename").val(),
            from : $("#from").val(),
            ends : $("#ends").val(),
            description : $("#description").val(),
            departure : $("#departure").val(),
            estimated_arrival : $("#estimated_arrival").val(),
        });
        localStorage.setItem("dbRides", JSON.stringify(dbRides));
        operation = "A"; //return to the initil value of adding a ride
        return true;

    }

    $(".btnDelete").bind("click", function(){
        alert("Do you want to delete it?");
        index = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
        console.log(index);
        console.log(this);
        deleteRide(index); // Eliminamos el elemento llamando la funcion de eliminar
        listRides();
    });

    $(".btnEdit").bind("click", function() {
        alert("Do you want to delete it?");
        index = $(this).attr("id");
        console.log(index);
        console.log(this);
        // put the values on the input for editing them
        var rideItem = JSON.parse(dbRides[index]);
        $("#ridename").val(rideItem.ridename);
        $("#from").val(rideItem.from);
        $("#ends").val(rideItem.ends);
        $("#description").val(rideItem.description);
        $("#departure").val(rideItem.departure);
        $("#estimated_arrival").val(rideItem.estimated_arrival);
    });

    