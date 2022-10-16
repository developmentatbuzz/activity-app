export let people = [
  {
    id: 1245,
    name: "Nabil Chowdhury",
    grade: "Sophomore",
    major: "Computer Science",
    interests: ["Anime", "Coding", "Gaming", "Reading"],
    profile: "https://avatars.dicebear.com/api/pixel-art/nabilchowd.jpg",
    bio: "Konnichiwa! Watashi no namae wa Nabiru desu. Anime to Coding ga daisuki desu.",
    tasksCompleted: 15,
    connections: 10,
  },
  {
    id: 1827,
    name: "Jennifer Chen",
    grade: "Sophomore",
    major: "General Education",
    interests: ["Crocheting", "League of Legends", "Partying", "Music"],
    profile: "https://avatars.dicebear.com/api/pixel-art/jenniferchen.jpg",
    bio: "Hi I am Jennifer. I am a sophomore studying general education at the University of Texas at Austin. Some of my intersts are ...",
    tasksCompleted: 82,
    connections: 50,
  },
];

export let tasks = [
  {
    name: "Find a squirrel",
    people: [1245, 1827],
  },
  {
    name: "Take a selfie",
    people: [1245, 1827],
  },
]