import { boot } from 'quasar/wrappers'
import VueGtag from "vue-gtag";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({router,app}) => {
  app.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID }
  }, router);
})
