 var wrap = document.getElementById("wrap");  
      
    var divHeight = window.innerHeight;  
      
    wrap.style.height = divHeight + "px";  
    
    var content = $(".content");//懒得写获取类的原生js代码了，直接用了jquery，=。=  
    //var content = document.getElementsByClassName("content");
    content.height(divHeight);  
    var startTime = 0, //开始翻屏时间  
        endTime = 0,  
        indexs = 0;     
    
    if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){  
        //for firefox;  
            //console.log(1);
        document.addEventListener("DOMMouseScroll",scrollFun,false);  
      
    }  
    else{  
      
        window.onmousewheel=document.onmousewheel=scrollFun;//IE/Opera/Chrome/Safari
          
    }  
  

    //滚动事件处理函数  
    function scrollFun(event){  
  
            startTime = new Date().getTime();  
  
            var delta = event.detail || (-event.wheelDelta);  
  
            if ((endTime - startTime) < -1000) {  
                //1秒内执行一次翻页  
                //console.log(1);
                if (delta > 0 &&indexs<=content.length-1) { //向下翻页  && parseInt(main.style.top) > -divHeight * ( content.length - 1)
                    
                    //indexs += divHeight ;  
                    indexs++;
                    //turnPage(indexs);  
                    btnChange(indexs,true);
  
                }   
  
                if (delta < 0 && indexs>=0) { //向上翻页  parseInt(main.style.top) < 0
  
                    //indexs -= divHeight ;  
                    indexs--;
                    btnChange(indexs,true);

                    
                }  
                endTime = new Date().getTime();  
  
            }  
            else{  
  
                event.preventDefault();  
  
            }  
              
    }  

//var indexs = 0;
var f_btn = document.getElementById("float_btn").children;
var nav_ul = document.getElementById('nav_ul').children;
//var wrapBox = document.getElementById("wrap");
var foot = document.getElementById("foot");
function btnChange(index,flag){
    var height = window.innerHeight;
    var fh = foot.offsetHeight;
    // console.log(fh);
    for(var n=0; n<f_btn.length;n++){
            f_btn[n].style.height = "4px";
            f_btn[n].style.width = "4px";
            // f_btn[n].style.background = "transparent";
    }
    
    if(flag){

        if(index <= 0 ){

            indexs = 0;
            f_btn[0].style.height = "8px";
            f_btn[0].style.width = "8px";
            turnPage(indexs);
        }
        else if(index >0 && index <=3){

            f_btn[index].style.height = "8px";
            f_btn[index].style.width = "8px";

            indexs=0;
            indexs = index;  
            //indexs++;
            console.log(indexs);
            turnPage(index);
        }
        else if(index === 4){

            console.log(indexs);
            indexs=4;
            //$("#main").animate({top:(-fh+'px')},1000);  

             $("#wrap").animate({top:(-3*divHeight-fh+'px')},300);  
  
            //turnPage(index);
        }
        else{
            indexs = 4;
        }
    }
    else{
        console.log("wrong");
        if(index <= 0 ){
            indexs = 0;

            f_btn[0].style.height = "8px";
            f_btn[0].style.width = "8px";
            // f_btn[0].style.background = "#ffffff"; 
            turnPage(0);
            //wrapBox.style.top = "0";
        }
        else if(index >0 && index <=3){

            f_btn[index].style.height = "8px";
            f_btn[index].style.width = "8px";
            
        }
        else if(index == 4){
            indexs = 4;
            //wrapBox.style.top = (-height * 3 - fh) +"px";
        }
        else{
            indexs = 4;
        }  
    }
}

  
    //翻页函数  
    function turnPage(indexs){  
        $("#wrap").animate({top:(-indexs*divHeight+'px')},1000);  
  
        //懒得写动画代码了，直接用了jquery</span><span style="font-size:14px;">，=。=  
    }  


//浮动点击事件
for(var i = 0; i < f_btn.length;i++){

    f_btn[i].indexs = i;
    f_btn[i].onclick = function(){
        //var speed = Math.abs(indexs - this.indexs);
        indexs = this.indexs;
        btnChange(indexs,true);

    }
}

//浮动nav事件
for(var i = 0; i < nav_ul.length;i++){
    nav_ul[i].indexs = i;
    nav_ul[i].onclick = function(){
        indexs = this.indexs;
        btnChange(indexs,true);
    }
}
