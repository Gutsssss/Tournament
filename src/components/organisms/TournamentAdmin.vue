<template>
  <BrawlTournamentNav />
  <div class="abmin-panel">
    <BrawlTournamentRegistration />
    <TournamentBracket />
  </div>
</template>

<script setup>
import TournamentBracket from "./TournamentBracket.vue";
import BrawlTournamentRegistration from "./BrawlTournamentRegistration.vue";
import BrawlTournamentNav from "../molecules/BrawlTournamentNav.vue";
</script>

<style scoped></style>
