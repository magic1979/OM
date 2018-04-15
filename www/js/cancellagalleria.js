document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
    
    var myScroll ;
	
    myScroll = new IScroll('#wrapper', { click: true, bounce: false });
    
    ilmioalbum()
    
    $("#spinner55").hide();
    
    
    
    
    function ilmioalbum(){
        
        var misura = screen.width/3.3
        
        var emailprincipale = localStorage.getItem("email")
        emailprincipale = emailprincipale.toLowerCase()
        
        var emailseconda = localStorage.getItem("emailalbum")
        emailseconda = emailseconda.toLowerCase()
        
        var chisono= 0;
        
        
        if(emailprincipale==emailseconda){
            $("#fotoalbum2").show()
            $("#fotoalbum").show()
            $("#caricafotodiv2").show()
            
            chisono = 1;
        }
        else{
            
            $("#fotoalbum2").hide()
            $("#fotoalbum").hide()
            $("#caricafotodiv2").hide()
        }
        
        
        var ciccio = 2;
        
        $("#mostraalbum").html("");
        //$("#mostraalbum2").html("");
        
        var connectionStatus = false;
        connectionStatus = navigator.onLine ? 'online' : 'offline';
        
        if(connectionStatus=='online'){
            
            $("#spinner8").show();
            $.ajax({
                   type:"GET",
                   url:"http://msop.it/om/check_mioalbum.php?email="+ localStorage.getItem("emailalbum") +"",
                   contentType: "application/json",
                   //data: {ID: "Lazio"}, LIMIT 10
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   

                   $.each(result, function(i,item){
                          
                          if(item.Token==1){
                          
                          $("#mostraalbum").append("<a id='pp_"+item.nomefoto+"'><img src='http://msop.it/public/om/"+item.nomefoto+".png' border='2' bordercolor='#000' width='100%'></a>")
                          
                       
                          
                          $(document).on("tap", "#pp_"+item.nomefoto+"", function(e){
                                         
                                         var numerofesta = this.id
                                         numerofesta = numerofesta.replace("pp_","")
                                         numerofesta = numerofesta+".png"

                                        cancellafoto(numerofesta)

                                });
                          
                          
                          ciccio = ciccio+1;
                          
                          }
                          
                    });
                   
                   setTimeout (function(){
                               
                               $("#spinner8").hide();
                               
                               myScroll.refresh();
                               
                               }, 1000);
                   
                   },
                   error: function(){
                   
                   navigator.notification.alert(
                                                'Possibile errore di rete, riprova tra qualche minuto.',  // message
                                                alertDismissed,         // callback
                                                'Attenzione',           // title
                                                'Ok'                  // buttonName
                                                );
                   
                   
                   },
                   dataType:"jsonp"});
            
        }
        else{
            
            $("#feste").html("<font color='red'>Nessuna conniessione di rete</font>")
            $("#persone").hide("<font color='red'>Nessuna conniessione di rete</font>")
            
            navigator.notification.alert(
                                         'Errore di rete, riprova sotto copertura',  // message
                                         alertDismissed,         // callback
                                         'Errore di Rete',            // title
                                         'OK'                  // buttonName
                                         );
            
            setTimeout (function(){
                        
                        window.location.href = "index.html";
                        
                        }, 3000);
            
        }
        
    };
    
    
    function cancellafoto(id){
        
        navigator.notification.confirm(
                                       'vuoi rimuovere questa foto?',  // message
                                       onConfirm4,              // callback to invoke with index of button pressed
                                       'Attenzione',            // title
                                       'OK,Annulla'      // buttonLabels
                                       );
        
        
        function onConfirm4(button) {
            if(button==1){    //If User selected No, then we just do nothing
                $.ajax({
                       type:"GET",
                       url:"http://msop.it/om/check_img_canc.php?img="+ id +"",
                       contentType: "application/json",
                       //data: {ID: "Lazio"}, LIMIT 10
                       timeout: 7000,
                       jsonp: 'callback',
                       crossDomain: true,
                       success:function(result){
                       
                       $.each(result, function(i,item){
                              navigator.notification.alert(
                                                           'Foto cancellata correttamente.',  // message
                                                           alertDismissed,         // callback
                                                           '',           // title
                                                           'Ok'                  // buttonName
                                                           );
                              
                              ilmioalbum()
                              });
                       
                       },
                       error: function(){
                       
                       navigator.notification.alert(
                                                    'Possibile errore di rete, riprova tra qualche minuto.',  // message
                                                    alertDismissed,         // callback
                                                    'Attenzione',           // title
                                                    'Ok'                  // buttonName
                                                    );
                       
                       },
                       dataType:"jsonp"});
                
            }
            
        }
        
        return;
    };
    
    
    
    $(document).on("tap", "#indietrobck", function(e){
                   
        window.location.href = "index.html";
                   
    });
    
    
    $(document).on("touchstart", "#annulla233", function(e){
                   
       $("#albumlock").hide()
       
    })
	


    function alertDismissed() {
        $("#spinner").hide();
    }
		

		// FINE CARICAMENTO //
	
	
	$(document).on("touchstart", "#indietro", function(e){
				   
		window.location.href = "index.html";
				   
	});
	
	


}






