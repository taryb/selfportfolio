import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Sigray",
        position: "Jr. Engineer",
        from: "2018",
        to: "Cur.",
        link: "https://Sigray.com/",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});