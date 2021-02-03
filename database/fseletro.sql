CREATE DATABASE IF NOT EXISTS fseletro

DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_general_ci;

USE fseletro;

CREATE TABLE produtos (
	idproduto INT NOT NULL AUTO_INCREMENT,
	categoria VARCHAR(25) NOT NULL,
	descricao VARCHAR(200) NOT NULL,
	preco DECIMAL(6,2) NOT NULL,
	precoVenda DECIMAL (6,2) NOT NULL,
	imagem VARCHAR(150),
	PRIMARY KEY (idproduto)
) DEFAULT CHARSET = utf8;

CREATE TABLE pedidos (
	idpedido INT NOT NULL AUTO_INCREMENT,
	nomecliente VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
	endereco VARCHAR(200) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	nomeproduto VARCHAR(35) NOT NULL,
	valorunitario DECIMAL(6,2) NOT NULL,
	quantidade INT,
	valortotal DECIMAL(7,2),
	PRIMARY KEY (idpedido)
);

CREATE TABLE clientes (
	id_cliente INT NOT NULL auto_increment,
	nome_cliente VARCHAR(50),
	email VARCHAR(70),
	PRIMARY KEY (id_cliente)
);

CREATE TABLE mensagens (
	id_msg INT NOT NULL auto_increment,
	id_cliente INT NOT NULL,
	mensagem VARCHAR(300),
	PRIMARY KEY (id_msg),
	FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
);

INSERT INTO produtos (idproduto, categoria, descricao, preco, precoVenda, imagem)
	VALUES
	(DEFAULT, 'Celular', 'Smartphone Xiaomi Redmi Note 8 48Mp 64Gb/4Gb Neptune Blue', '1699.00', '1479.00', 'images/celular1.jpg'),
	(DEFAULT, 'Celular', 'Smartphone Motorola Moto G9 Play Azul Safira 64GB, 4GB RAM', '1587.00', '1349.00', 'images/celular2.jpg'),
	(DEFAULT, 'Celular', 'Smartphone Samsung Galaxy A20s Vermelho 32GB, Câmera Tripla Traseira', '1199.00', '1099.00', 'images/celular3.jpg'),
	(DEFAULT, 'Smart TV', 'Smart TV LED 32 HD LG 32, HDR Bluetooth, HDMI e USB, WebOS 4.5', '1574.90', '1349.00', 'images/tv1.jpg'),
	(DEFAULT, 'Smart TV', 'Smart TV LED 43 Full HD LG 43, WebOS 4.5, Wi-Fi, HDMI', '1845.00', '1769.00', 'images/tv2.jpg'),
	(DEFAULT, 'Smart TV', 'Smart TV LED 32 HD Samsung com Wi-Fi, HDMI e USB', '1183.00', '929.00', 'images/tv3.jpg'),
	(DEFAULT, 'Vídeo Game', 'Console PS4 - Modelo Slim 1TB + Jogo Days Gone - Preto', '2579.00', '2399.00', 'images/videogame1.jpg'),
	(DEFAULT, 'Vídeo Game', 'Console Xbox One X 1Tb 4K Microsoft + 3 Jogos', '3890.00', '3499.00', 'images/videogame2.jpg'),
	(DEFAULT, 'Notebook', 'Notebook Dell Core i3 4GB 1TB Tela 15.6 Linux Inspiron HD 500GB', '3099.00', '2899.10', 'images/notebook1.jpg'),
	(DEFAULT, 'Notebook', 'Notebook Positivo Motion Red Q232B Intel 2GB 32GB Tela 14', '2521.00', '2359.00', 'images/notebook2.jpg'),
	(DEFAULT, 'Computador', 'Computador Gamer Intel Core i3 8GB HD 500GB Nvidia Geforce GT', '2899.00', '2649.00', 'images/computador1.jpg'),
	(DEFAULT, 'Computador', 'Computador Com Monitor Led 19.5 Easypc Intel Dual Core 2.41 4Gb', '1699.00', '1470.00', 'images/computador2.jpg');

SELECT nome_cliente, mensagem FROM mensagens
JOIN clientes ON clientes.id_cliente = mensagens.id_cliente;

SELECT * FROM pedidos;

