
module.exports ={
printCalendar: function (noOfDays, frstDay) {
    var calendar = [];
    var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    var week = [];
    calendar.push(days)  //push an array into an array
    var dates = 1;
    for (var i = 0; i < days.length; i++) {
        if (i < frstDay)
            week[i] = " "
        else {
            week[i] = dates;
            dates++;
        }
    }
    calendar.push(week)     //push an array into an array

    while (dates <= noOfDays) {
        var week = [];
        for (var i = 0; i < days.length; i++) {
            week[i] = dates;
            dates++;
            if ((dates - 1) > (noOfDays))
                week[i] = " "
        }

        calendar.push(week)        //push an array into an array

    }
    this.print(calendar, days)
},
/**
 * @function print() prints the calendar
 */
print: function (calendar, days) {
    for (var i = 0; i < calendar.length; i++) {
        var str = ""
        for (var j = 0; j < calendar[i].length; j++) {
            str = str + " \t " + (calendar[i])[j]   //printing a 2D array in string format

        }
        console.log(str);
    }
}
}