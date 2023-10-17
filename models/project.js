const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
    projectId: {
      type: String,
      unique: true,
      required: true
    },
    emirate: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Project', projectSchema);