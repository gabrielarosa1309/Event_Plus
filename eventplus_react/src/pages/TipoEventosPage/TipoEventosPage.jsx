import React, {useState} from 'react';
import './TipoEventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';
import tipoEventoImg from '../../assets/images/images/tipo-evento.svg';

const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false); //está em modo de edição?

    function handleSubmit() {

    }

    function handleUpdate() {

    }
    
    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Cadastro Tipo de Eventos"}/>
                            
                            <ImageIllustrator imgRender={tipoEventoImg} />

                            <form className="ftipo-evento" onSubmit={frmEdit ? handleUpdate: handleSubmit}>
                                {/* cadastrar ou editar? */}
                                {
                                    !frmEdit ? (<p>Tela de Cadastro</p>) : (<p>Tela de Edição</p>)
                                }
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;