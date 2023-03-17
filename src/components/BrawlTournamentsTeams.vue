<template>
  <BrawlTournamentNav />
  <div class="brawl-tournamenst-teams">
    <h1>Teams</h1>
    <div class="brawl-tournamenst-teams__all-teams">
      <!-- <div
        class="brawl-tournamenst-teams__list"
        v-for="team in teamsStore.teams"
        :key="team.id"
      >
        <BrawlTournamentOnceTeam :team="team" />
      </div> -->
      <div v-for="team in teamsStore.teams"
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

const teamsStore = useTeamsStore();
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
  justify-content: center;
  flex-wrap: wrap;
}
</style>
