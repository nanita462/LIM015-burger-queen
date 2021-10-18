import '../build/css/index.css'; // para aplicar estilo sass
import logo from '../assets/logoBQ.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="secInit">
           <img src={logo} className="logo" alt="logoBQ" />
           <Link to='/users'>
           <button className="btnInit">Iniciar</button>
           </Link>
      </section>
    );
  }
  
  export default Home;
