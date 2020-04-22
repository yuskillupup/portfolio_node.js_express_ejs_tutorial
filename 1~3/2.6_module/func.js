/*モジュール
コード再利用のための「モジュール」という概念がある。
既存のリソースを他のリソースでインクルードするための仕組み
ディレクトリをモジュール化する場合は、メインとなる（評価対象の）ファイルの名前を「index.js」とする必要があります。
*/
//exportsオブジェクトは代入不可のオブジェクト

exports.add= function(vall, val2){
    return vall + val2;
}

exports.sub= function(vall, val2){
    return vall - val2;
}