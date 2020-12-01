# Testing

[Back to README.md file](README.md)

## Table of Contents
---

1. [DevTools](#dev-tools)
    * [Responsiveness](#responsiveness)
    * [Console Debugging](#console-debugging)

2. [Manual Testing](#manual-testing)

3. [Automated Testing](#automated-testing)
    * [Code Validation](#code-validation)
    * [Browser Validation](#browser-validation)
    
4. [User Testing](#user-testing)
    * [Mentor Review](#mentor-review)
    * [User Review](#user-review)

## DevTools
---

By editing the HTML or CSS code displayed in DevTools, it could be established what changes were necessary to fix spacing/layout problems, without changing the actual files. Reloading DevTools and the original code in the browser is far easier then having to restore a file. 

### Responsiveness 
This Project uses Bootstrap and its grid system to ensure a responsive layout. This was tested in DevTools by viewing the website on every screen size, the smallest being an iPhone 5C and the largest being a laptop with HiDPI screen.

Multiple media queries for each Bootstrap cutoff point are set at the end of the style.css file to optimise layout and display on different screen widths.

All responses to screen size changes were suitable except on screen sizes below 442px. For this reason, media queries which did not target the conventional Bootstrap cutoff points were used to accommodate for tiny changes to layout/margins/padding on extra-small screens.

### Console Debugging
Viewing the console in DevTools was a useful way to debug this project's Javascript code: 
- The failure to load backToTopButton.js indicated the script tag for this file path had failed to be included at the bottom of the index.html. 
- By logging to console a message each time a Javascript function was or was not called, it could be identified whether a function was successfully working or whether it had an unidentified bug.

## Manual Testing
---
