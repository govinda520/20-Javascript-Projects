let video=document.querySelector("#video")
let play=document.querySelector("#play")
let stop=document.querySelector("#stop")
let progress=document.querySelector("#progress")
let timestamp=document.querySelector("#timestamp")

//to toggle between play and pause
function changeVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

//to change the play/pause icon
function updateVideoIcon(){
    if(video.paused){
        play.innerHTML=`<img src="./assets/img/pause.png" alt="pausebutton">`
    }else{
        play.innerHTML=`<img src="./assets/img/play.png" alt="playbutton">`
    }
}

//update the progress bar
function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100

    //get the minute
    let mins=Math.floor(video.currentTime/60)
    if(mins<10){
        mins="0"+String(mins)
    }

    //get the sec
    let sec=Math.floor(video.currentTime%60)
    if(sec<10){
        sec="0"+String(sec)
    }

    timestamp.innerHTML=`${mins}:${sec}`
}

//stop and play from beginning
function stopVideo(){
    video.currentTime=0
    video.pause()
}

//video progress with timestamp
function setVideoProgress(){
    video.currentTime=(progress.value*video.duration)/100
}

//video events
video.addEventListener("click",changeVideoStatus)
video.addEventListener("play",updateVideoIcon)
video.addEventListener("pause",updateVideoIcon)
video.addEventListener("timeupdate",updateProgress)

play.addEventListener("click",changeVideoStatus)
stop.addEventListener("click",stopVideo)
progress.addEventListener("change",setVideoProgress)
