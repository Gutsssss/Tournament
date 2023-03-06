<template>
  <div class="brawl-tournamenst-teams">
  <BrawlTournamentNav/>
  <h1>Teams</h1>
    <div class="brawl-tournamenst-teams__list">
      <BrawlTournamentOnceTeam v-for="team in teamsStore" :key="team.id"/>
      <p>{{teamsStore.team}}</p>
    </div>
  </div>
</template>

<script>
import BrawlTournamentNav from './BrawlTournamentNav'
import BrawlTournamentOnceTeam from '@/components/BrawlTournamentOnceTeam.vue'
import { useTeamsStore } from "@/stores/teamsStore";
export default {
  components: {BrawlTournamentOnceTeam,BrawlTournamentNav},
  setup () {
  const teamsStore = useTeamsStore()
  return { teamsStore }
  }
}
console.log(123)
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournamenst-teams {
    width: 100%;
    height: 600px;
    background: black;
}
.brawl-tournamenst-teams__list {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  color: white;
  margin: 0;
  text-align: center;
  font-size: 48px;
}
</style>
