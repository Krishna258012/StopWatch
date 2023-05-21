let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let getMinute = document.getElementById('min');
let getSecond = document.getElementById('sec');
let getMini = document.getElementById('mini');

let minute = 00;
let second = 00;
let miniSecond = 00;
let time;

startBtn.addEventListener('click', () =>{
    time = setInterval(timer, 10);
});

stopBtn.addEventListener('click', () =>{
    clearInterval(time);
});

resetBtn.addEventListener('click', () =>{
    clearInterval(time);
    minute = second = miniSecond = 00;
    getMinute.innerHTML = '00';
    getSecond.innerHTML = '00';
    getMini.innerHTML = '00';
});

function timer(){
    miniSecond++
    if(miniSecond == 100){
        miniSecond = 0;
        second++
        if(second == 60){
            second = 0;
            minute++
        }
    }
    
    if(miniSecond <= 9){
        getMini.innerHTML = '0' + miniSecond;
    }else{
        getMini.innerHTML = miniSecond;
    }



    if(minute <= 9){
        getMinute.innerHTML = '0' + minute;
    }else{
        getMinute.innerHTML = minute;
    }


    if(second <= 9){
        getSecond.innerHTML = '0' + second;
    }else{
        getSecond.innerHTML = second;
    }
   
};