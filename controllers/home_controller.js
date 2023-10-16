const Project = require('../model/projects');

module.exports.home = async function(req, res){

    //Get the projects
    const projects = await Project.find({});

    return res.render('home',{
        title: "Home",
        projects: projects
    });    
}