function switchTheme(){
    document.body.classList.toggle("dark-mode");
    
    var button = document.getElementById("darkModeButton");
    var image = button.getElementsByTagName("img")[0];
    
    if (image.src.endsWith("moon.png")) {
      image.src = "imgs/sun.png";
    } else {
      image.src = "imgs/moon.png";
    }

    var imageElement = document.getElementById("github");  
    if (imageElement.src.includes("imgs/github.png")) {
        imageElement.src = "imgs/github-dark-mode.png";
        imageElement.alt = "Dark Image";
    } else {
        imageElement.src = "imgs/github.png";
        imageElement.alt = "Light Image";
    }
    
    var imageElement = document.getElementById("github-mobile");  
    if (imageElement.src.includes("imgs/github.png")) {
        imageElement.src = "imgs/github-dark-mode.png";
        imageElement.alt = "Dark Image";
    } else {
        imageElement.src = "imgs/github.png";
        imageElement.alt = "Light Image";
    }
}

function openPDF() {
    var pdfURL = "pdfs/certificate.jpg";
    window.open(pdfURL, "_blank");
  }

  function openResume() {
    var pdfURL = "pdfs/Resume.pdf";
    window.open(pdfURL, "_blank");
  }

  function openPaper1() {
    var pdfURL = "pdfs/researchpaper1.pdf";
    window.open(pdfURL, "_blank");
  }

  function openPaper2() {
    var pdfURL = "pdfs/researchpaper2.pdf";
    window.open(pdfURL, "_blank");
  }