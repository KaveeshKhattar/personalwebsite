function switchTheme(){
    document.body.classList.toggle("dark-mode");
    
    var button = document.getElementById("darkModeButton");
    var image = button.getElementsByTagName("img")[0];
    
    if (image.src.endsWith("moon.png")) {
      image.src = "imgs/sun.png";
    } else {
      image.src = "imgs/moon.png";
    }
}