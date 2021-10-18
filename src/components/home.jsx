import '../build/css/index.css'; // para aplicar estilo sass
import logo from '../assets/logoBQ.png';

function Home() {
    return (
        <section className="secInit">
           <img src={logo} className="logo" alt="logoBQ" />

           <button className="btnInit">Iniciar</button>
      </section>
    );
  }
  
  export default Home;