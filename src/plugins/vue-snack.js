import Vue from 'vue'
import VueSnackbar from 'vue-snack'
import 'vue-snack/dist/vue-snack.min.css'

Vue.use(VueSnackbar, {
	position: 'bottom',
	time: 60000
})
