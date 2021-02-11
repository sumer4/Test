// Import vue
import Vue from 'vue';

// Import routes
import router from './router';

// Import vuex store
import store from './vuex/store';

// Import App component
import App from './App.vue'

// Import axios
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// Import header function
import {initialize} from './helpers/auth_header';

// Import bootstrap css and js manually
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// Import bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// Import flash message
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

// Import json to excel package
import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

// Import sweet alert
import swal from 'sweetalert';

// Import DataTable
import { ServerTable } from 'vue-tables-2';
Vue.use(ServerTable);

// Use Fire event globally
window.Fire = new Vue();

// calling header function with store and router
initialize(store, router);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
