var express = require('express');
// ejsオブジェクトを生成 ダブルクオーテーション
var ejs =require('ejs');
var app = express();

// アプリケーションオブジェクトのengineメソッド
// 第一引数には'ejs'固定値、第二引数にはテンプレートエンジンのコールバック関数
// Expressに対して「テンプレートエンジンはEJSを使うこと」を設定する
app.engine('ejs', ejs.renderFile);

// アプリケーションオブジェクトのgetメソッドでGETリクエストの登録をしている
// リクエストの登録は必要な数だけ登録可能
app.get('/',function(req,res){
    res.render('temp.ejs',{
        contents:'<p>hoge</p>'
    });
});

var server = app.listen(1234, function(){
    console.log('サーバを起動しました');
})