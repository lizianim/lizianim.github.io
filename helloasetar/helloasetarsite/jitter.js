        const glitch1 = document.getElementById('glitch1');
        const glitch2 = document.getElementById('glitch2');

        function glitchLoop() {
        const glitchOffset = Math.random() > 0.5 ? 2 : -2;

        glitch1.style.transform = `translateX(0px)`;
        glitch2.style.transform = `translateX(${glitchOffset}px)`;

        setTimeout(() => {
            glitch2.style.transform = 'translateX(0px)';
        }, 60);

        setTimeout(glitchLoop, 500 + Math.random() * 100); // delay between glitches
        }

        glitchLoop();