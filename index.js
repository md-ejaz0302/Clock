function realtimeClock() {
    let rtclock = new Date();

    let hours = rtclock.getHours();
    let minutes = rtclock.getMinutes();
    let sec = rtclock.getSeconds();


    let AmPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    sec = ("0" + sec).slice(-2);

    document.getElementById("clock").innerHTML = (hours + "  :  " + minutes + "  :  " + sec + " " + AmPm);

    let week = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
    ],
      
      month = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVENBER",
        "DECEMBER"
      ],

      day = rtclock.getDate();

      year = rtclock.getFullYear()

      document.getElementById("date").innerHTML = day + " " + month[rtclock.getMonth()] + " " + year + ", " + week[rtclock.getDay()];

    let t = setInterval(realtimeClock, 500);

}