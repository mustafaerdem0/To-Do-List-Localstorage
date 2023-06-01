

let ekle = document.getElementById("ekle");
let sil = document.getElementById("sil");
let yazicontainer = document.getElementById("yazicontainer");
let sayac = 0;

sil.addEventListener("click", function(){
    let paragraflar = document.querySelectorAll("#yazicontainer p");
    paragraflar.forEach(function(paragraf){
        let value = paragraf.innerHTML;
        let keys = Object.keys(localStorage);
        let key = keys.find(k => localStorage.getItem(k) === value);
        paragraf.style.display = "none";
        localStorage.removeItem(key);
    });
});
window.addEventListener("load", VeriYukle);

ekle.addEventListener("click", function () {
    let yazi = document.getElementById("yazi");
    if (yazi.value) {
        let paragraf = document.createElement("p");
        paragraf.classList.add("pstyle");
        paragraf.innerHTML = yazi.value;
        yazicontainer.appendChild(paragraf);
        let key = "yazi_" + sayac;
        localStorage.setItem(key, yazi.value);
        sayac++;
        yazi.value = "";
        paragraf.addEventListener("click", function(){
            paragraf.style.textDecoration = "line-through";
        })
        paragraf.addEventListener("dblclick", function(){
            paragraf.style.display="none";
            localStorage.removeItem(key);
        })
    }
    else {
        alert("Lütfen Tüm alanları doldurunuz");
    }
});

function VeriYukle() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let paragraf = document.createElement("p");
        paragraf.classList.add("pstyle");
        paragraf.innerHTML = value;
        yazicontainer.appendChild(paragraf);
        paragraf.addEventListener("click", function(){
            paragraf.style.textDecoration = "line-through";
        })
        paragraf.addEventListener("dblclick", function(){
            paragraf.style.display="none";
            localStorage.removeItem(key);
        })
    }
}

