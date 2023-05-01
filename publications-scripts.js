document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');
  
    function switchTheme(event) {
        const elementsToToggle = document.querySelectorAll('body, nav *');
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            elementsToToggle.forEach((el) => {
                el.classList.add('white-text');
            });
        } else {
            document.documentElement.removeAttribute('data-theme');
            elementsToToggle.forEach((el) => {
                el.classList.remove('white-text');
            });
        }    
    }
  
    toggleSwitch.addEventListener('change', switchTheme, false);
  });
  