/*is being declared variables necessaries for a good CRUD development
variables: functionality (if is adding or editing), index, tbRides (getting stored data)
*/
$(function(){

    var functionality = "A"; 
    var index = -1; //selected index from the list
    var tbRides = localStorage.getItem("tbRides");
    tbRides = JSON.parse(tbRides); //converts into an object

        if(tbRides == null)
        tbRides = [];

});


//Function where is taking the neccesary values for creating a ride in the localStorga
function addRide(){

    var ride = JSON.stringify({

        RideName : $("#ridename").val(),
        From : $("#from").val(),
        Ends : $("#ends").val(),
        Departure : $("#departure").val(),
        EstimatedArrival : $("#estimated_arrival").val()
    });

    tbRides.push(ride);
    localStorage.setItem("tbRides", JSON.stringify(tbRides));
    alert("The data was saved");
    return true;
}

//Function where is taking the data (an specific index) that allows the user to modify it.
function editRide(){

    tbRides[index] = JSON.stringify({

        RideName : $("#ridename").val(),
        From : $("#from").val(),
        Ends : $("#ends").val(),
        Departure : $("#departure").val(),
        EstimatedArrival : $("#estimated_arrival").val()
    }); 
    
    localStorage.setItem("tbRides", JSON.stringify(tbRides));
    alert("The data was edited.")
    operation= "A"
    return true;

    }

//Function that deletes the selected index.
function deleteRide(){
    tbRides.splice(index, 1);
    localStorage.setItem("tbRides", JSON.stringify(tbRides));
    alert("Ride deleted");
}