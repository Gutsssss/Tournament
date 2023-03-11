<template>
    <div class="brawl-tournament-nav">
        <img class="icon" src="@/assets/BrawlStarsLogo.webp">
        <ul>
            <li><router-link class="link" to="/">Home</router-link></li>
            <li><router-link class="link" to="/teams">Teams</router-link></li>
            <li><router-link class="link" to="/raiting">Raiting</router-link></li>
            <li><router-link class="link" to="/registration">Registration</router-link></li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
*{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-nav {
    display: flex;
    background-color: rgb(0, 0, 0);
    color: white;
    justify-content: center;
    justify-content: space-between;
}
ul {
    list-style-type: none;
    margin: 0;  
    padding: 0;
    overflow: hidden;
    padding-right: 20px;
}
li {
    float: left;
    padding: 10px;
    font-size: 30px;
    height: 100%;
}
.icon {
    width: 60px;
    height: 60px;
    float: left;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.link {
    color: white;
    text-decoration:double;
}
li:hover {
    background-color: gray
}
</style>