const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }

    console.log(ip)

    res.render('index', {ip: ip})
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(3330, () => {
    console.log('listening to port 3330')
})