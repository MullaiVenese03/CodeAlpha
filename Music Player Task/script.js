const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumArt = document.getElementById('album-art');

// Songs List
const songs = [
    {
        title: "Aasa Orave",
        artist: "Sean Roldan",
        file: "Assets/Songs/Aasa Orave.mp3",
        image: "Assets/Images/Aasa Orave Song.jpg"
    },
    {
        title: "Chillanjirukkiye",
        artist: "Sean Roldan",
        file: "Assets/Songs/Chillanjirukkiye.mp3",
        image: "Assets/Images/Chillanjirukkiye Song.jpg"
    },
    {
        title: "Pathikichu",
        artist: "Anirudh Ravichander",
        file: "Assets/Songs/Pathikichu-MassTamilan.dev.mp3",
        image: "Assets/Images/Pathikichu.jpg"
    },
    {
        title: "Sawadeeka",
        artist: "Anirudh Ravichander",
        file: "Assets/Songs/Sawadeeka-MassTamilan.dev.mp3",
        image: "Assets/Images/Sawadeeka Song.jpg"
    },
    {
        title: "Hunterr Vantaar",
        artist: "Anirudh Ravichander",
        file: "Assets/Songs/Hunter Vantaar.mp3",
        image: "Assets/Images/Hunterr Vantaar Song.jpg"
    },
    {
        title: "Manasilaayo",
        artist: "Anirudh Ravichander",
        file: "Assets/Songs/Manasilaayo.mp3",
        image: "Assets/Images/Manasilaayo Song.jpg"
    }
];

let currentSongIndex = 0;

// TO Load the Details of all the Songs
function loadSong(index) {
    const song = songs[index];
    audio.src = song.file;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.image;

}

// To Play and Pause the Songs
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "Pause";
    } else {
        audio.pause();
        playBtn.textContent = "Play";
    }
}

// To PLay and Pause the Song With "SPACE BAR"
document.addEventListener("keydown", event => {
    if(event.key === " ") {
        playPause()
    }
})

// To Change the Next song 
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play(); 
    playBtn.textContent = "Pause";
}

// To Change the Next Song with "ArrowRight"
document.addEventListener("keydown", event => {
    if(event.key == "ArrowRight") {
        nextSong()
    }
})

// To Change the Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "Pause";
}

// To Change the Next Song with "ArrowLeft"
document.addEventListener("keydown", event => {
    if(event.key == "ArrowLeft") {
        prevSong()
    }
})

playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('ended', nextSong);

loadSong(currentSongIndex);