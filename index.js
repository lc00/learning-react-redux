const counter = (state = 0 , action) => {
    // if(typeof state === 'undefined') {
    //     return 0
    // }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
    )

// const Counter = React.createClass({
//     render: () => {
//         return (
//         <div>
//              <h1>{this.props.value}</h1>
//             <button onClick={this.props.onIncrement}>+</button>
//             <button onClick={this.props.onDecrement}>-</button>
//         </div>
//             )
//     }
// })

const {createStore} = Redux
// above line is equivalent as the one of the two things below
// var createStore = Redux.createStore
// OR
// import { createStore } from 'redux' // this is the npm import




const store = createStore(counter)

const render = () => {
    ReactDOM.render(
        <Counter 
        value={store.getState()}  
        onIncrement={() =>
            store.dispatch({
                type: 'INCREMENT'
            })}
        onDecrement={() =>
            store.dispatch({
                type: 'DECREMENT'
            })}      />,
        document.getElementById('root')
        )
}

store.subscribe(render)

render()



// const createStore = (reducer) => {
//     let state
//     let listeners = []

//     const getState = () => state

//     const dispatch = (action) => {
//         state = reducer(state, action)

//         listeners.forEach(listener => listener())
//     }

//     const subscribe = (listener) => {
//         // cb is an event listener

//         listeners.push(listener)

//         return () => {
//             listeners = listeners.filter(l => l !== listener)
//         }
//     }

//     dispatch({})

//     return {getState, dispatch, subscribe}
// }


// chai.expect(
//     counter(0, {type: 'INCREMENT'})
// ).to.be.equal(1)
//
// chai.expect(
//     counter(1, {type: 'INCREMENT'})
// ).to.be.equal(2)
//
// chai.expect(
//     counter(2, {type: 'INCREMENT'})
// ).to.be.equal(3)
//
// chai.expect(
//     counter(0, {type: 'DECREMENT'})
// ).to.be.equal(-1)
//
// chai.expect(
//     counter(0, {type: 'different case'})
// ).to.be.equal(0)
//
// chai.expect(
//     counter(undefined, {})
// ).to.be.equal(0)
//
//
//
// console.log('tests passed')