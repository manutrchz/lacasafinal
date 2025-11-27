
const songs = [
  {
    title: "Casa - Silvana Estrada",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2Fa8f391dde7ab5466f13ae0c87beeaddf.1000x1000x1.jpg"
  },
  {
    title: "Na nananana - Rebe",
    cover: "https://images.genius.com/47d67549d7267f3bdade7277643c9132.640x640x1.jpg"
  },
  {
    title: "Gracias a la vida - Mercedes Sosa",
    cover: "https://www.cmtv.com.ar/tapas-cd/mercedes30anos.webp"
  },
  {
    title: "Mediodía - Ana María Vahos",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/64/df/07/64df074a-5b10-58a2-61f3-414b38804453/0.jpg/400x400bb.webp"
  },
  {
    title: "Cósmosis - Briela Ojeda",
    cover: "https://f4.bcbits.com/img/a2064900495_16.jpg"
  },
  {
    title: "El lugar correcto - Natalia Lafourcade",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2F3a014df3f3b75e8bc96b664542d90723.1000x1000x1.png"
  },
  {
    title: "Golondrina - Benjamín Walker",
    cover: "https://i.scdn.co/image/ab67616d0000b2738d9744862d60285cdadcdb8e"
  },
  {
    title: "Canción para acunar - Rosario Alfonso",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2F3b90f66472191a915078da55182f6a65.400x400x1.jpg"
  },
  {
    title: "Florecer - Nano Stern",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2Fabb267dc3ecf57d1529dabf606de92c1.640x640x1.jpg"
  },
  {
    title: "Rabo de Nube - Silvio Rodríguez",
    cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2F6229b78bb51a54914ac62a088dd90482.640x640x1.jpg"
  }
];

let currentSongIndex = 0;
const songTitleElement = document.getElementById("song-title");
const albumCoverElement = document.getElementById("album-cover");
const changeSongButton = document.getElementById("change-song");


function changeSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;  
  
  
  songTitleElement.textContent = songs[currentSongIndex].title;
  
 
  albumCoverElement.src = songs[currentSongIndex].cover;
}


changeSongButton.addEventListener("click", changeSong);

document.getElementById('formulario-definicion').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const texto = document.getElementById('texto-definicion').value;
    const imagenInput = document.getElementById('imagen-definicion');
    const imagenFile = imagenInput.files[0]; 

    if (texto.trim() === "" && !imagenFile) {
        alert("Por favor, escribe una definición o sube una imagen.");
        return;
    }

    const nuevaDefinicion = document.createElement('div');
    nuevaDefinicion.classList.add('definicion');
    
    if (texto.trim() !== "") {
        const nuevoTexto = document.createElement('p');
        nuevoTexto.textContent = texto;
        nuevaDefinicion.appendChild(nuevoTexto);
    }

    if (imagenFile) {
        const lector = new FileReader();
        lector.onload = function(e) {
            const nuevaImagen = document.createElement('img');
            nuevaImagen.src = e.target.result;
            nuevaImagen.classList.add('imagen-definicion');
            nuevaDefinicion.appendChild(nuevaImagen);
        };
        lector.readAsDataURL(imagenFile);
    }


    const muro = document.getElementById('definiciones-muro');
    muro.appendChild(nuevaDefinicion);

  
    document.getElementById('texto-definicion').value = '';
    document.getElementById('imagen-definicion').value = '';
});

