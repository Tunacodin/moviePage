
class Storage { //storage adında bir class oluşturduk
    static addFilmToStorage (newFilm) {
    let films = this.getFilmsFromStorage(); //films adında bir değişken oluşturduk
    films.push(newFilm); //films adlı değişkene newFilm adlı değişkeni push ile ekledik
    localStorage.setItem("films", JSON.stringify(films)); //films adlı değişkeni JSON.stringify ile stringe çevirdik
}
 static getFilmsFromStorage = function () {
    let films; //films adında bir değişken oluşturduk
    if (localStorage.getItem("films") === null) { //eğer localStorage'da "films" adında bir şey yoksa
        films = []; //films adlı değişkeni boş bir diziye eşitledik
    }

    else {
        films = JSON.parse(localStorage.getItem("films")); //films adlı değişkeni JSON.parse ile stringe çevirdik
    }

    return films; //films adlı değişkeni döndürdük
}

     static deleteFilmFromStorage (filmTitle) {
    let films = this.getFilmsFromStorage(); //films adında bir değişken oluşturduk

    films.forEach(function (film, index) { //films dizisindeki her bir filmi dolaş
        if (film.title === filmTitle) { //eğer filmin başlığı filmTitle'a eşitse
            films.splice(index, 1); //films dizisinden o filmi sil
        }
    });

    localStorage.setItem("films", JSON.stringify(films)); //films dizisini localStorage'a ekle
}

static clearAllFilmsFromStorage() {
    localStorage.removeItem("films"); //localStorage'daki "films" adlı şeyi sil
}

}

