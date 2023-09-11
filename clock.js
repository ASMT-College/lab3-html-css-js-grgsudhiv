function showDateAndTime() {
    document.getElementById("display_date_and_time").innerHTML=Date();
}
// setTimeout(showDate, 2000); // Delay for 2000 milliseconds (2 seconds)
// setInterval(showDateAndTime, 1000);

var i = setInterval(showDateAndTime, 1000);
setTimeout(function (){
    clearInterval(i);
}, 5000);
  
function showClock(){
    var todayDate = new Date();
    var hour = todayDate.getHours();
    var minute = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();
    document.getElementById("display_clock").innerHTML = 
        hour + ":" + minute + ":" + seconds;
}
setInterval(showClock, 1000);

  