/**
* 計算ボタンが押されたときの関数
* 少数は第2位まで表示。端数は切り上げる
*/
function calc(){
  if(selectedMode == 0){
    result = Math.ceil((inputLeft + inputRight)*100)/100;
  }else if(selectedMode == 1){
    result = Math.ceil((inputLeft - inputRight)*100)/100;
  }else if(selectedMode == 2){
    result = Math.ceil((inputLeft * inputRight)*100)/100;
  }else if(selectedMode == 3){
    result = Math.ceil((inputLeft / inputRight)*100)/100;
  }
}
