import { createRouter, createWebHashHistory } from "vue-router";
import BrawlTournamentsTeams from "./components/organisms/BrawlTournamentsTeams.vue";
import BrawlTournamentsHome from "./components/organisms/BrawlTournamentsHome.vue";
import BrawlTournamentRegistration from "./components/organisms/BrawlTournamentRegistration.vue";
import BrawlTournamentRaiting from "./components/organisms/BrawlTournamentRaiting.vue";
import BrawlTournament404 from "./components/molecules/BrawlTournament404.vue"
import TournamentBracket from './components/organisms/TournamentBracket.vue'

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