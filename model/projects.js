const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    issues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }]
},{
    timestamps: true
});

const Project = mongoose.model('Project', projectsSchema);
module.exports = Project;