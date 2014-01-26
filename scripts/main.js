var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var loader = document.querySelector('.loader');
var cvs = document.querySelector('canvas')
var ctx = cvs.getContext('2d');


var Loader = (new function (){
    var PARTICLES_NUM = 5;
    var circles = [];
    var alpha = 1;
    var request;
    function Circle(){
        this.SCALE = 30;
        this.STRESS = 0;
        //some velocity for the particles
        this.vx = -1 + Math.random() * 2;
        this.vy = -1 + Math.random() * 2;
    }
    Circle.prototype.draw = function(i){
        var radius = Math.random()*this.SCALE //*window.loadProgress;
        var opacity = Math.random()*1;
        var offset = 22*i;
        ctx.strokeStyle = '#fff';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc((-22*2)+(WIDTH/2) +offset, HEIGHT/2, radius, 0, Math.PI*2);
        ctx.lineWidth = .2;
        ctx.fillStyle = 'rgba(255, 255, 255,' + opacity +')';
        ctx.fill();
        ctx.stroke();
    }

    this.init = function(){
        for (var i = 0; i < PARTICLES_NUM; i++) {
            circles.push(new Circle());
        }
        draw();
    }
    function draw() {
        cvs.width = WIDTH;
        cvs.height = HEIGHT;
        
        for (var i = 0; i < PARTICLES_NUM; i++) {
            var p = circles[i];
            p.draw(i);
        }
        if(window.loadProgress >= 1){
            alpha -= .01;
            if(alpha <= 0){

                if (request){
                    remove();
                    return;
                }
            }
        }
        request = requestAnimFrame(draw);
    }
    function remove(){
        cancelRequestAnimFrame(request);
        request = undefined;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.globalAlpha = 1;
    }
}())

window.onresize = function(){
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    ctx.canvas.width  = WIDTH;
    ctx.canvas.height = HEIGHT;
}


if(navigator.userAgent.match(/Opera|OPR\//) ? true : false){
    loadSounds(this, {
        buffer: 'sounds/bofas.wav'
    });
}
else{
    loadSounds(this, {
        buffer: 'sounds/edijaeoy.mp3'
    });
}