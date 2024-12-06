let kitaplar = ["a","b","c","d"];
kitaplar.push("e")
console.log(kitaplar);
let kitap = kitaplar.slice(0,2);
console.log(kitap);
console.log(kitaplar);
kitaplar.splice(1,0,"Z-H","H-Z");
console.log(kitaplar);