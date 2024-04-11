var tanya = true;
while(tanya) {
// menangkap pilihan player
var p = prompt('Pilih : Batu, Gunting, Kertas');

// menangkap pilihan komputer

// membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34) {
    comp = 'Batu';
} else if(comp <= 0.34 && comp < 0.67) {
    comp = 'Gunting';
} else {
    comp = 'Kertas';
}
console.log(comp)

// menentukan rules
var hasil = '';

if(p == comp) {
    hasil = 'Seri';
} else if(p == 'Batu') {
    // if(comp == 'Gunting') {
    //     hasil = 'Menang';
    // } else {
    //     hasil = 'Kalah';
    // }
    hasil = (comp == 'Gunting') ? 'MENANG!' : 'KALAH!';
} else if(p == 'Gunting') {
    // if(comp == 'Batu') {
    //     hasil = 'Kalah'
    // } else {
    //     hasil = 'Menang';
    // }
    hasil = (comp == 'Batu') ? 'KALAH!' : 'MENANG!';
} else if(p == 'Kertas'){
    hasil = (comp == 'Batu') ? 'Menang!' : 'KALAH!';
} else {
    hasil = 'Anda memasukkan pililhan yang salah';
}

// hasil
alert('Anda memilih ' + p + ' dan Computer memilih ' + comp + '\nHasilnya ' + hasil)

tanya = confirm('Ingin bermain lagi?')
alert('Terimkasih')
}