console.log("Script linked")
// DATA
/// Récupération des valeurs du DOM

const currentSign = document.getElementById("horoscope-sign")
const currentPeriod = document.getElementById("horoscope-period")
const today = document.getElementById("horoscope-day-time")
const love = document.getElementById("amour")
const work = document.getElementById("travail")
const money = document.getElementById("argent")
const health = document.getElementById("sante")
const family = document.getElementById("famille")
const advice = document.getElementById("conseil")
const picture = document.getElementById("horoscope-image")

/// Tableau d'objets   
let datas = [
{
"id": 1,
"signe": "Bélier",
"date": "21 mars au 19 avril",
"amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Votre charme naturel sera irrésistible, attirant de nouvelles personnes dans votre vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Vous ressentirez un désir intense et une profonde connexion émotionnelle. Prenez le temps de raviver la flamme et de créer des souvenirs inoubliables avec votre partenaire.",
"travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Béliers. Votre détermination et votre créativité seront vos atouts principaux. Soyez prêt à saisir de nouvelles opportunités et à relever des défis ambitieux. Votre leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Restez concentré sur vos objectifs et travaillez avec acharnement pour atteindre vos ambitions professionnelles.",
"argent": "En ce qui concerne vos finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de votre argent. Vous aurez l'opportunité de consolider vos finances et de mettre en place des stratégies d'économie judicieuses. Évitez les dépenses impulsives et concentrez-vous sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Restez vigilant et évitez les prises de risques inutiles pour maintenir une situation financière solide.",
"sante": "Ce mois-ci, accordez une attention particulière à votre bien-être physique et mental. Pratiquez régulièrement une activité physique pour maintenir votre énergie et votre vitalité. N'oubliez pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
"famille": "Votre famille et vos amis seront une source de soutien et de réconfort ce mois-ci. Passez du temps de qualité avec vos proches pour renforcer les liens affectifs. Écoutez leurs préoccupations et partagez les vôtres. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
"conseil": "Ce mois-ci, rappelez-vous que la patience est une vertu. Ne vous précipitez pas dans vos décisions, que ce soit dans votre carrière, vos finances ou vos relations. Prenez le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie vous aidera à éviter les erreurs potentielles et à atteindre vos objectifs de manière plus efficace.",
"image": "./img/belier.png"
},
{
"id": 2,
"signe": "Cancer",
"date": "21 juin au 22 juillet",
"amour": "Les Cancers vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
"travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Cancers. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
"argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
"sante": "Ce mois-ci, les Cancers devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
"famille": "La famille et les amis des Cancers seront une source de soutien et de réconfort ce mois-ci. Les Cancers devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
"conseil": "Ce mois-ci, les Cancers devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
"image": "./img/cancer.png"
},
{
"id": 3,
"signe": "Capricorne",
"date": "21 décembre au 20 janvier",
"amour": "Les Capricornes vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
"travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Capricornes. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
"argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
"sante": "Ce mois-ci, les Capricornes devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
"famille": "La famille et les amis des Capricornes seront une source de soutien et de réconfort ce mois-ci. Les Capricornes devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
"conseil": "Ce mois-ci, les Capricornes devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
"image": "./img/capricorne.png"
},
{
"id": 4,
"signe": "Gémeaux",
"date": "21 mai au 20 juin",
"amour": "Ce mois-ci, les Gémeaux vivront des moments d'amour passionnés et excitants. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
"travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Gémeaux. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
"argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
"sante": "Ce mois-ci, les Gémeaux devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
"famille": "La famille et les amis des Gémeaux seront une source de soutien et de réconfort ce mois-ci. Les Gémeaux devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
"conseil": "Ce mois-ci, les Gémeaux devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
"image": "./img/cancer.png"
},
{
"id": 5,
"signe": "Lion",
"date": "23 juillet au 22 août",
"amour": "Les Lions vivront des moments d'amour passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
"travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Lions. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
"argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
"sante": "Ce mois-ci, les Lions devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
"famille": "La famille et les amis des Lions seront une source de soutien et de réconfort ce mois-ci. Les Lions devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
"conseil": "Ce mois-ci, les Lions devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
"image": "./img/capricorne.png"
}
]

// Fonctions : écriture du DOM avec les valeurs    
/// Date du jour
function todaysTheDay(today) {
let todaysDate = new Date()
let year = todaysDate.getFullYear()
let month = (todaysDate.getMonth() + 1).toString().padStart(2, '0')
let day = todaysDate.getDate().toString().padStart(2, '0')
let computedDate = `${day}/${month}/${year}`
today.innerHTML = `<p>-- HOROSCOPE DU ${computedDate}</p>`
}

// let someSign = datas[i]
let someSign = {}
let allIndexes = []
datas.forEach(sign => {
someSign[sign.id] = sign
allIndexes.push(sign.id)
})
console.log('Clé valeurs:', someSign[0])
console.log('Indexes:', allIndexes)
/// Peuplage
console.log("Script linked");

// Get DOM elements
const currentSign = document.getElementById("horoscope-sign");
const currentPeriod = document.getElementById("horoscope-period");
const todayElem = document.getElementById("horoscope-day-time");
const love = document.getElementById("amour");
const work = document.getElementById("travail");
const money = document.getElementById("argent");
const health = document.getElementById("sante");
const family = document.getElementById("famille");
const advice = document.getElementById("conseil");
const picture = document.getElementById("horoscope-image");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");

// Horoscope data
let datas = [
    {
        "id": 1,
        "signe": "Bélier",
        "date": "21 mars au 19 avril",
        "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers...",
        "travail": "Dans le domaine professionnel...",
        "argent": "En ce qui concerne vos finances...",
        "sante": "Ce mois-ci, accordez une attention particulière...",
        "famille": "Votre famille et vos amis seront une source...",
        "conseil": "Ce mois-ci, rappelez-vous que la patience...",
        "image": "./img/belier.png"
    },
    // More signs...
];

let currentIndex = 0;

// Display current date
function todaysTheDay() {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const month = (todaysDate.getMonth() + 1).toString().padStart(2, '0');
    const day = todaysDate.getDate().toString().padStart(2, '0');
    todayElem.innerHTML = `<p>-- HOROSCOPE DU ${day}/${month}/${year}</p>`;
}

// Update the HTML content with the horoscope data
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

// Fetch data from JSON or use fallback
async function fetchHoroscopeData() {
    try {
        const response = await fetch('json/horoscope.json');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching horoscope data, using fallback:', error);
        return datas;
    }
}

// Setup page and event listeners
function setupHoroscopePage() {
    todaysTheDay();
    displaySign(currentIndex);

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % datas.length;
        displaySign(currentIndex);
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + datas.length) % datas.length;
        displaySign(currentIndex);
    });

    document.querySelectorAll('.horoscope-link').forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = index;
            displaySign(currentIndex);
        });
    });
}

// Initialize the page on load
window.addEventListener('load', async () => {
    datas = await fetchHoroscopeData();
    setupHoroscopePage();
});

todaysTheDay(today)


// Tableau d'objets   

let datas = [
    {
    "id": 1,
    "signe": "Bélier",
    "date": "21 mars au 19 avril",
    "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Votre charme naturel sera irrésistible, attirant de nouvelles personnes dans votre vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Vous ressentirez un désir intense et une profonde connexion émotionnelle. Prenez le temps de raviver la flamme et de créer des souvenirs inoubliables avec votre partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Béliers. Votre détermination et votre créativité seront vos atouts principaux. Soyez prêt à saisir de nouvelles opportunités et à relever des défis ambitieux. Votre leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Restez concentré sur vos objectifs et travaillez avec acharnement pour atteindre vos ambitions professionnelles.",
    "argent": "En ce qui concerne vos finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de votre argent. Vous aurez l'opportunité de consolider vos finances et de mettre en place des stratégies d'économie judicieuses. Évitez les dépenses impulsives et concentrez-vous sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Restez vigilant et évitez les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, accordez une attention particulière à votre bien-être physique et mental. Pratiquez régulièrement une activité physique pour maintenir votre énergie et votre vitalité. N'oubliez pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "Votre famille et vos amis seront une source de soutien et de réconfort ce mois-ci. Passez du temps de qualité avec vos proches pour renforcer les liens affectifs. Écoutez leurs préoccupations et partagez les vôtres. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, rappelez-vous que la patience est une vertu. Ne vous précipitez pas dans vos décisions, que ce soit dans votre carrière, vos finances ou vos relations. Prenez le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie vous aidera à éviter les erreurs potentielles et à atteindre vos objectifs de manière plus efficace.",
    "image": "./img/belier.png"
    },
    {
    "id": 2,
    "signe": "Cancer",
    "date": "21 juin au 22 juillet",
    "amour": "Les Cancers vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Cancers. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Cancers devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Cancers seront une source de soutien et de réconfort ce mois-ci. Les Cancers devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Cancers devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/cancer.png"
    },
    {
    "id": 3,
    "signe": "Capricorne",
    "date": "21 décembre au 20 janvier",
    "amour": "Les Capricornes vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Capricornes. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Capricornes devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Capricornes seront une source de soutien et de réconfort ce mois-ci. Les Capricornes devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Capricornes devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/capricorne.png"
    },
    {
    "id": 4,
    "signe": "Gémeaux",
    "date": "21 mai au 20 juin",
    "amour": "Ce mois-ci, les Gémeaux vivront des moments d'amour passionnés et excitants. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Gémeaux. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Gémeaux devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Gémeaux seront une source de soutien et de réconfort ce mois-ci. Les Gémeaux devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Gémeaux devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/cancer.png"
    },
    {
    "id": 5,
    "signe": "Lion",
    "date": "23 juillet au 22 août",
    "amour": "Les Lions vivront des moments d'amour passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Lions. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Lions devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Lions seront une source de soutien et de réconfort ce mois-ci. Les Lions devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Lions devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/capricorne.png"
    }
    ]

    /// Récupération des valeurs du DOM

    const currentSign = document.getElementById("horoscope-sign")
    const currentPeriod = document.getElementById("horoscope-period")
    const today = document.getElementById("horoscope-day-time")
    const love = document.getElementById("amour")
    const work = document.getElementById("travail")
    const money = document.getElementById("argent")
    const health = document.getElementById("sante")
    const family = document.getElementById("famille")
    const advice = document.getElementById("conseil")
    const picture = document.getElementById("horoscope-image")
    const rightArrow = document.querySelector(".arrow-right")
    const leftArrow = document.querySelector(".arrow-left")

// Fonctions

/// Date du jour

function todaysTheDay(today) {
    let todaysDate = new Date()
    let year = todaysDate.getFullYear()
    let month = (todaysDate.getMonth() + 1).toString().padStart(2, '0')
    let day = todaysDate.getDate().toString().padStart(2, '0')
    let computedDate = `${day}/${month}/${year}`
    today.innerHTML = `<p>-- HOROSCOPE DU ${computedDate}</p>`
}

// Données textes et image 







let currentIndex = 0


function displaySign(index) {
    currentSign.innerHTML = datas[index].signe.toUpperCase()
    currentPeriod.innerHTML = `DU ${datas[index].date.toUpperCase()}`
    love.innerHTML = `<p><span>Amour : </span>${datas[index].amour}</p>`
    work.innerHTML = `<p><span>Travail : </span>${datas[index].travail}</p>`
    money.innerHTML = `<p><span>Argent : </span>${datas[index].argent}</p>`
    health.innerHTML = `<p><span>Santé : </span>${datas[index].sante}</p>` 
    family.innerHTML = `<p><span>Famille et amis : </span>${datas[index].famille}</p>` 
    advice.innerHTML = `<p><span>Conseil : </span>${datas[index].conseil}</p>`
    picture.src = datas[index].image 
}

// console.log(currentIndex)


// const checkLength = Object.keys(datas).length
// console.log("Nombre d'items de datas:", checkLength)

todaysTheDay(today)
displaySign(currentIndex)

rightArrow.addEventListener('click', () => {
    if (currentIndex === datas.length-1){
        // console.log(currentIndex)
        // console.log(datas.length-1)
        currentIndex = 0
    } else {
        currentIndex ++
    }
    displaySign(currentIndex) 
})


leftArrow.addEventListener('click', () => {
    if (currentIndex+1 === datas.length){
        // console.log(currentIndex)
        currentIndex = 4
    } else {
        currentIndex --
    }
    displaySign(currentIndex) 
})

// Tableau d'objets   

let datas = [
    {
    "id": 1,
    "signe": "Bélier",
    "date": "21 mars au 19 avril",
    "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Votre charme naturel sera irrésistible, attirant de nouvelles personnes dans votre vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Vous ressentirez un désir intense et une profonde connexion émotionnelle. Prenez le temps de raviver la flamme et de créer des souvenirs inoubliables avec votre partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Béliers. Votre détermination et votre créativité seront vos atouts principaux. Soyez prêt à saisir de nouvelles opportunités et à relever des défis ambitieux. Votre leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Restez concentré sur vos objectifs et travaillez avec acharnement pour atteindre vos ambitions professionnelles.",
    "argent": "En ce qui concerne vos finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de votre argent. Vous aurez l'opportunité de consolider vos finances et de mettre en place des stratégies d'économie judicieuses. Évitez les dépenses impulsives et concentrez-vous sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Restez vigilant et évitez les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, accordez une attention particulière à votre bien-être physique et mental. Pratiquez régulièrement une activité physique pour maintenir votre énergie et votre vitalité. N'oubliez pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "Votre famille et vos amis seront une source de soutien et de réconfort ce mois-ci. Passez du temps de qualité avec vos proches pour renforcer les liens affectifs. Écoutez leurs préoccupations et partagez les vôtres. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, rappelez-vous que la patience est une vertu. Ne vous précipitez pas dans vos décisions, que ce soit dans votre carrière, vos finances ou vos relations. Prenez le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie vous aidera à éviter les erreurs potentielles et à atteindre vos objectifs de manière plus efficace.",
    "image": "./img/belier.png"
    },
    {
    "id": 2,
    "signe": "Cancer",
    "date": "21 juin au 22 juillet",
    "amour": "Les Cancers vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Cancers. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Cancers devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Cancers seront une source de soutien et de réconfort ce mois-ci. Les Cancers devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Cancers devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/cancer.png"
    },
    {
    "id": 3,
    "signe": "Capricorne",
    "date": "21 décembre au 20 janvier",
    "amour": "Les Capricornes vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Capricornes. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Capricornes devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Capricornes seront une source de soutien et de réconfort ce mois-ci. Les Capricornes devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Capricornes devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/capricorne.png"
    },
    {
    "id": 4,
    "signe": "Gémeaux",
    "date": "21 mai au 20 juin",
    "amour": "Ce mois-ci, les Gémeaux vivront des moments d'amour passionnés et excitants. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Gémeaux. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Gémeaux devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Gémeaux seront une source de soutien et de réconfort ce mois-ci. Les Gémeaux devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Gémeaux devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/cancer.png"
    },
    {
    "id": 5,
    "signe": "Lion",
    "date": "23 juillet au 22 août",
    "amour": "Les Lions vivront des moments d'amour passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Lions. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
    "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
    "sante": "Ce mois-ci, les Lions devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
    "famille": "La famille et les amis des Lions seront une source de soutien et de réconfort ce mois-ci. Les Lions devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
    "conseil": "Ce mois-ci, les Lions devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
    "image": "./img/capricorne.png"
    }
    ]

    /// Récupération des valeurs du DOM

    const currentSign = document.getElementById("horoscope-sign")
    const currentPeriod = document.getElementById("horoscope-period")
    const today = document.getElementById("horoscope-day-time")
    const love = document.getElementById("amour")
    const work = document.getElementById("travail")
    const money = document.getElementById("argent")
    const health = document.getElementById("sante")
    const family = document.getElementById("famille")
    const advice = document.getElementById("conseil")
    const picture = document.getElementById("horoscope-image")
    const rightArrow = document.querySelector(".arrow-right")
    const leftArrow = document.querySelector(".arrow-left")

// Fonctions

/// Date du jour

function todaysTheDay(today) {
    let todaysDate = new Date()
    let year = todaysDate.getFullYear()
    let month = (todaysDate.getMonth() + 1).toString().padStart(2, '0')
    let day = todaysDate.getDate().toString().padStart(2, '0')
    let computedDate = `${day}/${month}/${year}`
    today.innerHTML = `<p>-- HOROSCOPE DU ${computedDate}</p>`
}

// Données textes et image 







let currentIndex = 0


function displaySign(index) {
    currentSign.innerHTML = datas[index].signe.toUpperCase()
    currentPeriod.innerHTML = `DU ${datas[index].date.toUpperCase()}`
    love.innerHTML = `<p><span>Amour : </span>${datas[index].amour}</p>`
    work.innerHTML = `<p><span>Travail : </span>${datas[index].travail}</p>`
    money.innerHTML = `<p><span>Argent : </span>${datas[index].argent}</p>`
    health.innerHTML = `<p><span>Santé : </span>${datas[index].sante}</p>` 
    family.innerHTML = `<p><span>Famille et amis : </span>${datas[index].famille}</p>` 
    advice.innerHTML = `<p><span>Conseil : </span>${datas[index].conseil}</p>`
    picture.src = datas[index].image 
}

// console.log(currentIndex)


// const checkLength = Object.keys(datas).length
// console.log("Nombre d'items de datas:", checkLength)

todaysTheDay(today)
displaySign(currentIndex)

rightArrow.addEventListener('click', () => {
    if (currentIndex === datas.length-1){
        // console.log(currentIndex)
        // console.log(datas.length-1)
        currentIndex = 0
    } else {
        currentIndex ++
    }
    displaySign(currentIndex) 
})


leftArrow.addEventListener('click', () => {
    if (currentIndex+1 === datas.length){
        // console.log(currentIndex)
        currentIndex = 4
    } else {
        currentIndex --
    }
    displaySign(currentIndex) 
})