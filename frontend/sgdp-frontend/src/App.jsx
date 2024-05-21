import GlobalStyles from './styles/global';
import Routes from './routes';
import Sidebar from './components/Sidebar';
import { MainContainer } from './components/Layouts';

const App = () => {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <div id="mainDiv">
          <Routes />
        </div>
      </MainContainer>
      <GlobalStyles />
    </>
  );
};

export default App;
