var http = require('http');
var fs = require('fs');
//urlはURLの文字列を解析するために使用
var url = require('url');
//querystringはクエリ文字列を扱うために使用
var qs = require('querystring');

var indexPage = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer(function(req,res){
    //methodプロパティを使用して、フォームリクエストがGETなのかPOSTなのか判断
    if(req.method == 'GET'){
        //urlオブジェクトのparseメソッドを使って、リクエストがあったURLの解析を行う 結果はオブジェクト型の値として返却される
        //第二引数のtrueにすることで、解析結果オブジェクト（urlParts）のqueryプロパティの値をオブジェクト型で保持できる
        //falseの場合　→　queryプロパティはname=hoge&age=20
        //trueの場合　→　queryプロパティは{name:'hoge',age:'20'}
        var urlParts = url.parse(req.url,true);
        console.log('---GET Request---');
        //クエリパラメータと同じ名前のプロパティで値へのアクセルが可能
        console.log('nameは'+ urlParts.query.name);
        console.log('ageは' + urlParts.query.age);
    }else{
    var body = '';
    //dataイベントを登録する
    //このイベントはPOSTで送信されたデータを受信した際に発生し、引数に受信したデータを受け取る
    //イベントハンドラhttps://www.sejuku.net/blog/61631
    req.on('data',function(data){
        //受信したデータは都度連結する
        body += data;
    });
    //データの受信が完了すると、endイベントが発生するので、イベントハンドラを登録する
    req.on('end', function(){
        //連結しておいた受信データをquery stringオブジェクトのparseメソッドで解析する
        //解析したデータはオブジェクト型で返却される
        //第二引数の指定は不要
        var params = qs.parse(body);
        console.log('---POST Request---');
        console.log('nameは'+params.name);
        console.log('ageは' + params.age);
    });
    }
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(indexPage);
    res.end();
});

server.listen(1235);
console.log('サーバを起動しました');

/*
var urlParts = url.parse(req.url,falsen);　にするとtypeエラーになる

utanoMacBook-Pro:2.4_sendData yuuuuta$ node sample.js
サーバを起動しました
---GET Request---
nameはundefined
ageはundefined
---GET Request---
/Users/yuuuuta/Developer/03_study/node.js/book_/2.4_sendData/sample.js:18
        console.log('nameは'+ urlParts.query.name);
                                            ^

TypeError: Cannot read property 'name' of null
    at Server.<anonymous> (/Users/yuuuuta/Developer/03_study/node.js/book_/2.4_sendData/sample.js:18:45)

*/