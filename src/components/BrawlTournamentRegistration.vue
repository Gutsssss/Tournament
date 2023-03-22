<template>
  <BrawlTournamentNav />
  <div class="brawl-tournament-registration">
    <h1>Registation</h1>
    <form class="brawl-tournament-registration-form" @submit.prevent="addTeam">
      <input v-model="CaptainName" type="text" placeholder="Captain name" />
      <input v-model="TeamName" type="text" placeholder="Team name" />
      <input
        v-model="CptainsTelegram"
        type="text"
        placeholder="Captain's telegram"
      />
      <button @click="createTeam">Submit</button>
    </form>
  </div>
  <BrawlTournamentFooter />
</template>

<script setup>
import { useTeamsStore } from "@/stores/teamsStore";
import BrawlTournamentNav from "./BrawlTournamentNav.vue";
import BrawlTournamentFooter from "./BrawlTournamentFooter.vue";
// import {  computed } from "vue";
import { ref } from "vue";

const teamsStore = useTeamsStore();

const CaptainName = ref("");
const TeamName = ref("");
const CptainsTelegram = ref("");

const createTeam = teamsStore.addTeamsToList;
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-registration {
  background: rgb(236, 75, 102);
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin: 0;
  color: white;
  font-size: 100px;
  padding-bottom: 40px;
}
.brawl-tournament-registration-form {
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  background: rgb(255, 255, 255);
  justify-content: space-evenly;
  border-radius: 20px;
  border: 2px solid white;
}
input {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
}
button {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: rgb(236, 75, 102);
  cursor: pointer;
  color: white;
}
button:hover {
  background: rgb(77, 18, 28);
}
</style>
