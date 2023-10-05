import { createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
// Начальное значение состояния Redux для корневого редюсера,
// если не передать параметр preloadedState.
const initialState = {
  contacts: [],
  filter: '',
  contact: {
    name: '',
    number: '',
  },
};

// Пока что используем редюсер который
// только возвращает полученное состояние

const rootReducer = (state = initialState, action) => {
  return state;
};

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
