const express = require('express')
const morgan = require("morgan")

const app = express()
app.use(morgan("tiny"))

app.listen(3000, () => {
    console.log("Sever listening on port 3000")
})

app.use(express.json())