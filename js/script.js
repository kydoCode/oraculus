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
      "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers...",
      "travail": "Dans le domaine professionnel, les astres prédisent...",
      "argent": "Ce mois-ci s'annonce plutôt stable et propice à la gestion...",
      "sante": "Accordez une attention particulière à votre bien-être...",
      "famille": "Votre famille et vos amis seront une source de soutien...",
      "conseil": "Rappelez-vous que la patience est une vertu...",
      "image": "./img/belier.png"
    },
    {
      "id": 2,
      "signe": "Taureau",
      "date": "20 avril au 20 mai",
      "amour": "Les Taureaux ressentiront une énergie romantique intense...",
      "travail": "Des opportunités se présenteront pour les Taureaux...",
      "argent": "Vos finances seront stables...",
      "sante": "Prenez soin de votre santé...",
      "famille": "Votre famille sera un soutien fort...",
      "conseil": "Gardez un équilibre entre prudence et audace...",
      "image": "./img/taureau.png"
    },
    {
      "id": 3,
      "signe": "Gémeaux",
      "date": "21 mai au 20 juin",
      "amour": "Les Gémeaux vivront des moments d'amour passionnés...",
      "travail": "Une période de croissance s’annonce pour les Gémeaux...",
      "argent": "Ce mois-ci, les finances seront stables...",
      "sante": "Les Gémeaux devraient maintenir leur énergie...",
      "famille": "La famille et les amis apporteront un soutien précieux...",
      "conseil": "La patience est essentielle pour prendre des décisions...",
      "image": "./img/gemeaux.webp"
    },
    {
      "id": 4,
      "signe": "Cancer",
      "date": "21 juin au 22 juillet",
      "amour": "Les Cancers vivront des moments passionnés...",
      "travail": "Les Cancers auront des opportunités de croissance...",
      "argent": "Ce mois-ci s’annonce stable...",
      "sante": "Les Cancers devraient pratiquer régulièrement...",
      "famille": "Leur famille sera une source de soutien...",
      "conseil": "Ce mois-ci, la patience sera un atout précieux...",
      "image": "./img/cancer.png"
    },
    {
      "id": 5,
      "signe": "Lion",
      "date": "23 juillet au 22 août",
      "amour": "Les Lions vivront des moments passionnés...",
      "travail": "Une période d’accomplissement professionnel s’ouvre...",
      "argent": "La gestion financière reste stable pour les Lions...",
      "sante": "Accordez une attention particulière à votre santé...",
      "famille": "La famille sera un refuge et une source de soutien...",
      "conseil": "La patience et la persévérance seront vos alliées...",
      "image": "./img/lion.webp"
    },
    {
      "id": 6,
      "signe": "Vierge",
      "date": "23 août au 22 septembre",
      "amour": "Ce mois-ci, les Vierges connaîtront une période harmonieuse...",
      "travail": "Les Vierges verront des progrès au travail...",
      "argent": "Une gestion prudente des finances est conseillée...",
      "sante": "Restez attentif à votre santé mentale et physique...",
      "famille": "La famille sera un pilier de soutien...",
      "conseil": "Évitez de vous précipiter dans vos décisions...",
      "image": "./img/vierge.png"
    },
    {
      "id": 7,
      "signe": "Balance",
      "date": "23 septembre au 22 octobre",
      "amour": "Les Balances verront des opportunités de renforcer...",
      "travail": "Leur créativité et leur diplomatie seront reconnues...",
      "argent": "Les finances resteront stables ce mois-ci...",
      "sante": "Prenez soin de votre bien-être en vous reposant...",
      "famille": "La famille apportera du réconfort...",
      "conseil": "L’équilibre est la clé dans tous les domaines...",
      "image": "./img/balance.png"
    },
    {
      "id": 8,
      "signe": "Scorpion",
      "date": "23 octobre au 21 novembre",
      "amour": "Les Scorpions ressentiront une intensité particulière...",
      "travail": "Des défis intéressants se présenteront au travail...",
      "argent": "Gérez prudemment vos finances ce mois-ci...",
      "sante": "Restez attentif à votre bien-être mental...",
      "famille": "Les relations familiales seront harmonieuses...",
      "conseil": "La prudence est de mise dans vos décisions...",
      "image": "./img/scorpion.png"
    },
    {
      "id": 9,
      "signe": "Sagittaire",
      "date": "22 novembre au 21 décembre",
      "amour": "Les Sagittaires vivront des aventures amoureuses...",
      "travail": "Les astres favorisent l'expansion professionnelle...",
      "argent": "Soyez prudent avec les dépenses...",
      "sante": "Prenez soin de votre forme physique...",
      "famille": "La famille offrira un soutien moral...",
      "conseil": "Évitez les décisions impulsives...",
      "image": "./img/sagittaire.png"
    },
    {
      "id": 10,
      "signe": "Capricorne",
      "date": "21 décembre au 20 janvier",
      "amour": "Les Capricornes vivront des moments passionnés...",
      "travail": "Ils auront l'opportunité de prouver leurs compétences...",
      "argent": "La stabilité financière est au rendez-vous...",
      "sante": "Prenez soin de votre bien-être mental...",
      "famille": "La famille sera une source de soutien...",
      "conseil": "Restez concentré et persévérez...",
      "image": "./img/capricorne.png"
    },
    {
      "id": 11,
      "signe": "Verseau",
      "date": "21 janvier au 18 février",
      "amour": "Les Verseaux vivront une période intense en amour...",
      "travail": "Ils se démarqueront par leur originalité...",
      "argent": "Une approche pratique les aidera à stabiliser...",
      "sante": "Priorisez le bien-être mental...",
      "famille": "Leur famille sera une source de sérénité...",
      "conseil": "Exprimez-vous librement et avec authenticité...",
      "image": "./img/verseau.png"
    },
    {
      "id": 12,
      "signe": "Poissons",
      "date": "19 février au 20 mars",
      "amour": "Les Poissons connaîtront des moments doux...",
      "travail": "Des opportunités de collaboration enrichiront...",
      "argent": "Ce mois-ci, soyez prudent avec les dépenses...",
      "sante": "Prenez soin de votre bien-être émotionnel...",
      "famille": "Les Poissons profiteront de moments chaleureux...",
      "conseil": "Restez à l’écoute de vos émotions...",
      "image": "./img/poissons.png"
    }
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
    "janvier": "01", "février": "02", "mars": "03", "avril": "04", "mai": "05", "juin": "06",
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
    return localDatas;
  }
}

// Initialize data and events
async function initialize() {
  datas = await fetchHoroscopeData();
  todaysTheDay();
  currentIndex = getCurrentSignIndex();
  displaySign(currentIndex);

  rightArrow.addEventListener('click', () => {
// Arrow navigation handling
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % datas.length;
  displaySign(currentIndex);
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + datas.length) % datas.length;
  displaySign(currentIndex);
});
  });

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
