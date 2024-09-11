const countDown= new Date("Sept 1, 2024 01:35:00").getTime();
console.log("countdown-",countDown);

const interval= setInterval(() => {
    const now= new Date().getTime();
    console.log("now-", now);
    const duration= countDown - now;
    console.log("duration-", duration);

    const days= Math.floor(duration/(1000*60*60*24));
    console.log("days-", days);
    const hours= Math.floor((duration %(1000*60*60*24))/(1000*60*60));
    console.log("hours-", hours);
    const mins= Math.floor((duration %(1000*60*60))/(1000*60));
    console.log("mins-", mins);
    const secs= Math.floor((duration %(1000*60))/1000);
    console.log("secs-", secs);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

    if (duration<0){
        clearInterval(interval);
         document.getElementById("days").innerHTML = "00";
         document.getElementById("hours").innerHTML = "00";
         document.getElementById("mins").innerHTML = "00";
         document.getElementById("secs").innerHTML = "00";
    }
}, 1000);
