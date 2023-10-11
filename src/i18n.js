import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //home
      "Descriptionspan1": "I'm a Junior Front end developer",
      "Description1": "from France living in Paris. I love design in general and bringing my creations to life",
      "Description2": "If you want to know more about me, my work or if you're a Suggar mommy who wants to offer me a lot of money, feel free to contact me",
      //Menu
      "menu1": "Home",
      "menu2": "Projects",
      //Contact
      "ContactText":"If you want to contact me, you are in the right place. You can also contact me on my social networks",
      //Projects
      "context": "Context",
      "responsive" : "Every page is adapted to mobile and tablet resolutions.",
      "nextProject": "Next Project",
      "SneakmartDefrief": "During my end-of-studies internship, I had the privilege of collaborating with Sneakmart, a mobile application specialized in the field of sneakers and streetwear. My responsibilities were diverse and spanned three key areas: the main Sneakmart website, its web3 entity called 'Sneakmart+', and our moderation interface. In the first two areas, I mainly contributed to the integration of new user interface elements and the roll-out of novel features. As for the moderation interface, I undertook a complete overhaul of the user experience (UI/UX) and added new functionalities, such as the automated sending of moderation notifications through the app when articles or user posts were deleted. This initial experience provided me with a deep understanding of the project development process in a professional setting.",
      "AmazonDefrief": "During my self-training in React.js, I developed this site as a clone of the Amazon platform. This project provided me with the opportunity to explore and master various complex React concepts, given its level of sophistication for a first-time endeavor. The site's shopping cart feature utilizes React's Context API for state management. Subsequently, while learning Node.js, I built a backend that enables user account creation, thereby allowing users to register and log in. Although many features still need to be implemented, this project was crucial for gaining a fundamental understanding of React.js",
      "HDMIDebrief": "During my first freelance assignment, I designed and developed a website for a friend, targeting a Discord group focused on NFT investments. Despite the limited content, the project was fulfilling, especially in terms of design. I was able to blend my friend's specific needs with creativity that reflects the world of NFTs, allowing me to gain valuable experience in web design and client management.",
      "ViewWebiste":"View webiste",
      "ViewGithub": "View Github",
      //Footer
      "Footer": "Designed and developed with ❤ by myself"
    }
  },
  fr: {
    translation: {
      //home
      "Descriptionspan1": "Je suis un développeur Front-end junior ",
      "Description1": "français vivant à Paris. J'adore le design en général et donner vie à mes créations",
      "Description2": "Si vous souhaitez en savoir plus sur moi, sur mon travail ou si vous êtes une sugar mommy qui souhaite m'offrir beaucoup d'argent, n'hésitez pas à me contacter",
      //Menu
      "menu1": "Accueil",
      "menu2": "Projets",
      //Contact
      "ContactText": "Si vous souhaitez me contacter, vous êtes au bon endroit ! Vous pouvez également le faire via mes réseaux",
      //Projects
      "context": "Contexte",
      "responsive": "Toutes les pages sont adaptés aux résolutions mobiles et tablettes",
      "nextProject": "Projet suivant",
      "SneakmartDefrief": "Lors de mon alternance de fin d'études, j'ai eu le privilège de collaborer avec Sneakmart, application mobile spécialisée dans le domaine des sneakers et du streetwear. Mes responsabilités étaient diversifiées et couvraient trois secteurs clés : le site principal de Sneakmart, son entité web3 baptisée 'Sneakmart+', et notre interface de modération. Dans le cadre des deux premiers volets, j'ai principalement contribué à l'intégration de nouveaux éléments d'interface utilisateur et au déploiement de fonctionnalités inédites. Quant à l'interface de modération, j'ai mené une refonte complète de l'expérience utilisateur (UI/UX) et ajouté de nouvelles fonctionnalités, telles que l'envoi automatisé de notifications de modération à travers l'application lors de la suppression d'articles ou de publications d'utilisateurs. Cette expérience initiale m'a offert une compréhension approfondie du processus de développement de projets dans un contexte professionnel.",
      "AmazonDefrief": "Lors de mon auto-formation en React.js, j'ai conçu ce site qui sert de clone à la plateforme Amazon. Ce projet m'a offert l'occasion d'explorer et de maîtriser plusieurs concepts complexes de React, étant donné sa sophistication pour une première réalisation. La fonctionnalité de panier du site utilise l'API Context de React pour la gestion des états. Par la suite, en apprenant Node.js, j'ai développé un backend permettant la création de comptes utilisateurs, offrant ainsi la possibilité de s'inscrire et de se connecter. Bien que de nombreuses fonctionnalités restent à implémenter, ce projet a été crucial pour l'acquisition de connaissances fondamentales en React.js.",
      "HDMIDebrief": "Lors de ma première mission en freelance, j'ai conçu et développé un site web pour un ami, ciblant un groupe Discord investi dans le domaine des NFT. Malgré un contenu limité, le projet a été enrichissant, surtout en termes de design. J'ai réussi à allier les besoins spécifiques de mon ami à une créativité qui reflète l'univers des NFT, me permettant d'acquérir une expérience précieuse en design web et en gestion client.",
      "ViewWebiste":" Voir le site",
      "ViewGithub": " Voir le Github",
      //Footer
      "Footer": "Designé et développé avec ❤ par moi-même"
    }
  }
};

const savedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage || "en", // langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;