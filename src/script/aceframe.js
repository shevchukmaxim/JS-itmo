$(document).ready(function(){
	var editor = ace.edit("editor");
	editor.session.setMode("ace/mode/html");
	// enable emmet on the current editor
	editor.setOption("enableEmmet", true);


	var iframe =  document.getElementById('preview');
	//var iframeBody = iframe.getElementsByTagName('html');
	
var contentz ='\
<style type="text/css">\n\
	.dot {\n\
	  height: 25px;\n\
	  width: 25px;\n\
	  background-color: #FFFF00;\n\
	  display: inline-block;\n\
	}\n\
</style>\n\n\
<div class="dot"></div>\n\
<div class="dot"></div>\n\
<div class="dot"></div>\n\
';
	iframe.innerHTML = contentz;
	
	var framecontent = iframe.innerHTML;
	editor.setValue(framecontent, 1);
	editor.getSession().on('change', function(e) {
		var x = editor.getValue();
		iframe.innerHTML = x;
	});
});