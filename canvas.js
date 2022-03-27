const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__colors");
const range = document.getElementById("jsRange");
const modeBtn = document.getElementById("jsMode")
canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 3;

ctx.strokeStyle = '#222';
ctx.fillstyle = "222";
let painting = false;
let filling = false;

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
    ctx.fillStyle  = color;
}

function handleRangeChange(event){
    const strokeSize = event.target.value;
    ctx.lineWidth = strokeSize;
}


function handleModeBtnClick(){
    if(filling===true){
        filling = false;
        modeBtn.innerText = "Fill";    
    } else{
        filling = true;
        modeBtn.innerText = "paint";
    }
}

function handleClickFilling(){
    if(filling){
        ctx.fillRect(0,0,700,700)
    }
    
}


//colors(controls__colors 클래스명을 가진 element들을 array형식으로 새롭게 반환해준다)
Array.from(colors).forEach((color)=>
    color.addEventListener("click", handleColorClick)
);


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleClickFilling);
}

if (range){
    range.addEventListener("input", handleRangeChange)
}

if(modeBtn){
    modeBtn.addEventListener("click", handleModeBtnClick);
}