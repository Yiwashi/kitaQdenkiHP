import product1img from "./../Public/images/tamalog.png";
import product2img from "./../Public/images/shikaku.png";
import product3img from "./../Public/images/ThanksLink.png";
import product4img from "./../Public/images/Portfolio.png";

export const projects = [
  {
    id: 1,
    title: "たまLog",
    description: "結果用紙の写真をアップロードするだけ！",
    description2: "かわいく楽ちん体組成計管理アプリ",
    image: product1img,
    tags: ["Web App", "Individual Project","Award"],
    technologies: ["Next.js/TS", "JavaScript", "CSS", "Python/Flask"],
    awardTitle: "KCL☆Hack (2024/11) 金賞",
    github: "https://github.com/0-s0g0/KCLHack",
    duration: "2025.01.01 ～ Now",
    goal: "Build a personal portfolio for showcasing my projects.",
    role: "Solo Project",
},
{
    id: 2,
    title: "市か区",
    description: "わたしが!?「市か区」の観光大臣！",
    description2: "写真を撮ってポスターを作っちゃおう！",
    image: product2img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Next.js/TS", "WebRTC", "CSS", "Python/Flask"],
    awardTitle: "ハックツハッカソン(2024/12)企業賞"
  },

  {
    id: 3,
    title: "ThanksLink",
    description: "「ありがとう」で繋がる・広がるSNS",
    description2: "投稿で見えるわたしの想い",
    image: product3img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Next.js/TS", "master.js", "CSS","SQL"],
    awardTitle: "技育camp(2025/01)努力賞"
  },
  {
    id: 4,
    title: "MyPortfolio",
    description: "ポートフォリオサイト",
    description2: "手がけたアイデアが形になった宝物たち。",
    image: product4img,
    tags: ["Website", "Team Project"],
    technologies: ["Next.js/TS", "HTML", "CSS", "jQuery"],
  },

  
];
