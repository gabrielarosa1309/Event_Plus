--DML Database Manipulation Language

USE [Event+_manha]

--inserção de dados

INSERT INTO TiposDeUsuario (TituloTipoUsuario)
VALUES ('Administrador'),('Comum')

INSERT INTO TiposDeEvento (TituloTipoEvento)
VALUES ('SQL Server'),('C#')

INSERT INTO Instituicao(CNPJ,NomeFantasia,Endereco)
VALUES ('12345678901234','DevSchool','Rua Niterói, 180 - São Caetano')

INSERT INTO Usuario(IdTipoUsuario,Nome,Email,Senha)
VALUES (1,'Carlos','admin@admail.com','admin1234'),(2,'Gabi','user@user.com','user1234')

INSERT INTO Evento(IdTipoEvento,IdInstituicao,NomeEvento,Descricao,DataEvento,HorarioEvento)
VALUES (1,1,'Introdução ao Banco de Dados SQL Server','Aprenda conceitos básicos do SQL Server','2023-08-10','10:32:08'),(2,1,'Introdução a C#','Aprenda a programar com C#','2023-08-10','10:33:47')

INSERT INTO PresencasEvento(IdUsuario,IdEvento,Situacao)
VALUES (1,1,0),(2,2,1)

INSERT INTO Comentario(IdUsuario,IdEvento,Descricao,Exibe)
VALUES (1,1,'Excelente evento, professores top!',1),(2,2,'Evento bom, bastante dinâmicas!',1)

