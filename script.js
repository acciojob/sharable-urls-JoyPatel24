// your code here
function updateURL() {
        // Get values from input fields
        var nameValue = document.getElementById("name").value;
        var yearValue = document.getElementById("year").value;

        // Update the h3 element with the generated URL
        var urlElement = document.getElementById("url");
        urlElement.textContent = "https://localhost:8080/?name=" + encodeURIComponent(nameValue) + "&year=" + encodeURIComponent(yearValue);
    }