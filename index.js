const stoWatchTag = document.getElementsByClassName("stopWatch")[0];
const miliSecondTag = document.getElementsByClassName("miliSecond")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0, minutes = 0, hours = 0, miliSeconds =0;


// setInterval(callback, delay);
// 1000ms --> 1s

const startTime = () => {

        miliSeconds += 1;
if (miliSeconds === 1000) {
                miliSeconds = 0;
                seconds += 1;
        if(seconds === 60) {
       seconds = 0;
       minutes += 1;

       if(minutes === 60) {
               minutes = 0;
               hours += 1;

       }

}

}

// ternary operator syntax
//  condition ? codes : codes;
const miliSecondText = miliSeconds < 10 ? "0" + miliSeconds.toString() : miliSeconds;
const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
const hourText = hours < 10 ? "0" + hours.toString() : hours;

 stoWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
 miliSecondTag.textContent = miliSecondText;

};



// clearInterval();
let intervalId;
startButtonTag.addEventListener("click", () => {
intervalId = setInterval(startTime,1);
});


pauseButtonTag.addEventListener("click", () => {
clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
clearInterval(intervalId);
intervalId = setInterval(startTime,1);
});


restartButtonTag.addEventListener("click", () => {
        clearInterval(intervalId);
        (miliSecondText = 0), (seconds = 0), (minutes = 0), (hours = 0);

        intervalId = setInterval(startTime,1);
});