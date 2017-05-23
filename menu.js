document.addEventListener("DOMContentLoaded", function() {
	var XX = 0;
	
	window.addEventListener('scroll', function(e) {
		var scrll = window.scrollY;
		if(scrll >= 210)
		  {
			  document.getElementById("menMv").style.position="fixed";
				   
						
			  if(scrll > XX)
				{
				   XX =  scrll;
				   //console.log(XX +"sube");
				   document.getElementById("menMv").style.top="-100%";
				}else{
					XX =  scrll;
				   //console.log(XX +"baja");
				   document.getElementById("menMv").style.top="0%";
				}
						
				document.getElementById("menMv").style.left="0";		
						
					
										  
				  
		  }else{
				  document.getElementById("menMv").style.position="relative";
				  document.getElementById("menMv").style.top="0px";
			
	    }
		
	});
	
});