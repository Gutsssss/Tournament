<template>
  <div class="brawl-tournament-description">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius et nisi! Modi
      perspiciatis libero dolorem officiis deleniti odio. Numquam voluptatum beatae
      tempore perferendis cupiditate obcaecati veritatis maxime saepe sint?
    </p>
    <img class="img" src="@/assets/img/hero.png"/>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.brawl-tournament-description {
  width: 100%;
  height: 600px;
  background: rgb(236, 75, 102);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}
p {
  margin: 0;
  font-size: 40px;
  max-width: 440px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
img {
  width: 400px;
}
</style>
