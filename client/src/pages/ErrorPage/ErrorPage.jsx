import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/images/error.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="section error-section">
      <h1 className="error-title">Vertippt?</h1>
      <img className="error-image" src={errorImage} alt="error" />
      <button onClick={() => navigate("/")} className="error-page-btn">
        Phancy-Startseite
      </button>
    </section>
  );
};

export default ErrorPage;
