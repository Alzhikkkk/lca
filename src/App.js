import Aside from './components/Aside';
import Header from './components/Header';
import Main from './pages/main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Aside></Aside>
        <div>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
