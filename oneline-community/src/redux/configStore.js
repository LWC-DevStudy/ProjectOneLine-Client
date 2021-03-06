import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

// reducer
import user from './modules/user';
import post from './modules/post';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user.reducer,
  post: post.reducer,
  router: connectRouter(history),
});

// history 넣기, 로거사용
const middleware = [thunk.withExtraArgument({ history }), logger];

// 미들웨어와 리듀서 묶어서 store생성
const store = createStore(rootReducer, applyMiddleware(...middleware));
export { history };

export default store;
