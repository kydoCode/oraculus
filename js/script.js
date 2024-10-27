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
    "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Vous ressentirez une passion intense et une connexion profonde avec votre partenaire. Les célibataires pourraient faire une rencontre significative qui bouleversera leur vie amoureuse.",
    "travail": "Dans le domaine professionnel, les astres prédisent une période de grande productivité et de reconnaissance. Vos efforts seront enfin récompensés, et de nouvelles opportunités de carrière pourraient se présenter. Restez ouvert aux changements et prêt à relever de nouveaux défis.",
    "argent": "Ce mois-ci s'annonce plutôt stable et propice à la gestion financière pour les Béliers. C'est le moment idéal pour revoir votre budget, faire des économies et peut-être même envisager un investissement à long terme. Évitez cependant les dépenses impulsives.",
    "sante": "Accordez une attention particulière à votre bien-être physique et mental. Le stress pourrait se faire sentir, alors n'hésitez pas à prendre du temps pour vous relaxer, méditer ou pratiquer une activité physique régulière. Une alimentation équilibrée sera également bénéfique.",
    "famille": "Votre famille et vos amis seront une source de soutien et de joie ce mois-ci. Profitez de ces moments précieux pour renforcer vos liens et créer de nouveaux souvenirs. Une réunion familiale ou une sortie entre amis pourrait être particulièrement mémorable.",
    "conseil": "Rappelez-vous que la patience est une vertu, surtout pour les Béliers impulsifs. Prenez le temps de réfléchir avant d'agir et écoutez les conseils de votre entourage. Cette approche mesurée vous aidera à prendre de meilleures décisions dans tous les aspects de votre vie.",
    "image": "./img/belier.png"
    },
    {
    "id": 2,
    "signe": "Taureau",
    "date": "20 avril au 20 mai",
    "amour": "Les Taureaux ressentiront une énergie romantique intense ce mois-ci. Les couples vivront une période d'harmonie et de complicité renforcée, tandis que les célibataires pourraient être surpris par une rencontre inattendue qui les fera vibrer.",
    "travail": "Des opportunités se présenteront pour les Taureaux dans le domaine professionnel. Votre détermination et votre fiabilité seront remarquées par vos supérieurs, ce qui pourrait mener à une promotion ou à de nouvelles responsabilités. Restez concentré sur vos objectifs à long terme.",
    "argent": "Vos finances seront stables, mais il est important de rester vigilant. C'est le moment idéal pour planifier vos dépenses futures et peut-être même commencer à épargner pour un projet qui vous tient à cœur. Évitez les achats impulsifs et privilégiez les investissements sûrs.",
    "sante": "Prenez soin de votre santé en adoptant une routine équilibrée. Le stress pourrait affecter votre bien-être, alors accordez-vous des moments de détente et de relaxation. Une activité physique régulière et une alimentation saine vous aideront à maintenir votre énergie et votre vitalité.",
    "famille": "Votre famille sera un soutien fort durant cette période. Les liens familiaux se renforceront à travers des moments de partage et de complicité. C'est aussi le moment idéal pour résoudre d'éventuels conflits et rétablir l'harmonie au sein de votre foyer.",
    "conseil": "Gardez un équilibre entre prudence et audace. Votre nature stable est un atout, mais n'ayez pas peur de sortir de votre zone de confort de temps en temps. Les expériences nouvelles pourraient vous apporter des perspectives enrichissantes et stimulantes.",
    "image": "./img/taureau.png"
    },
    {
    "id": 3,
    "signe": "Gémeaux",
    "date": "21 mai au 20 juin",
    "amour": "Les Gémeaux vivront des moments d'amour passionnés et intenses ce mois-ci. Votre charme naturel sera à son apogée, attirant l'attention de nombreuses personnes. Les couples ressentiront un regain de passion, tandis que les célibataires pourraient vivre des rencontres excitantes et pleines de promesses.",
    "travail": "Une période de croissance s'annonce pour les Gémeaux dans le domaine professionnel. Votre créativité et votre capacité à communiquer seront vos plus grands atouts. N'hésitez pas à partager vos idées innovantes, car elles pourraient mener à des projets passionnants et potentiellement lucratifs.",
    "argent": "Ce mois-ci, les finances seront stables pour les Gémeaux, mais il est important de rester vigilant. Vous pourriez avoir des opportunités d'augmenter vos revenus, peut-être grâce à un projet parallèle ou à une nouvelle source de revenus. Cependant, évitez les dépenses impulsives et planifiez vos investissements avec soin.",
    "sante": "Les Gémeaux devraient maintenir leur énergie en équilibrant activité physique et repos. Le stress pourrait se faire sentir, alors accordez-vous des moments de détente et de méditation. Une alimentation équilibrée et une bonne hydratation seront essentielles pour garder votre vitalité au top.",
    "famille": "La famille et les amis apporteront un soutien précieux aux Gémeaux ce mois-ci. Profitez de ces moments pour renforcer vos liens et partager vos joies et vos préoccupations. Votre entourage sera une source de réconfort et d'inspiration, vous aidant à surmonter les défis éventuels.",
    "conseil": "La patience est essentielle pour prendre des décisions éclairées. Votre nature curieuse et versatile peut parfois vous pousser à agir impulsivement. Prenez le temps de réfléchir et de peser le pour et le contre avant de vous engager dans de nouveaux projets ou relations.",
    "image": "./img/gemeaux.webp"
    },
    {
    "id": 4,
    "signe": "Cancer",
    "date": "21 juin au 22 juillet",
    "amour": "Les Cancers vivront des moments passionnés et émotionnellement intenses dans leur vie amoureuse. Les couples ressentiront un renouveau dans leur relation, redécouvrant la profondeur de leurs sentiments. Les célibataires pourraient faire une rencontre significative qui les touchera profondément.",
    "travail": "Les Cancers auront des opportunités de croissance professionnelle ce mois-ci. Votre intuition et votre créativité seront vos meilleurs atouts pour résoudre des problèmes complexes et impressionner vos collègues et supérieurs. N'hésitez pas à prendre des initiatives et à montrer votre leadership.",
    "argent": "Ce mois-ci s'annonce stable sur le plan financier pour les Cancers. C'est le moment idéal pour revoir votre budget et envisager des investissements à long terme. Votre sens de l'économie vous servira bien, mais n'ayez pas peur de vous faire plaisir de temps en temps avec des dépenses raisonnables.",
    "sante": "Les Cancers devraient pratiquer régulièrement des activités relaxantes pour maintenir leur équilibre émotionnel et physique. Le stress pourrait affecter votre bien-être, alors accordez-vous des moments de détente, que ce soit par la méditation, le yoga ou simplement des promenades dans la nature.",
    "famille": "Leur famille sera une source de soutien et de réconfort inestimable pour les Cancers ce mois-ci. Profitez de ces moments précieux pour renforcer vos liens familiaux et créer des souvenirs durables. Votre foyer sera un havre de paix où vous pourrez vous ressourcer et trouver l'équilibre.",
    "conseil": "Ce mois-ci, la patience sera un atout précieux pour les Cancers. Votre nature sensible peut parfois vous pousser à réagir trop rapidement aux situations. Prenez le temps de réfléchir et de laisser vos émotions se stabiliser avant de prendre des décisions importantes.",
    "image": "./img/cancer.png"
    },
    {
    "id": 5,
    "signe": "Lion",
    "date": "23 juillet au 22 août",
    "amour": "Les Lions vivront des moments passionnés et exaltants dans leur vie amoureuse ce mois-ci. Votre charisme naturel sera à son apogée, attirant l'admiration et l'affection de votre entourage. Les couples ressentiront un regain de passion, tandis que les célibataires pourraient vivre des rencontres enflammées et prometteuses.",
    "travail": "Une période d'accomplissement professionnel s'ouvre pour les Lions. Votre créativité et votre leadership seront mis en avant, vous permettant de briller dans vos projets. N'hésitez pas à prendre des initiatives audacieuses, car elles pourraient mener à des opportunités inattendues et à une reconnaissance méritée.",
    "argent": "La gestion financière reste stable pour les Lions ce mois-ci. Votre sens de la grandeur pourrait vous pousser à faire des dépenses importantes, mais assurez-vous qu'elles sont justifiées. C'est également un bon moment pour envisager des investissements à long terme qui pourraient fructifier dans le futur.",
    "sante": "Accordez une attention particulière à votre santé, en particulier à votre niveau d'énergie. Votre nature dynamique peut parfois vous pousser à l'excès, alors veillez à équilibrer activité et repos. Une alimentation équilibrée et des exercices réguliers vous aideront à maintenir votre vitalité légendaire.",
    "famille": "La famille sera un refuge et une source de soutien indéfectible pour les Lions. Profitez de cette période pour renforcer vos liens familiaux et peut-être même pour résoudre d'anciens conflits. Votre générosité et votre chaleur naturelle seront particulièrement appréciées par vos proches.",
    "conseil": "La patience et la persévérance seront vos alliées ce mois-ci. Bien que votre nature vous pousse à vouloir des résultats immédiats, rappelez-vous que les meilleures réalisations prennent du temps. Cultivez la constance dans vos efforts et vous verrez vos projets se concrétiser de manière spectaculaire.",
    "image": "./img/lion.webp"
    },
    {
    "id": 6,
    "signe": "Vierge",
    "date": "23 août au 22 septembre",
    "amour": "Ce mois-ci, les Vierges connaîtront une période harmonieuse dans leur vie amoureuse. Les couples approfondiront leur connexion émotionnelle, trouvant de nouvelles façons de s'exprimer et de se comprendre mutuellement. Les célibataires pourraient être agréablement surpris par une rencontre qui les poussera à sortir de leur zone de confort.",
    "travail": "Les Vierges verront des progrès significatifs au travail grâce à leur attention aux détails et leur dévouement. Votre capacité à résoudre des problèmes complexes sera particulièrement appréciée par vos collègues et supérieurs. Une opportunité de formation ou d'avancement pourrait se présenter, offrant de nouvelles perspectives de carrière.",
    "argent": "Une gestion prudente des finances est conseillée ce mois-ci. Votre nature méthodique vous aidera à maintenir un budget équilibré, mais restez vigilant face aux dépenses imprévues. C'est un bon moment pour revoir vos investissements et envisager des stratégies d'épargne à long terme.",
    "sante": "Restez attentif à votre santé mentale et physique. Le stress du quotidien pourrait affecter votre bien-être, alors n'hésitez pas à prendre du temps pour vous relaxer et vous ressourcer. Une routine de méditation ou de yoga pourrait vous aider à maintenir votre équilibre intérieur.",
    "famille": "La famille sera un pilier de soutien et de stabilité pour les Vierges. Profitez de cette période pour renforcer vos liens familiaux et peut-être même pour organiser des réunions ou des activités en commun. Votre présence attentionnée et votre sens pratique seront grandement appréciés par vos proches.",
    "conseil": "Évitez de vous précipiter dans vos décisions et apprenez à lâcher prise sur les petits détails. Votre perfectionnisme est une force, mais il peut parfois vous empêcher de voir la vue d'ensemble. Faites confiance à votre intuition et n'ayez pas peur de prendre des risques calculés pour votre croissance personnelle.",
    "image": "./img/vierge.png"
    },
    {
    "id": 7,
    "signe": "Balance",
    "date": "23 septembre au 22 octobre",
    "amour": "Les Balances verront des opportunités de renforcer leurs relations amoureuses ce mois-ci. Pour les couples, ce sera le moment idéal pour raviver la flamme et approfondir votre connexion émotionnelle. Les célibataires pourraient être attirés par quelqu'un qui partage leurs valeurs et leur vision de la vie, ouvrant la porte à une relation potentiellement durable.",
    "travail": "Leur créativité et leur diplomatie seront reconnues et valorisées dans le milieu professionnel. Vous excellerez dans les projets collaboratifs et pourriez jouer un rôle clé dans la résolution de conflits au sein de votre équipe. Une opportunité de leadership pourrait se présenter, vous permettant de mettre en avant vos compétences en communication et en négociation.",
    "argent": "Les finances resteront stables ce mois-ci pour les Balances. Votre sens de l'équilibre naturel s'appliquera bien à votre gestion financière. C'est un bon moment pour revoir vos dépenses et peut-être envisager de nouvelles stratégies d'investissement. Évitez les achats impulsifs et concentrez-vous sur des objectifs financiers à long terme.",
    "sante": "Prenez soin de votre bien-être en vous reposant suffisamment et en maintenant une routine équilibrée. Le stress pourrait se faire sentir, alors accordez-vous des moments de détente et de plaisir. Une activité physique régulière, comme la danse ou le yoga, pourrait vous aider à relâcher la pression et à retrouver votre équilibre intérieur.",
    "famille": "La famille apportera du réconfort et un soutien précieux ce mois-ci. Profitez de ces moments pour renforcer vos liens familiaux et partager des expériences significatives. Une sortie en famille ou un dîner convivial pourrait raviver l'harmonie au sein de votre foyer.",
    "conseil": "L’équilibre est la clé dans tous les domaines de votre vie. Apprenez à dire non lorsque cela est nécessaire et à établir des limites saines. Cela vous permettra de mieux gérer votre temps et votre énergie, tout en préservant vos relations personnelles et professionnelles.",
    "image": "./img/balance.png"
    },
    {
      "id": 8,
      "signe": "Scorpion",
      "date": "23 octobre au 21 novembre",
      "amour": "Les Scorpions ressentiront une intensité particulière dans leur vie amoureuse ce mois-ci. Les couples pourraient traverser une phase de passion renouvelée, avec des échanges profonds qui renforceront leur lien. Pour les célibataires, une rencontre mystérieuse pourrait éveiller leur curiosité et les plonger dans un tourbillon d'émotions.",
      "travail": "Des défis intéressants se présenteront au travail, mais ils seront également l'occasion de montrer vos compétences et votre détermination. Votre capacité à résoudre des problèmes complexes sera mise à l'épreuve, mais vous en sortirez grandi. Restez ouvert aux conseils de vos collègues, car ils pourraient vous offrir des perspectives précieuses.",
      "argent": "Gérez prudemment vos finances ce mois-ci. Bien que les opportunités d'investissement puissent se présenter, il est essentiel d'évaluer les risques avant de prendre des décisions financières importantes. Évitez les dépenses superflues et concentrez-vous sur l'épargne pour l'avenir.",
      "sante": "Restez attentif à votre bien-être mental et émotionnel. Les Scorpions sont souvent sensibles aux fluctuations émotionnelles, alors n'hésitez pas à prendre du temps pour vous ressourcer. La méditation ou des activités créatives peuvent vous aider à canaliser vos émotions de manière positive.",
      "famille": "Les relations familiales seront harmonieuses ce mois-ci. Profitez de ces moments pour renforcer vos liens avec vos proches et partager des expériences significatives ensemble. Une discussion ouverte pourrait également aider à résoudre d'anciens malentendus.",
      "conseil": "La prudence est de mise dans vos décisions, surtout lorsque vous êtes confronté à des choix difficiles. Prenez le temps d'analyser toutes les options avant d'agir, car cela vous évitera des regrets futurs. Faites confiance à votre instinct tout en restant rationnel.",
      "image": "./img/scorpion.png"
    },
    {
      "id": 9,
      "signe": "Sagittaire",
      "date": "22 novembre au 21 décembre",
      "amour": "Les Sagittaires vivront des aventures amoureuses exaltantes ce mois-ci. Les couples pourraient explorer de nouveaux horizons ensemble, renforçant ainsi leur complicité. Pour les célibataires, une rencontre inattendue pourrait apporter une bouffée d'air frais dans leur vie sentimentale.",
      "travail": "Les astres favorisent l'expansion professionnelle pour les Sagittaires. Vous aurez l'opportunité d'élargir vos compétences ou même de changer de cap dans votre carrière. Restez ouvert aux nouvelles idées et n'hésitez pas à sortir de votre zone de confort pour saisir ces opportunités.",
      "argent": "Soyez prudent avec les dépenses ce mois-ci, car une tendance à l'impulsivité pourrait surgir. Établissez un budget clair et respectez-le pour éviter les désagréments financiers. Pensez également à investir dans des projets qui vous passionnent réellement.",
      "sante": "Prenez soin de votre forme physique en intégrant une activité régulière dans votre routine quotidienne. L'exercice sera essentiel pour maintenir votre énergie élevée et réduire le stress accumulé. N'oubliez pas également d'accorder une attention particulière à votre santé mentale.",
      "famille": "La famille offrira un soutien moral important durant cette période d'aventures personnelles et professionnelles. Profitez-en pour partager vos projets avec eux et solliciter leurs conseils avisés. Une sortie familiale pourrait renforcer ces liens précieux.",
      "conseil": "Évitez les décisions impulsives qui pourraient avoir des conséquences durables sur votre vie personnelle ou professionnelle. Prenez le temps d'évaluer chaque situation avant d'agir, car cela vous permettra d'éviter des erreurs regrettables.",
      "image": "./img/sagittaire.png"
    },
    {
      "id": 10,
      "signe": "Capricorne",
      "date": "21 décembre au 20 janvier",
      "amour": "Les Capricornes vivront des moments passionnés dans leur vie amoureuse ce mois-ci. Les couples auront l'occasion de renforcer leur engagement mutuel grâce à des discussions profondes et sincères sur leurs aspirations futures. Les célibataires pourraient rencontrer quelqu'un qui partage leurs valeurs fondamentales.",
      "travail": "Ils auront l'opportunité de prouver leurs compétences professionnelles grâce à des projets ambitieux qui mettront en avant leur sérieux et leur détermination. Votre travail acharné sera reconnu par vos supérieurs, ouvrant la voie à des promotions potentielles ou à des augmentations salariales.",
      "argent": "La stabilité financière est au rendez-vous pour les Capricornes ce mois-ci, mais il est crucial de rester vigilant face aux dépenses imprévues. C'est un bon moment pour établir un plan financier solide qui vous permettra d'atteindre vos objectifs économiques sans stress excessif.",
      "sante": "Prenez soin de votre bien-être mental en intégrant des pratiques relaxantes dans votre quotidien, comme la méditation ou le yoga. Le stress professionnel peut parfois être accablant, alors n'hésitez pas à prendre du temps pour vous ressourcer afin d'éviter le burnout.",
      "famille": "La famille sera une source de soutien inestimable durant cette période chargée. Profitez-en pour passer du temps avec vos proches, partager vos réussites et discuter de vos projets futurs ensemble. Ces échanges renforceront vos liens familiaux.",
      "conseil": "Restez concentré et persévérez dans vos efforts même si les résultats ne sont pas immédiats. Votre détermination est l'une de vos plus grandes forces; utilisez-la pour surmonter les obstacles qui se présentent sur votre chemin vers le succès.",
      "image": "./img/capricorne.png"
    },
    {
      "id": 11,
      "signe": "Verseau",
      "date": "21 janvier au 18 février",
      "amour": "Les Verseaux vivront une période intense en amour ce mois-ci, marquée par une profonde connexion émotionnelle avec leur partenaire. Les célibataires pourraient être attirés par quelqu'un qui partage leurs idéaux et leur vision du monde, créant ainsi une relation enrichissante et stimulante.",
      "travail": "Ils se démarqueront par leur originalité et leur capacité à penser différemment dans le milieu professionnel. Cette créativité sera particulièrement appréciée lors de projets collaboratifs où votre vision unique pourra briller. Soyez prêt à saisir les opportunités qui se présentent!",
      "argent": "Une approche pratique vous aidera à stabiliser vos finances ce mois-ci. Prenez le temps d'évaluer vos dépenses et envisagez des moyens innovants d'augmenter vos revenus passifs ou d'investir judicieusement dans des projets qui vous tiennent à cœur.",
      "sante": "Priorisez le bien-être mental en intégrant des activités relaxantes dans votre routine quotidienne, comme la méditation ou la lecture inspirante. Le stress peut s'accumuler rapidement, alors assurez-vous de prendre du temps pour vous détendre régulièrement afin de maintenir un bon équilibre émotionnel.",
      "famille": "Votre famille sera une source de sérénité durant cette période mouvementée. Profitez-en pour passer du temps ensemble, échanger des idées et partager des expériences enrichissantes qui renforceront vos liens familiaux déjà solides.",
      "conseil": "Exprimez-vous librement et avec authenticité dans toutes vos interactions sociales ce mois-ci. Votre originalité est une force; n'hésitez pas à partager vos pensées uniques avec ceux qui vous entourent, car cela pourrait inspirer ceux qui sont prêts à écouter.",
      "image": "./img/verseau.png"
    },
    {
      "id": 12,
      "signe": "Poissons",
      "date": "19 février au 20 mars",
      "amour": "Les Poissons connaîtront des moments doux et romantiques ce mois-ci, renforçant ainsi leurs liens affectifs avec leur partenaire ou attirant quelqu'un qui apprécie leur sensibilité unique. Les échanges émotionnels seront particulièrement enrichissants et profonds.",
      "travail": "Des opportunités de collaboration enrichiront votre environnement professionnel ce mois-ci. Votre capacité à travailler en équipe sera mise en avant; n'hésitez pas à partager vos idées créatives avec vos collègues pour créer un impact positif ensemble.",
      "argent": "Ce mois-ci, soyez prudent avec les dépenses afin d'éviter toute situation financière délicate plus tard dans le mois. Établissez un budget clair pour mieux gérer vos finances tout en gardant un œil sur les opportunités d'investissement intéressantes qui pourraient se présenter.",
      "sante": "Prenez soin de votre bien-être émotionnel en accordant une attention particulière à vos besoins intérieurs; cela peut inclure la méditation ou l'écriture dans un journal personnel pour exprimer vos pensées et émotions librement sans jugement.",
      "famille": "Les Poissons profiteront de moments chaleureux passés avec leur famille ce mois-ci; ces interactions renforceront leurs liens affectifs déjà solides et créeront un environnement propice aux échanges sincères et authentiques entre proches.",
      "conseil": "'Restez à l’écoute de vos émotions', car elles sont souvent le meilleur guide que vous puissiez avoir dans la prise de décisions importantes cette période-ci; faites confiance à votre intuition tout en restant ouvert aux conseils avisés que peuvent offrir ceux qui vous entourent.",
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
