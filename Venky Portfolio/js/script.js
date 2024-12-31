// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 75,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#7d2ae8 ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// ai progress circular bar 
let aiProgress = document.querySelector(".ai"),
  aiValue = document.querySelector(".ai-progress");

let aiStartValue = 0,
  aiEndValue = 60,
  aispeed = 30;

let progressai = setInterval(() => {
  aiStartValue++;

  aiValue.textContent = `${aiStartValue}%`;
  aiProgress.style.background = `conic-gradient(#20c997 ${
    aiStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (aiStartValue == aiEndValue) {
    clearInterval(progressai);
  }
}, aispeed);

// ml progress circular bar 
let mlProgress = document.querySelector(".ml"),
  mlValue = document.querySelector(".ml-progress");

let mlStartValue = 0,
  mlEndValue = 60,
  mlspeed = 30;

let progressml = setInterval(() => {
  mlStartValue++;

  mlValue.textContent = `${mlStartValue}%`;
  mlProgress.style.background = `conic-gradient(#3f396d ${
    mlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mlStartValue == mlEndValue) {
    clearInterval(progressml);
  }
}, mlspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  });
</script>

// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});