import '../CSS/GemCard.css';
import '../CSS/BodyTemp.css';
import { Link } from 'react-router-dom';

function GemCard(gems) {
  const { gem } = gems;
  return (
    <div className="card">
      <div className="card-content">
        <span className="img-section"></span>
        <p className="card-name">{gem.name}</p>
        <p className="card-price">${gem.price}</p>
      </div>
      <Link to={`/gems/${gem._id}`}>
        <button className="card-button">Read More...</button>
      </Link>
    </div>
  );
}

export default GemCard;
