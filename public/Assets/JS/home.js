const timeText = document.getElementById('time-display');
timeText.innerHTML = getCurrentTime();

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return currentTime;
}

function updateTime() {
    timeText.innerHTML = getCurrentTime();
}

setInterval(updateTime, 1000);
