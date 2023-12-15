import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";

import { UserContext } from "../../context/AuthContext";
import trashDelete from "../../assets/images/images/trash-delete-red.png";
import { Button, Input } from "../FormComponents/FormComponents";

const Modal = ({
  modalTitle = "Feedback",
  comentaryText = "Não informado.",
  showHideModal = false,
  fnDelete = null,
  fnGet = null,
  fnPost = null,
  newComentary,
  setNewComentary = null,
  fnNewCommentary = null
}) => {
  const {userData} = useContext(UserContext);

  useEffect (() => {
    async function carregarDados() {
      const obj = await fnGet(userData.idEvento)
    }

    carregarDados();
  } , [newComentary]);

  return (
    <div className="modal">
      <article className="modal__box">
        
        <h3 className="modal__title">
          {modalTitle}
          <span className="modal__close" onClick={()=> showHideModal(true)}>x</span>
        </h3>

        <div className="comentary">
          <h4 className="comentary__title">Comentário</h4>
          <img
            src={trashDelete}
            className="comentary__icon-delete"
            alt="Ícone de uma lixeira"
            onClick={fnDelete}
          />

          <p className="comentary__text">{comentaryText}</p>

          <hr className="comentary__separator" />
        </div>

        <Input
          placeholder="Escreva seu comentário..."
          additionalClass = "comentary__entry"
          type={"text"}
          required={"required"}

          manipulatorFunction={(e) => {setNewComentary(e.target.value)}}
          value={newComentary}
        />

        <Button
          textButton="Comentar"
          additionalClass = "comentary__button"
          manipulationFunction={fnPost}
        />
      </article>
    </div>
  );
};

export default Modal;