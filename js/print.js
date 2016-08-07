$(function(){
	$("button[type='submit']").bind("click", doPrint);

	function doPrint() {
		if(document.getElementById('print') != null){
			document.body.innerHTML=document.getElementById('print').innerHTML;
		}
		window.print(); 
	} 
});
