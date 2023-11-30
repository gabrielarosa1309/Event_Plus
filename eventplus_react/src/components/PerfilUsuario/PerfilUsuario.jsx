import React from "react";
import iconeLogout from "../../assets/images/images/icone-logout.svg";

import "./PerfilUsuario.css";
const PerfilUsuario = () => {
  return (
    <div className="perfil-usuario">
      <span className="perfil-usuario__menuitem">Eduardo</span>

      <span className="perfil-usuario__menuitem"></span>

      <img
        title="Deslogar"
        className="perfil-usuario__icon"
        src={iconeLogout}
        alt="imagem ilustrativa de uma porta de saída do usuário "
      />
    </div>
  );
};

export default PerfilUsuario;