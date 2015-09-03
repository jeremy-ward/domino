//===app/routes.js
module.exports=function(app){

    //===Domino Route============
        app.get("/domino", function(req, res){
          res.render('domino.ejs');
        });
        
    //===Main route==============
        app.get("/",function(req, res) {
           res.redirect("/domino") 
        });
    
}