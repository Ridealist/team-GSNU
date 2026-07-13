export interface Member {
  slug: string;
  displayName: string;
  image: string | null;
  imageAlt: string;
  biography: string[];
  role?: string;
}

export const memberIntroduction = [
  "This interdisciplinary collaboration is the secret sauce that makes Generative Agent so unique. It's a meeting of minds where research meets practice, design meets technology, and human understanding fuels innovation.",
  "We believe that by bringing together these diverse perspectives, we can create a training tool that not only prepares pre-service teachers for the technical complexities of flipped learning but also equips them with the empathy, adaptability, and critical thinking skills they need to thrive in the ever-evolving landscape of education.",
  "So, as you explore the Generative Agent project, remember the dedicated team behind it. We are a chorus of voices, each playing a vital role in composing a symphony of learning and innovation. We invite you to join us in this exciting journey, as we work together to shape the future of teacher training.",
  "This introduction highlights the unique strengths and contributions of each team member, emphasizing the interdisciplinary nature of the project and its potential for impactful innovation. It also fosters a sense of connection with the audience by inviting them to join the journey and become part of the learning experience.",
];

export const members: Member[] = [
  {
    slug: "jewoong-moon",
    displayName: "DR. jewoong moon",
    image: "jewoong-moon.png",
    imageAlt: "Portrait of Dr. Jewoong Moon",
    biography: ["I am Jewoong (Jacob) Moon, an immersive learning environment design researcher. I am currently studying the intersection between immersive learning and generative AI. I am truly interested in exploring how technologies can contribute to social goods particularly in Education fields. My research interests involve learning analytics, data mining, inclusive and immersive e-learning design."],
  },
  {
    slug: "jieun-lim",
    displayName: "DR. jieun lim",
    image: "jieun-lim.jpg",
    imageAlt: "Portrait of Dr. Jieun Lim",
    biography: ["Hello, I'm Jieun Lim, an associate professor in the Department of Education at Daegu National University of Education (DNUE). I love collaborating with researchers from diverse fields and engaging in mutual learning experiences. My research focuses on best practices in design for online learning, the Community of Inquiry, and emerging technology intergration for educational purposes."],
  },
  {
    slug: "unggi-lee",
    displayName: "unggi lee",
    image: "unggi-lee.jpg",
    imageAlt: "Portrait of Unggi Lee",
    biography: ["Hello! I'm Unggi Lee, an enthusiastic NLP Researcher dedicated to exploring the dynamic intersections of Learning Analytics and the implementation of Generative AI in Education. My vision is to enhance the educational experience by leveraging the power of data and artificial intelligence, ensuring that learning is adaptive and accessible to everyone. My academic pursuits are paralleled by a love for swimming and a zest for discovering delectable cuisines."],
  },
  {
    slug: "hyewon-jung",
    displayName: "hyewon jung",
    image: "hyewon-jung.jpg",
    imageAlt: "Portrait of Hyewon Jung",
    biography: ["Hello! I'm Haewon Jung, an English teacher interested in game-based learning and learning analytics. I want to provide students with more contextual and immersive learning, and I enjoy trying new methods to achieve this. Among various elements of games, I've been interested in the situational context that games provide. English classes using Minecraft or Roblox were part of this. Recently I've moved on to narratives of games, so I am working on an English class using an AI Multi-user dungeon game.Teacher"],
  },
  {
    slug: "yeil-jeong",
    displayName: "yeil jeong",
    image: "yeil-jeong.jpg",
    imageAlt: "Portrait of Yeil Jeong",
    biography: ["Yeil Jeong, a researcher at Seoul National University's Center for Future Education Innovation, is currently pursuing a Master's in Educational Technology. His research focuses on AI-enhanced learning, instructional design, and immersive learning environments, highlighting the interplay between technology and education."],
  },
  {
    slug: "yunseo-lee",
    displayName: "yunseo lee",
    image: "yunseo-lee.jpg",
    imageAlt: "Portrait of Yunseo Lee",
    biography: ["Hello! I am Yunseo Lee, an active teacher-researcher who is interested in adaptive learning, learning analytics, and generative AI. I have a dream to become a great supporter to help students' learning and teachers' teaching!  If I want to take some rest, I usually spend time with playing RPG games, dancing ballet, and playing the piano."],
  },
  {
    slug: "gyuri-byun",
    displayName: "gyuri byun",
    image: "gyuri-byun.jpg",
    imageAlt: "Portrait of Gyuri Byun",
    biography: [
      "Gyuri Byun is teacher of Korean elementary school. She received a bachelor’s degree in elementary educaion (computer education) from Gyeongin National University of Education. She initiated research to assist students who have different levels of academic achievement and variois interests with the usage of technologies. She is interested in adaptive learning system design and g-ai based learning tools that can create personalized and diverse learning experiences.",
      "She is currently conducting research on AI-supported education tools and generative AI-based immersive learning systems.",
    ],
  },
  {
    slug: "junbo-koh",
    displayName: "junbo koh",
    image: "junbo-koh.jpg",
    imageAlt: "Portrait of Junbo Koh",
    biography: ["Greetings! I’m Junbo Koh, a tech-enthusiastic researcher exploring the fields of generative AI in education, knowledge tracing, adaptive learning, and educational data mining. My mission is to integrate state-of-the-art technology into the education domain and find opportunities to make education more innovative. Also, I’m a crossfitter who wants to get good at clean and jerks and enjoys hiking on the weekends."],
  },
  {
    slug: "sanghyeok-lee",
    displayName: "sanghyeok lee",
    image: null,
    imageAlt: "",
    biography: ["Server / Database Management"],
  },
];
