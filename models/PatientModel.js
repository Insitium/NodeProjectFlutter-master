const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//model of the patients data
const PatientSchema = new mongoose.Schema({
    patientId: {type: String, unique: true,required:true},
    fullName: { type: String, required: true },
    age: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: {type: String}
})

module.exports = mongoose.model("patient",PatientSchema)
