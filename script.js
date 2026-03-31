 const grid = document.getElementById("grid"); //using DOM to get grid element
  const activeBoxes = []; // stores last 3 clicked boxes
  const boxes = []; // store all boxes

  // Create 25 boxes
  for (let i = 0; i < 25; i++) {
    // Create box element
    const box = document.createElement("div");
    // Add box class for styling
    box.classList.add("box");
// Add click event listener to each box
    box.addEventListener("click", () => {
      // Ignore if already active
      if (box.classList.contains("active")) return;

      // Add new box to active list
      activeBoxes.push(box);
      box.classList.add("active");

      // If more than 3, remove oldest
      if (activeBoxes.length > 3) {
        const oldest = activeBoxes.shift();
        // Remove active class from the oldest box
        oldest.classList.remove("active");
      }
    });

    grid.appendChild(box);
    boxes.push(box);
  }

  // Initialize: Set 3 random boxes to red on page load
  function initializeRandomBoxes() {
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const index = Math.floor(Math.random() * 25);
      if (!randomIndices.includes(index)) {
        randomIndices.push(index);
      }
    }
    randomIndices.forEach(index => {
      boxes[index].classList.add("active");
      activeBoxes.push(boxes[index]);
    });
  }

  initializeRandomBoxes();