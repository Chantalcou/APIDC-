import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const App = () => {
  // Estado para manejar la animación del logo
  const [isSpinning, setIsSpinning] = useState(false);

  // Manejar el clic en el logo
  const handleLogoClick = () => {
    setIsSpinning(true);

    // Quitar la clase después de la animación para permitir animaciones repetidas
    setTimeout(() => setIsSpinning(false), 1000); // 1 segundo es el tiempo de la animación
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="container-fluid p-0 main-content">
          <div className="video-container">
            {/* Video de fondo */}
            <video autoPlay muted loop className="bg-video_top">
              <source
                src="https://res.cloudinary.com/dqgjcfosx/video/upload/v1726833225/7684717-uhd_3840_2160_24fps_uut60g.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="static-content d-flex flex-column justify-content-center align-items-center h-100">
              <img
                alt="Logo"
                src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1725973641/apidc-logo_hz26kf.png"
                className={`home-image_center d-inline-block align-top ${
                  isSpinning ? "logo-spin" : ""
                }`}
                onClick={handleLogoClick}
              />
              <button
                type="button"
                className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
              >
                Conócenos
              </button>
            </div>
          </div>
        </div>
        <div className="about-section" id="about-section">
          <div className="container my-5">
            <div className="row text-center">
              <div className="col-md-4 col-12 mb-4">
                <img
                  src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1726139381/imagen-3-apidc_sezunb.jpg"
                  alt="Quienes somos"
                  className="img-fluid mb-3"
                />
                <h3 className="home-title_about_section">Quienes Somos</h3>
                <p>
                  Somos una Asociación Civil sin fines de lucro. Conformada por
                  un gran equipo de personas que se relaciona de manera directa
                  con el Cannabis, su procesamiento y sus usos terapéuticos.
                </p>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <img
                  src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1726139381/imagen-2-apidc_jd0dnj.jpg"
                  alt="Nuestro camino"
                  className="img-fluid mb-3"
                />
                <h3 className="home-title_about_section">Nuestro Camino</h3>
                <p>
                  Quienes conformamos la Asociación nos vinculamos con las
                  plantas de Cannabis y sus múltiples usos desde hace más de 10
                  años, cada uno a través de diversas disciplinas: agronomía,
                  medicina, genética, bioquímica, docencia, abogacía, economía e
                  investigación.
                </p>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <img
                  src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1726139381/imagen-1-apidc_vtapiq.jpg"
                  alt="A donde vamos"
                  className="img-fluid mb-3"
                />
                <h3 className="home-title_about_section">A Dónde Vamos</h3>
                <p>
                  Nuestro principal objetivo como Asociación es ser un actor
                  fundamental en el desarrollo y la investigación del Cannabis a
                  nivel nacional.
                </p>
              </div>
            </div>
            <div className="btn-asociarte-custom text-center">
              <button
                type="button"
                className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
              >
                ¿Querés Asociarte?
              </button>
            </div>
          </div>
        </div>
        <div id="membership-section" className="py-1 bg-light">
          <div className="container my-1">
            <div className="bg-banner text-center position-relative">
              {/* Video de fondo */}
              <video
                autoPlay
                muted
                loop
                className="bg-video position-absolute w-100 h-100"
                style={{ objectFit: "cover", top: 0, left: 0 }}
              >
                <source
                  src="https://res.cloudinary.com/dqgjcfosx/video/upload/v1726834753/7667101-uhd_3840_2160_30fps_tpxp07.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Contenido del banner */}
              <div
                className="d-flex flex-column justify-content-center align-items-center h-100"
                style={{ zIndex: 99 }}
              >
                <h1 className="banner-title">ASOCIARME</h1>
                <p className="sub-title_banner text-center mb-5">
                  Descubri las opciones de membresía que ofrecemos y eligi la
                  que mejor se adapte a tus necesidades.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center text-center content-cards">
            <div className="col-md-4 col-sm-6 mb-4">
              <div
                className="card h-100 p-3 border-light shadow-sm"
                style={{
                  transition: "transform 0.3s",
                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <i
                    className="fas fa-user-tie fa-2x mb-3"
                    style={{ color: "rgb(51, 51, 51)" }}
                  ></i>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Gestor
                  </h5>
                  <p className="card-text text-muted">
                    Apoya y guía a otros en el proceso de asociación y gestión
                    de beneficios.
                  </p>
                  <div className="text-center mt-5 btn-asociarte-custom_2">
                    <button
                      type="button"
                      className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
                    >
                      ASOCIATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div
                className="card h-100 p-3 border-light shadow-sm"
                style={{
                  transition: "transform 0.3s",
                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <i
                    className="fas fa-handshake fa-2x mb-3"
                    style={{ color: "rgb(51, 51, 51)" }}
                  ></i>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Socio Adherente (sin Reprocan)
                  </h5>
                  <p className="card-text text-muted">
                    Accede a beneficios exclusivos como socio adherente sin el
                    programa Reprocan.
                  </p>
                  <div className="text-center mt-5 btn-asociarte-custom_2">
                    <button
                      type="button"
                      className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
                    >
                      ASOCIATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div
                className="card h-100 p-3 border-light shadow-sm"
                style={{
                  transition: "transform 0.3s",
                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <i
                    className="fas fa-user-check fa-2x mb-3"
                    style={{ color: "rgb(51, 51, 51)" }}
                  ></i>
                  <h5
                    className="card-title"
                    style={{ color: "rgb(51, 51, 51)", fontWeight: "bold" }}
                  >
                    Socio Adherente (con Reprocan)
                  </h5>
                  <p className="card-text text-muted">
                    Benefíciate de programas adicionales con acceso a Reprocan.
                  </p>
                  <div className="text-center mt-5 btn-asociarte-custom_2">
                    <button
                      type="button"
                      className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
                    >
                      ASOCIATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agrega aquí el pie de página o cualquier otra sección que necesites */}
      </div>
    </>
  );
};

export default App;
