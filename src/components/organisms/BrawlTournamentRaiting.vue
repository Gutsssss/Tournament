<template>
  <BrawlTournamentNav />
  <div class="brawl-tournament-raiting">
    <h1>Rating</h1>
    <div class="brawl-tournament-raiting__buttons">
      <button @click="sortGreater">Greater filter</button>
      <button @click="sortLess">Less filter</button>
    </div>
    <p>There will be a rating of all teams with a rating of more than 500</p>
    <div class="brawl-tournament-raiting__teams">
      <div
        class="brawl-tournament-raiting__list"
        v-for="team in teamsStore.topRaiting"
        :key="team.id"
      >
        <TournamentCard :team="team" />
      </div>
    </div>
  </div>
  <BrawlTournamentFooter />
</template>

<script setup>
import BrawlTournamentNav from "@/components/molecules/BrawlTournamentNav.vue";
import BrawlTournamentFooter from "@/components/molecules/BrawlTournamentFooter.vue";
import { useTeamsStore } from "@/stores/teamsStore";
// import BrawlTournamentOnceTeam from "./BrawlTournamentOnceTeam.vue";
import TournamentCard from "@/components/molecules/TournamentCard.vue";
import { onMounted} from "vue";


const teamsStore = useTeamsStore();

function sortLess() {
  teamsStore.teams.sort((a, b) => {
    return a.raiting - b.raiting;
  });
}
function sortGreater() {
  teamsStore.teams.sort((a, b) => {
    return b.raiting - a.raiting;
  });
}

onMounted(() => {
  teamsStore.fetchTeams()
})
</script>
<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-raiting {
  text-align: center;
  background-color: #7986CB;
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
.brawl-tournament-raiting__buttons {
  display: flex;
}
button {
  margin: 15px;
  background: black;
  width: 120px;
  height: 45px;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 18px;
  border: 1px solid black;
  text-align: center;
}
button:hover {
  background: gray;
}
</style>
