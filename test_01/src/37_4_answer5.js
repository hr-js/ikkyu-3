/**
* 解答例
* ・if文が不適切
* 　-> == は値のみでデータ型では判断されない。===を使用するほうが望ましい
* ・引数とreturnを使用する
* 　-> グローバル変数を定義しなくてもいい
* ・切り上げ処理が不適切(※結構見落とす所)
* 　-> 1 + 0.1 の結果が1.11となる。0.1を表現する場合の誤差が考慮されていない。
*/
