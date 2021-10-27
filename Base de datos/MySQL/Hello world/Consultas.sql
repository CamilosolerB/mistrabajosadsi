use dbuniversidad;
use dbtienda;
use dbautomotores;

#Consultas BD#1

select * from tbcurso;
select * from tbestudiante;
select * from tbestudiantexcurso;
select * from tbprofesor;



select * from tbprofesor order by profcate;
select * from tbcurso where valorcur>500000;
select count(estedad) from tbestudiante where estedad>=22;
select estnom,estape,estedad from tbestudiante where estedad=(select min(estedad) from tbestudiante);
select avg(valorcur) from tbcurso where valorcur>=40;
select avg(profsal) from tbprofesor where profcate=1;
select * from tbcurso order by valorcur;
select profnom,profape,profsal from tbprofesor where profsal=(select min(profsal) from tbprofesor);
select estdoc,estnom,estape,cursnom,curhoras,valorcur from tbestudiante
inner join tbestudiantexcurso on (estdoc=estcurdocest)
inner join tbcurso on (estcurcodcur=curscod)
where estcurfecini="2011/02/01";
select * from tbprofesor where profsal between 500000 and 700000;

#Base de datos no 2

select * from tbarticulo;
select * from tbarticuloxpedido;
select * from tbcliente;
select * from tbpedido;


select clinom,cliape,clidir,pedid,pedfec from tbcliente
inner join tbpedido on (clipedid=cliId)
where pedfec="2012/02/25";

select arttit,pedid,clipedid,pedfec,pedval from tbpedido
inner join tbarticuloxpedido on (pedid=arppedpedid)
inner join tbarticulo on (arpedartid=artid);

select * from tbcliente where climescum="Marzo";

select clipedid,clinom,clidir,pedid,pedfec,pedval,arttit,artprec from tbpedido 
inner join tbcliente on (clipedid=cliId)
inner join tbarticuloxpedido on (pedid=arppedpedid)
inner join tbarticulo on (arpedartid=artid)
where pedid=1;

select clinom,cliape,pedfec,pedval from tbpedido
inner join tbcliente on (clipedid=cliId)
where pedval=(select max(pedval) from tbpedido);

select artedi,count(artedi) from tbarticulo group by artedi ;

select pedid,arttit,artprec,arpedartcan as "Cantidad pedida" from tbpedido 
inner join tbarticuloxpedido on (pedid=arppedpedid)
inner join tbarticulo on (arpedartid=artid) order by pedid;

select * from tbcliente order by cliape asc;

select * from tbarticulo order by artaut desc;

select arpedartid as "articulo",arttit,pedid as "pedido",arpedartcan as "cantidad",cliId,clinom,clidir from tbpedido 
inner join tbcliente on (clipedid=cliId)
inner join tbarticuloxpedido on (pedid=arppedpedid)
inner join tbarticulo on(arpedartid=artid)
where arpedartid=2;

#Consultas base de datos 3

select * from tbaseguramientos;
select * from tbautomotores;
select * from tbcompania;
select * from tbincidentes;
select * from tbtiposautomotores;

select * from tbcompania where comañofun=1991 or comañofun=1998;

select autoplaca,Automarca,Autonumpasajeros,Autocilindraje,Asecosto,asevalorasegurado,asefechaexpiracion from tbautomotores
inner join tbaseguramientos on (autoplaca=Aseplaca)
where asefechaexpiracion >="2013/08/01";

select incicodigo,incifecha,inciplaca,incilugar,incicantheridos,incicanfatalidades,incicanautosinvolucrados,asecodigo as "numero de poliza",Asefechainicio,asevalorasegurado,Asecosto from tbincidentes
inner join tbaseguramientos on (inciplaca=Aseplaca)
where incifecha="2012/09/30";

select incicodigo,incifecha,inciplaca,incilugar,incicantheridos,incicanfatalidades,incicanautosinvolucrados,asecodigo as "numero de poliza",Asefechainicio,asevalorasegurado,Asecosto,Aseestado from tbincidentes
inner join tbaseguramientos on (inciplaca=Aseplaca)
where incicantheridos=1;

select * from tbaseguramientos where Asecosto=(select max(Asecosto) from tbaseguramientos);

select incicodigo,incifecha,inciplaca,incilugar,incicantheridos,incicanfatalidades,incicanautosinvolucrados,asevalorasegurado,Aseestado from tbincidentes
inner join tbaseguramientos on (inciplaca=Aseplaca)
where incicanautosinvolucrados=(select min(incicanautosinvolucrados) from tbincidentes);

select incicodigo,incifecha,incilugar,incicantheridos,Asefechainicio,asefechaexpiracion,asevalorasegurado from tbincidentes
inner join tbaseguramientos on (inciplaca=Aseplaca)
where inciplaca="FLL420";

select * from tbcompania where comnit="899999999-5";

select asecodigo,Asefechainicio,asefechaexpiracion,asevalorasegurado,Aseestado,Asecosto,Aseplaca,Automarca,Autotipo,Automodelo,Autonumpasajeros,Autocilindraje,Autonumchasis from tbaseguramientos
inner join tbautomotores on (Aseplaca=autoplaca)
where asevalorasegurado=(select max(asevalorasegurado) from tbaseguramientos);

select autoplaca,Automarca,Automodelo,Autocilindraje,Asefechainicio,asefechaexpiracion,Aseestado from tbautomotores
inner join tbaseguramientos on (autoplaca=Aseplaca)
where Autotipo=1;
