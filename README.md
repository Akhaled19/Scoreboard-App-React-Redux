# Learning Redux with React
Notes from Redux documentation and 

## Introducing Redux:
Redux is a tool for managing both data-state and UI-state in JavaScript application. However, Redux is an opiniontated framework.  
Redux is excellent because:
* Runs in different environments (client, server, and native)
* Predicatable state changes
* Centralized state
* Makes data flow transparent and predicatable 
* Easy debugging with time travel
* Preserve page state
* Undo/redo
* Ecosystem of add-ons 
* Works with any UI layer 
* Perfect for SPAs 

You can use Redux together with **React**, or any other view library. It is tiny (2kB, including dependencies). 

## How Redux Works
Redux stores all your applcation state in an object tree within a single `store`. Components then `dispatch` state `actions` to the store, instead of mutating the state object directly. Action is an object with a type property - where the type property is a string that indicates the type of action being preformed. To specify how the `actions` transform the state, you write pure `reducers` to decide how every action transforms the entire application's state. Pure reducers are pure functions that takes two arguments the previous state and an action as inputs and return the next state. The components that need to be aware of state `actions` can `subscribe` to the `store`.   

## Redux Action at a Galance
```
const BUY_CAKE = 'BUY_CAKE';

{
  type: BUY_CAKE
}
```
## Redux Action Creator at a Glance
```
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
```

## Redux Reducer at a Glance

```
const initialState = {
  numOfCakes: 10;
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(BUY_CAKE): return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state;
  }
}
```
## Redux Store and its methods at a Glance:

```
//Application state container for the entire application
const store = createStore(reducer);

//print the current state in the store
console.log('initial state', store.getState());

//Allow the app to subscribe to changes
const unsubscribe = store.subscribe(() => console.log('update state', store.getState());

//Update the state 
store.dispatch(buyCake());

//unsubscribe from the store by calling the function returned by subscribe() method
unsubscribe()

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
