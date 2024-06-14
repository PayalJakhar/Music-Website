const music=new Audio('audio/1.mp3');
// music.play();
const songs=[
    {
        id:"1",
        songName: 'God`s Plan  <br><div class="subtitle">Drake</div>',
        poster:'img/1.jpeg',
    },
    {
        id:"2",
        songName: 'Perfect <br> <div class="subtitle">Ed sheeran</div>',
        poster:"img/2.jpeg",
    },
    {
        id:"3",
        songName: 'Never Be The Same <br> <div class="subtitle">Camilq cabello</div>',
        poster:"img/3.jpeg",
    },
    {
        id:"4",
        songName: 'Psycho <br> <div class="subtitle">Post Malon</div>',
        poster:"img/4.jpeg",
    },
    {
        id:"5",
        songName: 'Rockstar <br> <div class="subtitle">Post Malon</div>',
        poster:"img/5.jpeg",
    },
    {
        id:"6",
        songName: 'I Like It <br> <div class="subtitle">Cardi B</div>',
        poster:"img/6.jpeg",
    },
    {
        id:"7",
        songName: 'Stay <br> <div class="subtitle">Zedd</div>',
        poster:"img/7.jpeg",
    },
    {
        id:"8",
        songName: 'Gorgeous <br> <div class="subtitle">Taylor Swift</div>',
        poster:"img/8.jpeg",
    },
    {
        id:"9",
        songName: 'I Like Me Better <br> <div class="subtitle">Lauv</div>',
        poster:"img/9.jpeg",
    },
    {
        id:"10",
        songName: 'Youngblood<br> <div class="subtitle">5 Seconds Of Summer</div>',
        poster:"img/10.jpeg",
    },
    {
        id:"11",
        songName: 'Demon <br> <div class="subtitle">Imagine Dragons</div>',
        poster:"img/11.jpeg",
    },
    {
        id:"12",
        songName: 'Same Old Love <br> <div class="subtitle">Selena Gomez</div>',
        poster:"img/12.jpeg",
    },
    {
        id:"13",
        songName: 'Freaky Friday <br> <div class="subtitle">Chris Brown</div>',
        poster:"img/13.jpeg",
    },
    {
        id:"14",
        songName: 'No Tears Left To Cry <br> <div class="subtitle">Ariana Grande</div>',
        poster:"img/14.jpeg",
    },
    {
        id:"15",
        songName: 'Attention<br> <div class="subtitle">Charlie Puth</div>',
        poster:"img/15.jpeg",
    },
    {
        id:"16",
        songName: 'Cool For The Summer <br> <div class="subtitle">Demi Lovato</div>',
        poster:"img/16.jpeg",
    },
    {
        id:"17",
        songName: 'Shape Of You <br> <div class="subtitle">Ed Sheeran</div>',
        poster:"img/17.jpeg",
    },
    {
        id:"18",
        songName: 'Believer <br> <div class="subtitle">Imagine Dragons</div>',
        poster:"img/18.jpeg",
    }
]
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}

let index=0; 
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
     e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(abc);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpeg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
     })

})
let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentend.innerText=`${min1}:${sec1}`;
    
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    console.log(seek.value);
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
})
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change' ,()=>{
    if(vol.value == 0){
        if(vol_icon.classList.remove('bi-volume-up-fill'));
        if(vol_icon.classList.remove('bi-volume-down-fill'));
        if(vol_icon.classList.add('bi-volume-off-fill'));
    }
    if(vol.value>0){
        if(vol_icon.classList.remove('bi-volume-up-fill'));
        if(vol_icon.classList.add('bi-volume-down-fill'));
        if(vol_icon.classList.remove('bi-volume-off-fill'));
    }
    if(vol.value>50){
        if(vol_icon.classList.add('bi-volume-up-fill'));
        if(vol_icon.classList.remove('bi-volume-down-fill'));
        if(vol_icon.classList.remove('bi-volume-off-fill'));
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    
    music.volume=vol_a/100;

    

});
let back=document.getElementById('back');
let next=document.getElementById('next');
back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpeg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
        index=1;
    }
    music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpeg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})






let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let pop_art=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    pop_art.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    pop_art.scrollLeft -= 330;
})











