import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { AuthProvider } from './components/AuthProvidert.tsx';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
);
