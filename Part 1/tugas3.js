const filterDataArray = (nilaiAwal, nilaiAkhir, dataArray = []) => {
    //validasi number dan array
    if (typeof nilaiAwal != "number" || typeof nilaiAkhir != "number" || Array.isArray(dataArray) == false) {console.log("nilaiAwal dan nilaiAkhir harus number dan dataArray harus array")
    } else {
         //hasil digunakan untuk menyaring data yang lebih dari nilaiAwal dan kurang dari nilaiAkhir
    const hasil = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir)

        if (dataArray.length > 5) {
            if (nilaiAwal > nilaiAkhir) {
                console.log("Nilai akhir harus lebih besar dari nilai awal")
            } else if (hasil == false) {
                console.log("Nilai tidak ditemukan")
            } else {
                //urutkan hasil dari nilai yang terkecil sampai yang terbesar
                console.log(hasil.sort((a,b) => {return a - b}))
            }
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }
    }
}

filterDataArray(1,20,[3,44,55,6,12,9])
filterDataArray(20,1,[3,44,55,6,12,9])
filterDataArray(1,20,[3,44,55])
filterDataArray(1,20,[30,40,50,60,70,80,90])
filterDataArray("halo","hai",[1,2,3,4,5,6,7,8])
filterDataArray(1,2,"tes")