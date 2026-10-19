export interface SectionContent {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export const siteContent = {
  header: {
    org: "CSEA",
    college: "PSG College of Technology",
    fullName: "Computer Science and Engineering Association",
    festival: "Saraswathi Pooja 2026",
    tagline: "Where Knowledge Blossoms, Wisdom Leads",
  },
  hero: {
    eyebrow: "CSEA · PSG COLLEGE OF TECHNOLOGY",
    title: "Happy Saraswathi Pooja",
    tagline: "Where knowledge blossoms, wisdom leads.",
    subtitle: "Celebrating knowledge, creativity, and new beginnings.",
    scrollPrompt: "DISCOVER THE STORY",
    corePillars: [
      { label: "Learn", detail: "with Curiosity" },
      { label: "Grow", detail: "with Gratitude" },
      { label: "Dream", detail: "with Courage" },
    ],
  },
  celebration: {
    eyebrow: "A CHERISHED TRADITION",
    title: "The Beauty of a Tradition",
    copy: "Saraswathi Pooja is a celebration associated with knowledge, learning, music, art, and creativity. It offers an opportunity to appreciate the value of learning and the inspiration that helps us explore new possibilities.",
    paragraphs: [
      "Saraswathi Pooja is a celebration associated with knowledge, learning, music, art, and creativity. It offers an opportunity to appreciate the value of learning and the inspiration that helps us explore new possibilities.",
      "In our courtyards and classrooms, timeless traditions meet modern education, united by a shared appreciation for curiosity and understanding.",
      "As warm lamps glow and fragrant flowers welcome the season, we pause to celebrate the spirit of learning that broadens our horizons and guides our journey.",
    ],
    features: [
      {
        title: "The Veena",
        description: "Symbolizing the harmony of intellect and intuition, art and science in balance.",
      },
      {
        title: "The White Lotus",
        description: "Representing clarity of mind and purpose, blooming gracefully amidst continuous learning.",
      },
      {
        title: "Books & Modern Tools",
        description: "Appreciating books, notebooks, computers, and instruments as everyday companions in our pursuit of knowledge.",
      },
    ],
  },
  wisdom: {
    eyebrow: "WISDOM AND KNOWLEDGE",
    title: "A Celebration of Knowledge",
    copy: "May curiosity lead us to new discoveries, thoughtful choices guide our actions, and creativity inspire us to see the world from new perspectives.",
    paragraphs: [
      "Learning is more than examinations and marks. It is the process of asking questions, understanding ideas, developing skills, and discovering how our knowledge can make a positive difference.",
      "When we pursue knowledge with an open mind, it deepens our empathy, broadens our understanding, and empowers us to contribute meaningfully to the world around us.",
    ],
    reflection: "Knowledge becomes more meaningful when we use it with humility, understanding, and care for others.",
  },
  learning: {
    eyebrow: "STUDY · EXPLORE · CREATE",
    title: "Every Question Opens a New Possibility",
    copy: "Every idea explored, every skill developed, and every challenge embraced becomes part of our journey of learning and growth.",
    paragraphs: [
      "From writing your first lines of code to building applications that solve real-world problems, each step in computer science is an opportunity to learn and build.",
      "At CSEA, we celebrate the curiosity to ask questions, the perseverance to work through complex challenges, and the excitement of turning ideas into thoughtful solutions that benefit society.",
    ],
    aspects: [
      {
        icon: "compass",
        title: "Curiosity First",
        text: "Approaching problems with open-minded inquiry and the eagerness to discover how things work.",
      },
      {
        icon: "code",
        title: "The Craft of Creation",
        text: "Applying thoughtful logic, analytical thinking, and collaboration to build systems that serve people.",
      },
      {
        icon: "sparkles",
        title: "Embracing the Journey",
        text: "Finding patience in iterations, insight in every challenge, and pride in steady, authentic progress.",
      },
    ],
  },
  togetherness: {
    eyebrow: "GRATITUDE AND TOGETHERNESS",
    title: "Great Journeys Are Brighter Together",
    copy: "Let us appreciate the family, friends, teachers, mentors, and communities that encourage us, inspire us, and help us grow.",
    paragraphs: [
      "Every learning journey is different. Support can come from family, friends, teachers, mentors, and the wider community. Let us appreciate the people who help us move forward and create an environment where everyone feels welcome.",
      "Behind every project completed, every concept understood, and every obstacle overcome, there are individuals who offer guidance, encouragement, and a listening ear.",
    ],
    gratitudeCards: [
      {
        title: "Dedicated Mentors",
        role: "Faculty & Teachers",
        description: "For their patient guidance, thoughtful insights, and encouragement to think independently.",
      },
      {
        title: "Families & Guardians",
        role: "Our Foundation",
        description: "For the care, encouragement, and foundational support that sustain us through our academic journey.",
      },
      {
        title: "Peers & Friends",
        role: "Companions in Learning",
        description: "For shared study sessions, collaborative projects, shared laughter, and mutual encouragement.",
      },
      {
        title: "The CSEA Community",
        role: "A Welcoming Environment",
        description: "Fostering an inclusive space where students of all backgrounds learn, share knowledge, and grow together.",
      },
    ],
  },
  future: {
    eyebrow: "DREAMS AND POSSIBILITIES",
    title: "Your Future Is a Story Still Being Written",
    copy: "Explore your interests, build your skills, embrace new challenges, and create possibilities that reflect who you want to become.",
    campusHeading: "PSG College of Technology",
    campusSubtitle: "A Campus Full of Possibilities",
    campusDescription: "Every new beginning brings an opportunity to learn, create, and dream bigger.",
    sequence: [
      {
        step: "01",
        label: "LEARN",
        description: "Build strong foundations, nurture curiosity, and stay open to different ideas.",
      },
      {
        step: "02",
        label: "GROW",
        description: "Learn from challenges, celebrate progress, and keep developing your skills and understanding.",
      },
      {
        step: "03",
        label: "CREATE",
        description: "Build meaningful technologies and ideas that can make a positive difference in people's lives.",
      },
    ],
  },
  blessings: {
    eyebrow: "WARM WISHES",
    title: "May Knowledge Light the Way",
    copy: "May curiosity guide our learning, creativity inspire our ideas, and kindness bring us closer together.",
    closing: "May this celebration inspire us to keep learning, support one another, and approach the future with hope and purpose.",
    finalGreeting: "Wishing everyone a joyful and meaningful Saraswathi Pooja.",
    signature: "With warm wishes,\nCSEA · PSG College of Technology",
  },
};
