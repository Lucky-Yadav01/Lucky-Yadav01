const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelectorAll('.box');

let timeoutId;
let isLoading = false;

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase().trim(); // Trim whitespace

  // Debounce search
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  if (searchTerm) { // Only proceed if there's a search term
    timeoutId = setTimeout(() => {
      isLoading = true;
      showLoadingIndicator(); // Add your loading indicator logic here

      // Perform search
      searchResults.forEach((searchResult) => {
        const title = searchResult.querySelector('h2').textContent.toLowerCase();
        const description = searchResult.querySelector('p').textContent.toLowerCase();
        const address = searchResult.querySelector('p:nth-child(2)').textContent.toLowerCase();

        const isMatch = title.includes(searchTerm) || description.includes(searchTerm) || address.includes(searchTerm);
        searchResult.style.display = isMatch ? 'block' : 'none';

        if (isMatch) {
          highlightMatches(searchResult, searchTerm); // Add your highlighting logic here
        }
      });

      isLoading = false;
      hideLoadingIndicator(); // Remove your loading indicator logic here
    }, 200); // Adjust delay as needed
  } else {
    // Clear results if search bar is empty
    searchResults.forEach((searchResult) => {
      searchResult.style.display = 'block'; // Show all results
      removeHighlights(searchResult); // Remove existing highlights
    });
  }
});

// Implement functions for showing/hiding loading indicator and highlighting/removing matches
function showLoadingIndicator() {
  // Your implementation to display loading indicator near search bar
}

function hideLoadingIndicator() {
  // Your implementation to remove loading indicator
}

function highlightMatches(searchResult, searchTerm) {
  // Your implementation to highlight matched terms within the search result element
}

function removeHighlights(searchResult) {
  // Your implementation to remove existing highlights from the search result element
}
