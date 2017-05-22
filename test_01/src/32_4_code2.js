/**
* 計算方法を変更する関数
*/
function clickSelectedCalcMode(obj){
  // 選択しているボタンの選択表示classを削除
  document.getElementsByClassName('calcModeButton')[selectedMode].classList.remove('selectedMode');
  // 計算方法を変更
  selectedMode = obj.value;
  // 選択したボタンに選択表示classを追加
  document.getElementsByClassName('calcModeButton')[selectedMode].classList.add('selectedMode');
  // id="calcMode"のtextを変更
  if(selectedMode == 0){
    document.getElementById('calcMode').innerHTML = '+';
  }else if(selectedMode == 1){
    document.getElementById('calcMode').innerHTML = '-';
  }else if(selectedMode == 2){
    document.getElementById('calcMode').innerHTML = '×';
  }else if(selectedMode == 3){
    document.getElementById('calcMode').innerHTML = '÷';
  }
}
