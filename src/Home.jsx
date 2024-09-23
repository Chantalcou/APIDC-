import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import $ from "jquery";
import ScrollArrow from "./components/ScrollArrow.jsx";
import Footer from "./components/Footer.jsx";
import { ButtonComponent } from "./components/Button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // 1 segundo es el tiempo de la animación
  };

  const scrollToSection = (sectionId) => {
    $("html, body").animate(
      {
        scrollTop: $("#" + sectionId).offset().top,
      },
      1000 // Duración de la animación en milisegundos
    );
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="container-fluid p-0 main-content">
          <div className="video-container">
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
              <ButtonComponent
                text="Conocenos"
                onClick={() => scrollToSection("about-section")}
                color={{
                  background: "transparent",
                  text: "#ffffff",
                  border: "2px solid white",
                }}
              />
            </div>
          </div>
        </div>
        <div className="about-section" id="about-section">
          <div>
            <div className="content-about_section row text-center my-5 ">
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
            <div className="static-content d-flex flex-column justify-content-center align-items-center mt-5 h-100 position-relative">
              <ScrollArrow onClick={() => scrollToSection("present-section")} />
            </div>

            <div className="present-section" id="present-section">
              <div className="present-content">
                <h2>NUESTRO PRESENTE</h2>
                <p>
                  Actualmente asistimos a usuarios terapéuticos; acompañando a
                  la comunidad con el servicio de gestión, asesoramiento y
                  vinculación a REPROCANN. Actualmente asistimos a usuarios
                  terapéuticos; acompañando a la comunidad con el servicio de
                  gestión, asesoramiento y vinculación a REPROCANN. Actualmente
                  asistimos a usuarios terapéuticos; acompañando a la comunidad
                  con el servicio de gestión.
                </p>

                <div className="btn-asociarte-custom text-center">
                  <ButtonComponent
                    text="ASOCIATE"
                    onClick={() => scrollToSection("asociarme-seccion")}
                    color={{
                      background: "transparent",
                      text: "black",
                      border: "2px solid black",
                    }}
                    customClass="hover-change-to-white"
                  />
                </div>
              </div>
              <div className="present-image">
                <img
                  src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1727005386/apidc-all_d15wow.jpg"
                  alt="Nuestro presente"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="membership-section" className="py-1 bg-light">
          <div className="container-video_2 my-1">
            <div className="bg-banner text-center position-relative">
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

              <div
                id="asociarme-seccion"
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
                style={{ transition: "transform 0.3s", borderRadius: "10px" }}
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
                    <ButtonComponent
                      text="ASOCIATE"
                      onClick={() => navigate("/gestor")}
                      color={{
                        background: "transparent",
                        text: "black",
                        border: "2px solid black",
                      }}
                      customClass="hover-change-to-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div
                className="card h-100 p-3 border-light shadow-sm"
                style={{ transition: "transform 0.3s", borderRadius: "10px" }}
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
                    Obtén acceso a asesoría, descuentos y un espacio en nuestra
                    comunidad.
                  </p>
                  <div className="text-center mt-5 btn-asociarte-custom_2">
                    <ButtonComponent
                      text="ASOCIATE"
                      onClick={scrollToSection}
                      color={{
                        background: "transparent",
                        text: "black",
                        border: "2px solid black",
                      }}
                      customClass="hover-change-to-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div
                className="card h-100 p-3 border-light shadow-sm"
                style={{ transition: "transform 0.3s", borderRadius: "10px" }}
              >
                <div className="card-body">
                  <i
                    className="fas fa-user-md fa-2x mb-3"
                    style={{ color: "rgb(51, 51, 51)" }}
                  ></i>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Socio Adherente (con Reprocan)
                  </h5>
                  <p className="card-text text-muted">
                    Con beneficios adicionales y prioridad en el acceso a
                    información y eventos.
                  </p>
                  <div className="text-center mt-5 btn-asociarte-custom_2">
                    <ButtonComponent
                      text="ASOCIATE"
                      onClick={scrollToSection}
                      color={{
                        background: "transparent",
                        text: "black",
                        border: "2px solid black",
                      }}
                      customClass="hover-change-to-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
