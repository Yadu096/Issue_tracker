const Project = require('../model/projects');

module.exports.createPage = function(req, res){
    return res.render('create_project', {
        title: "Create Project"
    });
}

module.exports.createProject = async function(req, res){

    try{
        //Check if a project by the same name exists
        const project = await Project.findOne({
            name: req.body.name
        });

        if(project){
            console.log("This project name is taken, please name your project again");
            return res.redirect('back');
        }else{
            //Create the project
            await Project.create({
                name: req.body.name,
                description: req.body.description,
                author: req.body.author
            });

            console.log("Your project is created");
            return res.redirect('/');
        }

    }catch(err){
        console.log(err, "***Error in creating the project***");
        return;
    }
}

module.exports.detailsPage = async function(req, res){
    try{
        let project = await Project.findById(req.params.id);
        return res.render('project_details_page',{
            title: "Project details",
            project: project
        })

    }catch(err){
        console.log(err, "***Error***");
    }
}