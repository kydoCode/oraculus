console.log("Script linked");

// Récupération des valeurs du DOM
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

// Données locales de secours
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
  // Ajouter d'autres objets de signes ici...
];

let datas = [];
let currentIndex = 0;

// Fonction de récupération de la date d'aujourd'hui
function todaysTheDay() {
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = (todaysDate.getMonth() + 1).toString().padStart(2, '0');
  const day = todaysDate.getDate().toString().padStart(2, '0');
  const computedDate = `${day}/${month}/${year}`;
  today.innerHTML = `<p>-- HOROSCOPE DU ${computedDate}</p>`;
}

// Fonction d'affichage du signe
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

// Récupération asynchrone des données JSON avec fallback
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

// Initialisation des données et des événements
async function initialize() {
  datas = await fetchHoroscopeData();
  todaysTheDay();
  displaySign(currentIndex);

  // Gestion des événements pour la navigation entre les signes
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % datas.length;
    displaySign(currentIndex);
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + datas.length) % datas.length;
    displaySign(currentIndex);
  });
}

// Charger lorsque la fenêtre est prête
window.addEventListener('load', initialize);
