
//form elemanını seçtik
const form = document.getElementById("film-form");
//title elemanını seçtik-Başlık
const titleElement = document.querySelector("#title"); // querySelector--> # ile id seçimi yapar, . ile class seçimi yapar
//director elemanını seçtik-Yönetmen
const directorElement = document.querySelector("#director");
//url elemanını seçtik-URL
const urlElement = document.querySelector("#url");
//card-body class'ına sahip 2. elemanı seçtik
const cardBody = document.querySelectorAll(".card-body")[1]; 
//clear-films id'li butonu seçtik
const clear = document.getElementById("clear-films"); 

//UI nesnesini başlatıyoruz
const ui = new UI(); //UI nesnesi oluşturduk

const storage = new Storage(); //Storage nesnesi oluşturduk

//Tüm eventleri yükleme

eventListeners(); //eventListeners fonksiyonunu çağırdık

function eventListeners() { //eventListeners fonksiyonu oluşturduk
    form.addEventListener("submit", addFilm); // *form* submit edildiğinde *gönderildiğinde* addFilm fonksiyonunu çalıştır
   cardBody.addEventListener("click", deleteFilm); 
    clear.addEventListener("click",clearAllFilms); //clear-films id'li butona tıklandığında clearAllFilms fonksiyonunu çalıştır
    document.addEventListener("DOMContentLoaded", function () { //sayfa yüklendiğinde
        
        let films = storage.getFilmsFromStorage(); //storage'dan filmleri alıyoruz
        ui.loadAllFilms(films); //ui.js de loadAllFilms fonksiyonu var
    });

         //cardBody2 deki delete-film id'li butona tıklandığında deleteFilm fonksiyonunu çalıştır

}
      
        
        
    

    function addFilm(e) { //e-->event -- submit edildiğinde çalışacak fonksiyon
        const title = titleElement.value //titleElement.value-->inputun içindeki değeri alır
        const director = directorElement.value
        const url = urlElement.value

        if (title === "" || director === "" || url === "") { //eğer title, director veya url boşsa
            //hata
    
            ui.displayMessages("Tüm alanları doldurunuz..", "danger"); //ui.js de displayMessages fonksiyonu var
        }

        else { //eğer title, director veya url boş değilse
            const newFilm = new Film(title, director, url) //Film nesnesi oluşturduk -- film.js de Film fonksiyonu var
            storage.addFilmToStorage(newFilm); //Film nesnesini storage'ya ekleme -- storage.js de addFilmToStorage fonksiyonu var    
            ui.addFilmToUI(newFilm); //Film nesnesini UI'ya ekleme -- ui.js de addFilmToUI fonksiyonu var
            ui.displayMessages("Film başarıyla eklendi..", "success"); //ui.js de displayMessages fonksiyonu var
       
        }

 
        ui.clearInputs(titleElement, directorElement, urlElement); //ui.js de clearInputs fonksiyonu var
        e.preventDefault(); // sayfa yenilenmesini engelledik
    }


function deleteFilm(e) {
    if (e.target.id === "delete-film") { //e-->event -- target-->tıklanan eleman -- id-->tıklanan elemanın id'si
        if (confirm("Emin misiniz?")) {
            ui.deleteFilmFromUI(e.target); //ui.js de deleteFilmFromUI fonksiyonu var
            storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); //storage.js de deleteFilmFromStorage fonksiyonu var
            ui.displayMessages("Silme işlemi başarılı..", "success"); //ui.js de displayMessages fonksiyonu var
        }
        else {
            ui.displayMessages("Silme işlemi başarısız..", "danger"); //ui.js de displayMessages fonksiyonu var
        }
     }
        
    }
  

                            
function clearAllFilms(e) { 
    if (confirm("Emin misiniz?")) { //eğer evet'e basarsa
        ui.clearAllFilmsFromUI(); //ui.js de clearAllFilmsFromUI fonksiyonu var
        storage.clearAllFilmsFromStorage(); //storage.js de clearAllFilmsFromStorage fonksiyonu var
    }
}
