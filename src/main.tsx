import ReactDOM from 'react-dom/client'
// redux toolkit 
import { Provider } from 'react-redux';
import store from '@store/index';
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from './routers/AppRouter';






ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}><AppRouter /></Provider>

)

