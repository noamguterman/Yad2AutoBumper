console.log("Content script started");

const observer = new MutationObserver(() => {
  const bumpButtons = document.querySelectorAll('[class*="bumpButton"]');
  if (bumpButtons.length > 0) {
    bumpButtons.forEach((button) => {
      try {
        button.click();
        console.log("Listing bumped successfully!");
      } catch (error) {
        console.error("Error clicking bump button:", error);
      }
    });
    observer.disconnect(); // Stop observing once the buttons are found and clicked
  } else {
    console.log("Bump buttons still not found. Waiting for them to load...");
  }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Optionally, stop observing after a certain timeout
setTimeout(() => {
  observer.disconnect();
  console.error("Stopped observing after timeout. Bump buttons were not found.");
}, 30000); // Stop observing after 30 seconds