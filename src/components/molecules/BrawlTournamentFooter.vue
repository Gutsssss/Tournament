<template>
  <div class="brawl-tournament-footer">
  <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="https://t.me/BrawlUpCash" target="_blank"><img :src="require('@/assets/telegram.png')"/></a>
    <a><img :src="require('@/assets/instagram.png')" /></a>
    <a href="https://vk.com/killypunky" target="_blank"><img :src="require('@/assets/vk.png')" /></a>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-footer {
  background: #000000;
  min-height: 150px;
  width: 100%;
  color: white;
  text-align: center;
}
h1 {
  color: white;
  font-size: 48px;
  margin: 0;
}
img{
  width: 50px;
  height: 50px;
  margin: 10px;
}
p {
  font-size: 24px;
  margin: 12px;
}
</style>
