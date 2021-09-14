const digitalClock = () => {
    let date = new Date()
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();
    let timeformat = 'AM';

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeformat = 'PM'
    }
    hours = hours < 10 ? "0" + hours : hours
    minites = minites < 10 ? "0" + minites : minites
    seconds = seconds < 10 ? "0" + seconds : seconds

    let finalTime = `${hours}:${minites}:${seconds} `;


    const timeDiv = document.getElementById("time")
    timeDiv.innerText = finalTime;
    const formattingTime = document.getElementById("formating-time")
    formattingTime.innerText = timeformat;

    setInterval(digitalClock, 1000);
}

digitalClock();