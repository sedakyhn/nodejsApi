const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true    
})
    .then (()=> {
        console.log('DB bağlantısı başarılı')
    })
    .catch ((err) => {
        console.log('DB bağlanırken hata!:', err)
    })

