import React from "react";
import "./Gestor.css";

const Gestor = () => {
  return (
    <div>
      <div className="container-video_gestor my-1">
        <div className="bg-banner_gestor text-center position-relative">
          <video
            autoPlay
            muted
            loop
            className="bg-video_gestor position-absolute w-100 h-100"
            style={{ objectFit: "cover", top: 0, left: 0 }}
          >
            <source
              src="https://res.cloudinary.com/dqgjcfosx/video/upload/v1727093698/3141208-uhd_3840_2160_25fps_cgnnpe.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div
            id="asociarme-seccion"
            className="d-flex flex-column justify-content-center align-items-center h-100"
            style={{ zIndex: 99 }}
          >
            <h1 className="banner-title">UNITE COMO GESTOR</h1>
            <p className="sub-title_banner text-center mb-5">
              Conviértete en un pilar fundamental de nuestra misión en la
              industria del cannabis medicinal. Como Gestor, tendrás el
              privilegio de liderar, asesorar y apoyar a nuestros asociados en
              un entorno innovador y de vanguardia. Aportarás tu experiencia y
              liderazgo para transformar vidas y contribuir a un futuro más
              saludable y sostenible. Este es el momento perfecto para hacer una
              diferencia real. ¿Estás listo para el desafío?
            </p>
          </div>
        </div>
      </div>

      <div
        id="formulario-asociacion"
        className="my-5 container formulario-container"
      >
        <h2 className="gestor-title_formulario">Formulario de Asociación</h2>
        <form className="formulario-form">
          <div>
            <label className="form-label" htmlFor="formName">
              Nombre Completo
            </label>
            <input
              placeholder="Ingresa tu nombre completo"
              type="text"
              id="formName"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="formEmail">
              Correo Electrónico
            </label>
            <input
              placeholder="Ingresa tu correo electrónico"
              type="email"
              id="formEmail"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="formPayment">
              Monto de Pago
            </label>
            <input
              placeholder="Especifica el monto para Gestor"
              type="number"
              id="formPayment"
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-lg btn-outline-success mt-4 home-button_conocenos"
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Gestor;
