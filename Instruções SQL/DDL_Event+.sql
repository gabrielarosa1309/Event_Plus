--DDL Database Definition Language

--criar banco de dados
CREATE DATABASE [Event+_manha]
USE [Event+_manha]

--criar tabelas
CREATE TABLE TiposDeUsuario
(
	IdTipoUsuario INT PRIMARY KEY IDENTITY,
	TituloTipoUsuario VARCHAR(20) NOT NULL
)

CREATE TABLE TiposDeEvento
(
	IdTipoEvento INT PRIMARY KEY IDENTITY,
	TituloTipoEvento VARCHAR(50) NOT NULL UNIQUE
)

CREATE TABLE Instituicao
(
	IdInstituicao INT PRIMARY KEY IDENTITY,
	CNPJ CHAR(14),
	NomeFantasia VARCHAR(25) NOT NULL,
	Endereco VARCHAR (100) NOT NULL
)

CREATE TABLE Usuario
(
	IdUsuario INT PRIMARY KEY IDENTITY,
	IdTipoUsuario INT FOREIGN KEY REFERENCES TiposDeUsuario(IdTipoUsuario) NOT NULL,
	Nome VARCHAR(50) NOT NULL,
	Email VARCHAR(256) NOT NULL UNIQUE,
	Senha VARCHAR(100) NOT NULL
)

CREATE TABLE Evento
(
	IdEvento INT PRIMARY KEY IDENTITY,
	IdInstituicao INT FOREIGN KEY REFERENCES Instituicao(IdInstituicao) NOT NULL,
	IdTipoEvento INT FOREIGN KEY REFERENCES TiposDeEvento(IdTipoEvento) NOT NULL,
	NomeEvento VARCHAR(50) NOT NULL,
	Descricao VARCHAR(256) NOT NULL,
	DataEvento DATE NOT NULL,
	HorarioEvento TIME NOT NULL
)

CREATE TABLE PresencasEvento
(
	IdPresencaEvento INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario) NOT NULL,
	IdEvento INT FOREIGN KEY REFERENCES Evento(IdEvento) NOT NULL,
	Situacao BIT DEFAULT (0)
)

CREATE TABLE Comentario
(
	IdComentario INT PRIMARY KEY IDENTITY,
	IdEvento INT FOREIGN KEY REFERENCES Evento(IdEvento) NOT NULL,
	IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario) NOT NULL,
	Descricao VARCHAR(256) NOT NULL,
	Exibe BIT DEFAULT (0) 
)