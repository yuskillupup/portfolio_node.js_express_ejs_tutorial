var express = require('express');
var ejs =require("ejs");
// body-parserオブジェクトの生成
var bodyParser = require('body-parser');
var app = express();

app.engine('ejs',ejs.renderFile);

// bodyparserの初期化
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    console.log('---GET Request---');
    // expressではGETパラメータはリクエストオブジェクトのqueryプロパティにまとめられている
    console.log('nameは' + req.query.name);
    console.log('nameは' + req.query.age);
    res.render('temp.ejs',{});
});

// POSTリクエストはpostメソッドを使用
app.post('/',function(req,res){
    console.log('---POST Request---');
    // bod-parserを使用すると、POSTパラメータがリクエストオブジェクトのbodyプロパティにまとめられる
    console.log('nameは' + req.body.name);
    console.log('nameは' + req.body.age);
    res.render('temp.ejs',{});
});



var server = app.listen(1234, function(){
    console.log('サーバを起動しました');
})