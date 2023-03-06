import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/BrawlTournamentsHome.vue";

const routes = [
    {
    path: '/', component: BrawlTournamentsHome,
    },
    {
    path: '/teams', component: BrawlTournamentsTeams
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router