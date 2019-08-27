
var dbRides = localStorage.getItem("dbRides"); //get data from localStorage
dbRides = JSON.parse(dbRides); // Change an object
if (dbRides === null) 
    dbRides = [];



//function for adding a ride
function addRide () {
    
    var ride_data = JSON.stringify({
        RideName : $("#ridename").val(),
        StartFrom : $("#from").val(),
        Ends : $("#ends").val(),
        Departure : $("#departure").val(),
        EstimatedArrival : $("estimated_arrival").val()
    });

    dbRides.push(ride_data); 
    localStorage.setItem("dbRides", JSON.stringify(dbRides));



    listRides();


    return Alert(1);
}



function listRides(){
    $("#tbRides").html(
            "<thead>" +
                "<tr>" +
                    "<th> RideName </th>" +
                    "<th> StartFrom </th>" +
                    "<th> Ends </th>" +
                    "<th> Departure </th>" +
                    "<th> Estimated Arrival </th>" +
                    "<th> </th>" +
                    "<th>  </th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
    );

    for (var i in dbRides) {
        var d = JSON.parse(dbRides[i]);
        $("#tbRides").append(
                        "<tr>" +
                            "<td>" + i + "</td>" +
                            "<td>" + d.RideName + "</td>" +
                            "<td>" + d.StartFrom + "</td>" +
                            "<td>" + d.Ends + "</td>" +
                            "<td>" + d.Departure + "</td>" +
                            "<td>" + d.EstimatedArrival + "</td>" +
                            "<td> <a id='"+ i +"' class='btnEdit' href='#'> <span class='glyphicon glyphicon-pencil'> </span>  </a> </td>" +
                            "<td> <a id='" + i + "' class='btnDelete' href='#'> <span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
                        "</tr>"
                           );
    }

}


if (dbRides.length !== 0) {
    listRides();
} else {
    $("#dbRides").append("<h2> You don't have any data recorded </h2>");
}


function deleteRide(e){
    dbRides.splice(e, 1); 
    localStorage.setItem("dbRides", JSON.stringify(dbRides));
    return Alert(2);
}

function editRide() {
    dbRides[index] = JSON.stringify({
        RideName : $("#ridename").val(),
        StartFrom : $("#from").val(),
        Ends : $("#ends").val(),
        Departure : $("#departure").val(),
        EstimatedArrival : $("estimated_arrival").val()
    });
    localStorage.setItem("dbRides", JSON.stringify(dbRides));
    operation = "A"; 
    return true;

}

$(".btnDelete").bind("click", function(){
    alert("Do you really want to delete this ride?");
    index = $(this).attr("ide"); 
    console.log(index);
    console.log(this);
    deleteRide(index); 
    listRides();
});

$(".btnEdit").bind("click", function() {
    alert("Do you want to edit it?");
    index = $(this).attr("id");
    console.log(index);
    console.log(this);

    var ridesData = JSON.parse(dbRides[index]);
    $("#ridename").val(ridesData.RideName);
    $("#from").val(ridesData.StartFrom);
    $("#ends").val(ridesData.Ends);
    $("#departure").val(ridesData.Departure);
    $("#estimated_arrival").val(ridesData.EstimatedArrival);
});


