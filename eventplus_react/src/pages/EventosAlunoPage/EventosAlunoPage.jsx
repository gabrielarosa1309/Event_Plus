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
  myEventsResource,
  commentEventResource,
  presencesEventResource,
  eventsTypeResource,
  instituicaoResource,
} from "../../Services/Service";

const EventosAlunoPage = () => {
  const [exibeNavbar, setExibeNavbar] = useState(false);
    const [eventos, setEventos] = useState([]); //Eventos para serem buscados
    // select mocado
    const [quaisEventos, setQuaisEventos] = useState([
        { value: 1, text: "Todos os eventos" },
        { value: 2, text: "Meus eventos" },
    ]);
    const [comentario, setComentario] = useState();
    const [novoComentario, setNovoComentario] = useState("");
    const [idComentario, setIdComentario] = useState();
    const [idEvento, setIdEvento] = useState();
    const [notifyUser, setNotifyUser] = useState(); //Componente Notification
    const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido É UMA STRING
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { userData, setUserData } = useContext(UserContext);

  async function loadStudentEventsType() {
    setShowSpinner(true);
    try {
      if (tipoEvento === "1") {
        //todos os eventos
        const promise = await api.get("/Evento");
        const promiseEventos = await api.get(
          `/PresencasEvento/ListarMinhas/${userData.userId}`
        );

        console.clear();
        console.log("TODOS OS EVENTOS");
        console.log(promise.data); //

        console.log("MEUS EVENTOS");
        console.log(promiseEventos.data);

        const dadosMarcados = verificaPresenca(
          promise.data,
          promiseEventos.data
        );
        console.log("DADOS MARCADOS");
        console.log(dadosMarcados);

        setEventos(promise.data);
        // console.log(promise.data);
      } else {
        //meus eventos
        let arrEventos = [];
        const promiseEventos = await api.get(
          `/PresencasEvento/ListarMinhas/${userData.userId}`
        );
        promiseEventos.data.forEach((element) => {
          arrEventos.push({
            ...element.evento,
            situacao: element.situacao,
            idPresencaEvento: element.idPresencaEvento,
          });
        });
        setEventos(arrEventos);
        console.log(promiseEventos.data);
      }
    } catch (error) {
      console.log("Erro ao carregar os eventos");
      console.log(error);
    }
    setShowSpinner(false);
}

  useEffect(() => {
    loadStudentEventsType();
  }, [tipoEvento]);

  const verificaPresenca = (arrAllEvents, eventsUser) => {
    for (let x = 0; x < arrAllEvents.length; x++) {
      //para cada evento principal
      for (let i = 0; i < eventsUser.length; i++) {
        //procurar a correspondência em minhas presenças
        if(arrAllEvents[x].idEvento === eventsUser[i].eventos.idEvento) {
          arrAllEvents[x].situacao = true;
          arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento;
          break;//paro de procurar para o evento principal atual
        }
      }
    }
    
    return arrAllEvents;
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }
  
  const showHideModal = (idEvento) => {
    setNovoComentario("");
    setComentario("Não informado.");

    setShowModal(showModal ? false : true);

    if (showModal) {
      return;
    }

    setUserData({
      ...userData,
      idEvento: idEvento
    })

    setIdEvento(idEvento)

    loadMyCommentary(idEvento);
  };

  //remove o comentário
  async function commentaryRemove() {
    try {
      const request = await api.delete(`${commentEventResource}/${idComentario}`)
      setComentario("Comentário Deletado!")
      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Comentário excluído com sucesso!`,
        imgIcon: "success",
        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
        showMessage: true
    });
    } catch (error) {
      setNotifyUser({
        titleNote: "Aviso",
        textNote: `Não há comentário para excluir!`,
        imgIcon: "warning",
        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
        showMessage: true
      });
    }
  };

  //posta o comentário
  async function postMyCommentary() {
    if (comentario === "Não informado." || comentario === "Comentário excluído!") {
      const request = await api.post(commentEventResource, {
        descricao: novoComentario,
        exibe: true,
        idUsuario: userData.UserId,
        idEvento: idEvento
      });

      setComentario(novoComentario);
      setNovoComentario("");

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Comentário postado com sucesso!`,
        imgIcon: "success",
        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
        showMessage: true
      });
    } else {
      setNotifyUser({
        titleNote: "Aviso",
        textNote: `Só é possivel fazer um comentário por evento!`,
        imgIcon: "warning",
        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
        showMessage: true
      });
    }
  }

  //carrega o comentário
  async function loadMyCommentary(idCommentary) {
    const request = await api.get(`${commentEventResource}/BuscarPorIdUsuario?idAluno=${userData.UserId}&idEvento=${idCommentary}`)

        if(request.status === 200)
        {
            setComentario(request.data.descricao)
            setIdComentario(request.data.idComentario)
        }
  }

  async function handleConnect(eventId, whatTheFunction, presencaId = null) {
    //CONNECT
    if (whatTheFunction === "connect") {
      try {
        const promise = await api.post(presencesEventResource, {situacao : true, idUsuario : userData.userId, idEvento : eventId});

        if (promise.status === 201) {
          loadStudentEventsType();
        
          setNotifyUser({
            titleNote: "Sucesso",
            textNote: "Sua presença foi confirmada para este evento!",
            imgIcon: "success",
            imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
            showMessage: true
          })
        }
      } catch (error) {
        setNotifyUser({
          titleNote: "Erro",
          textNote: "Não foi possível se conectar ao evento. Verifique sua conexão.",
          imgIcon: "danger",
          imgAlt: "Imagem de ilustração de falha. Rapaz segurando um balão com símbolo x.",
          showMessage: true,
          });
      }
      return;
    }

    //UNCONNECT - aqui seria o else
    try {
      const unconnect = api.delete(`${presencesEventResource}/${presencaId}`);

      if (unconnect.status === 204) {
        loadStudentEventsType();

        setNotifyUser({
          titleNote: "Sucesso",
          textNote: "Sua presença foi desconfirmada para este evento!",
          imgIcon: "success",
          imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
          showMessage: true
          })
      }
    } catch (error) {
      setNotifyUser({
        titleNote: "Erro",
        textNote: "Não foi possível se desconectar do evento. Verifique sua conexão.",
        imgIcon: "danger",
        imgAlt: "Imagem de ilustração de falha. Rapaz segurando um balão com símbolo x.",
        showMessage: true,
        });
    }
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
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {showHideModal();}}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnGet={loadMyCommentary}
          fnPost={postMyCommentary}
          fnDelete={commentaryRemove}
          comentaryText={comentario}
          newComentary={novoComentario}
          setNewComentary={setNovoComentario}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;