const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('123')
})

app.listen(3000, () => {
    console.log('Server started at port 3000')
})