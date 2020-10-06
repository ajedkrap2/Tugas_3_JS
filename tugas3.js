function tugas3(){
//CARA 1 *sesuai urutan langkah

function fungsiSatu(teks){
  console.log("Teks sebelum diproses :"+teks);
  teks = teks + " Dua";
  return teks;
}

console.log("Teks sesudah diproses :"+fungsiSatu("Satu"));

//CARA 2
var teksPertama = "Satu";

function fungsiDua(teksParameter){
  teksKedua = teksParameter + " Dua";
  return teksKedua;
}


  console.log("Teks sebelum diproses :"+teksPertama);
  console.log("Teks sesudah diproses :"+fungsiDua(teksPertama));
}

tugas3();
