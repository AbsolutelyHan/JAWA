var jmlAngkot = 10;
var angkotBerjalan = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBerjalan) {
        console.log('Angkot No.' + noAngkot + ' berjalan dengan baik')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}