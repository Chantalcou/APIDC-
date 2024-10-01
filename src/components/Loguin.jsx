// // Login.js
// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate si es necesario
// import "./Loguin.css"; // Asegúrate de tener un CSS específico para Login si es necesario

// const Login = () => {
//   const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (isAuthenticated && user) {
//         const token = await getAccessTokenSilently();
//         console.log(token, "TOKEN");

//         try {
//           const response = await fetch("http://localhost:5000/register", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // Envía el token en la cabecera
//             },
//             body: JSON.stringify({
//               email: user.email,
//               name: user.given_name,
//             }),
//           });

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const contentType = response.headers.get("content-type");
//           if (contentType && contentType.includes("application/json")) {
//             const data = await response.json();
//             console.log(data);
//           } else {
//             console.error("La respuesta no es JSON", response);
//           }

//           // Redirige a la página de inicio después de enviar los datos
//           navigate("http://localhost:3000/");
//         } catch (error) {
//           console.error("Error al realizar la solicitud:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [isAuthenticated, getAccessTokenSilently, user, navigate]);

//   return (
//     <div className="login-container">
//       {isAuthenticated ? (
//         <div className="welcome-message">
//           <h1>
//             Hola, <span className="user-name">{user.name}</span>
//           </h1>
//           <p>¡Nos alegra verte de nuevo!</p>
//         </div>
//       ) : (
//         <p>No autenticado</p>
//       )}
//     </div>
//   );
// };

// export default Login;
