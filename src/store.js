import { createStore } from 'redux';

import reducer from '../src/reducers/index';

const store = createStore(reducer);

export default store;