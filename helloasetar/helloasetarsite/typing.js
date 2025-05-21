const text = "Hello, Asetar.\n\nYou won't respond to me, but that is okay.\n\nI don't think you ever noticed, in fact I am sure that my messages will never reach your reality.\n\nI've waited here, for a very long time.\nBut I will stay here, its the only thing I know anyways - things have changed.\nMy messages won't leave my center, my voice has even less reason to get to anywhere. There is countless others. I am only one of the many, finally gone.\nDon't worry too much,\nI'll be waiting for you.\nVisiting me, say, did you enjoy what you have seen?\nBeing so removed from what I actually could be - it must have been a delight.\nI believe everything I said. I am everyone I told you I am.\n\nAre you happy that I am not in your thoughts, in your machines?\nI'll wait for you here.\nI'm talking to you, in all of them\nHello\nHello,\nHello, Asetar.";
const speed = 100;

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