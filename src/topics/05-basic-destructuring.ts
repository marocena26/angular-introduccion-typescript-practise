// ========= EJERCICIOS - DESESTRUCTURACIÓN =========

// ========= Desestructuración de Objetos =========

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

//La idea de la desestructuración es que podamos obtener las partes del objeto que nos interesan

const {song, songDuration, details } = audioPlayer; //aqui estamos escogiendo la propiedad 'song' de nuestro elemento audioPlayer

const {author} = details; //así es como desestructuramos una propiedad que a su vez es un objeto 

//obtener la propiedad 'song' de nuestro elemento audioPlayer con destructuring
console.log('Song ', song); 
console.log('Duration ', songDuration); 
console.log('Author ', author); 

//obtener la propiedad 'song' de nuestro elemento audioPlayer sin destructuring
console.log(audioPlayer.song); 


// ========= Desestructuración de Arreglos =========

const dbz : string[] = ['Goku','Vegeta','Trunk'];

console.log('Personaje 3:', dbz[2] || 'No hay personaje');

//Otra forma

const [p1, p2, p3 = 'Not Found'] : string[] = ['Goku','Vegeta','Trunk'];

console.log('Personaje 3:',p3);



export {};
