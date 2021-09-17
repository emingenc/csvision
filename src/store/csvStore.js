import { reactive, watch } from "vue";

const STATE_NAME = "csvState";


const defaultState = {

  
  
}
const getDefaultState = () => {
  if (localStorage.getItem(STATE_NAME) !== null) {
    return JSON.parse(localStorage.getItem(STATE_NAME));
  }

  return defaultState;
};

const state = reactive(getDefaultState());

const methods = {
  
}

const getters = {}

watch(
  () => state,
  () => {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  },
  { deep: true }
);

export default {
  state,
  methods,
  getters,
}