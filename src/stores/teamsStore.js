import { defineStore } from "pinia";
import { instance } from "./instance";

export const useTeamsStore = defineStore("teamsStore", {
  state: () => ({
    teams: [],
    loading: false,
  }),
  getters: {
    getTeams(state) {
      return state.teams;
    },
    topRaiting() {
      return this.teams.filter((teams) => teams.rating > 500);
    },
  },
  actions: {
    async addTeamsToList(captainName,teamName,captainsTelegram) {
      try {
         await instance
          .post("/teams", {
            "captainName":captainName,
            "teamName":teamName,
           "captainsTelegram":captainsTelegram,
            rating: 0,
            id: Date.now(),
          })
          .then((response) => {console.log(response),alert('команда успешно создана')} );
      } catch (error) {
        alert(error);
      }
    },
    async fetchTeams() {
      this.loading = true;
      try {
        const data = await instance.get("/teams");
        this.teams = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  }
});
