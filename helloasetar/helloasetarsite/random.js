    const images = Array.from(document.querySelectorAll('.random-img'));
    const placedRects = [];

    function isOverlapping(rect1, rect2) {
        return !(
        rect1.x + rect1.width <= rect2.x ||
        rect1.x >= rect2.x + rect2.width ||
        rect1.y + rect1.height <= rect2.y ||
        rect1.y >= rect2.y + rect2.height
        );
    }

    function placeImage(img) {
        const width = 300;
        const height = 100;
        const maxAttempts = 100;
        let attempt = 0;
        let placed = false;

        while (!placed && attempt < maxAttempts) {
        const x = Math.random() * (window.innerWidth - width);
        const y = Math.random() * (window.innerHeight - height);
        const newRect = { x, y, width, height };

        const hasCollision = placedRects.some(existing =>
            isOverlapping(existing, newRect)
        );

        if (!hasCollision) {
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.visibility = 'visible';
            placedRects.push(newRect);
            placed = true;
        }

        attempt++;
        }

        if (!placed) {
        console.warn("Could not place image:", img.src);
        }
    }

    async function waitForAllImages(images) {
        const promises = images.map(img => {
        if (img.complete) {
            return img.decode().catch(() => {}); // Already loaded
        } else {
            return new Promise(resolve => {
            img.onload = () => img.decode().then(resolve).catch(resolve);
            });
        }
        });

        await Promise.all(promises);
    }

    waitForAllImages(images).then(() => {
        images.forEach(placeImage);
    });