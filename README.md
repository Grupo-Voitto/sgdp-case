<div style="display:flex">
<img  src="https://img.shields.io/static/v1?label=node&message=LTS&color=green&style=for-the-badge&logo=node.js"/>
<img  src="https://img.shields.io/static/v1?label=react&message=LTS&color=blue&style=for-the-badge&logo=react"/>
<img  src="https://img.shields.io/static/v1?label=javascript&message=LTS&color=yellow&style=for-the-badge&logo=javascript"/>
<img src="https://img.shields.io/static/v1?label=typescript&message=LTS&color=blue&style=for-the-badge&logo=typescript"/>
</div>

![contru-prime](https://github.com/Grupo-Voitto/sgdp-case/assets/54844857/e0553bad-3eb9-4d20-a056-5b7c185d3290)


## Querys do Banco de dados

```
CREATE TABLE `projetos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `dead_line` datetime NOT NULL,
  `area` int(2) NOT NULL,
  `status` int(1) DEFAULT 1,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```
```
CREATE TABLE `tarefas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NOT NULL,
  `status` int(1) DEFAULT 0,
  `id_membro` int(11) DEFAULT null,
  `id_projeto` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```
```
CREATE TABLE `membros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `funcao` VARCHAR(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```
```
CREATE TABLE `projetos_membros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_membro` int(11) NOT NULL,
  `id_projeto`int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```
