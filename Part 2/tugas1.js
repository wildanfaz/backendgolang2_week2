const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// cekHariKerja('senin')
// .then((data) => {
//     console.log(`Hari ${data} adalah hari kerja`)
// }).catch((err) => {
//     console.error(err.message)
// })

// cekHariKerja('sabtu')
// .then((data) => {
//     console.log(`Hari ${data} adalah hari kerja`)
// }).catch((err) => {
//     console.error(err.message)
// })

const tryCatch = async () => {
    try {
        const cekHari = await cekHariKerja('selasa')
        console.log(`Hari ${cekHari} adalah hari kerja`);
    }catch(err) {
        console.error(err.message)
    }

    try {
        const cekHari = await cekHariKerja('minggu')
        console.log(`Hari ${cekHari} adalah hari kerja`);
    }catch(err) {
        console.error(err.message)
    }
}
tryCatch()

/*
penjelasan penggunaan then catch dan try catch
1.then catch
then catch biasa dilakukan jika ingin melanjutkan program dan menambah kode baru lagi tetapi bisa untuk mengecek error sekaligus

2.try catch
try catch di atas dilakukan di dalam async function yang memanggil function return promise
dengan menambahkan await di belakangnya,
penggunaan try catch ini biasa dilakukan jika ingin mengetes atau mengecek apakah ada error di dalam program tersebut
 */