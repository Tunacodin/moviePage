function UI (){

}

UI.prototype.addFilmToUI = function (newFilm) {
                    
    const filmList = document.querySelector("#films"); //films id'li tabloyu seçtik 
    filmList.innerHTML += `
      <tr>
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                             <td>${newFilm.title}</td>
                                             <td>${newFilm.director}</td>
                                             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                             </tr>
    `; //films id'li tabloya yeni bir satır ekledik
    console.log(filmList);

}

// çalıştırmak için project.js deki eventListeners fonksiyonunun içine ui.clearInputs(a,b,c) eklemek gerekiyor
UI.prototype.clearInputs = function(titleElement, directorElement, urlElement){
    titleElement.value = "";
    directorElement.value = "";
    urlElement.value = "";
}

// çalıştırmak için project.js deki eventListeners fonksiyonunun içine ui.displayMessages("Tüm alanları doldurunuz..", "danger"); eklemek gerekiyor
// displayMessages fonksiyonu ile alert mesajı veriyoruz
UI.prototype.displayMessages = function (message, type) { //message-->alert mesajı, type-->alert tipi
    //card-body class'ına sahip 1. elemanı seçtik
    const cardBody = document.querySelectorAll(".card-body")[0];
    //Alert divini oluşturma
    const div = document.createElement("div");
    //div class'ını oluşturma
    div.className = `alert alert-${type}`;
    //div'in içine mesajı yazdırma
    div.textContent = message;
    //cardBody'nin ilk çocuğu olarak div'i ekleme
    cardBody.appendChild(div); //appendchild şu işe yarıyor: div'i cardBody'nin içine ekliyor
    // x.appendchild(y) --> x'in içine y'yi ekler
    // x.prependchild(y) --> x'in başına y'yi ekler

    setTimeout(function () { //setTimeout fonksiyonu ile 1 saniye sonra alert mesajını kaldırıyoruz
        div.remove(); //div'i kaldırma
    }, 1000);
}


UI.prototype.loadAllFilms = function (films) { //films-->storage'dan gelen filmler 
    const filmList = document.getElementById("films"); //films id'li tabloyu seçtik
    films.forEach(function (film) { //films dizisindeki her bir film için
        filmList.innerHTML += `
         <tr>
                                            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${film.title}</td>
                                            <td>${film.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>`; //films id'li tabloya yeni bir satır ekledik

    });
}

UI.prototype.deleteFilmFromUI = function (element) { 
    element.parentElement.parentElement.remove(); //element-->silme butonu, parentElement-->a, parentElement-->tr
    
}

UI.prototype.clearAllFilmsFromUI = function (element) {
    const filmList = document.getElementById("films"); //films id'li tabloyu seçtik
    // filmList.innerHTML = ""; //filmList'in içini boşaltma
    while (filmList.firstElementChild !== null) { //filmList'in ilk çocuğu boş değilse
        filmList.firstElementChild.remove(); //filmList'in ilk çocuğunu sil
    }

}