//===app/routes.js
module.exports=function(app){
    //===Main route==============
        app.get("/",function(req, res) {
           res.render('domino.ejs');
        });
    
    //===Domino Route============
        app.get("/domino", function(req, res){
          res.render('domino.ejs');
        });
        

}