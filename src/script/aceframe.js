$(document).ready(function(){
	var editor = ace.edit("editor");
	editor.session.setMode("ace/mode/html");
	// enable emmet on the current editor
	editor.setOption("enableEmmet", true);


	var iframe =  document.getElementById('preview');
	//var iframeBody = iframe.getElementsByTagName('html');
	
	var contentz = window.frames[0].document.body.innerHTML; 
	iframe.innerHTML = contentz;
	
	var iframes = document.querySelectorAll('iframe');
	for (var i = 0; i < iframes.length; i++) {
	    iframes[i].parentNode.removeChild(iframes[i]);
	}

	var framecontent = iframe.innerHTML;
	editor.setValue(framecontent, 1);
	editor.getSession().on('change', function() {
		var x = editor.getValue();
		iframe.innerHTML = x;
	});
});