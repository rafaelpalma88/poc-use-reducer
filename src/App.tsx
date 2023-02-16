import { useReducer } from 'react'
import { personReducer } from './reducers/person/reducer';
import { incrementAgeAction, changeNameAction } from './reducers/person/actions'

function App() {
  // const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

  // function reducer(state: any, action: any) {
  //   switch (action.type) {
  //     case 'INCREMENT_AGE': {
  //       return {
  //         name: state.name,
  //         age: state.age + 1
  //       };
  //     }
  //     case 'CHANGE_NAME': {
  //       if (state.name === 'Taylor') {
  //         return {
  //           name: 'Vanessa',
  //           age: state.age
  //         };
  //       } else if (state.name === 'Vanessa') {
  //         return {
  //           name: 'Taylor',
  //           age: state.age
  //         };
  //       } 
  //     }
  //   }
  //   throw Error('Unknown action: ' + action.type);
  // }

  const [personState, dispatch] = useReducer(personReducer, {
    name: 'Vanessa',
    age: 5
  })

  const { name, age } = personState

  function handleIncrementAge() {
    dispatch(incrementAgeAction());
  }

   function handleChangeAge() {
    dispatch(changeNameAction());
  }

  return (
    <div>

      <p>Nome: {name}, idade: {age}</p>

      <button onClick={handleIncrementAge}>Incrementar idade</button>

      <button onClick={handleChangeAge}>Alterar nome para Taylor</button>
      
    </div>
  )
}

export default App
