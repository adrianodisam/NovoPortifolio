import './App.css';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Navbar from './componentes/Navbar/Navbar';
import WhatsAppContato from './componentes/WhatsAppContato/WhatsAppContato';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Contato from './componentes/Contato/Contato';
import Sobre from './componentes/Sobre/Sobre';
import Habilidades from './componentes/Habilidades/Habilidades';
import Projetos from './componentes/Projetos/Projetos';

function App() {
  return (
    <div className="App">
      <WhatsAppContato
        texto="Fale comigo"
        link="https://wa.me/5511999537132?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es"
      />
      <Navbar />
      <Header />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
export default App;
