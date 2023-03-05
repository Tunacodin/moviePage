
//form elemanını seçtik
const form = document.getElementById("film-form");
//title elemanını seçtik-Başlık
const titleElement = document.querySelector("#title"); // querySelector--> # ile id seçimi yapar, . ile class seçimi yapar
//director elemanını seçtik-Yönetmen
const directorElement = document.querySelector("#director");
//url elemanını seçtik-URL
const urlElement = document.querySelector("#url");
 //card-body class'ına sahip 1. elemanı seçtik
const cardBody1 = document.querySelectorAll(".card-body")[0];
//UI nesnesini başlatıyoruz

const ui = new UI(); //UI nesnesi oluşturduk

//Tüm eventleri yükleme

eventListeners(); //eventListeners fonksiyonunu çağırdık

function eventListeners() { //eventListeners fonksiyonu oluşturduk
    form.addEventListener("submit", addFilm); // *form* submit edildiğinde *gönderildiğinde* addFilm fonksiyonunu çalıştır
    
}

function addFilm(e) { //e-->event -- submit edildiğinde çalışacak fonksiyon
    const title = titleElement.value //titleElement.value-->inputun içindeki değeri alır
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") { //eğer title, director veya url boşsa
        //hata
        alert("Tüm alanları doldurunuz"); //alert ile hata mesajı veriyoruz
        ui.displayMessages("Tüm alanları doldurunuz..", "danger"); //ui.js de displayMessages fonksiyonu var
    }

    else { //eğer title, director veya url boş değilse
        const newFilm = new Film(title, director, url) //Film nesnesi oluşturduk -- film.js de Film fonksiyonu var
        ui.addFilmToUI(newFilm); //Film nesnesini UI'ya ekleme -- ui.js de addFilmToUI fonksiyonu var
    }

    ui.clearInputs(titleElement, directorElement, urlElement); //ui.js de clearInputs fonksiyonu var
    e.preventDefault(); // sayfa yenilenmesini engelledik
}


                            