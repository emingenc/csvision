import { reactive, watch } from "vue";

const STATE_NAME = "csvState";


const defaultState = {

  columnsCsv:null,
  rowsCsv:null,
  fileNme:null,
  grid:false,
  visibleColumns:null,
  initialPagination: {
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 50
    // rowsNumber: xx if getting data from a server
  },
  
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

const getters = {
  getRowData(rowKey){
    if( state.rowsCsv){
      let rows = state.rowsCsv.map(el => {
        return el[rowKey]
      })
      console.log(rows)
      return rows
    }
  }
}

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