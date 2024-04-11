var jmlAngkot = 10;
var angkotBerjalan = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBerjalan) {
        console.log('Angkot No.' + noAngkot + ' berjalan dengan baik')
    } else if (noAngkot === 6 || noAngkot === 8 || noAngkot === 10 ) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot No. '+ noAngkot + ' sedang tidak berjalan')
    }
}