create database Banco;
use Banco;
create table Cliente(
documento int primary key not null,
Nombres varchar(50) not null,
Apellidos varchar(50) not null,
Correo varchar(100) not null,
Celular int not null,
Sexo enum("M","F","ND"),
Fechadenacimiento date not null
);
drop table Cliente;
create table Usuario(
documento int not null,
Nombre_usuario varchar(50) not null,
clave int not null,
Rol varchar(16) not null,
estado enum("Activo","No activo","No registrado"),
foreign key (documento) references Cliente(documento)
);
drop table Usuario;

create table lineas_credito(
Codigo_linea int primary key not null,
Nombres_Linea varchar(50) not null,
Monto_Maximo_Linea int not null,
Plazo_Maximo_Linea int not null
);
drop table lineas_credito;

create table credito_clientes(
documento int not null,
codigo_linea int not null,
monto_prestamo int not null,
Fecha_credito date not null,
foreign key (documento) references Cliente(documento),
foreign key (codigo_linea) references lineas_credito(Codigo_linea)
);

insert into Cliente
(documento,Nombres,Apellidos,Correo,Celular,Sexo,Fechadenacimiento)
values
(690900131,"FRANCISCO JOSE"," TORRENT CONESA","hola@gmail.com",305400,"M","2000/02/08"),
(176746067,"MARIA MERCEDES","CASTELLANOS LEDESMA","como@hotmail.com",320891,"F","1990/02/27"),
(989098657,"VICTOR MANUEL","JORDA VERGARA","estas@yahoo.com",320671,"ND","2000/11/23"),
(53555508,"CONSUELO","ILLESCAS JAREÑO","yoestoy@misena.edu",314563,"M","1970/10/30"),
(569677567,"JOSE ANGEL","BERNAT BARRIO","muybien@outlook.com",3127131,"ND","2001/09/12");

insert into usuario
(documento,Nombre_usuario,clave,Rol,estado)
values
(53555508,"CONSUELO",12345,"admin","Activo"),
(176746067,"MARIA MERCEDES",45678,"cliente","Activo"),
(989098657,"VICTOR MANUEL",56789,"jefe recursos","No registrado"),
(53555508,"CONSUELO",23456,"Cliente","No activo"),
(569677567,"JOSE ANGEL",34567,"admin","Activo");

insert into lineas_credito
(Codigo_linea,Nombres_Linea,Monto_Maximo_Linea,Plazo_Maximo_Linea)
values
(3200934,"CONSUELO",100000,24),
(6615894,"MARIA MERCEDES",2000000,16),
(2640922,"VICTOR MANUEL",3000000,12),
(4571980,"CONSUELO",4000000,48),
(8556277,"JOSE ANGEL",5000000,36);

insert into credito_clientes
(documento,codigo_linea,monto_prestamo,Fecha_credito)
values
(53555508,3200934,500000,"2021/06/04"),
(176746067,6615894,1500000,"2011/06/04"),
(569677567,8556277,2500000,"2019/01/03"),
(989098657,2640922,3500000,"2015/04/24");

select * from Cliente;
select * from usuario;
select * from lineas_credito;
select * from credito_clientes;