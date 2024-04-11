// var angka = [1, 2, 3, 4, 5,['a', 'b', 'c']];

// console.log(angka[5][2])

// -------------------------------

// Manipulasi ARRAY

// 1. Menambah isi ARRAY
// var arr = [];
// arr[0] = 'tod'
// arr[1] = 'todtod'
// arr[2] = 'tood'
// arr[4] = 'tood'
// console.log(arr)


// 2. Menghapus isi ARRAY
// var arr = ['tod', 'tood', 'todtod'];
// arr[1] = undefined
// console.log(arr)


// 3. Menampilkan isi ARRAY
// var arr = ['tod', 'tood', 'todtod'];
// for(i = 0; i < arr.length; i++) {
//     console.log('Tod Ke-' + (i+1) + ' ' + arr[i])
// }


// 4. Method pada ARRAY
//  a. JOIN
// var arr = ['tod ', 'tood ', 'todtod'];
// console.log(arr.join(' '))

//  b. Push & Pop (AKHIR)
// arr.push('kontod');
// arr.pop();
// console.log(arr.join(' '))

//  c. Unshift & Shift  (AWAL)
// arr.unshift('tytyd');
// arr.shift()
// console.log(arr.join(' '))

//  d. Slice & Splice 
//     Splice
// splice(indexAwal, mauDihapusBerapa, elemenbaru, elemenbaru2...)
var arr = ['senin', 'selasa', 'rabu', 'kamis'];
// arr.splice(2, 2, 'tytdy');
// console.log(arr.join(' '))

//      Slice
// 
// arr2 = arr.slice(0, 3);
// console.log(arr2.join(' - '))

//  e. Foreach 
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let siswa = ['Pirja', 'picky', 'yo', 'van'];
// CARA LAMA
// for(i = 0; i < angka.length; i++) {
//     console.log(angka[i])
// }

// DENGAN MENGGUNAKAN FOREACH
// angka.forEach(function(i){
//     console.log(i)
// })
// siswa.forEach(function(e, i){
//     console.log('Murid Ke-' + (i + 1) + ' adalah ' + e)
// })

// f. MAP
// mengembalikan nilai array
// angka2 = angka.map(function(i){
//     return i * 2;
// })
// console.log(angka2.join(' - '))

// g. SORT
// Menyortir atau mengurutkan
let angka = [1, 4, 2, 5, 3, 9, 6, 7];
angka.sort();
console.log(angka.join(' - '));