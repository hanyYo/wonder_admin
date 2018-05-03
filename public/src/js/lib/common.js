console.log('test2');
$(document).ready(function(){
  $(".lnb>ul>li>a").on("click",function(){
    $(".lnb .sec").not($(this).siblings("ul")).slideUp(300);
    $(this).siblings("ul").slideToggle(300);
  })
})
