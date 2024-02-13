// var ele=document.querySelector('#ele1')
// var eimg=document.querySelector('#ele1 img')

// ele.addEventListener('mousemove',function(dets){
//     eimg.style.left=dets.x+"px"
//     eimg.style.top=dets.y+"px"

// })

// ele.addEventListener('mouseenter',function(){
//     eimg.style.opacity='1'

// })
// ele.addEventListener('mouseleave',function(){
//     eimg.style.opacity='0'

// })

var ele=document.querySelectorAll('.ele');

ele.forEach(function(val){


val.addEventListener('mouseenter',function(){
    val.childNodes[3].style.opacity=1
});
val.addEventListener('mouseleave',function(){
    val.childNodes[3].style.opacity=0
});
val.addEventListener('mousemove',function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    // val.childNodes[3].style.top=dets.y+"px"
});
});
    
