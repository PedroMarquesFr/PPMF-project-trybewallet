//importe o método applyMiddleware
import { createStore, applyMiddleware } from "redux";
//importe o redux-thunk
import thunk from "redux-thunk";
import reducers from "../reducers"
import { composeWithDevTools } from 'redux-devtools-extension';


//aplique o middleware
const store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)));

export default store;