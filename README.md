# 5×5 Matrix Interactive Grid

A simple, interactive web application featuring a 5×5 grid of clickable boxes with dynamic state management.

## Features

- **Interactive Grid**: 25 clickable boxes arranged in a 5×5 matrix
- **Active State Tracking**: Keep track of up to 3 active (red) boxes at a time
- **Auto-rotation**: When a 4th box is clicked, the oldest active box automatically becomes inactive
- **Random Initialization**: 3 random boxes start in the active state when the page loads
- **Smooth Animations**: Hover effects and CSS transitions for better user experience
- **Responsive Design**: Centered layout with visual feedback on interaction

## How It Works

1. Click on any **blue box** to activate it (turns **red**)
2. You can keep up to **3 boxes active** simultaneously
3. When you click a 4th box, the **oldest active box** will deactivate
4. **Hover effects** provide visual feedback for both active and inactive boxes
5. On page load, **3 random boxes** are pre-selected as active

## Files

- `index.html` - HTML structure and page layout
- `script.js` - JavaScript logic for grid creation and click event handling
- `stylesheet.css` - Styling and animations

## Getting Started

1. Open `index.html` in your web browser
2. Click on boxes to interact with the grid
3. Watch as the active state changes dynamically

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid layout, flexbox, and transitions
- **JavaScript (Vanilla)** - DOM manipulation and event handling

