module.exports.noticia = function(app,req,res) {
    const connection = app.config.dbConn();

    const noticiasModel = new app.app.models.Noticias(connection);

    noticiasModel.getNoticia(function(error, result) {
        if(result.length === 0) {
            console.log('Não há elemento no banco de dados');
            /* Deve retornar erro 404*/
            return;
        } else {
            res.render("noticias/noticia",{noticia : result});
        }
    });

}

module.exports.noticias = function(app,req,res) {
    const connection = app.config.dbConn();

    const noticiasModel = new app.app.models.Noticias(connection);

    noticiasModel.getNoticias(function(error, result) {
        res.render("noticias/noticias",{noticias : result});
    });
}