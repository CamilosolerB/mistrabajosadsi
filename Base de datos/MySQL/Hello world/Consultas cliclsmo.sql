use tourdefrance_2021;

select * from ciclista;
select * from equipo;
select * from etapa;
select * from llevar;
select * from maillot;
select * from puerto;





select * from maillot;
select cdorsal,nombre,edad from ciclista where edad<=25;
select nompuerto,altura from puerto where categoria="E";
select numeroetapa,salida,llegada from etapa;
select count(*) from ciclista;
select count(*) from ciclista where edad>=25;
select count(*) from equipo;
select avg(edad) from ciclista;
select min(altura),max(altura) from puerto;
select nombre,nomeq from ciclista;
select * from ciclista where nomeq="Banesto";
select count(*) from ciclista where nomeq="Amore Vita";
select avg(edad) from ciclista where nomeq="TVM";
select nombre,nomeq from ciclista where nomeq=(select nomeq from ciclista where nombre="Miguel Indurain");
select nombre from ciclista inner join etapa on (cdorsal=dorsal);
select nombre,tipo from ciclista 
inner join llevar on (cdorsal=dorsal)
inner join maillot on (codigomail=codigo)
where tipo="General";
select nombre,edad from ciclista where edad=(select min(edad) from ciclista);
select nomeq,count(*) from ciclista group by nomeq;
select nomeq,count(*) from ciclista group by nomeq having count(nomeq)>=5;
select nombre,count(*) from ciclista inner join etapa on (cdorsal=dorsal) group by nombre;
select nombre,count(*) from ciclista inner join etapa on (cdorsal=dorsal) group by nombre having count(*)>1;
select nombre,director,edad from equipo inner join ciclista on (nombrequipo=nomeq) where edad>=33;
select nombre,nomeq from ciclista where nomeq<>"Kelme";
select nombre from ciclista left join etapa on (cdorsal=dorsal) where dorsal is null;
select nombre from ciclista left join puerto on (cdorsal=dorsal) where dorsal is null;
select nombre,count(*) from ciclista inner join puerto on (cdorsal=dorsal) group by nombre having count(*)>1;
select nombre,codigomail from ciclista 
inner join llevar on (cdorsal=dorsal)
where codigomail=(select codigomail from llevar inner join ciclista on (dorsal=cdorsal) where nombre="Miguel Indurain" limit 1);
select nomeq,avg(edad),max(edad),min(edad) from ciclista group by nomeq;
select nombre,edad,nomeq from ciclista where edad>=25 and edad<=30 and nomeq<>"Kelme" and nomeq<>"Banesto";
select nombre,salida from ciclista inner join etapa on (cdorsal=dorsal) where salida="Zamora";
select nombre,categoria from ciclista inner join puerto on (cdorsal=dorsal) where nomeq="Banesto";
select nompuerto,netapa,km from puerto inner join etapa on (netapa=numeroetapa);
select nombre,color from ciclista inner join llevar on (cdorsal=dorsal)
inner join maillot on (codigomail=codigo);
select nombre,netapa,color from ciclista inner join llevar on (cdorsal=dorsal)
inner join maillot on (codigomail=codigo) where color="Amarillo";
SELECT numeroetapa,salida FROM etapa WHERE numeroetapa NOT IN (SELECT netapa FROM puerto);
select avg(edad) from ciclista where cdorsal=(select dorsal from etapa limit 1);
select nompuerto,avg(altura),altura from puerto where altura>(select avg(altura) from puerto);
SELECT salida,llegada FROM etapa WHERE numeroetapa=(SELECT netapa from puerto WHERE pendiente=(SELECT MAX(pendiente) from puerto));
SELECT cdorsal,nombre FROM ciclista
inner join puerto on (cdorsal=dorsal) WHERE altura=(SELECT MAX(altura) from puerto);
select nombre from ciclista inner join etapa on (cdorsal=dorsal) where edad=(select min(edad) from ciclista where cdorsal in (select distinct dorsal  from etapa));
select * from ciclista inner join etapa on (cdorsal=dorsal) where edad=(
select min(edad) from ciclista where cdorsal in (select distinct dorsal  from etapa));
select netapa,altura from puerto where altura>=700;
select nombrequipo,director from equipo inner join ciclista on (nombrequipo=nomeq) where edad>=20 group by nombrequipo;
SELECT dorsal,nombre FROM ciclista inner join etapa on (cdorsal=dorsal) WHERE cdorsal NOT IN (SELECT dorsal FROM etapa WHERE km<170);
SELECT nombre FROM ciclista inner join puerto on (cdorsal=dorsal) 
inner join etapa on (netapa=numeroetapa)
where cdorsal = ALL(SELECT dorsal FROM puerto WHERE netapa=numeroetapa);

#select distinct nomeq from ciclista 
#inner join etapa on (cdorsal=dorsal)
#inner join puerto on (cdorsal=dorsal)
#inner join maillot on (codigomail=codigo);



 
SELECT codigo,color,nombre,nombrequipo FROM maillot
inner join llevar on (codigo=codigomail)
inner join ciclista on (dorsal=cdorsal)
inner join equipo on (nomeq=nombrequipo);

select nomeq,nombre from ciclista
inner join puerto on (cdorsal=dorsal)
where categoria=1;

select netapa,count(nompuerto) from puerto group by netapa;
select nomeq,count(*) from ciclista group by nomeq;
select nomeq,director,count(*),avg(edad) from ciclista
inner join equipo on (nomeq=nombrequipo)
group by nomeq having count(*)>=3 and avg(edad)<=30;

select nombre,count(*),nomeq from ciclista
inner join etapa on (cdorsal=dorsal)
group by nomeq having count(*)>=4;


select nomeq,avg(edad) from ciclista group by nomeq having avg(edad)>=(select avg(edad) from ciclista);

select cdorsal,nombre,director,nombrequipo,count(*) as numero from equipo
inner join ciclista on (nombrequipo=nomeq)
inner join llevar on (cdorsal=dorsal)
group by dorsal having numero=(
select max(numveces) from 
(select dorsal,count(*) as numveces from llevar group by dorsal) as total);
