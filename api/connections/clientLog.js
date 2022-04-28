const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const clientLogSchema = require("../schemas/clientLog")

var conn = mongoose.createConnection(process.env.ATLAS_URI_LOGS);

var clientLogConnection = conn.model('clientLog', clientLogSchema);

module.exports = clientLogConnection