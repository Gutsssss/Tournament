import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/BrawlTournamentsHome.vue";
import BrawlTournamentRegistration from "./components/BrawlTournamentRegistration.vue";
import BrawlTournamentRaiting from "./components/BrawlTournamentRaiting.vue";

const routes = [
    {
    path: '/', component: BrawlTournamentsHome,
    },
    {
    path: '/teams', component: BrawlTournamentsTeams
    },
    {
    path: '/registration', component: BrawlTournamentRegistration
    },
    {
    path: '/raiting', component: BrawlTournamentRaiting
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router