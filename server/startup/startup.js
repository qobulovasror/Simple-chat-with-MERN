const bp = require('body-parser');
const cors = require('cors');
const express = require('express');
const auth = require('../authLogin/auth');
const regis = require('../authLogin/regis');

module.exports = function(app){
	// app.use(cors());
	app.use(bp.json())
	app.use(bp.urlencoded({ extended: true }))
	// app.use(express.json());
	// app.use(express.urlencoded());

	app.use("/api/auth", auth);
	app.use("/api/regis", regis);
}
