export const projects = [
  {
    slug: "sprintboard",
    title: "Sprintboard",
    summary:
      "A sprint board for planning work: tasks live as cards in columns, and you move them along as the work moves forward. Built as a graded course assignment.",
    team: "Solo project",
    stack: ["React", "Vite", "Git"],
    year: "2026",
    live: "https://jkatariina.github.io/sprintboard/",
    code: "https://github.com/jkatariina/sprintboard",
    cover: "/images/sprintboard-cover.png",
    video: "/videos/sprintboard.mp4",
    shots: [],
    story: {
      brief:
        "A course assignment: build a tool for planning a sprint. Tasks needed somewhere to live, and a way to move forward as the work did.",
      built:
        "A board of columns in React, with tasks as cards you move between them. State is kept in the app and the layout works down to phone width.",
      hard: "",
      learned: "",
    },
  },
  {
    slug: "plot-twist",
    title: "Plot Twist",
    summary:
      "A plant-swapping site: explore a map of plants near you, add your own plants and connect with other plant lovers. Built in 3 weeks across two classes.",
    team: "Team of 5: 2 frontend, 3 backend",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet"],
    year: "2026",
    live: "https://plot-twist-fe.vercel.app/index.html",
    code: "https://github.com/jkatariina/plot-twist-fe",
    cover: "/images/plot-twist-cover.jpg",
    video: "/videos/plot-twist.mp4",
    shots: [],
    story: {
      brief:
        "Three weeks, two classes and one idea: let people swap plants with neighbours instead of buying new ones.",
      built:
        "I worked on the frontend: the Leaflet map of nearby plants, the form for adding your own, and the pages around them, against the backend team's API.",
      hard: "",
      learned: "",
    },
  },
  {
    slug: "jpm-skincare",
    title: "JPM Skincare",
    summary:
      "A multi-page website for a skincare business: home, about, services, references and contact.",
    team: "Team of 3 frontend students",
    stack: ["HTML", "Sass"],
    year: "2025",
    live: "",
    code: "https://github.com/Pauline444/jpm-skincare",
    cover: "/images/jpm-skincare-cover.jpg",
    video: "/videos/jpm-skincare.mp4",
    shots: [],
    story: {
      brief:
        "A real client brief for a skincare business that needed a site: five pages, a calm look and clear information about the treatments.",
      built:
        "Hand-written HTML with Sass for the styling, split across five pages. We divided the pages between three of us and kept the styling in shared partials.",
      hard: "",
      learned: "",
    },
  },
];

export function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return projects[(i + 1) % projects.length];
}
