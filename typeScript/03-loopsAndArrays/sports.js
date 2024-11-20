var sportsOne = ["golf", "cricket", "football"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("---------------------------------------");
//simplified version
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "cricket") {
        console.log(tempSport + ">> my favourite");
    }
    else {
        console.log(tempSport);
    }
}
