//===app/api.js
module.exports=function(app,root){
    //===serve the JSON for the domino comparison
    app.get("/api/domino",function(req,res){
       res.sendFile(root+"/files/compare.json"); 
    });
}