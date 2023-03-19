<template>
  <BrawlTournamentNav />
  <div class="brawl-tournamenst-teams">
    <h1>Teams</h1>
    <div class="loading" v-if="loading"><img class="loading-icon" :src="require('@/assets/loading.gif')"/></div>
    <div class="brawl-tournamenst-teams__all-teams">
      <div v-for="team in teamsGet"
        :key="team.id">
      <TournamentCard :team="team"/>
    </div>
    </div>
  </div>
  <BrawlTournamentFooter />
</template>

<script setup>
import BrawlTournamentNav from "./BrawlTournamentNav";
// import BrawlTournamentOnceTeam from "@/components/BrawlTournamentOnceTeam.vue";
import BrawlTournamentFooter from "./BrawlTournamentFooter.vue";
import { useTeamsStore } from "@/stores/teamsStore";
import TournamentCard from "./TournamentCard.vue";
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
const teamsStore = useTeamsStore();

const teamsGet = computed(() => {
  return teamsStore.teams;
})

onMounted(() => {
  teamsStore.fetchTeams()
})

const { loading} = storeToRefs(useTeamsStore())
</script>
<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournamenst-teams {
  width: 100%;
  height: 900px;
  background: #7986CB;
  overflow: auto;
  scrollbar-color: black;
}
h1 {
  color: white;
  margin: 0;
  text-align: center;
  font-size: 100px;
}
.brawl-tournamenst-teams__all-teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row
}
.loading {
  text-align: center;
}
</style>
