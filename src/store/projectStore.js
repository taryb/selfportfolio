import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "portfolio",
        image: new URL("../assets/images/duck.jpg", import.meta.url)
          .href,
        description:
          "I made this website.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "vite-psi-three.vercel.app",
        featured: true,
      },
    ],
    grave: [
      {
        id: 1,
        name: "Nothing yet",
        image: new URL("../assets/images/duck.jpg", import.meta.url)
          .href,
        description:
          "A nothing yet.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/taryb/",
      },

    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});