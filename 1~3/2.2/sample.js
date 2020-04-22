var http = require('http');
//require関数でfsオブジェクトを生成
var fs = require('fs');

var server = http.createServer(function(req,res){
    //fsオブジェクトのreadFileメソッドでhtmlファイルを読み込む
    //readFileメソッド　第一引数：対象のファイルのパス、第二引数：エンコード、第三引数：読み込み完了時に動作するコールバック関数
    //※非同期で動作する(後続処理が走り始める)
    //コールバック関数　第一引数：エラーオブジェクト、第二引数：読み込んだデータ（この場合だとtemp.html）　
    fs.readFile('./temp.html','utf-8',function(err,data){
        //readFile時はtext/htmlとする
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(1234);
console.log('サーバを起動しました');