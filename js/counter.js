/**
 * Created by ChangeCheng on 14-7-28.
 */



/**
 * Created by ChangeCheng on 14-7-25.
 */
var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var Radius=8;
var Margin_Left=20;
var Margin_Top=20;
var End_Time=new Date(2014,1,7,17,30,00);
var curShowTimeSeconds=0;
var balls=[];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]
var mode= 1 ;    //0:coutDown  1:count


window.onload = function(){
    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;

    Margin_Left = WINDOW_WIDTH / 10;
    Margin_Top = Math.round(WINDOW_HEIGHT / 5);
    Radius = Math.round(WINDOW_WIDTH*4/5/180) -1;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    curShowTimeSeconds=currentRemainTime();
    setInterval(
        function(){
            render(context);
            update();
        },
        50
    )

};


//current remaining time
function currentRemainTime() {
    var currentTime=new Date();
    var remainTime=(End_Time.getTime()-currentTime.getTime())*Math.pow(-1,mode);
    remainTime=Math.round(remainTime/1000);
    return remainTime>0?remainTime:0;
}

function update() {
    var nextShowTimeSeconds=currentRemainTime();



    var next_days= parseInt(nextShowTimeSeconds/86400);
    var next_hours=parseInt((nextShowTimeSeconds-86400*next_days)/3600);
    var next_minutes=parseInt((nextShowTimeSeconds-86400*next_days-3600*next_hours)/60);
    var next_seconds=parseInt(nextShowTimeSeconds%60);



    var cur_days= parseInt(curShowTimeSeconds/86400);
    var cur_hours=parseInt((curShowTimeSeconds-86400*cur_days)/3600);
    var cur_minutes=parseInt((curShowTimeSeconds-86400*cur_days-3600*cur_hours)/60);
    var cur_seconds=parseInt(curShowTimeSeconds%60);

    if (next_seconds != cur_seconds) {
        if (parseInt(next_seconds%10) != parseInt(cur_seconds%10)) {
            addballs(Margin_Left+165*(Radius+1),Margin_Top,parseInt(next_seconds%10));
        }

        if (parseInt(cur_seconds/10) != parseInt(next_seconds/10)) {
            addballs(Margin_Left+150*(Radius+1),Margin_Top,parseInt(cur_seconds/10));
        }


        if (parseInt(next_minutes%10) != parseInt(cur_minutes%10)) {
            addballs(Margin_Left+125*(Radius+1),Margin_Top,parseInt(cur_minutes%10));
        }
        if (parseInt(next_minutes/10) != parseInt(cur_minutes/10)) {
            addballs(Margin_Left+110*(Radius+1),Margin_Top,parseInt(cur_minutes/10));
        }
        if (parseInt(next_hours%10) != parseInt(cur_hours%10)) {
            addballs(Margin_Left+85*(Radius+1),Margin_Top,parseInt(cur_hours%10));
        }
        if (parseInt(next_hours/10) != parseInt(cur_hours/10)) {
            addballs(Margin_Left+70*(Radius+1),Margin_Top,parseInt(cur_hours/10));
        }
        //days
        if (parseInt(parseInt(next_days)%10) != parseInt(parseInt(cur_days)%10)) {
            addballs(Margin_Left+45*(Radius+1),Margin_Top,parseInt(parseInt(cur_days)%10));
        }
        if (parseInt(parseInt(next_days/10)%10) != parseInt(parseInt(cur_days/10)%10)) {
            addballs(Margin_Left+30*(Radius+1),Margin_Top,parseInt(parseInt(cur_days/10)%10));
        }
        if (parseInt(parseInt(next_days/100)%10) != parseInt(parseInt(cur_days/100)%10)) {
            addballs(Margin_Left+15*(Radius+1),Margin_Top,parseInt(parseInt(cur_days/100)%10));
        }
        if (parseInt(parseInt(next_days/1000)%10) != parseInt(parseInt(cur_days/1000)%10)) {
            addballs(Margin_Left,Margin_Top,parseInt(parseInt(cur_days/1000)%10));
        }


        curShowTimeSeconds = nextShowTimeSeconds;

    }





    UpdateBalls();



}

function UpdateBalls() {
    var cnt=0;
    var cur_length=balls.length;
    for (var i=0; i<cur_length;i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        if( balls[i].y+Radius >= WINDOW_HEIGHT ){
            balls[i].y = WINDOW_HEIGHT-Radius;
            balls[i].vy = - balls[i].vy*0.7;
        }
        if((balls[i].x-Radius>0) && (balls[i].x+Radius<WINDOW_WIDTH)) {
            balls[cnt++]=balls[i];
        }

    }


    for (var i=Math.min(cnt,500);i<cur_length;i++) {
        balls.pop();
    }







}

function addballs(x,y,num) {

    for (var i= 0; i<digit[num].length; i++) {
        for (var j=0; j<digit[num][i].length;j++) {
            if (digit[num][i][j] == 1) {
                //generate a ball
                var aBall={
                    x:x+2*j*(Radius+1)+Radius+1,
                    y:y+2*i*(Radius+1)+Radius+1,

                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    g:1.5+Math.random(),
                    color:colors[ Math.floor( Math.random()*colors.length ) ]
                };
                balls.push(aBall);
            }
        }
    }

}//add balls when number changed



function render(cxt){
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var days= parseInt(curShowTimeSeconds/86400);
    var hours=parseInt((curShowTimeSeconds-86400*days)/3600);
    var minutes=parseInt((curShowTimeSeconds-86400*days-3600*hours)/60);
    var seconds=parseInt(curShowTimeSeconds%60);


    renderDigit(Margin_Left,Margin_Top,parseInt(parseInt(days/1000)%10),cxt);
    renderDigit(Margin_Left+15*(Radius+1),Margin_Top,parseInt(parseInt(days/100)%10),cxt);
    renderDigit(Margin_Left+30*(Radius+1),Margin_Top,parseInt(parseInt(days/10)%10),cxt);
    renderDigit(Margin_Left+45*(Radius+1),Margin_Top,parseInt(days%10),cxt);         //days 4 digits

    renderDigit(Margin_Left+60*(Radius+1),Margin_Top,10,cxt);//simbol


    renderDigit(Margin_Left+70*(Radius+1),Margin_Top,parseInt(hours/10),cxt);
    renderDigit(Margin_Left+85*(Radius+1),Margin_Top,parseInt(hours%10),cxt);//hours
    renderDigit(Margin_Left+100*(Radius+1),Margin_Top,10,cxt);//simbol
    renderDigit(Margin_Left+110*(Radius+1),Margin_Top,parseInt(minutes/10),cxt);
    renderDigit(Margin_Left+125*(Radius+1),Margin_Top,parseInt(minutes%10),cxt);//minutes
    renderDigit(Margin_Left+140*(Radius+1),Margin_Top,10,cxt);//simbol
    renderDigit(Margin_Left+150*(Radius+1),Margin_Top,parseInt(seconds/10),cxt);
    renderDigit(Margin_Left+165*(Radius+1),Margin_Top,parseInt(seconds%10),cxt);//seconds

    //render balls
    for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle=balls[i].color;

        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , Radius , 0 , 2*Math.PI );
        cxt.closePath();

        cxt.fill();
    }
}


function renderDigit(x, y, num, cxt) {
    cxt.fillStyle="white";

//    cxt.strokeStyle="grey";

    for (var i=0;i<digit[num].length;i++){
        for (var j=0;j<digit[num][i].length;j++){
            if (digit[num][i][j]==1){



                //Draw a circle
                cxt.beginPath();
                cxt.arc(x+2*j*(Radius+1)+Radius+1,y+2*i*(Radius+1)+Radius+1,Radius,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
//                cxt.stroke();


            }

        }
    }

}