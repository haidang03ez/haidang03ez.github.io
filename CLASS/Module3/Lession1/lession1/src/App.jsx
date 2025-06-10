import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from "./component/headerComponent/Header";
import { Footer } from "./component/footerComponent/Footer";
import { HomePage } from "./component/homeComponent/homePage";


function App() {

  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
