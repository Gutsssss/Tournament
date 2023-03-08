import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/BrawlTournamentsHome.vue";
import BrawlTournamentRegistrationVue from "./components/BrawlTournamentRegistration.vue";

const routes = [
    {
    path: '/', component: BrawlTournamentsHome,
    },
    {
    path: '/teams', component: BrawlTournamentsTeams
    },
    {
    path: '/registration', component: BrawlTournamentRegistrationVue
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router