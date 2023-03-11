<template>
  <BrawlTournamentNav />
  <div class="brawl-tournament-raiting">
    <h1>Raiting</h1>
    <button>Filtered Teams</button>
    <p>There will be a rating of all teams with a rating of more than 500</p>
    <div class="brawl-tournament-raiting__teams">
      <div
        class="brawl-tournament-raiting__list"
        v-for="team in teamsStore.topRaiting"
        :key="team.id"
      >
        <BrawlTournamentOnceTeam :team="team" />
      </div>
    </div>
  </div>
  <BrawlTournamentFooter />
</template>

<script setup>
import BrawlTournamentNav from "./BrawlTournamentNav.vue";
import BrawlTournamentFooter from "./BrawlTournamentFooter.vue";
import { useTeamsStore } from "@/stores/teamsStore";
import BrawlTournamentOnceTeam from "./BrawlTournamentOnceTeam.vue";

const teamsStore = useTeamsStore();
</script>
<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-raiting {
  text-align: center;
  background-color: rgb(236, 75, 102);
  width: 100%;
  min-height: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
h1 {
  font-size: 100px;
  margin: 0;
  padding-top: 10px;
  color: white;
}
p {
  color: white;
  font-size: 30px;
  width: 50%;
  text-align: center;
}
.brawl-tournament-raiting__teams {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
