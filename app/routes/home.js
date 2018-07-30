module.exports = (application) => {
    const controller = application.app.controllers;

    application.get('/',function(req,res) {
        controller.home.index(application,req,res);
    });
}