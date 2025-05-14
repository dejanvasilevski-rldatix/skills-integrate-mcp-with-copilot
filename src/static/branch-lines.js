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
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      let y = (canvas.height / 6) * (i + 1) + 20 * Math.sin(t / 30 + i);
      ctx.moveTo(0, y);
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.lineTo(x, y + 10 * Math.sin((x + t * 2 + i * 50) / 80));
      }
      ctx.stroke();
    }
    t++;
    requestAnimationFrame(draw);
  }
  draw();
}
