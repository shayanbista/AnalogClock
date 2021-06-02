let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
setInterval(clockInterval,1000);
function clockInterval(){
    let currentDate=new Date();
    const currentSecond=currentDate.getSeconds();
    let secondRotation=currentSecond*6;
    second.style.transform=`rotate(${secondRotation}deg)`;
    const currentMinute=currentDate.getMinutes();
    let minuteRotation=currentMinute*6;
    minute.style.transform=`rotate(${minuteRotation}deg)`;
    const currentHour=currentDate.getHours();
    let hourRotation=currentHour*30 +currentMinute/2 ;
    console.log(hourRotation);
    hour.style.transform=`rotate(${hourRotation}deg)`;
}