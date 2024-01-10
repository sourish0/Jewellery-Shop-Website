<<<<<<< HEAD
$(document).ready(function(){
    $('.slideshow').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Adjust the speed as needed
        infinite: true,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the scrolling animation
    function handleScrollAnimation(element) {
      var scrollPosition = window.scrollY;
      var elementPosition = element.offsetTop;
  
      if (scrollPosition > elementPosition - window.innerHeight / 2) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    }
  
    // Get the elements with the class 'scrolling-text'
    var scrollingTextElements = document.querySelectorAll(".scrolling-text");
  
    // Initial check on page load
    scrollingTextElements.forEach(function(element) {
      handleScrollAnimation(element);
    });
  
    // Attach the scroll event listener
    window.addEventListener("scroll", function() {
      // Check each scrolling text element
      scrollingTextElements.forEach(function(element) {
        handleScrollAnimation(element);
      });
    });
  });
  


  function updateLiveTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('liveTime').textContent = formattedTime;
  }
  
  // Update every second
  setInterval(updateLiveTime, 1000);
  
  // Initial update
  updateLiveTime();

  let hamberger = document.querySelector('.hamberger');
  let mobileNav = document.querySelector('.mobile-nav');
    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    let times = document.querySelector('.times');

    times.addEventListener('click', function () {
      mobileNav.classList.remove('open');
  });

  let time1 = document.querySelector('.time1');
  let time2 = document.querySelector('.time2');
  
  let time3 = document.querySelector('.time3');
  let time4 = document.querySelector('.time4');
  let time5 = document.querySelector('.time5');
  let time6 = document.querySelector('.time6');
  let time7 = document.querySelector('.time7');
  time1.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time2.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time3.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time4.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
time5.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
time6.addEventListener('click', function () {
  mobileNav.classList.remove('open');
});
time7.addEventListener('click', function () {
  mobileNav.classList.remove('open');
});
=======
$(document).ready(function(){
    $('.slideshow').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Adjust the speed as needed
        infinite: true,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the scrolling animation
    function handleScrollAnimation(element) {
      var scrollPosition = window.scrollY;
      var elementPosition = element.offsetTop;
  
      if (scrollPosition > elementPosition - window.innerHeight / 2) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    }
  
    // Get the elements with the class 'scrolling-text'
    var scrollingTextElements = document.querySelectorAll(".scrolling-text");
  
    // Initial check on page load
    scrollingTextElements.forEach(function(element) {
      handleScrollAnimation(element);
    });
  
    // Attach the scroll event listener
    window.addEventListener("scroll", function() {
      // Check each scrolling text element
      scrollingTextElements.forEach(function(element) {
        handleScrollAnimation(element);
      });
    });
  });
  


  function updateLiveTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('liveTime').textContent = formattedTime;
  }
  
  // Update every second
  setInterval(updateLiveTime, 1000);
  
  // Initial update
  updateLiveTime();

  let hamberger = document.querySelector('.hamberger');
  let mobileNav = document.querySelector('.mobile-nav');
    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    let times = document.querySelector('.times');

    times.addEventListener('click', function () {
      mobileNav.classList.remove('open');
  });

  let time1 = document.querySelector('.time1');
  let time2 = document.querySelector('.time2');
  
  let time3 = document.querySelector('.time3');
  let time4 = document.querySelector('.time4');
  let time5 = document.querySelector('.time5');
  let time6 = document.querySelector('.time6');
  let time7 = document.querySelector('.time7');
  time1.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time2.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time3.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

time4.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
time5.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
time6.addEventListener('click', function () {
  mobileNav.classList.remove('open');
});
time7.addEventListener('click', function () {
  mobileNav.classList.remove('open');
});
>>>>>>> 1fa599af01a5130fa17420f0d2c724b30772b45d
