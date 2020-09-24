import { createStore } from 'vuex'

export default createStore({
	state: {
		calendarIsOpen: false
	},
	getters:{
		getterCalnedar(state){
			return state.calendarIsOpen
		}
	},
	mutations:{
		calendarIsOpen(state, payload){
			state.calendarIsOpen = payload
		}
	},
	actions: {
		async fetch({ }, path) {
			try {
				const response = await fetch(path)
				const data = await response.json()
				return data
			} catch (e) {
				throw e
			}
		}
	},
	modules: {
	}
})
