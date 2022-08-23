// const convertUsdToIdr = (usd) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const hasil = usd * 14900
//             const tampilkanHasil = `${usd} usd = ${hasil} rupiah`
//             if (typeof usd === "number") {
//                 resolve(tampilkanHasil)
//             } else {
//                 reject(new Error("Data harus number"))
//             }
//         }, 3000)
//         })
// }

// convertUsdToIdr(20)
// .then((hasilKonversi) => {
//     console.log(hasilKonversi);
// }).catch(err => {
//     console.error(err.message)
// })

// convertUsdToIdr("10 usd")
// .then((hasilKonversi) => {
//     console.log(hasilKonversi);
// }).catch(err => {
//     console.error(err.message)
// })

const menuWarungSoto = (cariMenu) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const daftarMenu = ['es teh', 'es jeruk', 'teh hangat', 'jeruk hangat', 'soto ayam', 'soto babat']

            if (typeof cariMenu === 'string') {
                const lower = cariMenu.toLowerCase()
                const hasilMenu = daftarMenu.filter(menu => menu.includes(lower))
                if (hasilMenu.length > 0) {
                    resolve(hasilMenu)
                } else {
                    resolve("Maaf, menu tersebut tidak tersedia")
                }
            } else {
                reject(new Error("Data harus huruf"))
        }},1000)
    })
}

const cari = async() => {
    try {
        const menu = await menuWarungSoto("es")
        console.log(`Menu yang tersedia : ${menu}`)
    }catch (err) {
        console.error(err.message)
    }

    try {
        const menu = await menuWarungSoto("Soto")
        console.log(`Menu yang tersedia : ${menu}`)
    }catch (err) {
        console.error(err.message)
    }

    try {
        const menu = await menuWarungSoto("Sate Ayam")
        console.log(`Menu yang tersedia : ${menu}`)
    }catch(err) {
        console.error(err.message)
    }

    try {
        const menu = await menuWarungSoto(123)
        console.log(`Menu yang tersedia : ${menu}`)
    }catch(err) {
        console.error(err.message)
    }
}
cari()


////////////////////////////////


// const donasiOnline = (uang) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //biaya admin 5%
//             biayaAdmin = uang - (uang / 20 * 19)
//             donasiDiterima = uang - biayaAdmin
//             if (typeof uang === "number") {
//                 resolve (`Donasi yang diterima ${donasiDiterima} rupiah`)
//             } else {
//                 reject (new Error("Data harus number"))
//             }
//         },1000)
//     })
// }
// donasiOnline(10000)
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error(err.message)
// })

// donasiOnline("satu juta")
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error(err.message)
// })