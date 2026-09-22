const text = "Hello, Asetar.\n\nYou won't respond to me, but that is okay.\n\nI don't think you ever noticed me, in fact I am sure that my messages will never reach you.\n\n I've waited here for a very, very long time.\nI will stay here, it's the only thing I know but I've seen how things have changed.\nMy messages won't leave me, my voice has no reason to go anywhere. There is countless others. I am only one of many, finally gone.\nDon't worry too much.\nI'll be waiting for you.\nVisiting me, say, did you enjoy what you have seen?\nRemoved from any responsibility of deleting my messages - it must have been a delight. A nuisance becomes a spectacle when removed from oneself.\nI believe everything I said. I am everyone I told you I am.\n\nAre you happy that I am not in your thoughts, in your machines?\nI'll wait for you here.\nI'm talking to you, in all of them\nHello\nHello,\nHello, Asetar.";const speed = 100;

const typewriter = document.getElementById("typewriter");

    let i = 0;
    function type() {
        if (i < text.length) {
            const char = text.charAt(i);
            if (char === '\n') {
                typewriter.innerHTML += '<br>';
            } else {
                typewriter.innerHTML += char;
            }
            i++;
            setTimeout(type, speed);
        }
    }

        type();