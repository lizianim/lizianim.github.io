        // Function to load the JSON file
        async function loadJsonFile(url) {
            const response = await fetch(url);
            return response.json();
        }

            //fucntion to call key
        async function highlightKey() {
            // URL of your JSON file
            const jsonFileUrl = './poetry.json';

            // Load the JSON file content
            const jsonData = await loadJsonFile(jsonFileUrl);

            // Extract the phrases (assuming it's an array under a "phrases" key)
            const key = jsonData.key;

            // Get the content of the <p> tag
            const paragraph = document.getElementById('content');
            const text = paragraph.innerHTML;


            // Escape special characters in each phrase and create a combined regex
            const escapedKey = key.map(key =>
                key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );

            const regex = new RegExp(`(${escapedKey.join('|')})`, 'g');

            // Replace matched phrases with a <span> to highlight them
            const highlightedText = text.replace(regex, (match) => {
                return `<span class="key">${match}</span>`;
            });

            // Update the HTML content of the paragraph
            paragraph.innerHTML = highlightedText;
        }


        // Function to highlight phrases
        async function highlightPhrases() {
            // URL of your JSON file
            const jsonFileUrl = './poetry.json';

            // Load the JSON file content
            const jsonData = await loadJsonFile(jsonFileUrl);

            // Extract the phrases (assuming it's an array under a "phrases" key)
            const phrases = jsonData.phrases;

            // Get the content of the <p> tag
            const paragraph = document.getElementById('content');
            const text = paragraph.innerHTML;


            // Escape special characters in each phrase and create a combined regex
            const escapedPhrases = phrases.map(phrase =>
                phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );

            const regex = new RegExp(`(${escapedPhrases.join('|')})`, 'g');

            // Replace matched phrases with a <span> to highlight them
            const highlightedText = text.replace(regex, (match) => {
                return `<span class="highlight">${match}</span>`;
            });

            // Update the HTML content of the paragraph
            paragraph.innerHTML = highlightedText;
        }

        // Call the function
        highlightPhrases();
        highlightKey();