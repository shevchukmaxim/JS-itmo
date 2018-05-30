$(document).ready(function(){

	var editor = ace.edit("editor");
	editor.session.setMode("ace/mode/html");
	// enable emmet on the current editor
	editor.setOption("enableEmmet", true);

	var iframe =  document.getElementById('myframe');
	iframeBody = iframe.contentWindow.document.getElementsByTagName('html')[0];

	var framecontent = document.getElementById('myframe').contentDocument.getElementsByTagName('html')[0];
	editor.setValue(framecontent.innerHTML, 1);
	editor.getSession().on('change', function(e) {
		var x = editor.getValue();
		iframeBody.innerHTML = x;
	});
});