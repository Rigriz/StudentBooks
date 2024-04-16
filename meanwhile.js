document.addEventListener("DOMContentLoaded", function() {
    // URL of the wiki page you want to scrape
    var wikiURL = "https://en.wikipedia.org/wiki/Main_Page";

    // Make a request to fetch the HTML content of the wiki page
    fetch(wikiURL)
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM element to parse the HTML content
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(data, 'text/html');

            // Extract the relevant content from the parsed HTML
            var wikihowContent = htmlDoc.querySelector('.featured-content');

            // Display the extracted content on the webpage
            document.getElementById('wiki-content').innerHTML = wikiContent.innerHTML;
        })
        .catch(error => {
            console.error('Error fetching wiki content:', error);
        });
});
