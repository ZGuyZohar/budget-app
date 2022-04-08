import {createRouter, createWebHashHistory} from 'vue-router'
import BudgetPage from '/src/views/budget-page.vue'
import HomePage from '/src/views/home-page.vue'
import ExpensePage from '/src/views/expense-page.vue'
import CollabPage from '/src/views/collab-page.vue'
import accountPage from '/src/views/account-page.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/expense', component: ExpensePage },
    { path: '/budget', component: BudgetPage },
    { path: '/collab', component: CollabPage },
    { path: '/account', component: accountPage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
