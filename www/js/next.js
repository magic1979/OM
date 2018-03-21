document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
	
	last_click_time = new Date().getTime();
	
	document.addEventListener('click', function (e) {
							  
							  click_time = e['timeStamp'];
							  
							  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
							  
							  e.preventDefault();
							  
							  return false;
							  
							  }
							  
							  last_click_time = click_time;
							  
							  }, true);
	
	
	$(document).on("tap", "#indietro", function(e){
		window.location.href = "index.html";
				   
	});

	
    
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
	
	
    $(".spinner").show();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
	
    
	document.addEventListener("showkeyboard", function(){ $("[data-role=footer]").hide();}, false);
	document.addEventListener("hidekeyboard", function(){ $("[data-role=footer]").show();}, false);
	
	
	// Workaround for buggy header/footer fixed position when virtual keyboard is on/off
	$('input, select')
	.on('focus', function (e) {
		$('header, footer').css('position', 'absolute');
		})
	.on('blur', function (e) {
		$('header, footer').css('position', 'fixed');

		});
	
	
	var email = localStorage.getItem("email");


    if(connectionStatus=='online'){
		//$('#rati1').raty({ score: 3 });
		$(".spinner").hide();

		seleziona();
		
    }
    
    else{
		
		
		$("#noconn").html(tabella);
		
        
    }

}



function onResume() {
    onDeviceReady();
}

function alertDismissed() {
	$(".spinner").hide();
}





