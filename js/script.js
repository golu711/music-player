console.log("Welcome to My Music World");

//variables
let songIndex=0;
let songs=[
    {songName:"► Imagine Dragons - Believer", filePath:"../songs/► Imagine Dragons - Believer (with lyrics)(MP3_320K).mp3", coverPath:"../images/beliver-cover.jpg"},
    {songName:"All Falls Down - Alan Walker", filePath:"../songs/Alan Walker - All Falls Down (Live Performance at YouTube Space NY with Noah Cyrus _ Juliander)(MP3_320K).mp3", coverPath:"../images/all_falls_down.jpg"},
    {songName:"Darkside - Alan Walker", filePath:"../songs/Alan Walker - Darkside (feat. Au_Ra and Tomine Harket)(MP3_320K).mp3", coverPath:"../images/darkside.jpg"},
    {songName:"Intentions - justin bieber", filePath:"../songs/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo(MP3_320K).mp3", coverPath:"../images/intensions.png"},
]
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songdisplay = document.getElementById("songdisplay");
let next=document.getElementById('next');
let previous=document.getElementById('previous');
let equlizer=document.getElementById('equlizer');
let songItems=Array.from(document.getElementsByClassName('media-body'));


//let audioElement= new Audio('../songs/Alan Walker - Darkside (feat. Au_Ra and Tomine Harket)(MP3_320K).mp3');
//audioElement.play();
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songtitle")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        equlizer.style.opacity=0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    //seekbar update;
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value/100)*audioElement.duration;
});
//Next Button Functionality
next.addEventListener("click",()=>{
    if(songIndex>=3){
        songIndex=0;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    }
    else{
        songIndex+=1;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    }
});

//Previous Button Functionality
previous.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=3;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    }
    else{
        songIndex-=1;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    }
});

songItems.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex=parseInt(element.id);
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
    })
})


console.log(audioElement.duration);