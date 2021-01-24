import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importing Global Components
const BaseButton = defineAsyncComponent(() =>
    import('./components/ui/BaseButton.vue'),
);

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);

app.mount('#app');
