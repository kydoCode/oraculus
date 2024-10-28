console.log("Script linked");

// DOM element references
const currentSign = document.getElementById("horoscope-sign");
const currentPeriod = document.getElementById("horoscope-period");
const today = document.getElementById("horoscope-day-time");
const love = document.getElementById("amour");
const work = document.getElementById("travail");
const money = document.getElementById("argent");
const health = document.getElementById("sante");
const family = document.getElementById("famille");
const advice = document.getElementById("conseil");
const picture = document.getElementById("horoscope-image");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
const horoscopeLinks = document.querySelectorAll('.horoscope-link');
const upperLeftLink = document.getElementById("upper-left-link");
const upperRightLink = document.getElementById("upper-right-link");

let datas = [];
let currentIndex = 0;

// Get today's date
function todaysTheDay() {
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = (todaysDate.getMonth() + 1).toString().padStart(2, '0');
  const day = todaysDate.getDate().toString().padStart(2, '0');
  today.innerHTML = `<p>-- HOROSCOPE DU ${day}/${month}/${year}</p>`;
}

// Function to check if an image is found and returns the placeholder if not
function getValidImageSrc(src, placeholder = './img/placeholder.webp') {
  const img = new Image();
  img.src = src;

  return new Promise((resolve) => {
    img.onload = () => resolve(src);
    img.onerror = () => resolve(placeholder);
  });
}

// Modify displaySign to use getValidImageSrc and await for the image to load
async function displaySign(index) {
  const sign = datas[index];
  currentSign.innerHTML = sign.signe.toUpperCase();
  currentPeriod.innerHTML = `DU ${sign.date.toUpperCase()}`;
  love.innerHTML = `<p><span>Amour : </span>${sign.amour}</p>`;
  work.innerHTML = `<p><span>Travail : </span>${sign.travail}</p>`;
  money.innerHTML = `<p><span>Argent : </span>${sign.argent}</p>`;
  health.innerHTML = `<p><span>Santé : </span>${sign.sante}</p>`;
  family.innerHTML = `<p><span>Famille et amis : </span>${sign.famille}</p>`;
  advice.innerHTML = `<p><span>Conseil : </span>${sign.conseil}</p>`;
  
  // Use getValidImageSrc to set the image source
  picture.src = await getValidImageSrc(sign.image);
  updateHoroscopeLinks(index); // Update the horoscope links
}

// Update the 'upper-left-link' and 'upper-right-link' elements based on the n-1 n+1 logic
function updateHoroscopeLinks(index) {
  const leftIndex = (index - 1 + datas.length) % datas.length;
  const rightIndex = (index + 1) % datas.length;

  upperLeftLink.innerHTML = `${datas[leftIndex].signe} <span>${datas[leftIndex].date.toUpperCase()}</span>`;
  upperRightLink.innerHTML = `${datas[rightIndex].signe} <span>${datas[rightIndex].date.toUpperCase()}</span>`;
}

// Determine the current sign index based on today's date
function getCurrentSignIndex() {
  const today = new Date();
  const currentYear = today.getFullYear();

  for (let i = 0; i < datas.length; i++) {
    const sign = datas[i];
    const [startDay, startMonth] = sign.date.split(' au ')[0].split(' ');
    const [endDay, endMonth] = sign.date.split(' au ')[1].split(' ');

    let startDate = new Date(`${currentYear}-${getMonthNumber(startMonth)}-${startDay}`);
    let endDate = new Date(`${currentYear}-${getMonthNumber(endMonth)}-${endDay}`);

    // Adjust for year wrap (e.g., Capricorn)
    if (endDate < startDate) {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    if (startDate <= today && today <= endDate) {
      return i;
    }
  }
  return 0; // Default to first sign if no match
}

// Helper function to map month names to numbers
function getMonthNumber(monthName) {
  return {
    "janvier": "01", "février": "02", "mars": "04", "avril": "04", "mai": "05", "juin": "06",
    "juillet": "07", "août": "08", "septembre": "09", "octobre": "10", "novembre": "11", "décembre": "12"
  }[monthName.toLowerCase()];
}

// Asynchronous data fetching with local fallback
async function fetchHoroscopeData() {
  try {
    const response = await fetch('json/horoscope.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching horoscope data, using fallback:', error);
    // return localDatas;
  }
}

// Initialize data and events
async function initialize() {
  datas = await fetchHoroscopeData();
  todaysTheDay();
  currentIndex = getCurrentSignIndex();
  displaySign(currentIndex);
  updateHoroscopeLinks(currentIndex); // Update the horoscope links when the page loads

  // Arrow navigation handling
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % datas.length;
    displaySign(currentIndex);
    updateHoroscopeLinks(currentIndex); // Update the horoscope links after updating the current sign
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + datas.length) % datas.length;
    displaySign(currentIndex);
    updateHoroscopeLinks(currentIndex); // Update the horoscope links after updating the current sign
  });

  horoscopeLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      currentIndex = parseInt(link.getAttribute('data-index'));
      displaySign(currentIndex);
      updateHoroscopeLinks(currentIndex); // Update the horoscope links after updating the current sign
    });
  });
}

// Load the script when the page is ready
window.addEventListener('load', initialize);
