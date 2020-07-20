const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
    x:undefined,
    y:undefined,
}

window.addEventListener('mousemove',function(e){
    mouse.x = e.x;
    mouse.y = e.y;

})
class Circle{
    constructor(x,y,dx,dy,radius,color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }
    update(){
        if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x-this.x <70 && mouse.x-this.x >-70 && 
            mouse.y-this.y <70 && mouse.y-this.y >-70 ){
                if(this.radius <40){
                this.radius +=1;
                }
        }
        else if(this.radius>5){
            this.radius -=1;
        }

        this.draw();     


    }
}
var arr = [];

for(i=0;i<700;i++){
        var x = Math.random()*innerWidth;
        var y = Math.random()*innerHeight;
        var dx = (Math.random()-0.5)*12;
        var dy = (Math.random()-0.5)*12;
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        radius = 30;
        arr.push(new Circle(x,y,dx,dy,radius,color));

}
console.log(arr);
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(i=0;i<arr.length;i++){
        arr[i].update();
    }
}
animate();
