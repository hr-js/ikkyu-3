/**
* 数値が入力された時の関数
*/
function keyDown(event){
  let flag = false;

  for(let i = 0, length = PermissionKeyCodes.length; i<length; i++){
    if(event.keyCode == PermissionKeyCodes[i]){
      flag = true;
      break;
    }
  }

  if(!flag){
    // 入力イベントをキャンセルする
    event.preventDefault();
  }

}
