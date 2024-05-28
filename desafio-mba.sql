DROP TABLE IF EXISTS `areas`;

CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL DEFAULT '',
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;

INSERT INTO `areas` (`id`, `description`, `color`)
VALUES
	(1,'TI','#FEB95A'),
	(2,'Marketing','#A9DFD8'),
	(3,'RH','#20AEF3'),
	(4,'Comercial','#F2C8ED');

/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table membros
# ------------------------------------------------------------

DROP TABLE IF EXISTS `membros`;

CREATE TABLE `membros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `funcao` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `membros` WRITE;
/*!40000 ALTER TABLE `membros` DISABLE KEYS */;

INSERT INTO `membros` (`id`, `nome`, `funcao`, `created_at`)
VALUES
	(1,'Alice Silva','Desenvolvedora','2024-05-27 19:53:15'),
	(2,'Bruno Souza','Marketing Digital','2024-05-27 19:53:15'),
	(3,'Carlos Pereira','Analista de Vendas','2024-05-27 19:53:15'),
	(4,'Daniela Oliveira','Consultora de RH','2024-05-27 19:53:15'),
	(5,'Eduardo Lima','Engenheiro de Software','2024-05-27 19:53:15'),
	(6,'Fernanda Martins','Designer Gráfico','2024-05-27 19:53:15'),
	(7,'Gabriel Costa','Gerente de Projetos','2024-05-27 19:53:15'),
	(8,'Helena Alves','Especialista em Benefícios','2024-05-27 19:53:15'),
	(9,'Igor Ferreira','Programador','2024-05-27 19:53:15'),
	(10,'Juliana Gomes','Analista de Marketing','2024-05-27 19:53:15');

/*!40000 ALTER TABLE `membros` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table projetos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projetos`;

CREATE TABLE `projetos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `dead_line` datetime NOT NULL,
  `area` int(2) NOT NULL,
  `status` int(1) DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `projetos` WRITE;
/*!40000 ALTER TABLE `projetos` DISABLE KEYS */;

INSERT INTO `projetos` (`id`, `title`, `description`, `dead_line`, `area`, `status`, `created_at`)
VALUES
	(1,'Desenvolvimento de Aplicativo','Criação de um novo aplicativo móvel para o mercado.','2024-12-31 23:59:59',1,1,'2024-05-27 19:52:59'),
	(2,'Campanha de Marketing Digital','Planejamento e execução de campanha de marketing digital.','2024-11-30 23:59:59',2,1,'2024-05-27 19:52:59'),
	(3,'Estratégia de Vendas 2024','Desenvolvimento da estratégia de vendas para o próximo ano.','2024-10-31 23:59:59',3,0,'2024-05-27 19:52:59'),
	(4,'Treinamento de Liderança','Programa de treinamento de liderança para gestores.','2024-09-30 23:59:59',4,2,'2024-05-27 19:52:59'),
	(5,'Sistema de E-commerce','Implementação de uma nova plataforma de e-commerce.','2024-08-31 23:59:59',1,1,'2024-05-27 19:52:59'),
	(6,'Rebranding da Marca','Processo de rebranding da marca corporativa.','2024-07-31 23:59:59',2,0,'2024-05-27 19:52:59'),
	(7,'Expansão de Mercado','Estratégia para expansão em novos mercados internacionais.','2024-06-30 23:59:59',3,1,'2024-05-27 19:52:59'),
	(8,'Política de Benefícios','Revisão e atualização da política de benefícios dos funcionários.','2024-05-31 23:59:59',4,1,'2024-05-27 19:52:59'),
	(9,'Desenvolvimento de Chatbot','Criação de um chatbot para atendimento ao cliente.','2024-04-30 23:59:59',1,2,'2024-05-27 19:52:59'),
	(10,'Lançamento de Produto','Planejamento e execução do lançamento de um novo produto.','2024-03-31 23:59:59',2,1,'2024-05-27 19:52:59'),
	(11,'Análise de Concorrência','Estudo detalhado sobre os principais concorrentes.','2024-02-29 23:59:59',3,0,'2024-05-27 19:52:59'),
	(12,'Treinamento de Inclusão','Workshop sobre diversidade e inclusão no ambiente de trabalho.','2024-01-31 23:59:59',4,1,'2024-05-27 19:52:59'),
	(13,'Plataforma de Dados','Desenvolvimento de uma plataforma centralizada de dados.','2023-12-31 23:59:59',1,1,'2024-05-27 19:52:59'),
	(14,'Marketing de Conteúdo','Estratégia de marketing de conteúdo para redes sociais.','2023-11-30 23:59:59',2,2,'2024-05-27 19:52:59'),
	(15,'Programa de Fidelidade','Criação de um programa de fidelidade para clientes.','2023-10-31 23:59:59',3,1,'2024-05-27 19:52:59');

/*!40000 ALTER TABLE `projetos` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table projetos_membros
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projetos_membros`;

CREATE TABLE `projetos_membros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_membro` int(11) NOT NULL,
  `id_projeto` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `projetos_membros` WRITE;
/*!40000 ALTER TABLE `projetos_membros` DISABLE KEYS */;

INSERT INTO `projetos_membros` (`id`, `id_membro`, `id_projeto`, `created_at`)
VALUES
	(1,1,1,'2024-05-27 19:53:34'),
	(2,2,2,'2024-05-27 19:53:34'),
	(3,3,3,'2024-05-27 19:53:34'),
	(4,4,4,'2024-05-27 19:53:34'),
	(5,5,5,'2024-05-27 19:53:34'),
	(6,6,6,'2024-05-27 19:53:34'),
	(7,7,7,'2024-05-27 19:53:34'),
	(8,8,8,'2024-05-27 19:53:34'),
	(9,9,9,'2024-05-27 19:53:34'),
	(10,10,10,'2024-05-27 19:53:34'),
	(11,1,11,'2024-05-27 19:53:34'),
	(12,2,12,'2024-05-27 19:53:34'),
	(13,3,13,'2024-05-27 19:53:34'),
	(14,4,14,'2024-05-27 19:53:34'),
	(15,5,15,'2024-05-27 19:53:34');

/*!40000 ALTER TABLE `projetos_membros` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tarefas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tarefas`;

CREATE TABLE `tarefas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` longtext NOT NULL,
  `status` int(1) DEFAULT '0',
  `id_membro` int(11) DEFAULT NULL,
  `id_projeto` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `tarefas` WRITE;
/*!40000 ALTER TABLE `tarefas` DISABLE KEYS */;

INSERT INTO `tarefas` (`id`, `description`, `status`, `id_membro`, `id_projeto`, `created_at`, `updated_at`)
VALUES
	(1,'Desenvolver protótipo inicial',0,1,1,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(2,'Configurar campanha de anúncios',0,2,2,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(3,'Analisar dados de vendas',1,3,3,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(4,'Organizar sessões de treinamento',1,4,4,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(5,'Integrar sistema de pagamento',0,5,5,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(6,'Criar novo logo',0,6,6,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(7,'Estudar mercado-alvo',1,7,7,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(8,'Atualizar política de benefícios',0,8,8,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(9,'Programar respostas do chatbot',1,9,9,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(10,'Desenvolver material de marketing',0,10,10,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(11,'Coletar dados de concorrentes',1,1,11,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(12,'Preparar apresentação sobre inclusão',0,2,12,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(13,'Migrar dados para nova plataforma',1,3,13,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(14,'Criar conteúdo para blog',1,4,14,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(15,'Planejar benefícios do programa de fidelidade',0,5,15,'2024-05-27 19:53:25','2024-05-27 19:53:25'),
	(16,'Definir requisitos do aplicativo',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(17,'Criar wireframes e mockups',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(18,'Desenvolver backend do aplicativo',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(19,'Desenvolver frontend do aplicativo',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(20,'Testar funcionalidades do aplicativo',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(21,'Preparar documentação técnica',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(22,'Realizar testes de usabilidade',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(23,'Publicar aplicativo nas lojas',0,NULL,1,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(24,'Definir público-alvo',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(25,'Criar conteúdo para redes sociais',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(26,'Configurar Google Ads',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(27,'Lançar campanha de e-mail marketing',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(28,'Monitorar resultados da campanha',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(29,'Ajustar estratégia com base nos dados',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(30,'Criar relatório de desempenho',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(31,'Realizar reunião de feedback',0,NULL,2,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(32,'Revisar histórico de vendas',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(33,'Entrevistar principais clientes',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(34,'Analisar tendências de mercado',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(35,'Definir metas de vendas',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(36,'Desenvolver planos de ação',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(37,'Criar materiais de treinamento de vendas',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(38,'Implementar novo CRM',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(39,'Acompanhar desempenho da equipe',0,NULL,3,'2024-05-27 19:57:44','2024-05-27 19:57:44'),
	(40,'Selecionar participantes do treinamento',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(41,'Desenvolver conteúdo do treinamento',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(42,'Contratar palestrantes externos',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(43,'Reservar local para o treinamento',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(44,'Preparar materiais de apoio',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(45,'Aplicar questionários de avaliação',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(46,'Realizar sessões práticas',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(47,'Avaliar feedback dos participantes',1,NULL,4,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(48,'Definir requisitos do sistema',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(49,'Escolher plataforma de e-commerce',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(50,'Integrar sistema de inventário',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(51,'Configurar métodos de pagamento',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(52,'Desenvolver design da loja online',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(53,'Testar funcionalidades de checkout',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(54,'Lançar loja em ambiente de testes',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(55,'Publicar loja ao vivo',0,NULL,5,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(56,'Pesquisar percepção atual da marca',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(57,'Definir novos valores da marca',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(58,'Criar novo logo e identidade visual',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(59,'Desenvolver guidelines de marca',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(60,'Aplicar nova identidade nos materiais existentes',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(61,'Lançar campanha de comunicação',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(62,'Coletar feedback dos clientes',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(63,'Ajustar estratégia de rebranding',0,NULL,6,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(64,'Analisar mercados potenciais',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(65,'Selecionar países-alvo',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(66,'Desenvolver estratégia de entrada',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(67,'Estabelecer parcerias locais',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(68,'Adaptar produtos ao mercado local',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(69,'Treinar equipe de vendas local',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(70,'Lançar campanhas de marketing local',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(71,'Monitorar desempenho pós-expansão',0,NULL,7,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(72,'Revisar benefícios atuais',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(73,'Pesquisar tendências de benefícios',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(74,'Entrevistar funcionários',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(75,'Desenvolver novas propostas',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(76,'Aprovar propostas com a diretoria',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(77,'Implementar novas políticas',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(78,'Comunicar mudanças aos funcionários',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(79,'Avaliar impacto das mudanças',0,NULL,8,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(80,'Definir objetivos do chatbot',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(81,'Selecionar plataforma de chatbot',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(82,'Desenvolver fluxos de conversa',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(83,'Integrar chatbot ao CRM',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(84,'Testar respostas do chatbot',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(85,'Treinar equipe para uso do chatbot',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(86,'Implementar chatbot no site',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(87,'Monitorar e ajustar desempenho do chatbot',1,NULL,9,'2024-05-27 19:57:45','2024-05-27 19:57:45'),
	(88,'Realizar pesquisa de mercado',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(89,'Desenvolver protótipo do produto',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(90,'Testar protótipo com usuários',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(91,'Ajustar produto com base no feedback',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(92,'Planejar estratégia de lançamento',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(93,'Desenvolver materiais promocionais',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(94,'Coordenar eventos de lançamento',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(95,'Acompanhar vendas iniciais',0,NULL,10,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(96,'Identificar principais concorrentes',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(97,'Coletar informações de mercado',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(98,'Analisar pontos fortes e fracos',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(99,'Desenvolver benchmarking',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(100,'Elaborar relatório de análise',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(101,'Recomendar estratégias competitivas',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(102,'Implementar recomendações',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(103,'Monitorar ações dos concorrentes',0,NULL,11,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(104,'Desenvolver conteúdo do workshop',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(105,'Selecionar facilitadores',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(106,'Planejar atividades interativas',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(107,'Organizar logística do evento',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(108,'Divulgar treinamento aos funcionários',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(109,'Coletar feedback dos participantes',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(110,'Avaliar impacto do treinamento',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(111,'Realizar ajustes para próximas sessões',0,NULL,12,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(112,'Definir requisitos da plataforma',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(113,'Selecionar tecnologia de banco de dados',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(114,'Desenvolver arquitetura da plataforma',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(115,'Migrar dados existentes',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(116,'Implementar segurança de dados',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(117,'Realizar testes de performance',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(118,'Treinar equipe para uso da plataforma',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(119,'Lançar plataforma em produção',0,NULL,13,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(120,'Desenvolver calendário editorial',1,NULL,14,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(121,'Criar conteúdos para blog',1,NULL,14,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(122,'Produzir vídeos para redes sociais',1,NULL,14,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(123,'Publicar posts em redes sociais',1,NULL,14,'2024-05-27 19:57:46','2024-05-27 19:57:46'),
	(124,'Realizar parcerias com influenciadores',1,NULL,14,'2024-05-27 19:57:46','2024-05-27 19:57:46');

/*!40000 ALTER TABLE `tarefas` ENABLE KEYS */;
UNLOCK TABLES;
