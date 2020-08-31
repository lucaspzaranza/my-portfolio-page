import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lucas Zaranza | Desenvolvedor', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Seja bem-vindo ao meu portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lucas Zaranza.',
  subtitle: 'Mobile & Game Developer.',
  cta: 'Saiba mais'
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Sou desenvolvedor de jogos em Unity 3D com 7 anos de experiência, tendo trabalhado com projetos para eventos corporativos, recriando jogos clássicos customizados para cada evento.',
  paragraphTwo: 'Tenho projetos solo, como o Penosas Strike, um indie game para Android no qual desenvolvi toda a programação e gráficos do projeto.',
  paragraphThree: 'Sigo atualmente me aprofundando no desenvolvimento de apps mobile com React Native.',
  paragraphFour: 'Músico por hobby e amante do Pixel Art.',
  resume: 'https://rb.gy/uccy8z', // if no resume, the button will not show up
};

// GAME PROJECTS DATA
export const gameProjectsData = [
  {
    id: nanoid(),
    img: 'penosas-portfolio.png',
    title: 'Penosas Strike',
    info: 'Controle uma galinha soldado para mirar e acertar em pombos correio e interceptar suas mensagens secretas.',
    info2: 'Feito com Unity 3D, C# e Aseprite.',
    platform: 'Android',
    url: 'https://play.google.com/store/apps/details?id=com.SacroCuore.PenosasStrike',
    repo: 'https://github.com/lucaspzaranza/penosas-strike', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memoria-touch.png',
    title: 'Jogo da Memória',
    info: 'Encontre os pares de cada carta numa temática romântica para casais.',
    info2: 'Feito com Unity 3D, C# e Adobe Photoshop.',
    platform: 'PC',
    url: 'https://lucaspzaranza.github.io/jogo-memoria-page/', // if no url, the button will not show up
    repo: 'https://github.com/lucaspzaranza/jogo-memoria', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slot-machine2.png',
    title: 'Jogo Caça-níqueis',
    info: 'Jogue e tente achar a combinação correta das imagens para ganhar um prêmio.',
    info2: 'Feito com Unity 3D, C# e Adobe Photoshop.',
    platform: 'PC',
    url: 'https://lucaspzaranza.github.io/slot-machine-page/',
    repo: 'https://github.com/lucaspzaranza/slot-machine', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Quer entrar em contato comigo? É simples.',
  btn: 'Vamos conversar!',
  email: 'lucaszaranza@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/lucaszaranza',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/lucaspzaranza/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucas-zaranza-74157a60/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lucaspzaranza',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
