

// // Toggle between light and dark mode
// document.addEventListener('DOMContentLoaded', () => {
//     const darkModeBtn = document.getElementById('dark-mode-btn');
// const body = document.body;
// const nav = document.querySelector('nav');
// const button = document.querySelector('button');


// // Check if the user has already selected a mode
// const isDarkMode = localStorage.getItem('isDarkMode');

// if (isDarkMode === 'true') {
//   body.classList.add('dark-mode');
//   nav.classList.add('dark-mode'); 
//   button.classList.add('dark-mode'); 

//   darkModeBtn.textContent = 'Switch to Light Mode';
// }
//   darkModeBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     nav.classList.toggle('dark-mode');    
//     button.classList.toggle('dark-mode'); 
    
//     const links = document.querySelectorAll('a');
//     links.forEach(link => {
//         link.style.color = 'white';
//     });
    
//     if (body.classList.contains('dark-mode')) {
//       localStorage.setItem('isDarkMode', 'true');
//       darkModeBtn.textContent = 'Switch to Light Mode';      
//     } else {
//       localStorage.setItem('isDarkMode', 'false');
//       darkModeBtn.textContent = 'Switch to Dark Mode';
//       const links = document.querySelectorAll('a');
// links.forEach(link => {
//   link.style.color = 'black';
// });
//     }
//   });
// });




document.addEventListener('DOMContentLoaded', function() {
var contentElement = document.querySelector('.content');

// Function to handle resizing and update the CSS
function handleResize() {
  if (window.innerWidth <= 600) {
    contentElement.style.display = 'block';
  } else {
    contentElement.style.display = 'flex';
  }
}

// Initial call to handleResize function
handleResize();

// Event listener for window resize
window.addEventListener('resize', handleResize);
});    