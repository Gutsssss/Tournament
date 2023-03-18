import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/BrawlTournamentsHome.vue";
import BrawlTournamentRegistration from "./components/BrawlTournamentRegistration.vue";
import BrawlTournamentRaiting from "./components/BrawlTournamentRaiting.vue";
import BrawlTournament404 from "./components/BrawlTournament404.vue"
import TournamentBracket from './components/TournamentBracket.vue'

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
    },
    {
    path: '/:pathMatch(.*)*', name:'404', component: BrawlTournament404
    },
    {
    path: '/bracket', component:TournamentBracket
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router