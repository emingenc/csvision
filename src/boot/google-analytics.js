import { boot } from 'quasar/wrappers'
import VueGtag from "vue-gtag";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const ga_id = ()=> {return process.env.GOOGLE_ANALYTICS_ID}
export default boot(async ({router,app}) => {
  app.use(VueGtag, {
    config: { id: ga_id }
  }, router);
})
