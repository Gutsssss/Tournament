<template>
    <div class="brawl-tournament-nav">
        <img src="../assets/brawlLogo.png" alt="">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li> <router-link to="/teams">Teams</router-link></li>
            <li>Raiting</li>
            <li>Rules</li>
            <li>Registration</li>
            <!-- <router-view></router-view> -->
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.brawl-tournament-nav {
    display: flex;
    background-color: rgb(59, 59, 59);
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
}
.icon {
    width: 60px;
    height: 60px;
    float: left;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>