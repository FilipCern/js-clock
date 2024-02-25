const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');

function setDate () {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees= ((seconds/60) * 360) + 90;
    secondsHand.style.transform= `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes/60) * 360) + 90;
    minsHand.style.transform=`rotate(${minsDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hoursHand.style.transform=`rotate(${hoursDegrees}deg)`;
    console.log(hours);
}

setInterval(setDate, 1000);