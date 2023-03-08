<template>
    <BrawlTournamentNav/>
    <div class="brawl-tournament-registration">
    <h1>Registation</h1>
    <div class="brawl-tournament-registration-form">
        <input v-model="captainName" type="text" name="name" placeholder="Captain name">
        <input v-model="teamName" type="text" name="name" placeholder="Team name">
        <input v-model="captainsTelegram" type="text" name="name" placeholder="Captain's telegram">
        <button @click="addTeam">Submit</button>
    </div>
    </div>
    <BrawlTournamentFooter/>
</template>

<script>
import { useTeamsStore } from '@/stores/teamsStore';
import BrawlTournamentNav from './BrawlTournamentNav.vue';
import BrawlTournamentFooter from './BrawlTournamentFooter.vue';

    export default {
        components: {BrawlTournamentNav,BrawlTournamentFooter},
        setup() {
            const teamsStore = useTeamsStore()

            return {teamsStore}
        },
        data() {
            return {
                captainName: "",
                teamName: "",
                captainsTelegram: ""
            }
        },
        methods: {
            addTeam() {
                
            }
        }
    }
   
    
</script>

<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    font-size: 140px;
    padding-bottom: 40px;
}
.brawl-tournament-registration-form {
    display: flex;
    height: 100px;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    background: black;
    justify-content: space-evenly;
    border-radius: 20px;
    border: 2px solid white;
}
input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
}
button {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    background:rgb(236, 75, 102);
    cursor: pointer;
}
button:hover {
    background:rgb(77, 18, 28) ;
}
</style>