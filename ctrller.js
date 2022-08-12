// Sticky bar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });
});

//Countdown time
var countDownDate = new Date("Aug 31, 2022 00:00:00").getTime();
var x = setInterval(function () {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("bid_counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Countdown Product
var countDownDate = new Date("Aug 15, 2022 00:00:00").getTime();
var x = setInterval(function () {


  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("bid_counter1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



//Slider 
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

// Filter products
function changeProductList(type, element) {
  let tabs = document.getElementsByClassName('tab-item');
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = 'black';
    tabs[i].style.color = 'white';
  }
  element.style.background = 'white';
  element.style.color = 'black';
  document.getElementById(type).style.display = 'block';

  switch (type) {
    case 'furniture':
      document.getElementById('antiques').style.display = 'none';
      document.getElementById('collectibles').style.display = 'none';
      document.getElementById('art').style.display = 'none';
      document.getElementById('all').style.display = 'none';
      break;
    case 'art':
      document.getElementById('antiques').style.display = 'none';
      document.getElementById('collectibles').style.display = 'none';
      document.getElementById('furniture').style.display = 'none';
      document.getElementById('all').style.display = 'none';
      break;
    case 'collectibles':
      document.getElementById('antiques').style.display = 'none';
      document.getElementById('furniture').style.display = 'none';
      document.getElementById('art').style.display = 'none';
      document.getElementById('all').style.display = 'none';
      break;
    case 'antiques':
      document.getElementById('art').style.display = 'none';
      document.getElementById('collectibles').style.display = 'none';
      document.getElementById('furniture').style.display = 'none';
      document.getElementById('all').style.display = 'none';
      break;
    case 'all':
      document.getElementById(type).style.display = 'block';
      break;
  }
}

var searchFilter = () => {
  let selectedColor = document.getElementById("filterByDate").value;
  const input = document.querySelector(".form-control");
  let textBox = input.value;
  const cards = document.getElementsById("");
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".auction-content");
    if ((cards[i].classList.contains(selectedColor) || selectedColor == "") && title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1) {
      cards[i].classList.remove("d-none");
    } else {
      cards[i].classList.add("d-none");
    }
  }
}
// Count Web //
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML =
  " Visitors: " + visitCount;

// website count
    
