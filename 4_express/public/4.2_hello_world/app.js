// expressオブジェクトの生成
var express = require('express');
// expressメソッドで「アプリケーション」としての役割を担うオブジェクトを生成。実装の要となる
var app = express();

// アプリケーションオブジェクトのgetメソッドでGETリクエストの登録をしている
// リクエストの登録は必要な数だけ登録可能
app.get('/',function(req,res){
// sendメソッド：様々なタイプの応答を送信するためのメソッド
    res.send('Hello Express');
});

var server = app.listen(1234, function(){
    console.log('サーバを起動しました');
})