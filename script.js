// podaci trebaju biti dobiveni s iTunes search stranice
//https://itunes.apple.com/search?parameterkeyvalue
//parsaj json

//povuci podatke s ove adrese https://itunes.apple.com/search?term=
//stavi url u variablu
//kreiraj request var, koja je novi objekt od XMLHttpRequest konstruktora
//povezi se sa url-om (open, onload, send)
//pod onload specificiraj pjesmu i umjetnika(tako da dobavlja samo to iz cijelog json-a)

//ispisi listu sa svim pojmovima koje imaju upisano slovo / string u nazivu
//podatke koje si dobio na onload, stavi u variablu
//podjeli variablu na zasebne konponente u arrayu
//napravi create element ul,
//napravi filter za search
//stavi string koji je upisan u input field u var
//
//prije svakog novog search-a izbrisi trenutne rezultate prvo
//kroz for loop prodi cijelu duljinu array-a i ispisi sve podatke koji odgovaraju filteru

//update-aj listu svaki put kada se dogodi promjena u inputu

//u slucaju da nema rezultata, obrazloziti razlog ne imanja rezultata npr. trazeni pojam 'xyz' ne podudara se sa bazom podataka koju pretrazujete

//kreiraj loader dok app preuzima podatke sa servera(za prvu ruku neka samo pise loading dok trazi i makne loading kada je nasao)

let url = `https://itunes.apple.com/search?term=indie&entity=song`;

// const request = new XMLHttpRequest();
// request.open('GET', url);

// request.onload = function x() {
//     console.log(JSON.parse(this.responseText));
// };

// request.send();

// const songCardTemplate = document.querySelector("[data-song-template]");

// fetch(url).then((res) => res.json()).then((data) => {
//      data.forEach([i] => {

//         const card = songCardTemplate.content.cloneNode(true).children[0];

//     });
//     console.log(data);

//   });

//linkan input
const input = document.querySelector("#searchInput");

//prati button, pokreni funkciju kad stisnuto
input.addEventListener("keyup", showSong);

//loading
const loading = document.getElementById("load");
demo.addEventListener("load", function () {
  loading.parentElement.removeChild(p);
}); //tu mi nesto nedostaje

//kreiranje elementa za podatke i konfiguracija json-a
function showSong() {
  //kreiranje novog objekta iz konstriktora
  const request = new XMLHttpRequest();

  //onload
  request.onload = function () {
    //konfiguracija json-a kako bi ga mogli koristit
    const data = JSON.parse(this.response);

    for (let i = 0; i < data.results.length; i++) {
      //kreiranje novog li elementa za svaki rezultat
      newLi = document.createElement("li");
      demo.appendChild(newLi);

      //kreiranje elementa i integriranje podataka u isti
      //innerHTML svaki put nanovo pise automatski

      demo.innerHTML = `Ime pjesme: ${data.results[i].trackName} <br> Ime izvodaca: ${data.results[i].artistName} `;

      //test outputa u konzoli
      console.log(data.results[i].trackName);
      console.log(data.results[i].artistName);
    }
  };
  //open
  request.open("GET", "https://itunes.apple.com/search?term=" + input.value);

  //send
  request.send();
}
