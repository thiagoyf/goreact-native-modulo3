import { createStore } from 'redux';

// Reducer
const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer café',
    completed: true,
  },
  {
    id: 2,
    text: 'Estudar React Native',
    completed: false,
  },
];

// Actions

// Adicionar um todo
// Marcar todo como completo

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text,
          completed: false,
        },
      ];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
