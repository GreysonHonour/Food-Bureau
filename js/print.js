$(function(){
	$("#do_print").bind("click", doPrint);
	$("#sc_pt_pa").bind("click", doPrintArea);

	function doPrint() {
		if(document.getElementById('print') != null){
			document.body.innerHTML=document.getElementById('print').innerHTML;
		} 
		window.print(); 
	} 

	function doPrintArea(){
		if($("#view_pt_cscb").css("display") == "block"){
			$("#view_pt_cscb").printArea();
		}

		else if($("#view_pt_csdr").css("display") == "block"){
			$("#view_pt_csdr").printArea();
		} 

		else if($("#view_pt_cscr").css("display") == "block"){
			$("#view_pt_cscr").printArea();
		} 

		else if($("#view_pt_csmy").css("display") == "block"){
			$("#view_pt_csmy").printArea();
		} 

		else if($("#view_pt_csic").css("display") == "block"){
			$("#view_pt_csic").printArea();
		} 
		else{
			$("#view_pt_csibm").printArea();
		} 
	}
});
