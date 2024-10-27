# Workout Block Builder

## Overview

The **Workout Block Builder** is a React application that allows users to create and visualize workout routines by dragging and dropping different workout blocks. Users can easily arrange blocks for warm-ups, active sessions, cooldowns, and more, and visualize their total distance and percentage completion through an interactive chart.

## Features

- Drag and drop functionality to rearrange workout blocks.
- Dynamic chart rendering using Chart.js to visualize workout data.
- Responsive design for various screen sizes.
- Ability to clear selected blocks and reset the chart.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Beautiful DND**: A library for drag-and-drop functionality.
- **Chart.js**: A JavaScript library for rendering charts.
- **React Resizable**: A library for making components resizable.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Modern JavaScript features for cleaner code.

## Usage

1. Open your web browser and go to `http://localhost:5173`.
2. You will see different workout blocks on the left side.
3. Drag a block into the chart area to visualize it.
4. Rearrange the blocks in the chart area as needed.
5. Click the "Clear Blocks" button to remove all selected blocks from the chart.

## Code Structure

- **`App.js`**: The main component that manages the state of selected blocks and integrates all other components.
- **`components/Header.js`**: Renders the header of the application.
- **`components/Blocks.js`**: Displays the available workout blocks and allows users to drag them.
- **`components/Chart.js`**: Visualizes the selected blocks data using a bar chart.
- **`components/BlockCard.js`**: Displays individual workout blocks below the chart.

### Instructions for Use
- Adjust the repository link in the installation section to point to your actual GitHub repository.
- You can add any additional sections as necessary, such as **Contributing** or **Acknowledgments** if needed.

