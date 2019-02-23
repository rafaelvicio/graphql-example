const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://stattrakuser:stattrakuser@cluster0-msqwb.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }
);

module.exports = mongoose;
