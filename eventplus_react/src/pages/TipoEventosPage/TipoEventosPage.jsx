import React, {useEffect, useState} from 'react';
import './TipoEventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';
import TableTp from './TableTp/TableTp';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';
import tipoEventoImg from '../../assets/images/images/tipo-evento.svg';
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource } from '../../Services/Service';

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false); //está em modo de edição?
    const [titulo, setTitulo] = useState();
    const [tipoEvento, setTipoEvento] = useState([]);

    useEffect(() => {
        async function loadEventsType() {
            try {
                const retorno = await api.get(eventsTypeResource);
                setTipoEvento(retorno.data)
            } catch(error) {
                console.log("Erro na API");
                console.log(error);
            }
        }
        //chama a função/api no carregamento da página/componente
        loadEventsType();
    }, [tipoEvento]);

    /**
     * Função que adiciona um tipo de evento na API
     */
    async function handleSubmit(e) {
        e.preventDefault(); //evita o submit do form
        
        if(titulo.trim().length < 3) {
            alert("O título deve ter pelo menos 3 caracteres!");
        }

        try {
            const retorno = await api.post(eventsTypeResource, {titulo:titulo});
            alert("Deu bom no submit");
        } catch(error) {
            alert("Deu ruim no submit");
        }
    }
    
    /**
     * Função que mostra o formulário de edição do tipo de evento
    */
   function showUpdateForm() {
       
    }

    /**
    * Função que cancela a alteração do tipo de evento na API
    */
    function editActionAbort() {
    
    }

    /**
    * Função que altera o tipo de evento na API
    */
    function handleUpdate() {

    }

    /**
     * Função que exclui um tipo de evento na API
     */
    async function handleDelete(idtipoevento) {
        // alert("Certeza que deseja excluir o tipo de evento " + `"${titulo}"` + "?");

        if(! window.confirm("Certeza que deseja excluir o tipo de evento " + `"${titulo}"` + "?")){
            return;
        }

        try {
            const promise = await api.delete(eventsTypeResource + `/${idtipoevento}`);

            if(promise.status == 204){
                alert("Evento deletado!");
            }
        } catch(error) {
            alert("Deu ruim pra deletar o evento");
        }
    }
    
    return (
        <>
            <MainContent>
                {/* SECTION DE CADASTRO E ATUALIZAÇÃO DE TIPO DE EVENTO */}
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Cadastro Tipo de Eventos"}/>
                            
                            <ImageIllustrator imgRender={tipoEventoImg} />

                            <form className="ftipo-evento" onSubmit={frmEdit ? handleUpdate: handleSubmit}>
                                {/* cadastrar ou editar? */}
                                {!frmEdit ? (
                                    <>
                                        <Input
                                            id="Titulo"
                                            placeholder="Título"
                                            name={"titulo"}
                                            type={"text"}
                                            required={"required"}
                                            value={titulo}
                                            manipulationFunction={(e) => {setTitulo(e.target.value);}}
                                        />

                                        <Button textButton="Cadastrar" id="cadastrar" name="casadatrar" type="submit"/>
                                    </>
                                ) : (
                                    <>

                                    </>
                                )
                                }
                            </form>
                        </div>
                    </Container>
                </section>

                {/* SECTION DA TABELA DE TIPOS DE EVENTOS */}
                <section className="lista-eventos-section">
                    <Container>
                        <Title titleText={"Lista Tipo de Eventos"} color="white"/>
                        <TableTp
                            dados={tipoEvento}
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;