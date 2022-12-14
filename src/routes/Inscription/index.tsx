import './styles.css';
import { Link } from "react-router-dom";

export default function Inscription() {
  return (
    <>
      <div className="inscription-container">
        <h2>Faça sua inscrição!</h2>
        <div className="home-card">
          <h1>Pagina de inscrição</h1>
        </div>
          <div className="btn-container">
            <Link to="/promotion">
              <button>Ver Promoção</button>
            </Link>
          </div>
      </div>
    </>
  );
}
