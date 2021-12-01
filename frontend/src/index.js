import ReactDOM from 'react-dom'
import {App} from "./ui/App"
import 'bootstrap/dist/css/bootstrap.css';
import {store} from "./store";


ReactDOM.render(App(store), document.querySelector('#root'));

