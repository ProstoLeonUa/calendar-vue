import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
		path: '/',
		name: 'Users',
		meta: { layout: 'main' },
		component: () => import('@/views/Users.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
