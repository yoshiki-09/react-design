const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var { request } = require('express');

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

// SQLデータベース接続情報を定義する。
const config = {
    server: 'dev-learningdb101.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'dbadmin',
            password: 'VIEW@adm'
        }
    },
    options: {
        encrypt: true,
        database: 'learningdb'
    }
}

// ----- ログイン画面 -----
// ログインボタン押下処理
app.post('/api/login', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {

      var connection = new Connection(config);
      var content = [];

      // SQLデータベースに接続ができるかを確認する。
      connection.on('connect', function(err) {
          if(err) {
              console.log("DB接続失敗");
              // エラーメッセージを出力する。
              console.error(err.message);
          }
          else {
              console.log("DB接続成功");
              // クエリ実行関数を呼び出す。
              queryExecute();
          }
      });

      // SQLデータベースとの接続が終了した際に呼び出される。
      connection.on('end', function(row, err) {
          if(content.length) {
              // ユーザー情報が取得できた場合はパスワード照合を行う。
              content.forEach(function(value, key) {
                  bcrypt.compare(req.body.password, value.Password, function(err, r) {
                      res.send({ authorized: r });
                  });
              });
          }
          else {
              // ユーザー情報が取得できなかった場合はパスワード照合を行わない。
              res.send({ authorized: false });
          }
      });

      connection.connect();

      // クエリ実行関数
      function queryExecute() {
          // クエリ準備
          request = new Request(
              "SELECT UserID, Password FROM UserLoginInfo WHERE UserID = @id", function(err, rowCount) {
                  if(err) {
                      // エラーメッセージを出力する。
                      console.error(err.message);
                  }
                  else {
                      // 取得件数を出力する。
                      console.log(rowCount + ' rows');
                  }
              }
          );

          // パラメーター追加
          request.addParameter('id', TYPES.VarChar, req.body.userID);

          var result = {};
          // 行ごとに実行する。
          request.on('row', function(columns) {
              columns.forEach(function(column) {
                  if(column.value === null) {
                      console.log('NULL');
                  }
                  else {
                      result[column.metadata.colName] = column.value;
                  }
              });
              content.push(result);
              result = {};
          });

          // 取得処理が一通り終了したらSQLデータベースへの接続を終了する。
          request.on('requestCompleted', function() {
              console.log("ユーザー情報取得終了");
              connection.close();
          });

          // クエリ実行
          connection.execSql(request);
      }
  });
});

// ----- ユーザー情報検索画面 -----
// 検索ボタン押下時処理
app.post('/api/search', function(req, res) {

    var connection = new Connection(config);
    var content = [];

    // SQLデータベースに接続することが可能かをチェックする。
    connection.on('connect', function(err) {
        if(err) {
            console.log("DB接続失敗");
            // エラーメッセージを出力する。
            console.error(err.message);
        }
        else {
            console.log("DB接続成功");
            // クエリ実行関数を呼び出す。
            queryExecute();
        }
    });

    // SQLデータベースとの接続が終了した際に呼び出される。
    connection.on('end', function() {
        console.log("DB接続終了");
    });

    connection.connect();
    
    // クエリ実行関数
    function queryExecute() {
        // クエリ準備
        request = new Request(
            "SELECT * FROM UserPersonalInfo WHERE UserNumber = @number", function(err, rowCount) {
                if(err) {
                    // エラーメッセージを出力する。
                    console.error(err.message);
                }
                else {
                    // 取得件数を出力する。
                    console.log(rowCount + ' rows');
                }
            }
        );

        // パラメーター追加
        request.addParameter('number', TYPES.Int, req.body.userNumber);

        var result = {};

        // 行ごとに実行する。
        request.on('row', function(columns) {
            columns.forEach(function(column) {
                if(column.value === null) {
                    console.log("NULL");
                }
                else {
                    result[column.metadata.colName] = column.value;
                }
            });
            content.push(result);
            result = {};
        });

        // 取得処理が終了したらSQLデータベースへの接続を終了する。
        request.on('requestCompleted', function() {
            console.log("ユーザー情報検索終了");
            connection.close();
        });

        // クエリ実行
        connection.execSql(request);
    }
});