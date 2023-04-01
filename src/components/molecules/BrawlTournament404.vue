<template>
    <BrawlTournamentNav/>
    <div class="not-found">
        <h1>Page Not Found</h1>
    </div>
    <BrawlTournamentFooter/>
</template>

<script setup>
import BrawlTournamentNav from './BrawlTournamentNav.vue';
import BrawlTournamentFooter from './BrawlTournamentFooter.vue';
</script>

<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.not-found {
    width: 100%;
    height: 900px;
    text-align: center;
    background-color: rgb(236, 75, 102);
}
h1{
 font-size: 100px;
 color: white;
 margin: 0;
 padding-top: 20px;
}
</style>