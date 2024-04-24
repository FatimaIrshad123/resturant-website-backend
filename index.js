const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes")

app.use(cors({
    origin: 'http://localhost:5173/', // Allow only requests from this origin
    methods: ['GET', 'POST'], // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
  }));
//app.use(cors())
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
