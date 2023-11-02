imagePath=[ "img/02.webp" , "img/01.webp" , "img/03.webp",  "img/04.webp", "img/05.webp"];

let immaginiDaInserire = "";
for (let i = 0; i < imagePath.length; i++) {
    const percorsoImmagine = imagePath[i];
    immaginiDaInserire +=`<img src="${percorsoImmagine}">`;

}
document.getElementById("format").innerHTML = immaginiDaInserire;

let immagineCorrente = 0;
const immagini = document.querySelectorAll("#format img");
immagini[immagineCorrente].classList.add("active");



    if(immagineCorrente < immagini.length -1){
        document.getElementById("next").addEventListener("click", function () {
        console.log("avanti")
        immagini[immagineCorrente].classList.remove("active");
        immagineCorrente++
        immagini[immagineCorrente].classList.add("active");});
        
    }

    if(immagineCorrente >= 0){
        document.getElementById("previous").addEventListener("click", function () {
        console.log("indietro")
        immagini[immagineCorrente].classList.remove("active");
        immagineCorrente--
        immagini[immagineCorrente].classList.add("active");});
    }