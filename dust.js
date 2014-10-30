var dust = require('dustjs-linkedin');
var fs = require('fs');

// (function(){dust.register("hello",body_0);function body_0(chk,ctx){return chk.write("Hello ").reference(ctx.get(["name"], false),ctx,"h").write("!!");}return body_0;})();
var template = fs.readFileSync('./templates/hello.template.js', {'encoding': 'utf8'});
eval(template);

dust.render('hello', {name:'Sandy'}, function(err,out) {
  console.log(out);
});
