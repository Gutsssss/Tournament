<template>
    <div>
    <BrawlTournamentNav/>
    <BrawlTournamentDescription/>
    <TournamentCarousel/>
    <BrawlTournamentRules />
    <BrawlTournamentFooter/>
    </div>
</template>

<script setup>
import BrawlTournamentDescription from './BrawlTournamentDescription.vue';
import BrawlTournamentRules from './BrawlTournamentRules.vue'
import BrawlTournamentNav from './BrawlTournamentNav'
import BrawlTournamentFooter from './BrawlTournamentFooter.vue';
import TournamentCarousel from './TournamentCarousel.vue';
</script>

<style scoped>

</style>