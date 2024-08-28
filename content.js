window.onload = () => {
  const bumpButtons = document.querySelectorAll('[data-testid="bump-ad-action-button"]');

  if (bumpButtons.length > 0) {
    bumpButtons.forEach((button) => {
      try {
        button.click();
        console.log("Listing bumped successfully!");
      } catch (error) {
        console.error("Error clicking bump button:", error);
      }
    });
  } else {
    console.error("Bump buttons not found.");
  }
};
