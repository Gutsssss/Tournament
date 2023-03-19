<template>
    <v-card
    class="card"
    min-width="300"
    color="deep-purple-darken-4"
  >
    <v-card-title class="title" :icon="show"
        @click="show = !show"
        color="white">
        {{ team.teamName }}
    </v-card-title>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          Captain: {{ team.captainName }}
          Raiting: {{ team.raiting }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      show: false,
    }),
    props:['team'],
}
</script>

<style scoped>
.title {
    text-align: center;
    cursor: pointer;
}
.card {
    margin: 10px;
}
.card:hover {
    background-color: gray;
}
</style>