var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var urlParts = url.parse(req.url);
    //供給対象のファイルパスを生成している
    //__dirname: 組み込み関数（現在実行中のソースコードが格納されているディレクトリパスが格納されている
    //console.log(__dirname);
    //　→　Users/yuuuuta/Developer/03_study/node.js/book_/2.5_fileSupply    
    //urlParts.pathnam: URLのパス部分が格納されている
    // →　pathname: '/large.jpg'
    var path = __dirname + '/' + urlParts.pathname;
    //createReadStreamメソッドを使用して、「ファイルを読み込むためのストリームオブジェクト」を生成
    var stream = fs.createReadStream(path);
    
    //ストリームオブジェクトのpipeメソッドを使用する
    //pipeメソッド：読み込んだデータを引数で指定したオブジェクトにそのまま流し込むことができる、res.writeも不要、読み込み完了時には内部でレスポンスのendメソッドも呼び出す
    stream.pipe(res);
});

server.listen(1234);
console.log('サーバを起動しました');
