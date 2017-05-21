/**
* 解答例
* ・htmlでonclick属性を使用はやめる
* 　-> addEventListenerを使用して、jsファイルのみでJavaScriptのコードを管理する
* ・0を入力した場合、不正判定される
* 　-> parseFloat()する前に、入力チェックする
* ・document.getElementById('calcLeft')、document.getElementById('calcRight')を変数に
* 　-> 上の処理でも呼ばれているので、変数化して呼ぶ回数を減らす
*/
