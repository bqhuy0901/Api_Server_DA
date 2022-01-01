const express = require('express')
const app = express()
const mongooose = require('mongoose')
const bodyparser = require('body-parser');
const cors = require('cors')
require("dotenv/config")

const port = 5000


//
app.use(bodyparser.json());
app.use(cors());


//import route
const booksRouter = require("./routers/books.js")
const categoriesRouter = require("./routers/category.js")

//middlewear 
app.use("/books", booksRouter)
app.use("/category", categoriesRouter)



//Connect 
mongooose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>{ console.log("Connect to DB");
})



app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})