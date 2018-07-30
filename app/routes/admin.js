module.exports = function(application) {
    const controller = application.app.controllers;

    application.get('/formulario_inclusao_noticia',function(req,res) {
        controller.admin.formularioInclusaoNoticia(application,req,res);
    });

    application.post('/noticias/salvar',function(req,res) {
        controller.admin.noticiasSalvar(application,req,res);
    });
}