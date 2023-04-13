<template>
  <div class="brawl-tournament-registration">
    <h1>Registation</h1>
    <v-form class="brawl-tournament-registration-form" @submit.prevent="">
      <v-text-field class="input" v-model="newCaptainName" type="text" label="Captain name" />
      <v-text-field class="input" v-model="newTeamName" type="text" label="Team name" />
      <v-text-field class="input"
        v-model="newCptainsTelegram"
        type="text"
        label="Captain's telegram"
        
      />
      <v-btn class="btn" @click="addTeam">Submit</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { useTeamsStore } from "@/stores/teamsStore";
// import {  computed } from "vue";
import { ref } from "vue";
// import {string} from 'yup'



const teamsStore = useTeamsStore();




const newCaptainName = ref("");
const newTeamName = ref("");
const newCptainsTelegram = ref("");

const addTeam = () => teamsStore.addTeamsToList (
  newCaptainName.value,
  newTeamName.value,
  newCptainsTelegram.value
)

</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-registration {
  background-image: url(@/assets/hero4.jpg);
  background-size: cover;
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
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  justify-content: space-evenly;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  
}
.input {
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  width: 400px;
  padding: 10px;
  color: white;
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
.btn {
  margin-bottom: 10px;
}
</style>
