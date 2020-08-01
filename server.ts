const express = require('express')
const app = express()

app.get('/api/v2', (req, res) => {
    res.end('123')
})

app.listen(8090, () => {
    console.log('Server started at port 3000')
})
