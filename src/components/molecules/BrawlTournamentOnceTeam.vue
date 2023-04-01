<template>
    <div class="brawl-tournament-once-team">
        <p>Team: {{ team.teamName }}</p>
        <p>Captain: {{ team.captainName }}</p>
        <p>Raiting: {{ team.raiting }}</p>
    </div>
</template>

<script>
export default {
    props: ['team']
}


</script>

<style scoped>
* {
    color: rgb(0, 0, 0);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
}
.brawl-tournament-once-team {
    width: 250px;
    border: 2px solid rgb(0, 0, 0);
    min-height: 150px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    background:lightpink;
    background-size: 250px;
}
p {
    margin: 0;
    padding-left: 5px;
    font-weight: 700;
}
</style>