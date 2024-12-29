const canvas = document.getElementById('stockChart');
const ctx = canvas.getContext('2d');

// Sample data points
const data = [10, 15, 8, 20, 25, 18];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

function drawLineChart(data, labels) {
  const width = canvas.width;
  const height = canvas.height;
  const padding = 40;

  // Draw Axes
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  // Scale the data
  const xStep = (width - 2 * padding) / (labels.length - 1);
  const yMax = Math.max(...data);
  const yStep = (height - 2 * padding) / yMax;

  // Draw Data Points and Lines
  ctx.beginPath();
  ctx.moveTo(padding, height - padding - data[0] * yStep);

  data.forEach((value, index) => {
    const x = padding + index * xStep;
    const y = height - padding - value * yStep;
    ctx.lineTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2);
  });

  ctx.stroke();

  // Draw Labels
  labels.forEach((label, index) => {
    const x = padding + index * xStep;
    ctx.fillText(label, x - 10, height - 10);
  });
}

drawLineChart(data, labels);




// Alpha Vantage alophavantage.io Your dedicated access key is: NVVEYKOLN2BZOSJR


// Polygon polygon.io API Key #:   5HIpmlY2vdpEpepvAzhPpjBMtxsmGxzp





