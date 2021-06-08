import express from "express"

import blogsRoute from "./services/blogs/index.js"
import authorsRoute from "./services/authors/index.js"

const { PORT } = process.env

const app = express()

app.use(express.json())

app.use("/blogs", blogsRoute)
app.use("/authors", authorsRoute)

app.listen(PORT, () => console.log("server is running on port ", PORT))

app.on("error", (err) => console.log("server is not running ", err))
