const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes")


app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
