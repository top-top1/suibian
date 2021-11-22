// 获取图片
var img = document.getElementById('img');
//定义数组存储图片
var imgArr = ['201804171831356107.png','201805021444527093.jpg','201806082104343468.jpg','201806261053564966.jpg','201805021446184133.jpg']
function banner(index){
    for(var i= 0;i<imgArr.length;i++){
        if(index==i){
            img.src="images/"+imgArr[i];
        }
    }
}

//切换图片
//获取div
var div = document.querySelectorAll('.box');
var list = document.querySelectorAll('.circle li');
//存储div

function tab(index){
    for(var i = 0;i<div.length;i++){
        if(index==i){
            div[i].style.display = 'block';
            list[i].style.backgroundColor = '#fff';
        }else{
            div[i].style.display='none';
            list[i].style.backgroundColor = '';
        }
    } 

}

