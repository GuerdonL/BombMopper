var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
resizeCanvas()
//listen for resize events and resize the canvas
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // set background color of canvas to black
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw a circle
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

