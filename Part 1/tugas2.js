const name = [
    'Abigail',
    'Alexandra',
    'Alison',
    'Amanda',
    'Angela',
    'Bella',
    'Carol',
    'Caroline',
    'Carolyn',
    'Deirdre',
    'Diana',
    'Elizabeth',
    'Ella',
    'Faith',
    'Olivia',
    'Penelope'
]

const searchName = (search,jumlah,callback = callbackName) => {
    //filter pencarian yang di dalamnya terdapat nama
    const cariNama = name.filter(cari => cari.includes(search))
    //hasil untuk menyimpan array dari perulangan
    const hasil = []

    for (let i = 0; i < jumlah; i++) {
        //perulangan menambahkan isi array dari cariNama ke hasil satu per satu sampai batas jumlah
        hasil.push(cariNama[i])
    }
    
    //validasi pencarian nama
    if (cariNama == false) {
        console.log("Nama tidak ada")
    } else{callback(hasil)}

}

function callbackName(hasilPencarian) {
    console.log(hasilPencarian)
}

searchName("li", 2, callbackName)
searchName("li", 4, callbackName)
searchName("li", 5, callbackName)
searchName("wildan", 4)