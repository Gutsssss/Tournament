<template>
  <div class="brawl-tournament-nav">
    <router-link class="link" to="/"
      ><img class="icon" :src="require('@/assets/iconLog.png')"
    /></router-link>
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/teams">Teams</router-link></li>
      <li><router-link class="link" to="/raiting">Raiting</router-link></li>
      <li>
        <router-link class="link" to="/registration">Registration</router-link>
      </li>
      <li><router-link class="link" to="/bracket">Bracket</router-link></li>
    </ul>
  </div>
</template>

<script></script>

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
.link {
  color: white;
  text-decoration: double;
}
/* li:hover {
  background-color: gray;
} */
</style>
