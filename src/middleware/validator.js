  
'use strict';

module.exports=(req,res,next)=>{
    if(req.params.id){
        next();
    }else{
        next('Name Not Found');
    }
}