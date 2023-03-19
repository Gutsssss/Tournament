import { defineStore } from "pinia";
import {instance} from './instance'

export const useTeamsStore = defineStore("teamsStore", {
  state: () => ({
    teams: [
    ],
    loading:false
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
    // addTeam(team) {
    //   this.teams.push(team)
    // },
    async fetchTeams() {

      this.loading = true
      try {
        const data = await instance.get('/teams')
          this.teams = data.data
          this.loading = false
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
});

 