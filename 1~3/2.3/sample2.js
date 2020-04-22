//sample改良
var http = require('http');
var fs = require('fs');

//readFileSyncメソッドはその名の通り、同期処理でファイル読み込みを行う
//readFileは非同期処理？
var indexPage = fs.readFileSync('./index.html', 'utf-8');
var nextPage = fs.readFileSync('./next.html','utf-8');

var server = http.createServer(function(req,res){
    //targetの初期化
    var target = '';
    //リクエストされたURLごとに処理を分岐
    switch(req.url){
        case'/':
        case'/index':
            target = indexPage;
            break;
        case '/next':
                target = nextPage;
            break;
        //想定されていないURLにアクセスがあった場合、404を返す
        defalut:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('bad request');
            return;
    }

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(target);
    res.end();
});

server.listen(1234);
console.log('サーバーを起動しました');

