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
    
    //dataイベント データを読み込むたびに実行される
    stream.on('data',function(data){
        res.write(data);
    });
    //endイベント
    stream.on('end',function(data){
        res.end();
    });
});

server.listen(1234);
console.log('サーバを起動しました');
