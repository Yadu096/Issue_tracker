module.exports.createPage = function(req, res){
    return res.render('create_project', {
        title: "Create Project"
    });
}