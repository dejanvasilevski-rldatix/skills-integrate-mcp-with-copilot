// Placeholder for animated Git-style branch lines
// This script draws simple animated lines as a visual effect.

const canvas = document.getElementById('branch-lines-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Simple animation: draw a few animated lines
  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#bfff00';
    ctx.lineWidth = 2;

    function drawLine(ctx, i, canvasWidth, canvasHeight, t) {
      ctx.beginPath();
      let y = (canvasHeight / 6) * (i + 1) + 20 * Math.sin(t / 30 + i);
      ctx.moveTo(0, y);
      for (let x = 0; x < canvasWidth; x += 40) {
        ctx.lineTo(x, y + 10 * Math.sin((x + t * 2 + i * 50) / 80));
      }
      ctx.stroke();
    }
    for (let i = 0; i < 5; i++) {
      drawLine(ctx, i, canvas.width, canvas.height, t);
    }
    t++;
    requestAnimationFrame(draw);
  }
  draw();
}
