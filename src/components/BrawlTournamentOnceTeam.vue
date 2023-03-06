<template>
    <div class="brawl-tournament-once-team">
        <p>Team: {{ teams }}</p>
        <p>Captain: {{ teamsStore.teams.teamName }}</p>
    </div>
</template>

<script setup>
import { useTeamsStore } from "@/stores/teamsStore";

const teamsStore = useTeamsStore()
</script>

<style scoped>
* {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
}
.brawl-tournament-once-team {
    width: 250px;
    border: 2px solid pink;
    height: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    background-image: url(@/assets/wallBrawl.png);
    background-size: 200px;
}
p {
    margin: 0;
    padding-left: 5px;
    font-weight: 700;
}
</style>