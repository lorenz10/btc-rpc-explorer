"use strict";

const btc = require("./coins/btc.js");
const ppc = require("./coins/ppc.js");

module.exports = {
	"BTC": btc,
	"PPC": ppc,

	"coins":["BTC","PPC"]
};