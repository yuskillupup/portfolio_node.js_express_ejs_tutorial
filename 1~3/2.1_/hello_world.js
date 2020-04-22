//httpオブジェクトを生成する、require関数(主にnode.jsで使用される)
var http = require('http');

//サーバーオブジェクトを生成する
//createServerメソッドでサーバーを作成
//createServerメソッドは引数にサーバーリクエストを受けた際に動作するコールバック関数を指定する
//第一引数:httpリクエストオブジェクト
//第二引数:httpレスポンスオブジェクト
var server = http.createServer(function(req,res){
//writeHeadメソッドでhttpヘッダを書き出す（第一引数がステータスコード、第二引数がヘッダ情報の連想配列）
    res.writeHead(200,{'Content-Type':'text/plain'});//デフォルト
//writeメソッドでhtmlコンテンツを書き出す
    res.write('Hello World');
//endメソッドでhttpコンテンツ出力を完了する    
    res.end();
});
//ポート番号を指定してサーバーを待ち受け状態にする
server.listen(1235);
//サーバーを起動したことを明示するため
console.log('サーバーを起動しました');
