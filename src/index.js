import ReactDOM from 'react-dom/client';
import './index_component/index.css';
import login_block from './index_component/login_block';
import reportWebVitals from './index_component/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const loginBlock = login_block()
root.render(loginBlock);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
