module.exports.formularioInclusaoNoticia = function(app,req, res) {
    res.render("admin/form_add_noticia",{errors:{},noticia:{}});
}

module.exports.noticiasSalvar = function(app,req,res) {
    const noticia = req.body;

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty();
    req.assert('noticia','Notícia é obrigatório').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render("admin/form_add_noticia",{ errors, noticia });
        return;
    }
    
    const connection = app.config.dbConn();
    const noticiaModel = new app.app.models.Noticias(connection);

    noticiaModel.salvarNoticia(noticia, function(error, result) {
        console.log('Indo para o Redirect');
        res.redirect('/noticias');
    });
}