const img = document.getElementById('bouncer');
let x = 100, y = 100;
let dx = 0.5, dy = 0.3;

function animate() {
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (x + dx > windowWidth - imgWidth || x + dx < 0) dx = -dx;
    if (y + dy > windowHeight - imgHeight || y + dy < 0) dy = -dy;

    x += dx;
    y += dy;

    img.style.left = x + 'px';
    img.style.top = y + 'px';
    requestAnimationFrame(animate);
}

animate();