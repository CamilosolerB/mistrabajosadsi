create database BDeps;
use BDeps;
create table Tbpacientes(
Pacid varchar(12) primary key not null,
Pacnombre varchar(50) not null,
Pacapellido varchar(50) not null,
PacFecNac date not null,
PacSex enum("M", "F", "NoNe")
);
create table TbMedico(
Medid varchar(10) primary key not null,
Mednombre varchar(50) not null,
MedApellido varchar(50) not null
);
create table TbConsultorio(
ConNumero int primary key not null,
ConNombre varchar(50) not null
);
create table Tbtratamiento(
TraNumero int primary key auto_increment,
TraFecAsig date not null,
TraDesc text not null,
TraFecIn date not null,
TraFecEnd date not null,
TraObs text not null,
Trapac char(10) not null,
foreign key (Trapac) references tbpacientes (Pacid)

);
create table TbCitas(
CitNum int primary key auto_increment,
Citfec date not null,
CitHora varchar(10) not null,
CitPaciente char(10) not null,
foreign key (CitPaciente) references tbpacientes (Pacid),
CitMedico char(10) not null,
foreign key (CitMedico) references tbmedico (Medid),
CitConsultorio int not null,
foreign key (CitConsultorio) references tbconsultorio (ConNumero),
CitEstado enum("Asignada", "Cumplida","No cumplida"),
CitObservaciones text not null
);
