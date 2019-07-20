import EventEmitter from 'events'
class DataStore extends EventEmitter {
  users = {
    isCloseBtn: false
  }
}
const store = new DataStore()
export default store