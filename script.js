// Lista de canciones y sus portadas
const songs = [
  {
    title: "House of the Rising Sun",
    cover: "cover1.jpg",  // La portada de la canción
    audio: "song1.mp3"    // El archivo de audio (si lo tienes)
  },
  {
    title: "Homeward Bound",
    cover: "cover2.jpg",
    audio: "song2.mp3"
  },
  {
    title: "Our House",
    cover: "cover3.jpg",
    audio: "song3.mp3"
  }
];

let currentSongIndex = 0;
const songTitleElement = document.getElementById("song-title");
const albumCoverElement = document.getElementById("album-cover");
const changeSongButton = document.getElementById("change-song");

function changeSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  
  // Cambiar el título de la canción
  songTitleElement.textContent = `Song: ${songs[currentSongIndex].title}`;
  
  // Cambiar la portada de la canción
  albumCoverElement.src = songs[currentSongIndex].cover;

  // Si tienes el archivo de audio, también podrías cambiarlo aquí
  console.log(`Reproduciendo: ${songs[currentSongIndex].title}`);
}

// Cambiar la canción al hacer clic en el botón
changeSongButton.addEventListener("click", changeSong);

