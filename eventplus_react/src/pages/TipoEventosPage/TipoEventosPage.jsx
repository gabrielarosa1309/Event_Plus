import React from 'react';
import './TipoEventosPage.css';
import Title from '../../components/Title/Title';
import MainContent from '../../components/Main/MainContent';
import Container from '../../components/Container/Container';

const TipoEventosPage = () => {
    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento-box">
                            {/* <ImgIlustrator/> */}

                            <form className="ftipo-evento">
                                <p>Formulário será criqado aqui</p>
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;