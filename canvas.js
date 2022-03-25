const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__colors");
canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 4;
ctx.strokeStyle = '#222';

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath()
        ctx.moveTo(x,y) //path를 그리는 과정(눈에는 안보임)
    } else {
        ctx.lineTo(x,y); //line을 그리는 과정
        ctx.stroke(); //line에 색을 칠하는 과정
    }

}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

Array.from(colors).forEach((color)=>
    color.addEventListener("click", handleColorClick)
);







if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}