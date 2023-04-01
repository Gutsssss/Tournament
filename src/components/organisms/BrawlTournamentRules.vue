<template>
  <div class="brawl-tournament-rules">
    <h1>Rules</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
      perspiciatis laboriosam necessitatibus quos dolor quaerat, quis doloribus
      asperiores ratione? Quod similique culpa, optio deleniti delectus quisquam
      ipsum quo odio unde!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-rules {
  background-image: linear-gradient(rgba(70, 69, 69, 0.7), rgba(0, 0, 0, 0.8)),
    url(@/assets/background.jpeg);
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  color: white;
  font-size: 100px;
  margin-top: 10px;
  margin-bottom: 0px;
}
p {
  margin: 0;
  width: 50%;
  text-align: center;
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-weight: 700;
}
</style>
