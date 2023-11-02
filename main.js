imagePath=[ "img/02.webp" , "img/01.webp" , "img/03.webp",  "img/04.webp", "img/05.webp"];

for (let i = 0; i < imagePath.length; i++) {
    const image= imagePath[i];
    image.classlist.add("active");
}
