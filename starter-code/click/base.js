console.log("Sanity Check: JS is working!");

$(document).ready(function(){



 for(var i=0;i<7;i++) {
   $('ul').append('<li></li>').eq(i)
 }

 for(var i=0;i<7;i++){
    $('li').eq(i).addClass($('span').eq(i).text())
}

$('span').on('click',function(){
 $('li').text('hey');
 })



})
