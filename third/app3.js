
function showPopup1() {
    var popupDiv = document.getElementById("popupDiv1");

    // Toggle the display property of the popupDiv
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
      popupDiv.style.display = "block";
    } else {
      popupDiv.style.display = "none";
    }

    // Toggle the mirroring effect
    var arrow = document.getElementById('mirroringElement1');
    arrow.classList.toggle('mirrored');
}
function showPopup2() {
    var popupDiv = document.getElementById("popupDiv2");

    // Toggle the display property of the popupDiv
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
        popupDiv.style.display = "block";
    } else {
        popupDiv.style.display = "none";
    }
    var arrow = document.getElementById('mirroringElement2');
    arrow.classList.toggle('mirrored');
}
function showPopup3() {
    var popupDiv = document.getElementById("popupDiv3");

    // Toggle the display property of the popupDiv
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
        popupDiv.style.display = "block";
    } else {
        popupDiv.style.display = "none";
    }
    var arrow = document.getElementById('mirroringElement3');
    arrow.classList.toggle('mirrored');
}
function showPopup4() {
    var popupDiv = document.getElementById("popupDiv4");

    // Toggle the display property of the popupDiv
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
        popupDiv.style.display = "block";
    } else {
        popupDiv.style.display = "none";
    }
    var arrow = document.getElementById('mirroringElement4');
    arrow.classList.toggle('mirrored');
}


const mirroringElement = document.getElementById('mirroringElement');
  let isMirrored = false;

  function toggleMirrorElement() {
    isMirrored = !isMirrored;
    mirroringElement.style.transform = isMirrored ? 'scaleY(-1)' : 'scaleY(1)';
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
  
//   function updateLiveGold() {
//     // Replace 'YOUR_API_KEY' with your actual Gold API key
//     const apiKey = 'goldapi-3rlqt96dcz-io';
//     const apiUrl = 'https://www.goldapi.io/api/XAU/INR';

//     var myHeaders = new Headers();
//     myHeaders.append('x-access-token', apiKey);
//     myHeaders.append('Content-Type', 'application/json');

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow',
//     };
// '
//     //fetch(apiUrl, requestOptions)
//       //  .then(response => response.json())
//         //.then(data => {
//             // Extract relevant information from the JSON response
//           //  const goldPrice = data.price.toFixed(2);
//             //const openPrice = data.open_price.toFixed(2);
//           //  const lowPrice = data.low_price.toFixed(2);
//             //const highPrice = data.high_price.toFixed(2);
//             //const askPrice = data.ask.toFixed(2);
//             //const bidPrice = data.bid.toFixed(2);

//             // Display the extracted information on the webpage
//        //     document.getElementById('liveGold').innerHTML = `
//          //       <strong>Live Gold Price:</strong> ₹${goldPrice} per gram<br>
//            //     <strong>Open Price:</strong> ₹${openPrice}<br>
//              //   <strong>Low Price:</strong> ₹${lowPrice}<br>
//                // <strong>High Price:</strong> ₹${highPrice}<br>
//               //  <strong>Ask Price:</strong> ₹${askPrice}<br>
//                 //<strong>Bid Price:</strong> ₹${bidPrice}<br>
//             `;
//         })
//         .catch(error => {
//             console.error('Error fetching gold prices:', error);
//             document.getElementById('liveGold').textContent = 'Unable to fetch gold prices';
//         });
// }

// // Update every minute (adjust as needed)
// setInterval(updateLiveGold, 60000);

// // Initial update
// updateLiveGold();`



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

