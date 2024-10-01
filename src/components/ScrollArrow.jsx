// ScrollArrow.jsx
import React from 'react';
import './ScrollArrow.css'; // Para estilos personalizados

const ScrollArrow = ({ onClick }) => {
  return (
    <div className="scroll-arrow" onClick={onClick}>
      <i className="fas fa-chevron-down"></i> {/* Ícono de la flecha */}
    </div>
  );
};

export default ScrollArrow;










// import React, { useEffect, useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom"; // Importa useNavigate
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./NavBar.css";

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [dataSent, setDataSent] = useState(false); // Estado para evitar múltiples envíos
//   const navigate = useNavigate();

//   // Manejo del scroll para mostrar/ocultar la navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setIsScrolling(
//         currentScrollPos > 50 ? scrollPosition < currentScrollPos : false
//       );
//       setScrollPosition(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollPosition]);

//   // useEffect para enviar datos al backend cuando el usuario se autentica
//   useEffect(() => {
//     const sendUserData = async () => {
//       if (isAuthenticated && user && !dataSent) {
//         try {
//           const token = await getAccessTokenSilently();
//           console.log("Token obtenido:", token);

//           const response = await fetch("http://localhost:5000/register", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//               email: user.email,
//               name: user.given_name,
//             }),
//           });

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const data = await response.json();
//           console.log("Respuesta del backend:", data);
//           setDataSent(true); // Marca que los datos ya fueron enviados

//           // Redirige a la página de inicio si no estás ya allí
//           if (window.location.pathname !== "/") {
//             navigate("/");
//           }
//         } catch (error) {
//           console.error("Error al enviar datos al backend:", error);
//         }
//       }
//     };

//     sendUserData();
//   }, [isAuthenticated, user, getAccessTokenSilently, dataSent, navigate]);

//   // Función para manejar el login
//   const handleLogin = () => {
//     loginWithRedirect(); // Redirige a / (configurado en Auth0Provider)
//   };

//   // Función para manejar el logout
//   const handleLogout = () => {
//     logout({ returnTo: window.location.origin });
//   };

//   return (
//     <Navbar
//       expand="lg"
//       fixed="top"
//       className={`${isScrolling ? "scroll-hide" : "scroll-show"}`}
//       bg="dark"
//       variant="dark"
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//             src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1725976604/APIDC-LOGO-01-121x121_qnzw4d.png"
//             alt="Logo"
//             width="60"
//             height="60"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto align-items-center">
//             <Nav.Link href="/">INICIO</Nav.Link>
//             <Nav.Link href="/contacto">CONTACTO</Nav.Link>
//             {isAuthenticated ? (
//               <>
//                 <Nav.Link href="#" className="d-flex align-items-center">
//                   <img
//                     src={user.picture}
//                     alt="Profile"
//                     className="profile-picture me-2"
//                   />
//                   <span className="user-name">{user.name}</span>
//                 </Nav.Link>
//                 <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
//               </>
//             ) : (
//               <Nav.Link onClick={handleLogin}>LOGIN</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
