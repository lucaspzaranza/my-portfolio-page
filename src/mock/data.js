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
  name: 'Lucas Zaranza',
  subtitle: 'Desenvolvedor de Sistemas',
  cta: 'Saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Sou desenvolvedor de sistemas .NET, onde já trabalhei no desenvolvimento de sistemas educativos.',
  paragraphTwo: 'Minha maior experiência é com Unity 3D, cerca de oito anos, onde já desenvolvi projetos para eventos corporativos, até projetos solo, como o Penosas Strike, um indie game feito inteiramente por mim, dos gráficos a programação.',
  paragraphThree: 'Sigo atualmente me aprofundando no desenvolvimento de apps com frameworks de JavaScript, no front-end com ReactJS, e no backend com NodeJS.',
  paragraphFour: 'Meu maior objetivo é me tornar um desenvolvedor fullstack, e entender toda arquitetura dos projetos em que eu estiver trabalhando.',
  paragraphFive: 'Músico por hobby e amante da Pixel Art.',
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

// APP PROJECTS DATA
export const appProjectsData = [
  {
    id: nanoid(),
    img: 'react-native-calculator.png',
    title: 'Calculadora',
    info: 'Uma calculadora que realiza as operações matemáticas básicas.',
    info2: 'Feito com React Native.',
    platform: 'Android',
    url: 'https://snack.expo.io/@lucasz/calculator',
    repo: 'https://github.com/lucaspzaranza/calculator-react-native', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mines.png',
    title: 'Campo Minado',
    info: 'Jogo de campo minado para celular.',
    info2: 'Feito com React Native.',
    platform: 'Android',
    url: 'https://snack.expo.io/@lucasz/mine-field', // if no url, the button will not show up
    repo: 'https://github.com/lucaspzaranza/react-native-mine-field', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lambe-lambe.png',
    title: 'Lambe Lambe',
    info: 'Projeto clone do Instagram com suas funcionalidades básicas implementadas.',
    info2: 'Feito com React Native, Redux, e Firebase.',
    platform: 'Android',
    url: '',
    repo: 'https://github.com/lucaspzaranza/lambe-lambe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tasks.png',
    title: 'Lista de Afazeres',
    info: 'Adicione seus afazeres, coloque datas e marque o que já foi concluído.',
    info2: 'Feito com React Native.',
    platform: 'Android',
    url: '',
    repo: 'https://github.com/lucaspzaranza/offline-react-native-tasks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamezone-expo.png',
    title: 'Gamezone',
    info: 'Publique resenhas sobre seus jogos e dê classificações a eles.',
    info2: 'Feito com React Native.',
    platform: 'Android',
    url: 'https://expo.io/@lucasz/gamezone',
    repo: 'https://github.com/lucaspzaranza/gamezone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robots-rolodex.png',
    title: 'Robots Rolodex',
    info: 'Busque determinado robô digitando seu nome.',
    info2: 'Feito com React.',
    platform: 'Web',
    url: 'https://lucaspzaranza.github.io/robots-rolodex/',
    repo: 'https://github.com/lucaspzaranza/robots-rolodex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marioplan.png',
    title: 'MarioPlan',
    info: 'Publique suas tarefas cotidianas num planner com temática de Super Mario World.',
    info2: 'Feito com React.',
    platform: 'Web',
    url: 'https://net-ninja-marioplan-c7114.web.app/',
    repo: 'https://github.com/lucaspzaranza/marioplan', // if no repo, the button will not show up
  },
];

export const dotnetProjectsData = [
  {
    id: nanoid(),
    img: 'InscriSER.png',
    title: 'SER - Serviço de Ensino Religioso',
    info: 'Sistema para controle de matrículas e presenças dos alunos matriculados nos cursos de Primeira Eucaristia e Crisma.',
    info2: 'Feito com Blazor, C#, HTML5, PostgreSQL, Bootstrap e Vanilla JavaScript.',
    platform: 'Web',
    url: 'https://inscriser999.azurewebsites.net/'
  },
  {
    id: nanoid(),
    img: 'Objap.png',
    title: 'Objetivos de Aprendizagem',
    info: 'Sistema para elaboração de plano de aula para os professores universitários da Unichristus.',
    info2: 'Feito com Blazor, C#, HTML5, PostgreSQL, Bootstrap e Vanilla JavaScript.',
    platform: 'Web',
    url: 'https://objap999.azurewebsites.net/'
  },
  {
    id: nanoid(),
    img: 'API.png',
    title: 'API Restful de Alunos',
    info: 'API para realizar operações CRUD e de autenticação.',
    info2: 'Feito com C# em .NET, Entity Framework e Identity.',
    platform: 'Web'
  },
]

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
