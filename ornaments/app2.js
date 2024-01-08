function toggleVisibility1() {
    var a1=document.getElementById('a1');
    a1.style.display='none';

    var div1 = document.getElementById('earring');
    div1.style.display = 'none';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display ='none';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display ='none';

    var div4=document.getElementById('silver');
    div4.style.display ='none';

    var div5=document.getElementById('coin');
    div5.style.display='none';

    var open=document.getElementById('hidden1') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton1');
    butto.style.display = 'block';
  }

  

  function toggleVisibility2() {
    var a1=document.getElementById('a2');
    a1.style.display='none';

    var div1 = document.getElementById('bracelet');
    div1.style.display = 'none';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display = 'none';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display = 'none';

    var div4=document.getElementById('silver');
    div4.style.display ='none';

    var div5=document.getElementById('coin');
    div5.style.display='none';

    var open=document.getElementById('hidden2') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton2');
    butto.style.display = 'block';
  }

  function toggleVisibility3() {
    var a1=document.getElementById('a3');
    a1.style.display='none';

    var div1 = document.getElementById('bracelet');
    div1.style.display = 'none' ;
    // Toggle visibility of div2
    var div2 = document.getElementById('earring');
    div2.style.display = 'none';

    // Toggle visibility of div3
    var div3 = document.getElementById('neck');
    div3.style.display =  'none';

    var div4=document.getElementById('silver');
    div4.style.display ='none';

    var div5=document.getElementById('coin');
    div5.style.display='none';


    var open=document.getElementById('hidden3') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton3');
    butto.style.display = 'block';
  }
  function toggleVisibility4() {
    var a1=document.getElementById('a4');
    a1.style.display='none';

    var div1 = document.getElementById('bracelet');
    div1.style.display ='none';
    // Toggle visibility of div2
    var div2 = document.getElementById('earring');
    div2.style.display = 'none';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display = 'none';

    var div4=document.getElementById('silver');
    div4.style.display ='none';

    var div5=document.getElementById('coin');
    div5.style.display='none';

    var open=document.getElementById('hidden4') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton4');
    butto.style.display = 'block';
  }

  function toggleVisibility5() {
    var a1=document.getElementById('a5');
    a1.style.display='none';

    var div1 = document.getElementById('earring');
    div1.style.display = 'none';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display ='none';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display ='none';

    var div4=document.getElementById('bracelet');
    div4.style.display ='none';

    var div5=document.getElementById('silver');
    div5.style.display='none';
    
    var open=document.getElementById('hidden5') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton5');
    butto.style.display = 'block';
  }
  function toggleVisibility6() {
    var a1=document.getElementById('a6');
    a1.style.display='none';

    var div1 = document.getElementById('earring');
    div1.style.display = 'none';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display ='none';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display ='none';

    var div4=document.getElementById('bracelet');
    div4.style.display ='none';

    var div5=document.getElementById('coin');
    div5.style.display='none';

    var open=document.getElementById('hidden6') ;
    open.style.display='flex';

    var butto = document.getElementById('resetButton6');
    butto.style.display = 'block';
  }
  
  function resetAll1() {
    // Show the initial buttons
    var buttons = document.querySelectorAll('.see button');
    buttons.forEach(function (button) {
        button.style.display = 'initial';
    });

    // Hide the reset button
    document.getElementById('resetButton1').style.display = 'none';

    // Reset the display of all hidden sections
    var div1 = document.getElementById('earring');
    div1.style.display = 'initial';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display ='initial';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display ='initial';

    var div4 =document.getElementById('coin');
  div4.style.display='initial';

  var open=document.getElementById('hidden1') ;
    open.style.display='none';
  
  var div5 =document.getElementById('silver');
  div5.style.display='initial';
}

function resetAll2() {
    // Show the initial buttons
    var buttons = document.querySelectorAll('.see button');
    buttons.forEach(function (button) {
        button.style.display = 'initial';
    });

    // Hide the reset button
    document.getElementById('resetButton2').style.display = 'none';

    // Reset the display of all hidden sections
    var div1 = document.getElementById('bracelet');
    div1.style.display = 'initial';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display ='initial';

    // Toggle visibility of div3
    var div3 = document.getElementById('ring');
    div3.style.display ='initial';

    var div4 =document.getElementById('coin');
  div4.style.display='initial';

  
  var div5 =document.getElementById('silver');
  div5.style.display='initial';

  var open=document.getElementById('hidden2') ;
    open.style.display='none';
}

function resetAll3() {
    // Show the initial buttons
    var buttons = document.querySelectorAll('.see button');
    buttons.forEach(function (button) {
        button.style.display = 'initial';
    });

    // Hide the reset button
    document.getElementById('resetButton3').style.display = 'none';

    // Reset the display of all hidden sections
    var div1 = document.getElementById('bracelet');
    div1.style.display = 'initial';
    // Toggle visibility of div2
    var div2 = document.getElementById('neck');
    div2.style.display = 'initial';

    // Toggle visibility of div3
    var div3 = document.getElementById('earring'); // Fix the variable name here
    div3.style.display = 'initial';

    var div4 =document.getElementById('coin');
  div4.style.display='initial';

  
  var div5 =document.getElementById('silver');
  div5.style.display='initial';

  var open=document.getElementById('hidden3') ;
    open.style.display='none';
}


function resetAll4() {
    // Show the initial buttons
    var buttons = document.querySelectorAll('.see button');
    buttons.forEach(function (button) {
        button.style.display = 'initial';
    });

    // Hide the reset button
    document.getElementById('resetButton4').style.display = 'none';

    // Reset the display of all hidden sections
    var div1 = document.getElementById('bracelet');
    div1.style.display = 'initial';

    // Toggle visibility of div2
    var div2 = document.getElementById('ring');
    div2.style.display = 'initial';

    // Toggle visibility of div3
    var div3 = document.getElementById('earring');
    div3.style.display = 'initial';

    var div4 =document.getElementById('coin');
  div4.style.display='initial';

  
  var div5 =document.getElementById('silver');
  div5.style.display='initial';

  var open=document.getElementById('hidden4') ;
    open.style.display='none';
}


function resetAll5() {
  // Show the initial buttons
  var buttons = document.querySelectorAll('.see button');
  buttons.forEach(function (button) {
      button.style.display = 'initial';
  });

  // Hide the reset button
  document.getElementById('resetButton5').style.display = 'none';

  // Reset the display of all hidden sections
  var div1 = document.getElementById('bracelet');
  div1.style.display = 'initial';

  // Toggle visibility of div2
  var div2 = document.getElementById('ring');
  div2.style.display = 'initial';

  // Toggle visibility of div3
  var div3 = document.getElementById('earring');
  div3.style.display = 'initial';

  var div4 =document.getElementById('neck');
  div4.style.display='initial';

  
  var div5 =document.getElementById('silver');
  div5.style.display='initial';

  var open=document.getElementById('hidden5') ;
    open.style.display='none';
}

function resetAll6() {
  // Show the initial buttons
  var buttons = document.querySelectorAll('.see button');
  buttons.forEach(function (button) {
      button.style.display = 'initial';
  });

  // Hide the reset button
  document.getElementById('resetButton6').style.display = 'none';

  var div1 = document.getElementById('bracelet');
  div1.style.display = 'initial';

  // Toggle visibility of div2
  var div2 = document.getElementById('ring');
  div2.style.display = 'initial';

  // Toggle visibility of div3
  var div3 = document.getElementById('earring');
  div3.style.display = 'initial';

  var div4 =document.getElementById('neck');
  div4.style.display='initial';

  
  var div5 =document.getElementById('coin');
  div5.style.display='initial';

  var open=document.getElementById('hidden6') ;
    open.style.display='none';
}

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

