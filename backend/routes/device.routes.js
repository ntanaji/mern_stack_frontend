let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Device Model
let deviceSchema = require("../Models/Device");

// CREATE Device
router.route("/add-device").post(async (req, res, next) => {
    await deviceSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully added!",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});

// READ Devices
router.route("/").get(async (req, res, next) => {
    await deviceSchema
        .find()
        .then((result) => {
            res.json({
                data: result,
                message: "All items successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});

// Get Single Device
router.route("/get-device/:id").get(async (req, res, next) => {
    await deviceSchema
        .findById(req.params.id)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});

// Update Device
router.route("/update-device/:id").put(async (req, res, next) => {
    await deviceSchema
        .findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })
        .then((result) => {
            console.log(result);
            res.json({
                data: result,
                msg: "Data successfully updated.",
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// Delete Device
router.route("/delete-device/:id").delete(async (req, res) => {
    const id = req.params.id;

    await deviceSchema
        .findByIdAndDelete(id)
        .then(() => {
            res.json({
                msg: "Data successfully updated.",
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;