  const grid = document.getElementById("grid");
  const boxes = [];
  
  // Optimized: Circular buffer for toggle operations
  const MAX_ACTIVE = 3;
  const activeBoxesBuffer = new Array(MAX_ACTIVE);
  const activeSet = new Set(); // membership check vs classList
  let bufferIndex = 0;

  // Create 25 boxes
  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    
    box.addEventListener("click", toggleBox(box));
    
    grid.appendChild(box);
    boxes.push(box);
  }

  // Optimized toggle:  - no array shift needed
  function toggleBox(box) {
    return () => {
      if (activeSet.has(box)) return;

      // Remove oldest if buffer is full
      if (activeSet.size === MAX_ACTIVE) {
        const oldestBox = activeBoxesBuffer[bufferIndex];
        oldestBox.classList.remove("active");
        activeSet.delete(oldestBox);
      }

      // Add new box using circular buffer
      activeBoxesBuffer[bufferIndex] = box;
      bufferIndex = (bufferIndex + 1) % MAX_ACTIVE;
      
      box.classList.add("active");
      activeSet.add(box);
    };
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
    
    randomIndices.forEach((index, i) => {
      const box = boxes[index];
      activeBoxesBuffer[i] = box;
      activeSet.add(box);
      box.classList.add("active");
    });
    bufferIndex = 3;
  }

  initializeRandomBoxes();