const canvas = document.getElementById('olympic-canvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

// Set the circle properties
const centerX = canvas.width / 2 -100;
const centerY = canvas.height / 2 ;
const radius = 100;
const lineWidth = 15;

// Draw the Olympic symbol
ctx.lineWidth = lineWidth;
ctx.strokeStyle = '#0074D9'; // Blue
ctx.beginPath();
ctx.arc(centerX - radius, centerY, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = '#000000'; // black
ctx.beginPath();
ctx.arc(centerX + radius, centerY, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = '#3D9970'; // Green
ctx.beginPath();
ctx.arc(centerX + 3 * radius, centerY, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = '#FFDC00'; // Yellow
ctx.beginPath();
ctx.arc(centerX - radius / 2, centerY + radius, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = '#FF4136'; // red
ctx.beginPath();
ctx.arc(centerX + 160 + radius / 2, centerY + radius, radius, 0, 2 * Math.PI +10);
ctx.stroke();