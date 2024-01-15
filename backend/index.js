let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const deviceRoute = require("./routes/device.routes");

// Connect to MongoDB
mongoose.connect('mongodb+srv://ntanaji2k23:Tanaya%402k23@device.xgudpum.mongodb.net/devices?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(cors());

app.use("/devices", deviceRoute);

// PORT
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});