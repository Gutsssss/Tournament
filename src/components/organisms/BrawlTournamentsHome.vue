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
import BrawlTournamentDescription from '@/components/organisms/BrawlTournamentDescription.vue';
import BrawlTournamentRules from '@/components/organisms/BrawlTournamentRules.vue'
import BrawlTournamentNav from '@/components/molecules/BrawlTournamentNav'
import BrawlTournamentFooter from '@/components/molecules//BrawlTournamentFooter.vue';
import TournamentCarousel from '@/components/organisms/TournamentCarousel.vue';
</script>

<style scoped>

</style>