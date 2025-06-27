let btn = document.getElementById('btn');
let eraserBtn = document.getElementById('eraser');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mousex, mousey;
let state = false;
let eraserMode = false;
let colors = [
  '#ff84ff',
  '#bf7fff',
  '#7f7fff',
  '#ffa8ff',
  '#d3a8ff',
  '#a8a8ff',
  '#adffff',
  '#ffb2d8'
];

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
btn.addEventListener('click', clearBtn);

function clearBtn() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

eraserBtn.addEventListener('click', function () {
  eraserMode = !eraserMode;
  if (eraserMode) {
    eraserBtn.textContent = 'ペン';
  } else {
    eraserBtn.textContent = '消しゴム';
  }
});

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function mouseDown(e) {
  const pos = getMousePos(e);
  mousex = pos.x;
  mousey = pos.y;
  state = true;

  ctx.beginPath();
  ctx.moveTo(mousex, mousey);
}

function mouseUp() {
  state = false;
}

function mouseMove(e) {
  if (!state) return;

  const pos = getMousePos(e);


  if (eraserMode) {
    ctx.strokeStyle = '#fcf3f5';
    ctx.lineWidth = 20;
  } else {
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.lineWidth = 3;
  }



  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();

  mousex = pos.x;
  mousey = pos.y;
}