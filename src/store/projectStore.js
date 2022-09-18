import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Counter",
        image: new URL("../assets/images/vuecounter.png", import.meta.url)
          .href,
        description:
          "A simple counter .",
        tech: ["Vue.js"],
        link: "https://github.com/taryb/js_counter",
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