import { defineStore } from "pinia";
// import axios from "axios";

export const useTeamsStore = defineStore("teamsStore", {
  state: () => ({
    teams: [
      { id: 1, teamName: "NaVi", captainName: "Simple", raiting: 1420,captainsTelegram: '@pipapupa' },
      { id: 2, teamName: "VP", captainName: "S0mple", raiting: 501,captainsTelegram: '@pupapipa' },
    ],
  }),
  getters: {
    getTeams(state) {
      return state.teams;
    },
    topRaiting() {
      return this.teams.filter((teams) => teams.raiting > 500);
    },
  },
  actions: {
    addTeam(team) {
      this.teams.push(team)
    }
  }
});

 // async fetchTeams() {
    //   try {
    //     const data = await axios.get("http://localhost:3000/teams");
    //     this.teams = data.data;
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },