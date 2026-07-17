import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

/* Config */
import { ServiceProvider } from './config/service';
import { store } from './config/store';

/* Pages */
import { Main } from './pages/main';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <ServiceProvider>
        <Main />
      </ServiceProvider>
    </Provider>
  );
}

export default App;
