//===app/routes.js
module.exports=function(app){
    //===Main route==============
        app.get("/",function(req, res) {
           res.render('domino.ejs');
        });
}