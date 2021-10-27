create database BDpapeleria;
use BDpapeleria;
create table cliente(
id_cli varchar(11) primary key not null,
nom_cli varchar(30) not null,
ape_cli varchar(30) not null,
dir_cli varchar(100) not null,
dep_cli varchar(20) not null,
mes_cum_cli varchar(10) not null
);
create table articulo(
id_art int auto_increment primary key not null,
tit_art varchar (100) not null,
aut_art varchar (100) not null,
edi_art varchar (300) not null,
prec_art int not null
);
create table pedido(
id_ped int auto_increment primary key not null,
id_cli_ped varchar(11) not null,
fec_ped date not null,
val_ped int not null,
foreign key (id_cli_ped) references cliente(id_cli)
);
create table articuloxpedido(
id_ped_artped int not null primary key,
id_art_artped int not null,
can_art_artped Int not null,
val_ven_art_artped int not null,
foreign key (id_ped_artped) references pedido(id_ped),
foreign key (id_art_artped) references articulo(id_art)
);
create database DBseguros;
use DBseguros;
create table compania(
comnit varchar (11) primary key not null,
comnombre varchar(30) not null,
comanofun int not null,
comreplegal varchar(100) not null
);
create table tiposautomotores(
auttipo int not null primary key not null,
autnombre varchar(30) not null
);
create table automotores(
autoplaca varchar(6) primary key not null,
automarca varchar(30)not null,
autotipo int not null,
automodelo int not null,
autonumpasajeros int not null,
autocilindraje int not null,
autonumchasis varchar(20),
foreign key (autotipo) references tiposautomotores(auttipo)
);
create table aseguramientos(
asecodigo int auto_increment primary key not null,
asefechacodigo date not null,
asefechaexpiracion date not null,
asevalorasegurado int not null,
aseestado enum("activo","no activo"),
asecosto int not null,
aseplaca varchar (6),
foreign key (aseplaca) references automotores(autoplaca)
);
create table incidentes(
incicodigo int auto_increment primary key not null,
incifecha date not null,
inciplaca varchar(6) not null,
incilugar varchar(40) not null,
ncicantheridos int not null,
incicanfatalidades int not null,
incicanautosinvolucrados int not null);
use dbacademia;
insert into profesor
values
("63502720","Martha","Rojas",2,690000),
("91216904","Carlos","Pérez",3,950000),
("13826789","Maritza","Angarita",1,550000),
("1098765789","Alejandra","Torres",4,1100000);
select * from profesor;
insert into curso
values
(149842,"Fundamentos de Bases de datos",40,500000),
(250067,"Fundamentos de SQL",20,700000),
(289011,"Manejo de Mysql",45,550000),
(345671,"Fundamentals of Oracle",60,3000000);
select * from curso;
insert into estudiante
values
("63502720","María","Perez",23),
("91245678","Carlos José","Lopez",25),
("1098098097","Jonatan","Ardila",17),
("1098765678","Carlos","Martinez",19);
select * from estudiante;
insert into estudiantexcurso
values
(289011,"1098765678","2011/02/01"),
(250067,"63502720","2011/03/01"),
(289011,"1098098097","2011/02/01"),
(345671,"63502720","2011/04/01");
select * from estudiantexcurso;

insert into cliente
values
("63502718","Maritza","Rojas","Calle 34 No.14 -45","Santander","Abril"),
("13890234","Roger","Ariza","Cra 30 No.13 -45","Antioquia","Junio"),
("77191956","Juan Carlos","Arenas","Diagonal 23 No. 12 - 34 apto 101","Valle","Marzo"),
("1098765789","Catalina","Zapata","Av el Libertador No. 30 - 14","Cauca","Marzo");
select * from cliente;
insert into pedido values
(2,"77191956","2012/04/30",55000),
(3,"63502718","2011/12/10",260000),
(4,"1098765789","2012/02/25",1800000);
select * from pedido;