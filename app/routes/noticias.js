module.exports = function(application) {

    const controller = application.app.controllers;

    application.get('/noticia',function(req,res) {
        controller.noticias.noticia(application,req,res);        
    });

    application.get('/noticias',function(req,res) {
        controller.noticias.noticias(application,req,res);        
    });
}