'use strict';

module.exports = {

words : (arg) => {

  if(typeof arg === 'string' && arg !== 'null' && arg!="" ){
    arg = arg.toLowerCase();
    arg = arg.replace(/\s{2,}/g, ' ');//removes unneccessary white space
    arg = arg.split(" ");//splits sentence into an array
      let obj = {}
      arg.forEach(function(key){
         
        if (!(key in obj)){
           var value = 0;
           obj[key]=value+1;
          
        }else{
          obj[key]=parseInt(obj[key])+1;
        }
      });
      
      return obj;
      }
      else{
      return 'please input a string';
    }
 }
}