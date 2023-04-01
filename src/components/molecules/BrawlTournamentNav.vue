<template>
  <div class="brawl-tournament-nav">
    <router-link class="link" to="/"
      ><img class="icon" :src="require('@/assets/iconLog.png')"
    /></router-link>
    <ul v-show="adaptive">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/teams">Teams</router-link></li>
      <li><router-link class="link" to="/raiting">Rating</router-link></li>
      <li>
        <router-link class="link" to="/registration">Registration</router-link>
      </li>
      <li><router-link class="link" to="/bracket">Bracket</router-link></li>
    </ul>
    <img @click="adaptive = !adaptive" class="burger" :src="require('@/assets/burger-nav.png')"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const adaptive = ref(true)
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-nav {
  display: flex;
  background-color: rgb(0, 0, 0);
  color: white;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-right: 20px;
  height: 100px;
  display: flex;
  text-align: center;
  align-items: center;
}
li {
  float: left;
  padding: 10px;
  font-size: 30px;
}
.icon {
  width: 75px;
  height: 75px;
  float: left;
  padding: 15px;
}
.burger {
  width: 45px;
  height: 45px;
  display: none;
  margin-right: 15px;
}
.link {
  color: white;
  text-decoration: double;
}
@media screen and (max-width:800px){
 ul{
  display: none;
 }
 .burger {
  display: block;
 }
}
</style>
