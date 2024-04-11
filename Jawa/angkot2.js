// beroperasi
var jmlAngkot = 10;
var noAngkot = 1;
var angkotBerjalan = 8;

while(noAngkot <= angkotBerjalan) {
    console.log('Angkot No.' + noAngkot + ' berjalan dengan baik');
noAngkot++
}


// tidak beroperasi
for(noAngkot = angkotBerjalan + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi")
}