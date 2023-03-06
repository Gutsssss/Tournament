import { defineStore } from "pinia";
import axios from "axios";

export const useTeamsStore = defineStore("teamsStore", {
  state: () => ({
    teams: [
      { id: 1, teamName: "NaVi", captainName: "Simple" },
      { id: 2, teamName: "VP", captainName: "S0mple" }
    ],
  }),
  getters: {
    // getTeams(state) {
    //   return state.teams;
    // },
  },
  actions: {
    async fetchTeams() {
      try {
        const data = await axios.get("http://localhost:3000/teams");
        this.teams = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_TEAMS_TO_STATE: (state, teams) => {
      state.teams = teams;
    },
  },
});
