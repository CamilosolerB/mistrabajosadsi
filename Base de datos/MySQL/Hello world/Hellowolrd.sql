create database TourdeFrance_2021;
use TourdeFrance_2021;

create table equipo (
    nomeq varchar(20) not null,
    director varchar(50),
    Primary Key (nomeq)
);


create table maillot (
    codigo varchar(3) NOT NULL,
    tipo varchar(20),
    color varchar(20),
    premio int,
    constraint PK_Maillot Primary Key (codigo)
);


create table ciclista(
  cdorsal int not null,
  nombre varchar(50),
  edad int,
  nomeq varchar(20),
  constraint PK_ciclista Primary Key(cdorsal),
  constraint ciclista_equipo Foreign Key (nomeq) references equipo(nomeq) on delete cascade on update cascade
);


create table etapa
(
  netapa int not null,
  km     int,
  salida varchar(20),
  llegada varchar(20),
  edorsal int,
  constraint PK_etapa Primary Key(netapa),
  constraint etapa_ciclista Foreign Key (edorsal) references ciclista(cdorsal) on delete cascade on update cascade

);


create table puerto
(
  nompuerto varchar(20) not null,
  altura int,
  categoria varchar(1),
  pendiente int,
  netapa int,
  dorsal int,
  constraint PK_puerto Primary Key(nompuerto),
  constraint puerto_ciclista Foreign Key (dorsal) references ciclista(cdorsal) on delete cascade on update cascade,
  constraint puerto_etapa Foreign Key (netapa) references etapa(netapa) on delete cascade on update cascade
);
alter table ciclista change dorsal cdorsal int;


create table llevar(
  dorsal int not null,
  netapa int not null,
  codigomail varchar(3),
  constraint llevar_ciclista Foreign Key (dorsal) references ciclista(cdorsal) on delete cascade on update cascade,
  constraint llevar_etapa Foreign Key (netapa) references etapa(netapa) on delete cascade on update cascade,
  constraint llevar_maillot Foreign Key (codigomail) references maillot(codigo) on delete cascade on update cascade
);

insert into equipo values('Amore Vita','Ricardo Padacci');
insert into equipo values('Banesto','Miguel Echevarrìa');
insert into equipo values('Bresciali-Refin','Pietro Armani');
insert into equipo values('Carrera','Luigi Petroni');
insert into equipo values('Gatorade','Gian Luca Pacceli');
insert into equipo values('Kelme','Álvaro Pino');
insert into equipo values('Mapei-Clas','Juan Fernández');
insert into equipo values('Navigare','Lorenzo Sciacci');
insert into equipo values('Telecom','Morgan Reikacrd');
insert into equipo values('TVM','Steevens Henk');

insert into ciclista values(1,'Miguel Indurain',21,'Banesto');
insert into ciclista values(2,'Pedro Delgado',29,'Banesto');
insert into ciclista values(3,'Alex Zulle',20,'Navigare');
insert into ciclista values(4,'Alessio Di Basco',30,'TVM');
insert into ciclista values(5,'Armand',17,'Amore Vita');
insert into ciclista values(8,'Jean Van Poppel',24,'Bresciali-Refin');
insert into ciclista values(9,'Maximo Podel',17,'Telecom');
insert into ciclista values(10,'Mario Cipollini',31,'Carrera');
insert into ciclista values(11,'Eddy Seigneur',20,'Amore Vita');
insert into ciclista values(12,'Alessio Di Basco',34,'Bresciali-Refin');
insert into ciclista values(13,'Gianni Bugno',24,'Gatorade');
insert into ciclista values(15,'Jesús Montoya',25,'Amore Vita');
insert into ciclista values(16,'Dimitri Konishev',27,'Amore Vita');
insert into ciclista values(17,'Bruno Lealli',30,'Amore Vita');
insert into ciclista values(20,'Alfonso Gutiérrez',27,'Navigare');
insert into ciclista values(22,'Giorgio Furlan',22,'Kelme');
insert into ciclista values(26,'Mikel Zarrabeitia',30,'Carrera');
insert into ciclista values(27,'Laurent Jalabert',22,'Banesto');
insert into ciclista values(30,'Melchor Mauri',26,'Mapei-Clas');
insert into ciclista values(31,'Per Pedersen',33,'Banesto');
insert into ciclista values(32,'Tony Rominger',31,'Kelme');
insert into ciclista values(33,'Stefenao della Sveitia',26,'Amore Vita');
insert into ciclista values(34,'Clauido Chiapucci',23,'Amore Vita');
insert into ciclista values(35,'Gian Mateo Faluca',34,'TVM');

insert into maillot values('MGE','General','Amarillo',1000000);
insert into maillot values('MMO','Montaña','Blanco y rojo',500000);
insert into maillot values('MMS','Más sufrido','Estrellitas rojas',400000);
insert into maillot values('MMV','Metas volantes','Rojo',400000);
insert into maillot values('MRE','Regularidad','Verde',300000);
insert into maillot values('MSE','Sprint especial','Rosa',300000);

insert into etapa values(1,35,'Valladolid','Ávila',1);
insert into etapa values(2,70,'Salamanca','Zamora',2);
insert into etapa values(3,150,'Zamora','Almendralejo',1);
insert into etapa values(4,330,'Córdoba','Granada',1);
insert into etapa values(5,150,'Granada','Almerìa',3);

insert into puerto values('Puerto1',2489,'1',34,2,3);
insert into puerto values('Puerto2',2789,'1',44,4,3);
insert into puerto values('Puerto3',2500,'E',17,4,2);
insert into puerto values('Puerto4',2500,'E',17,4,2);
insert into puerto values('Puerto5',2500,'a',17,4,1);
insert into puerto values('Puerto6',2500,'E',17,4,1);
insert into puerto values('Puerto7',2500,'E',23,1,2);

insert into llevar values(1,3,'MGE');
insert into llevar values(1,4,'MGE');
insert into llevar values(2,2,'MGE');
insert into llevar values(3,1,'MGE');
insert into llevar values(3,1,'MMV');
insert into llevar values(3,4,'MRE');
insert into llevar values(4,1,'MMO');

select * from equipo;
select * from ciclista;
select * from etapa;
select * from llevar;
select * from maillot;
select * from puerto;















