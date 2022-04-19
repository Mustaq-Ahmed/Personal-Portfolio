require("dotenv").config

// Express Package getting and storing
const express = require("express")

// CORS => CROSS-ORIGIN RESOURCE SHARING.
const cors = require("cors")

const path = require("path")

const contactRoute = require("./route/contactRoute")

// by calling express we get new application called app, on which we use route.
const app = express()


// creating middleware's
app.use(express.json())
app.use(cors())

// hit the route, which we created (contactRoute.js)
app.use("/", contactRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("main/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "main", "build", "index.html"))
    )
} else {
    app.get("/", (req, res) => res.send("Please Setup to Production"))
}


const port = process.env.PORT || 5000;

app.listen(port, console.log(`server listing to port ${port}`))