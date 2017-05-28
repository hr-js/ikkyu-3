// (3)の正解例
// その１：toggle()を使用する
// $("#circle").toggle();
// その２：表示フラグで操作する
// let is_display = true; // is_displayは、$(...)内に宣言する必要がある
// if(is_display){
//   $("#circle").hide();
//   //$("#circle").css({display : 'none'}); // styleを操作する方法
//   is_display = false;
// }else{
//   $("#circle").show();
//   //$("#circle").css({display : 'block'}); // styleを操作する方法
//   is_display = true;
// }
// その３：classの有無で操作する
// $("#circle").toggleClass('hide');