import React, { useContext, useEffect, useState } from "react";
import "./EventosAlunoPage.css";

import MainContent from "../../components/Main/MainContent";
import Title from "../../components/Title/Title";
import TableEventosAluno from "./TableEventosAluno/TableEventosAluno";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import Modal from "../../components/Modal/Modal";
import { UserContext } from "../../context/AuthContext";
import api, {
  eventsResource,
  eventsTypeResource,
  instituicaoResource,
} from "../../Services/Service";

const EventosAlunoPage = () => {
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);
  const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [evento, setEvento] = useState([]);
  const [notifyUser, setNotifyUser] = useState();
  const { userData, setUserData } = useContext(UserContext);

  async function loadStudentEventsType() {
    setShowSpinner(true);

    try {
      const retorno = await api.get(eventsResource);
      setEvento(retorno.data);
    } catch (error) {
      setNotifyUser({
        titleNote: "Erro",
        textNote: "Erro ao carregar eventos. Verifique sua conexão.",
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustração de falha. Rapaz segurando um balão com símbolo x.",
        showMessage: true,
      });
    }
    setShowSpinner(false);
  }
  useEffect(() => {
    // loadStudentEventsType();
  }, []);

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      {showSpinner ? <Spinner /> : null}

      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos}
            manipulationFunction={(e) => myEvents(e.target.value)} 
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <TableEventosAluno
            dados={evento}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
