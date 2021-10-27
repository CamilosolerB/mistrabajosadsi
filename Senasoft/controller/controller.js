const conexion = require ('../conexion/conexion')
const con = conexion();
const bcryptjs = require('bcryptjs');
const controller = {};
controller.inicio=(req,res,next)=>{
    res.render('inicio');
}
controller.iniciosesion=(req,res,next)=>{
    res.render('login');
}

controller.registrate=(req,res,next)=>{
    res.render('registro');
}
controller.cliente=(req,res,next)=>{
    res.render('conciertos')
}
controller.crear=async(req,res,next)=>{
const d=req.body.usu_id;
const n=req.body.usu_nombre;
const a=req.body.usu_apellido;
const co=req.body.usu_correo;
const c=req.body.usu_clave;
const f=req.body.usu_fechanacimiento;
const password=await bcryptjs.hash(c,8)

con.query('INSERT INTO tl_usuarios SET?',{usu_id:d,usu_nombre:n,usu_apellido:a,usu_correo:co,usu_clave:password,usu_fechanacimiento:f}, async(err)=>{
    if(err){
        next(new Error(err))
    }
    else{
        res.redirect('cliente')
    }
})
}
controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;//importa el nombre del usuario
    const cla=await req.body.password;//importa la clave del usuario
    //inicio de la consulta en MYSQL con la importacion de sus respectivos datos
    con.query('SELECT * FROM tl_usuarios WHERE usu_correo=?',[usu],async(err,results)=>{

        if(err){
            //valida si existe un error en la consulta o tipeado en la seccion del controlador
            next(new Error("Error en la consulta login",err));
        }
        else if(results!=0 && (bcryptjs.compare(cla,results[0].clave))){
            
                console.log("Los correctos mi rey");
                req.session.login=true;//hace la validacion si el session es true 

                        if(req.session.login){  
                            res.redirect('cliente')
                        }
        }
        else{
            //si no existe un usuario o sus claves son erroneas sera dirigido aqui
            console.log("Datos incorrectos");
            res.redirect('login');//hace que vuelva al mismo menu
        }
    })
}
module.exports=controller;