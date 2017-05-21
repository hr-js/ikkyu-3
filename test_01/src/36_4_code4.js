/**
* 計算ボタンが押されたときの関数
*/
function executeCalc(){
  // 入力された値を取得する
  inputLeft = parseFloat(document.getElementById('calcLeft').value);
  inputRight = parseFloat(document.getElementById('calcRight').value);

  // 入力チェック
  if(!inputLeft || !inputRight){
    alert('入力値が不正です。');
    return false;
  }
  // 計算
  calc();

  // 計算結果を表示
  document.getElementById('calcResult').innerHTML = result;
}
