import './App.css';
import { AppProvider } from './context';
import { Main } from './Main';
import { ReqProvider } from './ReqContext';


function App() {
  return (
    <>
      <AppProvider>
        <ReqProvider>
          <Main />
        </ReqProvider>
      </AppProvider>
    </>
  );
}

export default App;
