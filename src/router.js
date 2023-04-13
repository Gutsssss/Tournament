import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/organisms/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/organisms/BrawlTournamentsHome.vue";
import BrawlTournamentRaiting from "./components/organisms/BrawlTournamentRaiting.vue";
import BrawlTournament404 from "./components/molecules/BrawlTournament404.vue"
import TournamentAdmin from './components/organisms/TournamentAdmin.vue'

const routes = [
    {
    path: '/', component: BrawlTournamentsHome,
    },
    {
    path: '/teams', component: BrawlTournamentsTeams
    },
    {
    path: '/raiting', component: BrawlTournamentRaiting
    },
    {
    path: '/:pathMatch(.*)*', name:'404', component: BrawlTournament404
    },
    {
    path: "/admin", component:TournamentAdmin
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router