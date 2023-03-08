<template>
  <BrawlTournamentNav/>
  <div class="brawl-tournamenst-teams">
  <h1>Teams</h1>
    <div class="brawl-tournamenst-teams__list">
      <BrawlTournamentOnceTeam v-for="team in teamsStore" :key="team.id"/>
      <p>{{teamsStore.team}}</p>
    </div>
  </div>
  <BrawlTournamentFooter/>
</template>

<script>
import BrawlTournamentNav from './BrawlTournamentNav'
import BrawlTournamentOnceTeam from '@/components/BrawlTournamentOnceTeam.vue'
import { useTeamsStore } from "@/stores/teamsStore";
import BrawlTournamentFooter from './BrawlTournamentFooter.vue';
export default {
  components: {BrawlTournamentOnceTeam,BrawlTournamentNav,BrawlTournamentFooter},
  setup () {
  const teamsStore = useTeamsStore()
  return { teamsStore }
  }
}
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournamenst-teams {
    width: 100%;
    height: 900px;
    background: rgb(214, 131, 131);
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
