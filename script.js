// Program if,else menentukan promo belanja makanan
let TotalBelanja = 75000; 
let BatasPromo = 50000; 
let diskon = 20; // dapat diskon 20%

if (TotalBelanja >= BatasPromo) {
    let totaldiskon = (20/100) * TotalBelanja;
    let totalbayar = TotalBelanja - totaldiskon;

    console.log ("Selamat, Anda mendapatkan diskon sebesar", diskon,"%");
    console.log ("Total belanja yang harus anda bayarkan menjadi", "Rp",totalbayar,);
} else {
    console.log ("Maaf, total belanja anda tidak memenuhi syarat untuk mendapatkan promo");
    console.log ("Total belanja anda sebesar : ", TotalBelanja);
}

// Program Nested if menentukan harga tiket tempat wisata sesuai umur 
let UsiaPengunjung = 25;
let HargaTiket = 0;

if (UsiaPengunjung < 5) {
    console.log("Untuk Balita, Masuk GRATIS");
} else if (UsiaPengunjung >= 5 && UsiaPengunjung <= 12){
    HargaTiket = 12000;
    console.log("Anda termasuk Kategori Anak - Anak");
} else if (UsiaPengunjung >= 13 && UsiaPengunjung <= 60){
    HargaTiket = 20000;
    console.log("Anda termasuk Kategori Dewasa");
} else {
    HargaTiket = 15000;
    console.log("Anda Berusia di atas 60 tahun")
}

if (HargaTiket > 0 ){
    console.log("Harga Tiket yang harus anda bayarkan : Rp",HargaTiket);
}

// Program Switch Case menentukan suhu berdasarkan Derajat Celcius
let suhu = 25;
let statusSuhu = "";

switch (true) {
    case (suhu < 0):
        statusSuhu = "Suhu Sangat Dingin";
        break;
    case (suhu >= 0 && suhu < 10):
        statusSuhu = "Suhu Dingin";
        break;
    case (suhu >= 10 && suhu <25):
        statusSuhu = "Suhu Sejuk";
        break;
    case (suhu >= 25 && suhu < 30):
        statusSuhu = "Suhu Ruangan";
        break;
    case (suhu >= 30):
        statusSuhu = "Suhu Sangat panas";
        break;

    default:
        statusSuhu = "Suhu tidak dikenal";
}

console.log("Suhu ditempat Anda Saat ini", suhu, "°C");
console.log("Status Suhu : ", statusSuhu);


// Daftar lagu dalam Recent Playlists
let RecentPlaylists = [
    " 1 - Mimpi - Putri Ariani",
    " 2 - Baggy Jeans - NCT U 2023",
    " 3 - Control - Zoe Wees",
    " 4 - Love Lee - AKMU",
    " 5 - Rewrite The Stars - Anne Marie & James Arthur"
];

console.log("Recent Playlists Lagu:");

for (let a = 0; a < RecentPlaylists.length; a++) {
    console.log(RecentPlaylists[a]);
}

// Program while, while-do menghitung waktu mundur
// While
let     WaktuMundur = 10; // Waktu mundur dalam detik

console.log("Mulai hitung waktu mundur...");
while (WaktuMundur > 0) {
    console.log(`Sisa waktu: ${WaktuMundur} detik`);
    WaktuMundur--;
}

console.log("Hitung mundur selesai! Waktu habis.");

// while do
let waktuMundur = 15; // Waktu mundur dalam detik

console.log("Mulai hitung waktu mundur...");
do {
    console.log(`Sisa waktu: ${waktuMundur} detik`);
    waktuMundur--;
} while (waktuMundur > 0);

console.log("Hitung mundur selesai! Waktu habis.");


// Program Menghitung Luas Balok
function HitungLuasBalok (panjang, lebar, tinggi){
    return 2 * ((panjang*lebar) + (panjang*tinggi) + (tinggi*lebar));
}

let panjang = 6;
let lebar = 4;
let tinggi = 3;

let luas = HitungLuasBalok(panjang, lebar, tinggi);
console.log(`Luas Permukaan Balok dengan panjang ${panjang},lebar ${lebar}, dan tinggi ${tinggi} adalah ${luas}`);