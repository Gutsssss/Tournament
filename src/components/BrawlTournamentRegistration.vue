<template>
    <BrawlTournamentNav/>
    <div class="brawl-tournament-registration">
    <h1>Registation</h1>
    <form class="brawl-tournament-registration-form" @submit.prevent="handleSubmit">
        <input v-model="newCaptainName" type="text"  placeholder="Captain name">
        <input v-model="newTeamName" type="text"  placeholder="Team name">
        <input v-model="newaCptainsTelegram" type="text"  placeholder="Captain's telegram">
        <button>Submit</button>
    </form>
    </div>
    <BrawlTournamentFooter/>
</template>

<script setup>
// import { useTeamsStore } from '@/stores/teamsStore';
import BrawlTournamentNav from './BrawlTournamentNav.vue';
import BrawlTournamentFooter from './BrawlTournamentFooter.vue';
// import { ref } from 'vue';

// const teamsStore = useTeamsStore()

// newCaptainName = ref('')

// const handleSubmit = () => {
//     if (newCaptainName.value.length > 0) {
//         teamsStore.addTeam({
//             captainName: newCaptainName.value,
//             id: Math.floor(Math.random() * 10000),
//             raiting: 0
//         })
//         newCaptainName = ''
//     }
//     return {newCaptainName}
// }
   
    
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
    background: black;
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
    background:rgb(236, 75, 102);
    cursor: pointer;
    color: white;
}
button:hover {
    background:rgb(77, 18, 28) ;
}
</style>