--DML Database Manipulation Language

USE [Event+_manha]

--inser��o de dados

INSERT INTO TiposDeUsuario (TituloTipoUsuario)
VALUES ('Administrador'),('Comum')

INSERT INTO TiposDeEvento (TituloTipoEvento)
VALUES ('SQL Server'),('C#')

INSERT INTO Instituicao(CNPJ,NomeFantasia,Endereco)
VALUES ('12345678901234','DevSchool','Rua Niter�i, 180 - S�o Caetano')

INSERT INTO Usuario(IdTipoUsuario,Nome,Email,Senha)
VALUES (1,'Carlos','admin@admail.com','admin1234'),(2,'Gabi','user@user.com','user1234')

INSERT INTO Evento(IdTipoEvento,IdInstituicao,NomeEvento,Descricao,DataEvento,HorarioEvento)
VALUES (1,1,'Introdu��o ao Banco de Dados SQL Server','Aprenda conceitos b�sicos do SQL Server','2023-08-10','10:32:08'),(2,1,'Introdu��o a C#','Aprenda a programar com C#','2023-08-10','10:33:47')

INSERT INTO PresencasEvento(IdUsuario,IdEvento,Situacao)
VALUES (1,1,0),(2,2,1)

INSERT INTO Comentario(IdUsuario,IdEvento,Descricao,Exibe)
VALUES (1,1,'Excelente evento, professores top!',1),(2,2,'Evento bom, bastante din�micas!',1)

