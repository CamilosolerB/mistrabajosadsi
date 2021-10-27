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
id_ped_artped int not null,
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
auttipo int primary key,
autnombre varchar(30) not null
);
drop table tiposautomotores;
create table automotores(
autoplaca varchar(6) primary key not null,
automarca varchar(30)not null,
autotipo int,
automodelo int not null,
autonumpasajeros int not null,
autocilindraje int not null,
autonumchasis varchar(20)
);
drop table automotores;
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
drop table aseguramientos;
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

use bdpapeleria;

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

insert into articulo values
(1,"Redes cisco","Ernesto Arigasello","Alfaomega -Rama",60000),
(2,"Facebook y twitter para adultos","Veloso Claudio","Alfaomega",52000),
(3,"Creación de un portal con php y mysql","Jacobo Pavón Puertas","Alfaomega -Rama",40000),
(4,"Administración de sistemas operativos","Julio Gómez López","Alfaomega -Rama",55000);

select * from articulo;

insert into articuloxpedido values
(1,3,5,40000),
(1,4,12,55000),
(2,1,5,65000),
(3,2,10,55000),
(3,3,12,45000),
(4,1,20,65000);

drop table articuloxpedido;
select * from articuloxpedido;

use dbseguros;
insert into compania values
("800890890-2","Seguros Atlantida",1998,"Carlos López"),
("899999999-1","Aseguradora Rojas",1991,"Luis Fernando Rojas"),
("899999999-5","Seguros del Estadio",2001,"Maria Margarita Pérez");

insert into tiposautomotores values
(1,"Automóviles"),
(2,"Camperos"),
(3,"Camiones");

insert into automotores values
("FLL420","chevrolet corsa",1,2003,5,1400,"wywzzz167kk009d25"),
("DKZ820","renault stepway",3,2008,5,1600,"wywwzz157kk009d45"),
("KJQ920","kia sportage",2,2009,7,2000,"wywzzz157kk009d25");

insert into aseguramientos values
(1,"2012/09/30","2013/09/30",30000000,"activo",500000,"FLL420"),
(2,"2012/09/27","2013/09/27",35000000,"activo",600000,"DKZ820"),
(3,"2011/09/28","2012/09/28",50000000,"no activo",800000,"KJQ920");

insert into incidentes values
(1,"2012/09/30","DKZ820","Bucaramanga",0,0,2),
(2,"2012/09/27","FLL420","Girón",1,0,1),
(3,"2012/09/28","FLL420","Bucaramanga",1,0,2);


ALTER TABLE incidentes ADD CONSTRAINT fk_incidentes
   FOREIGN KEY (inciplaca) 
   REFERENCES aseguramientos(aseplaca);

use bdseguros;
use bdpapeleria;
use bdseguros;

create procedure diapedido ()
select nom_cli,ape_cli,dir_cli,id_ped,fec_ped from cliente
inner join pedido on (id_cli=id_cli_ped)
where fec_ped="2012/02/25";

call diapedido;


create procedure numpedart ()
select id_art,id_ped,id_cli_ped,fec_ped,val_ped from pedido
inner join articuloxpedido on (id_ped=id_ped_artped)
inner join articulo on (id_art_artped=id_art);

call numpedart;


create procedure showartped ()
select id_ped,id_art,prec_art,can_art_artped from pedido
inner join articuloxpedido on (id_ped=id_ped_artped)
inner join articulo on (id_art_artped=id_art) order by id_ped;

call showartped;

use dbseguros;


drop procedure fundacion;
create procedure fundacion (anio int)
select * from compania where anio=comanofun;

call fundacion(1998);




create procedure orden()
select * from cliente order by ape_cli;
call orden;


use dbacademia;

create procedure categoria()
select * from profesor order by cate_prof;
call categoria();



create procedure convalor(metvalor int)
select * from curso where valor_cur>metvalor;
call convalor(500000);



create procedure ascen()
select * from curso order by valor_cur;
call ascen();

use dbseguros;
create procedure vencimiento(fecha date)
select autoplaca,automarca,autonumpasajeros,autocilindraje,asecosto,asevalorasegurado,asefechaexpiracion from automotores
inner join aseguramientos on (autoplaca=aseplaca)
where asefechaexpiracion>=fecha;
call vencimiento("2013/08/01");



create procedure heridos (numeroheridos int)
select * from incidentes inner join aseguramientos on (inciplaca=aseplaca) where ncicantheridos=numeroheridos;
call heridos (1);



create procedure placa (numeroplaca varchar(6))
select incicodigo,inciplaca,incifecha,incilugar,ncicantheridos,asefechacodigo,asefechaexpiracion,asevalorasegurado from incidentes 
inner join aseguramientos on (inciplaca=aseplaca) where inciplaca=numeroplaca;
call placa("FLL420");

use dbacademia;
delimiter $$

create function importedad()
returns int deterministic
begin
declare estedad int;
select count(*) into estedad from estudiante where edad_est>=22;
return estedad;
end $$
delimiter ;
select importedad() from estudiante;

delimiter $$

create function youngest()
returns int deterministic
begin
declare jovencito int;
select min(edad_est) into jovencito from estudiante;
return jovencito;
end $$
delimiter ;
select youngest();
delimiter $$

create function promedio()
returns int deterministic
begin
declare jovencito int;
select min(edad_est) into jovencito from estudiante;
return jovencito;
end $$
delimiter ;

delimiter $$

create function valorminimo()
returns int deterministic
begin
declare valmin int;
select min(sal_prof) into valmin from profesor;
return valmin;
end $$
delimiter ;
select valorminimo(),nom_prof,ape_prof from profesor where valorminimo()=sal_prof;



use dbseguros;
delimiter $$

create function poliza()
returns int deterministic
begin
declare costosa int;
select max(asecosto) into costosa from aseguramientos;
return costosa;
end $$
delimiter ;
select *,poliza() from aseguramientos where asecosto=poliza();

use dbacademia;
create table auditoria_Profesor(
id_audi_prof integer auto_increment primary key not null,
audi_doc_prof varchar(11) not null,  
ante_nom_prof varchar(30),
ante_ape_prof varchar(30), 
ante_cate_prof int, 
ante_sal_prof int,  
nvo_nom_prof varchar(30),
nvo_ape_prof varchar(30), 
nvo_cate_prof int, 
nvo_sal_prof int,
usuario varchar(45),
fechamodificacion date,
audi_accion varchar(45) not null
);


delimiter //
create trigger modificacion_profesor
before update on profesor
for each row
begin
insert into auditoria_profesor
(audi_doc_prof,ante_nom_prof,ante_ape_prof,ante_cate_prof,ante_sal_prof,
nvo_nom_prof,nvo_ape_prof,nvo_cate_prof,nvo_sal_prof,
usuario,fechamodificacion,audi_accion)
values
(old.doc_prof,old.nom_prof,old.ape_prof,old.cate_prof,old.sal_prof,
new.nom_prof,new.ape_prof,new.cate_prof,new.sal_prof,
current_user(),current_date(),"Actualizacion");

end; 
//
update profesor set sal_prof=sal_prof + 100000;
select * from auditoria_profesor;

delimiter //
create trigger eliminacion_profesor
before delete on profesor
for each row
begin
insert into auditoria_profesor
(audi_doc_prof,ante_nom_prof,ante_ape_prof,ante_cate_prof,ante_sal_prof,
nvo_nom_prof,nvo_ape_prof,nvo_cate_prof,nvo_sal_prof,
usuario,fechamodificacion,audi_accion)
values
(old.doc_prof,old.nom_prof,old.ape_prof,old.cate_prof,old.sal_prof,
"","",0,0,
current_user(),current_date(),"Actualizacion");

end; 
//

delete from profesor where doc_prof=1098765789;
select * from profesor;


create table auditoria_estudiante(
id_audi_est int not null primary key auto_increment,
ant_doc_est varchar(11), 
ant_nom_est varchar(30), 
ant_ape_est varchar(30), 
ant_edad_est int,
nvo_doc_est varchar(11), 
nvo_nom_est varchar(30), 
nvo_ape_est varchar(30), 
nvo_edad_est int,
usuario varchar(45),
fechamodificacion date,
audi_accion varchar(45) not null
);
delimiter //
create trigger modificacion_estudiante
before update on estudiante
for each row
begin
insert into auditoria_estudiante
(ant_doc_est,ant_nom_est,ant_ape_est,ant_edad_est,
nvo_doc_est,nvo_nom_est,nvo_ape_est,nvo_edad_est,
usuario,fechamodificacion,audi_accion)
values
(old.doc_est,old.nom_est,old.ape_est,old.edad_est,
new.doc_est,new.nom_est,new.ape_est,new.edad_est,
current_user(),current_date(),"Actualizacion");

end; 
//
select * from estudiante;
update estudiante set edad_est=20 where "63502720";
select * from auditoria_estudiante;

delimiter //
create trigger eliminacion_estudiante
before update on estudiante
for each row
begin
insert into auditoria_estudiante
(ant_doc_est,ant_nom_est,ant_ape_est,ant_edad_est,
nvo_doc_est,nvo_nom_est,nvo_ape_est,nvo_edad_est,
usuario,fechamodificacion,audi_accion)
values
(old.doc_est,old.nom_est,old.ape_est,old.edad_est,
"","",0,0,
current_user(),current_date(),"Actualizacion");

end; 
//
delete from auditoria_estudiante where nvo_ape_est="Perez";
select * from auditoria_estudiante;



create table auditoria_curso(
id_audi_cur int auto_increment primary key not null,
ant_cod_curs int, 
ant_nom_curs varchar(100), 
ant_horas_cur int, 
ant_valor_cur int, 
nvo_nom_curs varchar(100), 
nvo_horas_cur int, 
nvo_valor_cur int,
usuario varchar(45),
fechamodificacion date,
audi_accion varchar(45) not null);

delimiter //
create trigger modify_curso
before update on curso
for each row
begin
insert into auditoria_curso
(ant_cod_curs,ant_nom_curs,ant_horas_cur,ant_valor_cur,
nvo_nom_curs,nvo_horas_cur,nvo_valor_cur,
usuario,fechamodificacion,audi_accion)
values
(old.cod_curs,old.nom_curs,old.horas_cur,old.valor_cur,
new.nom_curs,new.horas_cur,new.valor_cur,
current_user(),current_date(),"Actualizacion");

end; 
//
select * from curso;
update curso set valor_cur=valor_cur+30000;
select * from auditoria_curso;

delimiter //
create trigger delete_curso
before delete on curso
for each row
begin
insert into auditoria_curso
(ant_cod_curs,ant_nom_curs,ant_horas_cur,ant_valor_cur,
nvo_nom_curs,nvo_horas_cur,nvo_valor_cur,
usuario,fechamodificacion,audi_accion)
values
(old.cod_curs,old.nom_curs,old.horas_cur,old.valor_cur,
"","",0,0,
current_user(),current_date(),"Actualizacion");

end; 
//
delete from auditoria_curso where ant_cod_curs="149842";





use BDpapeleria;
create table auditorio_cliente(
id_audi_cli int auto_increment primary key not null,
ant_id_cli varchar(11),
ant_nom_cli varchar(30),
ant_ape_cli varchar(30),
ant_dir_cli varchar(100),
ant_dep_cli varchar(20),
ant_mes_cum_cli varchar(10),
nvo_nom_cli varchar(30),
nvo_ape_cli varchar(30),
nvo_dir_cli varchar(100),
nvo_dep_cli varchar(20),
nvo_mes_cum_cli varchar(10),
usuario varchar(45),
fechamodificacion date,
audi_accion varchar(45) not null
);

delimiter //
create trigger modify_cliente
before update on cliente
for each row
begin
insert into auditorio_cliente
(ant_id_cli,ant_nom_cli,ant_ape_cli,ant_dir_cli,ant_dep_cli,ant_mes_cum_cli,
nvo_nom_cli,nvo_ape_cli,nvo_dir_cli,nvo_dep_cli,nvo_mes_cum_cli,
usuario,fechamodificacion,audi_accion)
values
(old.id_cli,old.nom_cli,old.ape_cli,old.dir_cli,old.dep_cli,old.mes_cum_cli,
new.nom_cli,new.ape_cli,new.dir_cli,new.dep_cli,new.mes_cum_cli,
current_user(),current_date(),"Actualizacion");

end; 
//
select * from cliente;
update cliente set nom_cli="Sandra" where nom_cli="Catalina";
select * from auditorio_cliente;
drop trigger modify_cliente;

delimiter //
create trigger delete_cliente
before delete on cliente
for each row
begin
insert into auditorio_cliente
(ant_id_cli,ant_nom_cli,ant_ape_cli,ant_dir_cli,ant_dep_cli,ant_mes_cum_cli,
nvo_nom_cli,nvo_ape_cli,nvo_dir_cli,nvo_dep_cli,nvo_mes_cum_cli,
usuario,fechamodificacion,audi_accion)
values
(old.id_cli,old.nom_cli,old.ape_cli,old.dir_cli,old.dep_cli,old.mes_cum_cli,
"","",0,0,
current_user(),current_date(),"Actualizacion");

end; 
//
delete from auditorio_cliente where ant_dep_cli="Cauca";

create table auditorio_pedido(
id_audi_ped int auto_increment not null primary key,
ant_id_ped int, 
ant_id_cli_ped varchar(11), 
ant_fec_ped date, 
ant_val_ped int, 
nvo_id_cli_ped varchar(11), 
nvo_fec_ped date, 
nvo_val_ped int,
usuario varchar(45),
fechamodificacion date,
audi_accion varchar(45) not null);

delimiter //
create trigger modify_pedido
before update on pedido
for each row
begin
insert into auditorio_pedido
(ant_id_ped,ant_id_cli_ped,ant_fec_ped,ant_val_ped,
nvo_id_cli_ped,nvo_fec_ped,nvo_val_ped,
usuario,fechamodificacion,audi_accion)
values
(old.id_ped,old.id_cli_ped,old.fec_ped,old.val_ped,
new.id_cli_ped,new.fec_ped,new.val_ped,
current_user(),current_date(),"Actualizacion");

end; 
//
select * from pedido;
update pedido set val_ped=val_ped-10000;
select * from auditorio_pedido;
