// const app = require("./app")
// const express = require("express")
// const morgan = require("morgan")

// const port = process.env.PORT || 3000

// const app = express()
// app.use(morgan("tiny"))

// app.listen(port, () => {
//   console.log(`🚀 Server listening at http://localhost:${port}`)
// })

const express = require("express")
const morgan = require("morgan")
const router = require("./routes/gift-exchange.js")
const app = express()
const port = 3000

app.use(morgan("tiny"))
app.use("/gift-exchange", router)

app.get("/", async(req, res, next) => {
  res.status(200).json({ping:"pong"})
})

app.get("/hey", async(req, res, next) => {
  res.status(200).json({Hi:"Hello"})
})

app.listen(port, ()=> {
  console.log("Sever listening on port " + port )
})