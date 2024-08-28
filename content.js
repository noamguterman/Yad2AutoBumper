window.onload = () => {
  const bumpButtons = document.querySelectorAll(".action-button_actionButton__QQg7S");

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
