//Sample


module.exports = {

  foo : function(){

    throw 'custom error';

    console.log("test0 foo");

  },
    
  bar : function(data){
    data.forEach(function(prm, i){
        console.log('bar prm('+i+') : ' + prm);
    });
  }
}
 