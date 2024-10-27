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

// Local backup data
const localDatas = [
  {
    "id": 1,
    "signe": "Bélier",
    "date": "21 mars au 19 avril",
    "amour": "Ce mois-ci, l'amour sera au rendez-vous...",
    "travail": "Dans le domaine professionnel...",
    "argent": "En ce qui concerne vos finances...",
    "sante": "Ce mois-ci, accordez une attention particulière...",
    "famille": "Votre famille et vos amis seront une source de soutien...",
    "conseil": "Ce mois-ci, rappelez-vous que la patience est une vertu.",
    "image": "./img/belier.png"
  },
  // Add other signs here...
];

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

// Display a sign based on index
function displaySign(index) {
  const sign = datas[index];
  currentSign.innerHTML = sign.signe.toUpperCase();
  currentPeriod.innerHTML = `DU ${sign.date.toUpperCase()}`;
  love.innerHTML = `<p><span>Amour : </span>${sign.amour}</p>`;
  work.innerHTML = `<p><span>Travail : </span>${sign.travail}</p>`;
  money.innerHTML = `<p><span>Argent : </span>${sign.argent}</p>`;
  health.innerHTML = `<p><span>Santé : </span>${sign.sante}</p>`;
  family.innerHTML = `<p><span>Famille et amis : </span>${sign.famille}</p>`;
  advice.innerHTML = `<p><span>Conseil : </span>${sign.conseil}</p>`;
  picture.src = sign.image;
}

// Determine the current sign index based on today's date
function getCurrentSignIndex() {
  const today = new Date();
  const currentYear = today.getFullYear();

  for (let i = 0; i < datas.length; i++) {
    const sign = datas[i];
    let [startDay, startMonth] = sign.date.split(' au ')[0].split(' ');
    let [endDay, endMonth] = sign.date.split(' au ')[1].split(' ');

    // Adjust for date parsing
    let startDate = new Date(`${currentYear}-${getMonthNumber(startMonth)}-${startDay}`);
    let endDate = new Date(`${currentYear}-${getMonthNumber(endMonth)}-${endDay}`);

    // Adjust for zodiac signs that span across years (like Capricorn)
    if (endDate < startDate) {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    if (startDate <= today && today <= endDate) {
      return i;
    }
  }
  return 0; // Default to first sign
}

// Helper function to map month names to numbers
function getMonthNumber(monthName) {
  const months = {
    "janvier": "01", "février": "02", "mars": "03", "avril": "04", "mai": "05", "juin": "06",
    "juillet": "07", "août": "08", "septembre": "09", "octobre": "10", "novembre": "11", "décembre": "12"
  };
  return months[monthName.toLowerCase()];
}

// Asynchronous data fetching with a fallback
async function fetchHoroscopeData() {
  try {
    const response = await fetch('json/horoscope.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching horoscope data, using fallback:', error);
    return localDatas;
  }
}

// Initialize data and events
async function initialize() {
  datas = await fetchHoroscopeData();
  todaysTheDay();
  currentIndex = getCurrentSignIndex();
  displaySign(currentIndex);

  // Arrow navigation handling
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % datas.length;
    displaySign(currentIndex);
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + datas.length) % datas.length;
    displaySign(currentIndex);
  });

  // Horoscope link navigation handling
  horoscopeLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      currentIndex = index;
      displaySign(currentIndex);
    });
  });
}

// Load the script when the page is ready
window.addEventListener('load', initialize);
