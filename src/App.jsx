
import './App.css'
import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";
// const initialState = 0;
// const DEPOSIT = "DEPOSIT";
// const WITHDRAW = "WITHDRAW";
// const makePayment = (amount) => ({ type: DEPOSIT, payload: amount });
// const withdrawMoney = (amount) => ({ type: WITHDRAW, payload: amount });
// const reducer = (state = initialState, action) => {
//   if (action.type === DEPOSIT) {
//     return state + action.payload;
//   } else if (action.type === WITHDRAW) {
//     return state - action.payload
//   }
//   else return state;
// };
// const store = createStore(reducer);

// const actions = bindActionCreators({ makePayment, withdrawMoney}, store.dispatch);
// actions.makePayment(200)
// actions.withdrawMoney(45)
// console.log(store.getState());

const initialState = {
  users: [
    {
      id: "001",
      name: "Henriette"
    },
    {
      id: "002",
      name: "Serge"
    }
  ],
  tasks: [
    {
      name: "make a toDo App"
    },
    {
      name: "make a toast"
    }
  ]
};
const ADD = "adduser";
const TASK = "task";
const DELETE = 'delete'
const addUser = (user) => ({ type: ADD, payload: user });
const addTask = (task) => ({ type: TASK, payload: task });
const deleteUser = (user) => ({ type: DELETE, payload: user })
const taskReducer = (state = initialState.tasks, action) => {
  if (action.type === TASK) {
    return [...state, { name: action.payload.name }];
  }
  else return state;
};
const userReducer = (state = initialState.users, action) => {
  if (action.type === ADD) {
    return [...state, { id: action.payload.id, name: action.payload.name }];
  } else if (action.type === DELETE) {
    return [state.filter(el => { return el.id !== action.payload.id })]
  } else return state;
};
const reducer = combineReducers({ user: userReducer, task: taskReducer });
const store = createStore(reducer);
const actions = bindActionCreators({ addUser, addTask, deleteUser }, store.dispatch);
actions.addUser({ id: "003", name: "Aldo" });
actions.deleteUser({ id: "001", name: "fff" })
console.log(store.getState());


function App() {


  return (
    <div className="App">

    </div>
  )
}

export default App
