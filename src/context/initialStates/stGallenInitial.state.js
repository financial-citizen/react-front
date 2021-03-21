
export default {
  isLoading: false,
  error: {
    hasError: false,
    message: null
  },
  calculations: {
    currentYear: {
      totalOfExpenses: 0,
      totalOfRevenue: 0,
      totalOfDifference: 0
    },
    previousYear: {
      totalOfExpenses: 0,
      totalOfRevenue: 0,
      totalOfDifference: 0
    }
  },
  data: {
    parameters: {
      dataset:"",
      timezone:"",
      rows: "",
      start: "",
      sort:[],
      format:"",
      lang:"",
      facet: ""
    },
    records: [],
    facet_groups: []
  }
}
