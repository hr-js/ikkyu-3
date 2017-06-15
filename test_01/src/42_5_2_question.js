// (2)コメント解除して、アニメーションでフェードアウトできる処理を答えてください。
$(function(){
  
  // id=btnのボタンがクリックされた時、右にアニメーションする
  $('#q5_btn').on('click', function(e){
    // 右に50%移動するアニメーション
    $(e.target).animate({
      // display: 'none',   // 1
      // fontSize : '0px',  // 2
      // opacity : 0,       // 3
      left : '50%'
    }, 1000);

  });

});
