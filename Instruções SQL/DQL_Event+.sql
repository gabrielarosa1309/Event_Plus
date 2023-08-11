--DQL Database Query Language

USE [Event+_manha]

--consulta de dados

SELECT * FROM TiposDeUsuario
SELECT * FROM TiposDeEvento
SELECT * FROM Instituicao
SELECT * FROM Usuario
SELECT * FROM Evento
SELECT * FROM PresencasEvento
SELECT * FROM Comentario

SELECT
	Usuario.Nome AS [Nome do Usuário],
	TiposDeUsuario.TituloTipoUsuario AS [Tipo do Usuário], 
	Evento.DataEvento AS [Data do Evento],
	CONCAT (Instituicao.NomeFantasia,'',Instituicao.Endereco) AS [Local do Evento],
	TiposDeEvento.TituloTipoEvento AS [Tipo do Evento],
	Evento.NomeEvento AS [Nome do Evento],
	Evento.Descricao AS [Descrição do Evento],
	PresencasEvento.Situacao AS [Situação], 
	Comentario.Descricao AS [Comentário do Usuário]
FROM Evento
INNER JOIN TiposDeEvento
ON Evento.IdTipoEvento = TiposDeEvento.IdTipoEvento
INNER JOIN Instituicao
ON Evento.IdInstituicao = Instituicao.IdInstituicao
INNER JOIN PresencasEvento
ON Evento.IdEvento = PresencasEvento.IdEvento
INNER JOIN Usuario
ON PresencasEvento.IdUsuario = Usuario.IdUsuario
INNER JOIN TiposDeUsuario
ON TiposDeUsuario.IdTipoUsuario = Usuario.IdTipoUsuario
LEFT JOIN Comentario
ON Comentario.IdUsuario = Usuario.IdUsuario
