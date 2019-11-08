import * as types from '../types'

const initPageState = () => {
  return {
    userInfo: {
      _id: '',
      name: '',
      avator: ''
    }
  }
}
const user = {
  state: initPageState(),
  mutations: {
  },
  actions: {}
}

export default user
