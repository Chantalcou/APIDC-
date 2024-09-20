import React from 'react';
import './Gestor.css'; // Asegúrate de ajustar la ruta a tu archivo CSS

const Gestor = () => {
  return (
    <div>
      <div className="gestorAsociate-content">
        <h1 className="gestor-title">UNITE COMO GESTOR</h1>
        <p className="subtitle-gestor">
          Conviértete en un pilar fundamental de nuestra misión en la industria del cannabis medicinal. Como Gestor, tendrás el privilegio de liderar, asesorar y apoyar a nuestros asociados en un entorno innovador y de vanguardia. Aportarás tu experiencia y liderazgo para transformar vidas y contribuir a un futuro más saludable y sostenible. Este es el momento perfecto para hacer una diferencia real. ¿Estás listo para el desafío?
        </p>
        <a href="#formulario-asociacion" className="scroll-arrow">↓</a>
      </div>

      <div id="formulario-asociacion" className="my-5 container formulario-container">
        <h2 className="gestor-title_formulario">Formulario de Asociación</h2>
        <form className="formulario-form">
          <div>
            <label className="form-label" htmlFor="formName">Nombre Completo</label>
            <input
              placeholder="Ingresa tu nombre completo"
              type="text"
              id="formName"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="formEmail">Correo Electrónico</label>
            <input
              placeholder="Ingresa tu correo electrónico"
              type="email"
              id="formEmail"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="formPayment">Monto de Pago</label>
            <input
              placeholder="Especifica el monto para Gestor"
              type="number"
              id="formPayment"
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-lg btn-outline-success mt-4 home-button_conocenos">Enviar solicitud</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Gestor;
