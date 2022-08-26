const express = require("express");
const router = express.Router();
const db = require("../db/db");

const { homeRoute } = require("../controller/userController");

router.get("/", homeRoute);

module.exports = router;
