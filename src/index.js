import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { addPostListReducer } from './reducers/postlistReducer';
import { addCommentReducer } from './reducers/commentReducer';
import { addVisitReducer } from './reducers/visitReducer';
import { addArticleReducer } from './reducers/articleReducer';
import { addBriefReducer } from './reducers/addBriefReducer';

const rootReducers = combineReducers({
    postlist: addPostListReducer,
    comments: addCommentReducer,
    visitNum: addVisitReducer,
    article: addArticleReducer,
    ancillaryInfoAndComment: addBriefReducer
});
const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
store.subscribe(()=> {
    console.log(store.getState())
});
