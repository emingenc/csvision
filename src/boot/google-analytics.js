import VueGtag from "vue-gtag";

export default async ({ Vue,router }) => {
  Vue.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
  },router);
};