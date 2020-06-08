const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("This is team granite's backend")
})

app.listen(8080, () => {
    console.log("app listening on https://127.0.0.1:8080/")
})