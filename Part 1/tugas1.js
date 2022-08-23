//1.entries
//masuk ke array dan bisa mengecek isi array dari index ke 0 sampai index selanjutnya satu per satu
const iniArray1 = ["aku","kamu","kita"]
const iterator = iniArray1.entries()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

//2.Array.isArray
//mengecek data apakah bertipe data array atau bukan
const iniArray2 = [1,2,3]
console.log(Array.isArray(iniArray2))

//3.fill
//mengganti isi array dengan "isi" dari index ke 0 sampai posisi array ke 3
const iniArray3 = ["a","b","c","d"]
console.log(iniArray3.fill("isi", 0, 3))

//4.filter
//menyaring panjang huruf dari array
const iniArray4 = ["Terkadang", "Apabila", "Meskipun"]
console.log(iniArray4.filter(huruf => huruf.length > 7))

//5.find
//mencari angka yang lebih besar setelah angka 8
const iniArray5 = [3,6,9,12]
console.log(iniArray5.find(angka => angka > 8))

//6.flat
//menaikkan/mengeluarkan sub array sebanyak 3[]
const iniArray6 = [1,2,3,[[[[4]]]]]
console.log(iniArray6.flat(3))

//7.flatMap
//melakukan perulangan untuk mengeluarkan sub array sebanyak 1[]
const iniArray7 = [1,[2],3,[[4]],5,[]]
console.log(iniArray7.flatMap(map => map))

//8.forEach
//menjalankan fungsi/kode untuk setiap isi satu per satu dari array
const iniArray8 = ["pisang", "melon", "jeruk"]
iniArray8.forEach(element => console.log(element))

//9.includes
//mengecek apakah dalam array tersebut terdapat "apel"
const iniArray9 = ["semangka", "apel", "mangga"]
console.log(iniArray9.includes("apel"))

//10.join
//menggabungkan array menjadi kalimat dan dipisahkan dengan spasi(" ")
const iniArray10 = ["Muhamad", "Wildan", "Faz"]
console.log(iniArray10.join(" "))