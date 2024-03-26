exports.get404 = (req, res, next) => {
    //Rending a page by using a separated html file
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    
    //Rendering a page usng Templating Egines:
    res.status(404).render('404', {pageTitle: 'Page not Found', path: '/404'});
}