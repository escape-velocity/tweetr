

// $("textarea").keyup(function(){
//   $(".counters").text("Characters left: " + (140 - $(this).val().length));
// });
// console.log();



// $( document ).ready(function() {
//   $('textarea').on('input', function() {
//     var max = 140;
//     var length =  max-($(this).val().length);
//     $(this).parent().find('.counter').text(length);
//     if (length <= 0) {
//       $(this).parent().find('.counter').addClass('redmax');
//     } else {
//       $(this).parent().find('.counter').removeClass('redmax');
//     }
//   });
// });

// $(document).ready(function(){
//   $('textarea').keyup(function(){
//     var inputLength = $(this).val().length;
//     var remain = 140 - inputLength;
//     $('.counter').html(remain);
//     if(remain>= 0){
//     $('.counter').css('color', 'black');
//     } else {
//     $('.counter').css('color', 'red');
//     }
//   });
// });


$(function(){
  $('.container .new-tweet textarea').keyup(function(){
    const inputLength = $(this).val().length;
    const $counter = $('.new-tweet .counter').text(140 - inputLength);
    if(inputLength <= 140) {
      $counter.css('color', 'black');
    } else {
      $counter.css('color', 'red');
    }
  });
});

