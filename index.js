const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes")


app.use(cors({
    origin: 'https://6629ddaaaedc0a4923763ef2--resonant-dragon-5b2fe4.netlify.app',
    credentials: true 
}))
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
