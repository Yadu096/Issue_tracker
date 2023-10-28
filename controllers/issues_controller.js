const Issue = require('../model/issues');
const Project = require('../model/projects');

module.exports.createPage = function(req, res){
    return res.render('issue_create_page', {
        title: "Create Issue",
        pid: req.params.id
    });
}

module.exports.createIssue = async function(req, res){

    try{
        //Check if an issue with the same title already exists
        let issue = await Issue.find({title: req.body.title});
        if(issue == undefined){
            //Issue already exists
            console.log(issue, "An issue with the same title exists, please choose another title");
            return;
        }else{
            //Create a new issue
            let issue = await Issue.create({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                project: req.params.pid
            });

            //Push the issue in the project as well
            let project = await Project.findById(req.params.pid);
            project.issues.push(issue._id);
            project.save();

            return res.redirect(`/project/details-page/${req.params.pid}`);
        }

    }catch(err){
        console.log(err, "***Error***");
        return;
    }
}