const daysEl = document.getElementById('day')
const hoursEl = document.getElementById('hour')
const minsEl = document.getElementById('min')
const secondsEl = document.getElementById('sec')

const ccxp = '1 December 2023';

function countdown(){

    const ccxpDate = new Date(ccxp);
    const currentDate = new Date()

    const totalSeconds = (ccxpDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = formatTime(days) + 'D';
    hoursEl.innerHTML = formatTime(hours) + 'H';
    minsEl.innerHTML = formatTime(mins) + 'M';
    secondsEl.innerHTML = formatTime(seconds) + 'S';

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000)