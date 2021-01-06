import store from './store/index.js'

import {
  addAction,
  deAction,
  inAction,
  subAction
} from './store/actionCreaters.js'

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(8))
store.dispatch(subAction(5))
store.dispatch(inAction())
store.dispatch(deAction())