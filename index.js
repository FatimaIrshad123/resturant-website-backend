const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes")


app.use(cors())
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
