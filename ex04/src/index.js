   
// Create a monitorsListArray array here

var monitorsListArray = ["Apple", "Peach", "Berry"];

// End of monitorsListArray array

function myMonitorsFunction(arr){

    var newMonitorsList = [...arr];
    // Only change code below this line

    var monitorsList = [];
    for (var i = 0; i < newMonitorsList.length; i++){
        monitorsList.push(newMonitorsList[i]);
        monitorsList.push(i+1);
    }
    return monitorsList;

    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;