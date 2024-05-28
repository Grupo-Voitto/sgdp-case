import GlobalStyles from './styles/global';
import Routes from './routes';
import Sidebar from './components/Sidebar';
import { MainContainer } from './components/Layouts';
import { SideBarProvider } from './SidebarContext';

const App = () => {
  return (
    <>
      <MainContainer>
        <SideBarProvider>
          <Sidebar />
          <div id="mainDiv">
            <Routes />
          </div>
        </SideBarProvider>
      </MainContainer>
      <GlobalStyles />
    </>
  );
};

export default App;
