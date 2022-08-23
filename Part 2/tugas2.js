const getMonth = (callback) => {
    setTimeout(() => {
        // let error = false
        let error = true
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found!'), [])
        }
    }, 4000)
}

const callbackShowMonth = (err, data) => {
    if (err) {
        return console.error(err.message)
    } else {
        return data.map(bulan => console.log(bulan))
    }
}

getMonth(callbackShowMonth)