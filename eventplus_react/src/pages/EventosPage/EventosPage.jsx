import React from 'react';
import './EventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';
import eventoImg from '../../assets/images/images/evento.svg';
import { Input, Button, Select } from "../../components/FormComponents/FormComponents";
import api, { eventsResource } from '../../Services/Service';
import Notification from '../../components/Notification/Notification';
import Spinner from '../../components/Spinner/Spinner';
import TableEvento from './TableEvento/TableEvento';

const EventosPage = () => {
    // const [frmEdit, setFrmEdit] = useState(false); //está em modo de edição?
    // const [nomeEvento, setNomeEvento] = useState("");
    // const [descricao, setDescricao] = useState("");
    // const [dataEvento, setDataEvento] = useState("");
    // const [evento, setEvento] = useState([]);
    // const [instituicao, setInstituicao] = useState([]);
    // const [Evento, setIdEvento] = useState(null);
    // const [notifyUser, setNotifyUser] = useState();
    // const [showSpinner, setShowSpinner] = useState(false);

    // useEffect(() => {
    //     async function loadEvents() {
    //         setShowSpinner(true); 

    //         try {
    //             const retorno = await api.get(eventsResource);
    //             setEvento(retorno.data)
    //         } catch(error) {
    //             setNotifyUser({
    //                 titleNote: "Erro",
    //                 textNote: "Não foi possível carregar os próximos eventos. Verifique sua conexão.",
    //                 imgIcon: "danger",
    //                 imgAlt: "Imagem de ilustração de falha. Rapaz segurando um balão com símbolo x.",
    //                 showMessage: true
    //             })
    //             console.log(error);
    //         }

    //         setShowSpinner(false);
    //     }
    //     //chama a função/api no carregamento da página/componente
    //     loadEvents();
    // }, []);

    // /**
    //  * Função que adiciona um tipo de evento na API
    //  */
    //     async function handleSubmit(e) {
    //         e.preventDefault(); //evita o submit do form
            
    //         //valida se o título a ser cadastrado possui a quantidade mínima de caracteres
    //         if(nomeEvento.trim().length < 3) {
    //             setNotifyUser({
    //                 titleNote: "Aviso",
    //                 textNote: "O título deve ter pelo menos 3 caracteres!",
    //                 imgIcon: "warning",
    //                 imgAlt: "",
    //                 showMessage: true
    //             })
    //             return;
    //         }
    
    //         setShowSpinner(true);
    
    //         try {
    //             //cadastrar na API
    //             const retorno = await api.post(eventsResource, {nomeEvento:nomeEvento});
    //             //limpa o state
    //             setNomeEvento(""); 
    //             //notifica o usuário que deu tudo certo
    //             setNotifyUser({
    //                 titleNote: "Sucesso",
    //                 textNote: "Tipo de evento cadastrado com sucesso",
    //                 imgIcon: "success",
    //                 imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
    //                 showMessage: true
    //             })
    //             //atualiza os dados
    //             const buscaEventos = await api.get(eventsTypeResource);
    //             setTipoEvento(buscaEventos.data);
    
    //         } catch(error) {
    //             //notifica o usuário que deu tudo errado
    //             setNotifyUser({
    //                 titleNote: "Erro",
    //                 textNote: "Erro ao cadastrar tipo de evento. Verifique sua conexão.",
    //                 imgIcon: "danger",
    //                 imgAlt: "Imagem de ilustração de falha. Rapaz segurando um balão com símbolo x.",
    //                 showMessage: true
    //             })
    //         }
    
    //         setShowSpinner(false);
    //     }

    return (
        <>
            {/* {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
            {showSpinner ? <Spinner /> : null} */}

            <MainContent>
                {/* SECTION DE CADASTRO E ATUALIZAÇÃO DO EVENTO */}
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Cadastro de Eventos"}/>
                            
                            <ImageIllustrator imgRender={eventoImg} />

                            
                        </div>
                    </Container>
                </section>

                
                {/* SECTION DA TABELA DE EVENTOS */}
                <section className="lista-eventos-section">
                    <Container>
                        <Title titleText={"Lista de Eventos"} color="white"/>
                        <TableEvento
                            // dados={evento}
                            // fnUpdate={showUpdateForm}
                            // fnDelete={handleDelete}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default EventosPage;