module.export = {
    
    leap: function(year)
    {
        if(((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    firstDayOfYear : function(year)
    {
        var  h = 0;
        var  month = 13;
        year--;
        h = (1 + (int)(((month + 1) * 26) / 10.0) + year + (int)(year / 4.0) + 6 * (int)(year / 100.0) + (int)(year / 400.0)) % 7;
        var dayName = "";
        switch(h)
        {
            case 0: dayName = "Saturday"; break;
            case 1: dayName = "Sunday"; break;
            case 2: dayName = "Monday"; break;
            case 3: dayName = "Tuesday"; break;
            case 4: dayName = "Wednesday"; break;
            case 5: dayName = "Thursday"; break;
            default: dayName = "Friday"; break;
        }
        System.out.println("The first day of the year is " + dayName);
        return year;
    },

    firstDayOfMonth(month,year)
    {

        if(month == 1 || month == 2)
        {
            month += 12;
            year--;
        }
        h = (1 + (int)(((month + 1) * 26) / 10.0) + year + (int)(year / 4.0) + 6 * (int)(year / 100.0) + (int)(year / 400.0)) % 7;
        var  dayName = "";
        switch(h)
        {
            case 0: dayName = "Saturday"; break;
            case 1: dayName = "Sunday"; break;
            case 2: dayName = "Monday"; break;
            case 3: dayName = "Tuesday"; break;
            case 4: dayName = "Wednesday"; break;
            case 5: dayName = "Thursday"; break;
            default: dayName = "Friday"; break;
        }
        System.out.println("The first day of the month is " + dayName);
    },

    numDaysInMonth : function(month,year)
    {
        var numDays = 0;
        days = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        if (month == 2 && leap(year)) days[month] = 29;
        numDays = days[month];
        console.log("The number of days in the month is " + numDays);
    },

    printCal : function(month, year)
    {
         monthNames = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

        console.log("    " + monthNames[month] + " " + year);
        console.log("Su Mo Tu We Th Fr Sa");
        for (var i = 0; i < h - 1; i++)
        console.log("   ");
        for (var i = 1; i <= numDays; i++)
        {
            console.log(i);
            if (((i + h - 1) % 7 == 0) || (i == numDays)) 
            console.log();
        }
    },





}