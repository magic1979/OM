/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		if(screen.height<500){
            
            $("#loader").attr("height","60px");
            
            $("#presentazione").hide();
            
            $("#schermopiccolo").show();
            
        }
        else{
            $("#presentazione").show();
            
            $("#schermopiccolo").hide();
        }
        
        if(screen.width<400){
            $("#pepe").hide();
            
            $("#imgpersone").attr("height","80px");
            
        }
		
		
		$("#emaillogin").focus(function(){
			 $("#bannerpresentazione").hide();
		});
		
		$("#pswlogin").focus(function(){
			 $("#bannerpresentazione").hide();
		});
		
		$("#emaillogin2").focus(function(){
			 $("#bannerpresentazione").hide();
		});
		
		$("#pswlogin2").focus(function(){
			 $("#bannerpresentazione").hide();
		});
		
		
		
		$("#emaillogin").blur(function(){
			 $("#bannerpresentazione").show();
		});
		
		$("#pswlogin").blur(function(){
			 $("#bannerpresentazione").show();
		});
		
		$("#emaillogin2").blur(function(){
			 $("#bannerpresentazione").show();
		});
		
		$("#pswlogin2").blur(function(){
			 $("#bannerpresentazione").show();
		});
		
		
		
		
		
        
        openFB.init({appId: '184833315394016'});
        
        
         $("#spinner8").hide();
		
		IDPage = getParameterByName('id');
		
		if(localStorage.getItem("loggato")=="1"){
			
			$("#bannerpresentazione").hide()
			$("#imginiziale").hide();
			
			$("#scheda1").hide();
			$("#scheda2").hide();
			$("#scheda3").hide();
			$("#scheda4").hide();
		
		}
		
		$("#spinner22").hide();
		
		var swiper = new Swiper('.swiper-container');
		var myScroll2;
		var myScroll3;
		var myScroll4;
		var myScroll5;
		var myScroll55;
        var myScroll57;
        var myScroll59;
		var myScroll7;
		var myScroll27;
        var myScroll77;
		var myScroll8;
        var myScroll9;
		var refreshIntervalId;
		
		var crop_max_width = 400;
		var crop_max_height = 400;
		var jcrop_api;
		var canvas;
		var context;
		var image;
		
		localStorage.setItem("historybck","0")
		
				
		var applaunchCount = localStorage.getItem("launchCount");
		
		
		document.ontouchmove = function(e){ e.preventDefault(); }
		
		// CONTROLLO INTERNET
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			
			var uno;
			var due;
			var tre;
			var quattro;
			var numero = 1;
			var numero1 = 2;
			var numero2 = 3;
			var numero3 = 4;
			var numero4 = 5;
			var numero5 = 6;
			
			$("#lastpunt").hide()
			
			//DATA
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			
			$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
			var ora_cell = yyyy+"_"+mm+"_"+dd+"_"+ora+"_"+minuti+"_"+secondi+"";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			/*var pippo = localStorage.getItem("email")
			pippo = pippo.replace("@","").replace(".","").replace(".","")
			pippo = pippo+"_"+localStorage.getItem("ora_cell")*/

			
			$("#spinner1").hide()
			
			
			if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {

				$("#spinner44").hide()
				
				if(IDPage=="boy"){
					
					$("#imginiziale").hide();
					$("#bannerpresentazione").hide();
					
					$.mobile.changePage("#home3", { transition: "fade" });
					
					document.ontouchmove = function(e){ return true; }
					
				}
				else if(IDPage=="girl"){
					
					$("#imginiziale").hide();
					$("#bannerpresentazione").hide();
					$("#spinner2").hide();
					
					document.ontouchmove = function(e){ return true; }

					$.mobile.changePage("#home2", { transition: "fade" });
					
				}
				else{
					
					setTimeout (function(){
								
					   window.location.href = "present.html";
								
					}, 1500);
					
				}

			}
			else{
				
				if(localStorage.getItem("registrato")=="3"){
					
					/*$("#feste").show();
					
					$("#parte1").show();
					$("#parte2").show();
					
					$("#persone").hide();
					$("#loadpersonaggi").hide();
					
					gohome8()*/
					
					controlloregistrazione()
					
				}
				else{
					
					if(localStorage.getItem("registrato")=="2"){
						
						//controllo self video
						/*window.plugins.nativepagetransitions.fade({
						  "duration"       :  1000,
						  "iosdelay"       :   50,
						  "androiddelay"   :  500,
						  "href" : "#home5"
						  });*/
						
						$("#spinner5").hide()
						
						$.mobile.changePage("#home5", { transition: "fade" });
						
						
					}
                    else if(localStorage.getItem("registrato")=="OK"){
						
						if(localStorage.getItem("primavolta")=="0"){
							window.plugins.nativepagetransitions.fade({
							  "duration"       :  1000,
							  "iosdelay"       :   50,
							  "androiddelay"   :  500,
							  "href" : "#home6"
							  });
						}
						else{
						  controlloregistrazione()
						}
                        
                    }
					else if(localStorage.getItem("registrato")=="3"){
						
						controlloregistrazione()
					
					}
					else{
						
						window.location.href = "present.html";
						
						//$.mobile.changePage("#home4", { transition: "fade" });
						
						/*window.plugins.nativepagetransitions.fade({
																  "duration"       :  1000,
																  "iosdelay"       :   50,
																  "androiddelay"   :  500,
																  "href" : "#home4"
																  });*/
					}
					
				}
				
				//window.location.href = "#home8";
				//$("#spinner8").hide()

			}
			
		}
		else{
			$("#bannerp").hide()
			$("#spinner1").hide()
			
            $("#feste").html("<font color='red'>Nessuna conniessione di rete</font>")
            $("#persone").hide("<font color='red'>Nessuna conniessione di rete</font>")
			
			navigator.notification.alert(
			 'Errore di rete, riprova sotto copertura',  // message
			  alertDismissed,         // callback
			 'Errore di Rete',            // title
			 'OK'                  // buttonName
			);
			
			window.location.href = "index.html";
			
		}
		
		
		function controlloregistrazione(){
			
			setTimeout (function(){
						
				StatusBar.styleDefault();
				StatusBar.backgroundColorByHexString("#fff");
						
			 }, 1200);
			
			//controllo internet
			
			var connectionStatus = false;
			connectionStatus = navigator.onLine ? 'online' : 'offline';
			
			if(connectionStatus=='online'){
				

			$("#spinner8").show();
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/tuned.php?email="+ localStorage.getItem("email")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $("#spinner8").hide();
				   
				   $.each(result, function(i,item){
						  
					  if(item.accesso=="0"){
					  
						$.mobile.changePage("#home7", { transition: "fade" });
						
						$("#bannerpresentazione").hide()
					  
					  }
					  else{
                          
                          localStorage.setItem("myid", item.id);
                          localStorage.setItem("nickname", item.nickname);
                          localStorage.setItem("etaprofilo", item.data_nascita);
                          localStorage.setItem("cittaprofilo", item.citta);
                      
                          localStorage.setItem("orgasmomentale", item.info);
                      
                          localStorage.setItem("nomeimg", item.foto)
                      
                          localStorage.setItem("registrato", "3");

                          localStorage.setItem("loggato", "1");
                      
                      
                          $.mobile.changePage("#home8", { transition: "fade" });
                      
                          $("#feste").show();
                      
                          $("#parte1").show();
                          $("#parte2").show();
                      
                          $("#persone").hide();
                          $("#loadpersonaggi").hide();
                      
                          $("#feste").html("")
                      
                      
                          setTimeout (function(){
                                      
                              listafeste()
                                      
                                      
                          }, 300);
                      
                          $("#fotoprofilo").attr("src","http://msop.it/public/"+item.foto)
                          $("#loadfotoprofilo").attr("src","http://msop.it/public/"+item.foto)
                          $("#loadfotoprofilo2").attr("src","http://msop.it/public/"+item.foto)
                          $("#loadprofilo55").attr("src", "http://msop.it/public/"+item.foto)
                      
                          $("#cambiafotoprofilo").attr("src","http://msop.it/public/"+item.foto)

					  }
						  
					});

				   	$("#spinner8").hide()

				   },
				   error: function(){
				   
				   $("#spinner8").hide()
				   
				   	navigator.notification.alert(
						'Errore di rete, riprova sotto copertura',  // message
						alertDismissed,         // callback
						'Errore di Rete',            // title
						'OK'                  // buttonName
						);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				   dataType:"jsonp"});
			
			// fine controllo internet
				
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
				
				window.location.href = "index.html";
			}
			
		}
		
		
		// % GIRLS In Input crea festa
		
		   document.getElementById("vboys2").value = 50+"%";
		   document.getElementById("vboys").value = 50;
		
			$('#vgirls').on('change', function(){
			
			   var $this = $(this),
			   $value = $this.val();
						   
			   var ragazzetti = 50
			   ragazzetti2 = 50+"%"
						   
			    if($value==0){
					ragazzetti = 100
					ragazzetti2 = 100+"%"
				}
				else if($value==100){
					ragazzetti=0
				    ragazzetti2 = 0+"%"
				}
				else if($value==200){
				 ragazzetti=200
				 ragazzetti2 = "OFF"
				}
				else{
					ragazzetti = 50
					ragazzetti2 = 50+"%"
				}
			   
			   document.getElementById("vboys").value = ragazzetti;
			   document.getElementById("vboys2").value = ragazzetti2;
			   //$("#vediboys").html($value+"%")
						   
			})
		
		//
		
		
		
		$(document).on("touchstart", "#gofacebook", function(e){
					   
			var ref = window.open('https://www.facebook.com/groups/tanadelletigripoker/', '_system', 'location=no');
					   
        });
		
		
		$(document).on("tap", "#setting", function(e){
					   
	   $("#btnpanel").click();
	   
	   });
		

	$(document).on("touchstart", "#indietro", function(e){
				   
	   localStorage.setItem("email","")
	   localStorage.setItem("registrato", "");
					   
	   $("#imginiziale").show();
	   $("#scheda1").show()
	   $("#scheda2").show()
	   $("#scheda3").show()
	   $("#scheda4").show()
	   $("#bannerpresentazione").show()
					   
	   window.location.href = "index.html";
					   
	   /*$("#imginiziale").show();
	   $("#scheda1").show()
	   $("#scheda2").show()
	   $("#scheda3").show()
	   $("#scheda4").show()
	   $("#bannerpresentazione").show()
		
	   var swiper = new Swiper('.swiper-container');
		
		$.mobile.changePage("#home", { transition: "fade" });
		
		document.ontouchmove = function(e){ e.preventDefault(); }*/
					   
		   
	});
		
		
		
		$(document).on("touchstart", "#indietro2", function(e){
					   
		   $.mobile.changePage("#home8", { transition: "fade" });
					   
			setTimeout (function(){
								   
			   myScroll2.refresh();
						
				document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
				
				document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				
				
				e.stopImmediatePropagation();
				
				e.preventDefault();
				
				return false;
				
				if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
			   
			}, 0);
		   
		});
		
		
		$(document).on("touchstart", "#indietro3", function(e){
					   
		  /* $("#listaparty").show();
		   
		   $("#datiparty").hide();
		   $("#anteprimaparty").hide();
		   $("#anteprimaparty2").hide();
					   

		  //$.mobile.changePage("#home8", { transition: "fade" });
		  window.location.href = "#home8";
					   
		   setTimeout (function(){
					   
		      myScroll2.refresh();
					   
			   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
			   
			   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			   
			   
			   e.stopImmediatePropagation();
			   
			   e.preventDefault();
			   
			   return false;
			   
			   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	  
		   }, 0); */
					   
		   localStorage.setItem("arrivochat","0")
		   localStorage.setItem("historybck","0")
		   
		   $("#scheda1").hide();
		   $("#scheda2").hide();
		   $("#scheda3").hide();
		   $("#scheda4").hide();
		   
		   $("#bannerpresentazione").hide()
		   $("#imginiziale").hide();
		   
		   $("#persone").hide();
		   $("#loadpersonaggi").hide();
		   $("#chatnuove").hide();
		   $("#mostrachat").hide();
		   
		   setTimeout (function(){

			   window.plugins.nativepagetransitions.fade({
				 "duration"       :  400, // in milliseconds (ms), default 400
				 "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
				 "androiddelay"   :  600,
				 "href" : "index.html"
				 });

			}, 500);
		   
		});
		
		
		$(document).on("tap", "#indietro42", function(e){
					
			$.mobile.changePage("#home8", { transition: "fade" });
					   

			//window.location.href = "#home8";
			   
			 /* setTimeout (function(){
			 
				myScroll2.refresh();
						  
			   }, 300);*/
					   
		});
        
        $(document).on("tap", "#indietrobck", function(e){
                      
           localStorage.setItem("historybck", "1");
		   
		   history.back()

        });
		
		
		$(document).on("touchstart", "#girl", function(e){
			
			  $("#bannerpresentazione").hide();
					   
			document.ontouchmove = function(e){ return true; }
					   
		    $("#imginiziale").hide();
			$("#spinner2").hide();

			/*window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home2"
			 });*/
					   
					   
		   $.mobile.changePage("#home2", { transition: "fade" });
		   
		    $("#bannerpresentazione").hide();
		   
					   
		});
		
		
		$(document).on("touchstart", "#boy", function(e){
					   
			   $("#imginiziale").hide();
			   
			   $("#bannerpresentazione").hide();
					   
			   $.mobile.changePage("#home3", { transition: "fade" });
			   
			   document.ontouchmove = function(e){ return true; }
			   
			   $("#bannerpresentazione").hide();
			   
		});
		
		
		
		$("#datacal").focus(function() {
				mostracal();
		});
		
		
		
		$(document).on("touchstart", "#reg", function(e){
					   
			   //GIRL
			   
				var email = self.document.formia2.email.value;
				var emailamico = self.document.formia2.emailamico.value;
				var sesso = self.document.formia2.sesso.value;
			   
			   if (email == "") {
				 navigator.notification.alert(
					'inserire Email',  // message
					alertDismissed,         // callback
					'Email',            // title
					'OK'                  // buttonName
					);
				 return;
			   }
			   
			   
			   if (emailamico == "") {
			   navigator.notification.alert(
				'inserire un Email di un amico',  // message
				alertDismissed,         // callback
				'Email Amico',            // title
				'OK'                  // buttonName
				);
			   return;
			   }
			   
			   
			   EmailAddr = self.document.formia2.email.value;
			   Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
			   if (Filtro.test(EmailAddr)) {
			   
			   
			   }
			   else {
			   navigator.notification.alert(
					'Caratteri email non consentiti',  // message
					alertDismissed,         // callback
					'Email',            // title
					'OK'                  // buttonName
					);
			   return;
			   }
			   
			   EmailAddr = self.document.formia2.emailamico.value;
			   Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
			   if (Filtro.test(EmailAddr)) {
			   
			   
			   }
			   else {
				   navigator.notification.alert(
						'Caratteri email amico non consentiti',  // message
						alertDismissed,         // callback
						'Email Amico',            // title
						'OK'                  // buttonName
						);
				   return;
			   }
			   
			   
			   localStorage.setItem("miosesso", sesso);
			   checkemail(email,emailamico,sesso);
			   
			   
			   //localStorage.setItem("email", email);
			   //localStorage.setItem("nomeimg", "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".",""))
					   
					   
	   });
		
		$(document).on("touchstart", "#reg2", function(e){
					   
			   //BOY
			   
			   var email2 = self.document.formia3.email2.value;
			   var emailamico2 = self.document.formia3.emailamico2.value;
			   var sesso2 = self.document.formia3.sesso2.value;
			   
			   if (email2 == "") {
				   navigator.notification.alert(
					'inserire Email',  // message
					alertDismissed,         // callback
					'Email',            // title
					'OK'                  // buttonName
					);
				   return;
			   }
			   
			   
			   if (emailamico2 == "") {
				   navigator.notification.alert(
					'inserire un Email di un amico',  // message
					alertDismissed,         // callback
					'Email Amico',            // title
					'OK'                  // buttonName
					);
				   return;
			   }
			   
			   
			   EmailAddr = self.document.formia3.email2.value;
			   Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
			   if (Filtro.test(EmailAddr)) {
			   
			   
			   }
			   
			   else {
			   navigator.notification.alert(
					'Caratteri email non consentiti',  // message
					alertDismissed,         // callback
					'Email',            // title
					'OK'                  // buttonName
					);
			   return;
			   }
			   
			   EmailAddr = self.document.formia3.emailamico2.value;
			   Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
			   if (Filtro.test(EmailAddr)) {
			   
			   
			   }
			   else {
			   navigator.notification.alert(
				'Caratteri email amico non consentiti',  // message
				alertDismissed,         // callback
				'Email Amico',            // title
				'OK'                  // buttonName
				);
			   return;
			   }
			   

			   localStorage.setItem("miosesso", sesso2);
			   checkemail(email2,emailamico2,sesso2);

			  /*window.plugins.nativepagetransitions.fade({
				 "duration"       :  1000,
				 "iosdelay"       :   50,
				 "androiddelay"   :  500,
				 "href" : "#home4"
				 });*/
			   
			   //$.mobile.changePage("#home4", { transition: "fade" });
					   
	   });
		
		$(document).on("touchstart", "#registra", function(e){
					   

					   var datanascita = self.document.formia4.eta.value;
					   
					   
					   var nickname = self.document.formia4.nickname.value;
					   
					   nickname = nickname.replace(" ","")
					   nickname = nickname.replace(" ","")
					   
					   var password = self.document.formia4.password.value;
					   
					   password = password.replace(" ","")
					   password = password.replace(" ","")
					   
					   var citta = self.document.formia4.citta.value;
					   citta = citta.replace(" ","")
					   citta = citta.replace(" ","")
					   
					   
					   if (datanascita == "0") {
					   navigator.notification.alert(
													'inserire la tua eta',  // message
													alertDismissed,         // callback
													'Data Nascita',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   if (nickname == "") {
					   navigator.notification.alert(
													'inserire Un Nickname',  // message
													alertDismissed,         // callback
													'Nickname',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   if (password == "") {
					   navigator.notification.alert(
													'inserire una Password',  // message
													alertDismissed,         // callback
													'Password',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   if (citta == "") {
					   navigator.notification.alert(
													'inserire una citta',  // message
													alertDismissed,         // callback
													'Citta',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   
					   $(".spinner").show();
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/om/check_registrazione.php?email="+localStorage.getItem("email")+"&password="+password+"&nickname="+nickname+"&sesso="+localStorage.getItem("miosesso")+"&citta="+citta+"&data_nascita="+datanascita+"",
							  contentType: "application/json",
							  //data: {email:email,pin:pin},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							  $.each(result, function(i,item){
									 localStorage.setItem("registrato", "2");
									 

									 if (item.Token == 1){
									   /*window.plugins.nativepagetransitions.fade({
																			   "duration"       :  1000,
																			   "iosdelay"       :   50,
																			   "androiddelay"   :  500,
																			   "href" : "#home5"
																			   });*/
									 
									   $.mobile.changePage("#home5", { transition: "fade" });
                                     
                                       mandaemailreg(item.sendemail)
									 
									 }
									 else{
									 
									   navigator.notification.alert(
                                          'Utente gia registrato',  // message
                                          alertDismissed,         // callback
                                          'Attenzione',            // title
                                          'Done'                  // buttonName@
                                        );
									 
									 }
									 
									 });
							  
							  $(".spinner").hide();
							  
							  },
							  error: function(){
							  $(".spinner").hide();
							  
							  navigator.notification.alert(
								   'Possibile errore di rete, riprova tra qualche minuto',  // message
								   alertDismissed,         // callback
								   'Attenzione',            // title
								   'Done'                  // buttonName
								   );
							  
							  },
							  dataType:"jsonp"});
					   

					   
					   });
        
        
        function mandaemailreg(sendemail){
            
            $.ajax({
                   type:"GET",
                   url:"http://orgasmomentale.it/Check_Reg2.asp?email="+sendemail+"",
                   contentType: "application/json",
                   //data: {email:email,pin:pin},
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                     $.each(result, function(i,item){

                    
                     });
                   
                   },
                   error: function(){
                     $(".spinner").hide();
                   
                     navigator.notification.alert(
                        'Possibile errore di rete, riprova tra qualche minuto',  // message
                        alertDismissed,         // callback
                        'Attenzione',            // title
                        'Done'                  // buttonName
                        );
                   
                   },
                   dataType:"jsonp"});
        }
        
        
		
		$(document).on("touchstart", "#lemiefeste", function(e){
					   
		   $.mobile.changePage("#homelemiefeste", { transition: "fade" });
					   
		   $("#miefeste2").html("")
	   
		   $("#spinner8").show();
		   $.ajax({
			  type:"GET",
			  url:"http://msop.it/om/check_miefeste.php?email="+ localStorage.getItem("email") +"",
			  contentType: "application/json",
			  //data: {ID: "Lazio"}, LIMIT 10
			  timeout: 7000,
			  jsonp: 'callback',
			  crossDomain: true,
			  success:function(result){
			  
			  $("#spinnermiefeste").hide();
			  
			  $.each(result, function(i,item){
					 
				 if(item.Token==1){
				 
				  $("#miefeste2").append("<table><tr><td align='center' valign='center'><a id='#'><img id='wonver1' src='flyer/verticali/"+item.tipofesta+"/"+item.flyer+"' width='105px' border='0' bordercolor='red'></a></td><td valign='center'><table width='100%'><tr><td width='100%'><a id='vv_"+item.id+"'><img src='img/show.png' height='50'></a></td><td valign='center'><a id='mm_"+item.id+"'><img src='img/edit.png' height='50'></a></td><td valign='center'><a id='cc_"+item.id+"'><img src='img/delete.png' height='50'></a></td></tr><tr><td colspan='3'><br>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='3'><a id='aa_"+item.id+"'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='6'> INVITA AMICI </font></a> </td></tr></table></td></tr></table>")
					 

				   $(document).on("tap", "#aa_"+item.id+"", function(e){
									
					 var numerofesta = this.id
					 numerofesta = numerofesta.replace("aa_","")
					
					 invitaparty(numerofesta)
					
				    });
					 
				   $(document).on("tap", "#vv_"+item.id+"", function(e){
								
					var numerofesta = this.id
					numerofesta = numerofesta.replace("vv_","")
					
					gohomeparty(numerofesta)
					
				   });
					 
				  $(document).on("tap", "#pp_"+item.id+"", function(e){
								
					var numerofesta = this.id
					numerofesta = numerofesta.replace("pp_","")
					
					gohomeparty(numerofesta)
								
				  });
					 
					 
				 $(document).on("tap", "#mm_"+item.id+"", function(e){
								
					var numerofesta = this.id
					numerofesta = numerofesta.replace("mm_","")
					
                    modificafesta(numerofesta)
                                
					//alert(numerofesta)
					//gohomeparty(numerofesta)
					
				 });
					 
					 
					 
				 $(document).on("tap", "#cc_"+item.id+"", function(e){
								
					var numerofesta = this.id
					numerofesta = numerofesta.replace("cc_","")
								
								
					// cancella festa
				
					cancellafesta(numerofesta)
					
                    // alert(numerofesta)
					//gohomeparty(numerofesta)
								
                  });

                }
					 
              });
				  
				  
			  $("#miefeste2").append("<table width='100%' height='80px' border='0'><tr><td></td></tr></table>")
                  
              myScroll57 = new iScroll('wrapper57', { click: true, bounce: false });
              
                  
                setTimeout (function(){
                              
                  myScroll57.refresh();
                  
                }, 500);
			  
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
					
        });
		
		
		
		
		
		function cancellafesta(numerofesta){
			
			navigator.notification.confirm(
			   'vuoi davvero eliminare questo private party?',  // message
			    onConfirm2,              // callback to invoke with index of button pressed
			   'Delete',            // title
			   'Cancella,Annulla'      // buttonLabels
			);
			
			
			function onConfirm2(button) {
				if(button==1){    //If User selected No, then we just do nothing
					
					$("#spinnermiefeste").show();
					
					alert(numerofesta)
					
					$.ajax({
					   type:"GET",
					   url:"http://msop.it/om/cancella_festa.php?id="+ numerofesta +"",
					   contentType: "application/json",
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $("#spinnermiefeste").hide();
					   
					   $.each(result, function(i,item){
							  navigator.notification.alert(
														   'Private Party cancellato.',
														   alertDismissed,
														   'Private Party',
														   'Ok'
														   );
							  });
					   
					   },
					   error: function(){
					   $("#spinner8").hide();
					   
					   navigator.notification.alert(
													'Possibile errore di rete, riprova tra qualche minuto.',
													alertDismissed,
													'Attenzione',
													'Ok'
													);
					   
					   },
					dataType:"jsonp"});
					
				}
				
			}

		}
        
        
        
        function modificafesta(idfesta){
            
            //alert(idfesta)
            
            //$.mobile.changePage("#homemodparty", { transition: "fade" });
            
            window.location.href = "#homemodparty";
            
            $("#spinnermodparty").show();


            $.ajax({
                   type:"GET",
                   url:"http://msop.it/om/check_festabyid.php?id="+ idfesta +"",
                   contentType: "application/json",
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                   //alert(item.Token)
                   
                   $.each(result, function(i,item){
                          
                    if(item.Token=="1"){
                          
                          $("#spinnermodparty").hide();
                          

                          /*$("#party").html("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+item.titolo+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
                          
                          $("#dataparty").html(item.citta+", "+item.data+", "+item.location+", ore:"+item.ora)
                          $("#infoparty").append("<font class='AntonioFont' color='#000' size='5'>Location:"+ item.location +", eta:"+ item.eta +"<br><br>" + item.info + "</font>")
                          
                          localStorage.setItem("idbuyfesta", cost);
                          localStorage.setItem("prezzofesta", item.prezzo);
                          localStorage.setItem("nomefesta", item.titolo);
                          
                          $("#areaom").html("<textarea name='orgasmomentale' name='orgasmomentale' type='text' rows='5' cols='15' class='scrivo'>"+ localStorage.getItem("orgasmomentale") +"</textarea>")*/
                          
                          //inizio compilazione
                          
                          $("#nomeparty").html(item.titolo)
                          
                           document.getElementById("cittafestaedit").value = item.citta
                           document.getElementById("idfesta").value = idfesta
                          
                          $("#giornoedit").html("<option value="+item.giorno+" selected>"+item.giorno+"</option><option value='01'>01</option><option value='02'>02</option><option value='03'>03</option><option value='04'>04</option><option value='05'>05</option><option value='06'>06</option><option value='07'>07</option><option value='08'>08</option><option value='09'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option>")
                          
                           $("#giornoedit").selectmenu("refresh");
                          
                          $("#meseedit").html("<option value="+item.mesenumero+" selected>"+item.mese+"</option><option value='01'>Gennaio</option><option value='02'>Febbraio</option><option value='03'>Marzo</option><option value='04'>Aprile</option><option value='05'>Maggio</option><option value='06'>Giugno</option><option value='07'>Luglio</option><option value='08'>Agosto</option><option value='09'>Settembre</option><option value='10'>Ottobre</option><option value='11'>Novembre</option><option value='12'>Dicembre</option>")

                           $("#meseedit").selectmenu("refresh");

                          $("#oraedit").html("<option value='"+item.ora+"' selected>"+item.ora+"</option><option value='08:00'>08:00</option><option value='09:00'>09:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option><option value='12:00'>12:00</option><option value='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option><option value='16:00'>16:00</option><option value='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option><option value='20:00'>20:00</option><option value='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option><option value='00:00'>00:00</option><option value='01:00'>01:00</option><option value='02:00'>02:00</option><option value='03:00'>03:00</option><option value='04:00'>04:00</option><option value='05:00'>05:00</option><option value='06:00'>06:00</option><option value='07:00'>07:00</option>")
                          
                          $("#oraedit").selectmenu("refresh");
                          
                          
                          $("#etaedit").html("<option value='"+item.eta+"' selected>"+item.eta+"</option><option value='18'>18</option><option value='19' >19</option><option value='20' >20</option><option value='21' >21</option><option value='22' >22</option><option value='23' >23</option><option value='24' >24</option><option value='25' >25</option><option value='26' >26</option><option value='27' >27</option><option value='28' >28</option><option value='29' >29</option><option value='30' >30</option><option value='31' >31</option><option value='32' >32</option><option value='33' >33</option><option value='34' >34</option><option value='35' >35</option><option value='36' >36</option><option value='37' >37</option><option value='38' >38</option><option value='39' >39</option><option value='40' >40</option>")
                          
                          
                          $("#etafestaedit2").selectmenu("refresh");
                          
                          
                          $("#locationedit").html("<option value='"+item.location+"' selected>"+item.location+"</option><option value='HOME'>HOME</option><option value='LOCAL'>LOCAL</option>")
                          
                          
                          $("#locationedit").selectmenu("refresh");
                          
                          document.getElementById("invitatiedit").value = item.invitati
                          
                          // MODIFICA INFO //
                          
                          var info1;
                          
                          info1 = item.info
                          
                          info1 = info1.replace("777a", "'");
                          
                          info1 = info1.replace("777b", "+");
                          
                          info1 = info1.replace("777c", "$");
                          
                          info1 = info1.replace("777d", "!");
                          info1 = info1.replace("777d7", "!!");
                          info1 = info1.replace("777d77", "!!!");
                          info1 = info1.replace("777d777", "!!!!!");
                          info1 = info1.replace("777d7777", "!!!!!!");
                          
                          info1 = info1.replace("777e", "(");
                          
                          info1 = info1.replace("777f",")");
                          
                          info1 = info1.replace("777g", ":");
                          
                          info1 = info1.replace("777h", "?");
                          info1 = info1.replace("777h7", "??");
                          info1 = info1.replace("777h77", "???");
                          info1 = info1.replace("777h777", "????");
                          info1 = info1.replace("777h7777", "?????");
                          
                          info1 = info1.replace("777i", "à");
                          info1 = info1.replace("777l", "è");
                          info1 = info1.replace("777m", "ì");
                          info1 = info1.replace("777n", "ò");
                          info1 = info1.replace("777o", "ù");
                          
                          
                          $("#areaedit").html("<textarea name='infoedit' name='infoedit' type='text' rows='5' cols='20' class='scrivo'>"+info1+"</textarea>")
                          
                          var ciccio = item.prezzo
                          ciccio = ciccio.replace(",",".")
                          
                          document.getElementById("prezzoedit").value = ciccio
                          

                          }
                          else{
                          
                          }
                          
                    });


                   
                   //myScroll59 = new iScroll('wrapper59', { click: true, bounce: false });
				   
				   myScroll59 = new iScroll('wrapper59', {
						click: true,
						useTransform: false,
						bounce: false,
						onBeforeScrollStart: function (e)
						{
							var target = e.target;
							while (target.nodeType != 1) {
							target = target.parentNode;
							}
							
							if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
							e.preventDefault();
							}
						}
		
					});
					
                   
                   setTimeout (function(){
  
                        myScroll59.refresh();
                               
                   }, 700);
                   
                   },
                   error: function(){
                   
                   $("#spinner13").hide();
                   
                   navigator.notification.alert(
                        'Errore di rete, riprova sotto copertura',  // message
                        alertDismissed,         // callback
                        'Errore di Rete',            // title
                        'OK'                  // buttonName
                        );
                   
                   window.location.href = "index.html";
                   
                   },
                   
                   
                   dataType:"jsonp"});
             }
        
        
		
		
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
						 
						/* if (IsNotUneven(ciccio) == true)
						 {
						   $("#mostraalbum").append("<a id='pp_"+item.nomefoto+"'><img src='http://msop.it/public/om/"+item.nomefoto+".png' height='100px' width='100px' border='2' bordercolor='#000'></a>&nbsp;&nbsp;")
						 }
						 else
						 {
						   $("#mostraalbum2").append("<a id='pp_"+item.nomefoto+"'><img src='http://msop.it/public/om/"+item.nomefoto+".png' height='100px' width='100px' border='2' bordercolor='#000'></a>&nbsp;&nbsp;")
						 } */
						 
						   /*$("#mostraalbum").append("<a id='pp_"+item.nomefoto+"'><img src='http://msop.it/public/om/"+item.nomefoto+".png' height='100px' border='2' bordercolor='#000'></a>&nbsp;&nbsp;")
                            
                            style='overflow:hidden; width:"+misura+"px; height:"+misura+"px;'
                            
                            */
						 
						 $(document).on("tap", "#pp_"+item.nomefoto+"", function(e){
										
							var numerofesta = this.id
							numerofesta = numerofesta.replace("pp_","")
							numerofesta = numerofesta+".png"
                                        
                            if(chisono==1){
                                        
                                //$("#albumlock").show();
                                        
                                //localStorage.setItem("cancella",numerofesta)
                                        
                               /* var options = {
                                    ocation: 'yes',
                                    clearcache: 'yes',
                                    toolbar: 'yes',
                                    closebuttoncaption: 'OK'
                                };
                                        
                                var ref = window.open('http://msop.it/om/wbsimg.php?nome='+ numerofesta +'&chi='+ chisono +'', '_blank', 'location=no', options); */
                                        
                                if(localStorage.getItem("historybck")!="1"){
                                        
                                     cancellafoto(numerofesta)
                                        
                                  }
                                  else{
									navigator.notification.alert(
									 'Hai cancellato gia delle foto, operazione possibile a breve.',  // message
									 alertDismissed,         // callback
									 'Attenzione',           // title
									 'Ok'                  // buttonName
									 );
								  }
                            }
							
							
						  });
						 
						 
						 ciccio = ciccio+1;
					 
					 }
						 
					});
				  
				  setTimeout (function(){
                              
                    $("#spinner8").hide();
                              
					myScroll55.refresh();
					  
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
		
		
		function IsNotUneven(numero)
		{
			if (isNaN(numero) == false)
			{
				return (numero %2 == 1 ?  true : false);
			}
			else
			{
				return null;
			}
		}
		
		
        $(document).on("touchstart", "#ilmioprofilo", function(e){
					   
            $.mobile.changePage("#homeilmioprofilo", { transition: "fade" });
					   					   
			document.getElementById("cittaprofilo").value = localStorage.getItem("cittaprofilo")
			document.getElementById("etaprofilo").value = localStorage.getItem("etaprofilo")
			document.getElementById("nickprofilo").value = localStorage.getItem("nickname")
                       
            if (localStorage.getItem("orgasmomentale") === null || localStorage.getItem("orgasmomentale")=="null" || typeof(localStorage.getItem("orgasmomentale")) == 'undefined' || localStorage.getItem("orgasmomentale")==0 || localStorage.getItem("orgasmomentale")=="") {
               
                $("#areaom").html("<textarea name='orgasmomentale' name='orgasmomentale' type='text' rows='5' cols='15' class='scrivo'>Descrivi semplicemente cio' che ti rende felice!</textarea>")
                       
            }
            else{
                       
               $("#areaom").html("<textarea name='orgasmomentale' name='orgasmomentale' type='text' rows='5' cols='15' class='scrivo'>"+ localStorage.getItem("orgasmomentale") +"</textarea>")
      
            }
                       
                       
            //myScroll9 = new iScroll('wrapper9', { click: true, bounce: false });
			
			
			myScroll9 = new iScroll('wrapper9', {
				click: true,
				useTransform: false,
				bounce: false,
				onBeforeScrollStart: function (e)
				{
					var target = e.target;
					while (target.nodeType != 1) {
					target = target.parentNode;
					}
					
					if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
					e.preventDefault();
					}
				}

			});
                     
                       
           setTimeout (function(){
                       
             myScroll9.refresh();
           
           }, 500);

                       
        });
        
		

		$(document).on("touchstart", "#fine", function(e){
					   

		   $.ajax({
				  type:"GET",
				  url:"http://msop.it/om/check_video.php?email="+ localStorage.getItem("email")+"",
				  contentType: "application/json",
				  //data: {Lat:3,Longi:4},
				  timeout: 7000,
				  jsonp: 'callback',
				  crossDomain: true,
				  success:function(result){
				  
				  
				  $.each(result, function(i,item){
						 
					 if(item.accesso=="1"){
						 
						  window.plugins.nativepagetransitions.fade({
							   "duration"       :  1000,
							   "iosdelay"       :   50,
							   "androiddelay"   :  500,
							   "href" : "#home6"
							   });
					 }
					 else{
						 
						 navigator.notification.alert(
						  'Devi inserire prima un selfie per proseguire',  // message
						  alertDismissed,         // callback
						  'Selfie Video',            // title
						  'OK'                  // buttonName
						 );
						 
					 }
						 
				  });
				  
				  $("#spinner1").hide()
				  
				  },
				  error: function(){
				  
				  $("#spinner1").hide()
				  
				   navigator.notification.alert(
					   'Errore di rete, riprova sotto copertura',  // message
					   alertDismissed,         // callback
					   'Errore di Rete',            // title
					   'OK'                  // buttonName
					   );
				  
				  window.location.href = "index.html";
				  
				  },
				  
				  dataType:"jsonp"});
		   

		   //$.mobile.changePage( "#home3", { transition: "slide", changeHash: false });
					   
					   
	   });
		
		
		// CARICA FOTO
		
		$(document).on("touchstart", "#fotoalbum2", function(e){
					   
					   
		   //DATA
		   var today = new Date();
		   var dd = today.getDate();
		   var mm = today.getMonth()+1;//January is 0, so always add + 1
		   
		   var ora = today.getHours()
		   if(ora<10){ora="0"+ora}
		   
		   var minuti = today.getMinutes();
		   if(minuti<10){minuti="0"+minuti}
		   
		   var secondi = today.getSeconds();
		   if(secondi<10){secondi="0"+secondi}
		   
		   var yyyy = today.getFullYear();
		   if(dd<10){dd="0"+dd}
		   if(mm<10){mm="0"+mm}
		   today = dd+'/'+mm+'/'+yyyy;
		   
		   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
		   var ora_cell = yyyy+"_"+mm+"_"+dd+"_"+ora+"_"+minuti+"_"+secondi+"";
		   
		   localStorage.setItem("ora_cell", ora_cell);
		   
		   var pippo = localStorage.getItem("email")
		   pippo = pippo.replace("@","").replace(".","").replace(".","")
		   pippo = pippo+"_"+localStorage.getItem("ora_cell")
		   
		   localStorage.setItem("nomegall", pippo)
					   	   
		  $("#spinner55").show()
					   
		   navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90,
				
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				targetWidth: 640,
				targetHeight: 640
		   });
					   
	   });
		
		
		$(document).on("touchstart", "#loadfotoprofilo", function(e){

		    if(localStorage.getItem("nuovimess")=="1"){
			  nuovechat()
		    }
		    else{
			   $("#spinner8").show()
			   loadprofilo(localStorage.getItem("myid"))
		    }

	   });
		
		
		
		
		$(document).on("touchstart", "#fotoprofilo33", function(e){
					   
		   /*window.plugins.nativepagetransitions.fade({
			"duration"       :  1000,
			"iosdelay"       :   50,
			"androiddelay"   :  500,
			"href" : "#indexFoto.html"
		   });*/
					   
            localStorage.setItem("selfie", "1");
					   
            window.location.href = "#home6";
					   
		});
		
		
		$(document).on("touchstart", "#loadfotoprofilo2", function(e){
					   
			$("#spinner8").show()
					   
			loadprofilo(localStorage.getItem("myid"))
					   
		});
		
		
		$(document).on("touchstart", "#loadfotoprofilo6", function(e){
					   
			//loadprofilo()
					   
		});
		
        
        $(document).on("tap", "#controllamail", function(e){

          // setTimeout (function(){
					
				chatdonnabypersone()
					   
                 //nuovechat()
           // }, 500);

                       
        });
		
		$(document).on("tap", "#chatorganizzatore", function(e){
					   
		   // setTimeout (function(){
		   
		   chatdonnabypersone()
		   
		   //nuovechat()
		   // }, 500);
					   
		});
		
		
		$(document).on("touchstart", "#btn_segnala", function(e){
					   
			 var segnalazione = self.document.formiasegnala.segnala.value;
					   
			   if (segnalazione == "") {
				   navigator.notification.alert(
					'inserire un messaggio',  // message
					 alertDismissed,         // callback
					'Segnlazione',            // title
					'OK'                  // buttonName
					);
					   
			   return;
			   }
					   
			   $("#spinner8").show();
				$.ajax({
				type:"GET",
				url:"http://msop.it/om/segnala.php?email="+ localStorage.getItem("email") +"&email2="+ localStorage.getItem("bloccaemail") +"&messaggio="+segnalazione+"",
				contentType: "application/json",
				//data: {ID: "Lazio"}, LIMIT 10
				timeout: 7000,
				jsonp: 'callback',
				crossDomain: true,
				success:function(result){
					   
				    $("#spinner8").hide();
				
					$.each(result, function(i,item){
					   navigator.notification.alert(
						'segnalazione inviata correttamente.',  // message
						alertDismissed,         // callback
						'Segnala Utente',           // title
						'Ok'                  // buttonName
						);
					});
				
				},
				error: function(){
				$("#spinner8").hide();
				
				
				navigator.notification.alert(
				'Possibile errore di rete, riprova tra qualche minuto.',  // message
				alertDismissed,         // callback
				'Attenzione',           // title
				'Ok'                  // buttonName
				);
				
				
				},
				dataType:"jsonp"});
	   
		});
		
		
        
        function nuovechat2(){
			
			if(IDPage=="modificapersone"){
				
				personaggi()
				
				return;
			}

            localStorage.setItem("nuovimess", "0");
            $("#prova").hide();
            
            $("#spinner8").show();
            $.ajax({
                   type:"GET",
                   url:"http://msop.it/om/chat_aperte.php?nickname="+ localStorage.getItem("nickname") +"",
                   contentType: "application/json",
                   //data: {ID: "Lazio"}, LIMIT 10
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                   $("#spinner8").hide();
                   
                   $.each(result, function(i,item){
                          
                      if(item.Token==1){
                      
                       $("#prova").show();
                       localStorage.setItem("nuovimess", "1");
						  
                      }
                          
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
		
		
		
		
        function nuovechat(){
			
			$("#chatnuove").show();
			
			$("#feste").hide();
			$("#persone").hide();
			
			$("#parte1").show();
			$("#parte2").show();
			
			$("#loadpersonaggi").hide();
			
            $("#mostrachat").show();
			$("#mostrachat").html("<br>");
            
            localStorage.setItem("nuovimess", "0");
            $("#prova").hide();
			
			$("#spinner8").show();
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/chat_aperte.php?nickname="+ localStorage.getItem("nickname") +"",
				   contentType: "application/json",
				   //data: {ID: "Lazio"}, LIMIT 10
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $("#spinner8").hide();
				   
				   $.each(result, function(i,item){
						
						if(item.Token==1){
                          
                          $("#prova").show();
                          localStorage.setItem("nuovimess", "1");
						  localStorage.setItem("nickname2", item.nick);
						  localStorage.setItem("fotochat", item.foto);
						  
						  var linkfoto = item.foto
						  linkfoto = linkfoto.replace(".png","")
						  
						  $("#mostrachat").append("<br><table><tr><td><div id='prova' class='quantity_cart'></div><a id='_po_"+linkfoto+"_po_"+item.nick+"'><img id='#' src='http://msop.it/public/"+item.foto+"' width='105px' border='0' bordercolor='red' class='utenteimg2B'></a></td><td><font class='AntonioFontBold' color='#000' size='5'>"+item.nick+"</font></td></tr></table>");
						  
						  //$("#mostrachat").append("<br><table><tr><td><div id='prova' class='quantity_cart'></div><a id='_po_"+linkfoto+"_po_"+item.nick+"'><img id='#' src='http://msop.it/public/"+item.foto+"' width='105px' border='0' bordercolor='red' class='utenteimg2A'></a></td><td><font class='AntonioFontBold' color='#000' size='5'>"+item.nick+"</font></td></tr></table>");
						  
						  
						   //"+item.nick+"<br>
						  
						  //alert("#_po_"+linkfoto+"_po_"+item.nick+"")
						  
						  $(document).on("tap", "#_po_"+linkfoto+"_po_"+item.nick+"", function(e){
										 
							 //alert(this.id)
										 
							 var str=this.id;
							 
							 var a1 = new Array();
							 a1=str.split("_po_");
							 
							 //alert(a1[1] +" "+ a1[2])
							 
							 var linkfoto2 = a1[1]+".png"
							 
							 localStorage.setItem("nickname2", a1[2]);
							 localStorage.setItem("fotochat", linkfoto2);
                                         
                            localStorage.setItem("arrivochat", "1");
							 
							 chatdonnabypersone()
							 
							});
						  
						}
						  
					});
				   
				   setTimeout (function(){
							   
					   myScroll2.scrollTo(0, 0);
					   
					   myScroll2.refresh();
					   
					   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
					   
					   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
					   
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
					}, 0);
				   
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
        
        
        function bloccautente(){
			
            
            if(localStorage.getItem("email").toLowerCase()==localStorage.getItem("bloccaemail").toLowerCase()){
                navigator.notification.alert(
                 'Non puoi bloccare te stesso.',  // message
                 alertDismissed,         // callback
                 'Attenzione',           // title
                 'Ok'                  // buttonName
                 );

                return;
            }
            
            $("#spinner8").show();
			
			$.ajax({
			   type:"GET",
			   url:"http://msop.it/om/blocca.php?email="+ localStorage.getItem("email") +"&email2="+ localStorage.getItem("bloccaemail") +"&messaggio=",
			   contentType: "application/json",
			   //data: {ID: "Lazio"}, LIMIT 10
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
				   
				$("#spinner8").hide();
			   
			    $.each(result, function(i,item){
				   navigator.notification.alert(
					'Utente Bloccato.',  // message
					alertDismissed,         // callback
					'Blocca Utente',           // title
					'Ok'                  // buttonName
					);
				});
			   
			   },
			   error: function(){
			   $("#spinner8").hide();
			   
			   
			   navigator.notification.alert(
					'Possibile errore di rete, riprova tra qualche minuto.',  // message
					alertDismissed,         // callback
					'Attenzione',           // title
					'Ok'                  // buttonName
					);
			   
			   
			   },
			   dataType:"jsonp"});
            
           // localStorage.getItem("bloccaemail")
            
        }
		
        
		function loadprofilo(id){

			$("#persone").hide();
			
			$("#feste").hide();
			$("#parte1").hide();
			$("#parte2").hide();
			$("#parte3").hide();
			$("#bannerpresentazione").hide()
			$("#makeparty").hide()
			
			setTimeout (function(){
				$("#makeparty").hide()
			}, 2000);
			
			
			$("#chatnuove").hide();
			
			$("#scheda").html("")
			
			$("#loadpersonaggi").show();
			
			localStorage.setItem("idprofilo", id);
        
             $("#spinner8").show()
            
             localStorage.setItem("linkorganizzatore","")
            
             $.ajax({
             type:"GET",
             url:"http://msop.it/om/check_utente.php?myid="+ id +"",
             contentType: "application/json",
             //data: {Lat:3,Longi:4},
             timeout: 7000,
             jsonp: 'callback',
             crossDomain: true,
             success:function(result){
             
                 $.each(result, function(i,item){
                
                    $("#profiloman").html("<div id='frecciaback' class='frecciasx'><a id='private'><img src='img/indietro_over.png' height='30px'></a></div><img src='http://msop.it/public/"+item.foto+"' width='100%' class='pippo22profilo'><div id='#' class='puntini'><a id='menuprofilo'><img src='img/menu4.png' height='30px'></a></div>")
                        
                        // LEGGO INFO //
                        
                        var info1;
                        
                        info1 = item.info
                        
                        info1 = info1.replace("777A", "'");
                        
                        info1 = info1.replace("777B", "+");
                        
                        info1 = info1.replace("777C", "$");
                        
                        info1 = info1.replace("777D", "!");
                        info1 = info1.replace("777D7", "!!");
                        info1 = info1.replace("777D77", "!!!");
                        info1 = info1.replace("777D777", "!!!!");
                        info1 = info1.replace("777D7777", "!!!!!");
                        
                        info1 = info1.replace("777E", "(");
                        
                        info1 = info1.replace("777F",")");
                        
                        info1 = info1.replace("777G", ":");
                        
                        info1 = info1.replace("777H", "?");
                        info1 = info1.replace("777H7", "??");
                        info1 = info1.replace("777H77", "???");
                        info1 = info1.replace("777H777", "????");
                        info1 = info1.replace("777H7777", "?????");
                        
                        info1 = info1.replace("777I", "à");
                        info1 = info1.replace("777L", "è");
                        info1 = info1.replace("777M", "ì");
                        info1 = info1.replace("777N", "ò");
                        info1 = info1.replace("777O", "ù");
                    
						
						if (item.info=== null || item.info=="null" || typeof(item.info) == 'undefined' ||item.info==0 || item.info=="") {
						
						  $("#scheda").html("<font size='4'><b>Descrivi semplicemnte cio' che ti rende felice!</b> </font> <br>")
						
						}
						else{
						  $("#scheda").html("<font size='4'><b>"+info1+"</b> </font> <br>")
						}
                        
                        
                    var contanick = item.nickname.length;
					var contacitta = item.citta.length;
                    var nuovonick
                    
                    if(contanick <= 11){
                        
                        $("#name").html("<font class='AntonioFontBold' color='#00ffff' size='10'>"+item.nickname+"</font>")
                        $("#dati").html("<font class='AntonioFontBold' color='#00ffff' size='10'>"+item.citta + ", " + item.eta+"</font>")
                    
                    }
                    else{
                        
                        //nuovonick = item.nickname.slice(0,10)
                        
                        //nuovonick = nuovonick + ".."
                        
                        $("#name").html("<font class='AntonioFontBold nomeprofilo' color='#00ffff' >"+item.nickname+"</font><br>")
                        
						if(contacitta <= 15){
                        
                           $("#dati").html("<font class='AntonioFontBold nomecitta' color='#00ffff' >"+item.citta + ", " + item.eta+"</font>")
                        }
                        else{
                        
                            nuovacitta = item.citta.slice(0,15)
                        
                            nuovacitta = nuovacitta + ".."
                        
                           $("#dati").html("<font class='AntonioFontBold nomecitta' color='#00ffff' >"+nuovacitta + ", " + item.eta+"</font>")
                        
                        }
                    
                    }
                        
                    $("#fotoby").html("<img id='load_"+item.id2+"' src='http://msop.it/public/"+item.foto2+"' class='utenteimg2B'>")
                    $("#name2").html(item.nickname2)
                    //$("#dati2").html(item.citta2 + ", " + item.eta2)
						
				    localStorage.setItem("nickname2", item.nickname);
					localStorage.setItem("fotochat", item.foto);
					localStorage.setItem("bloccaemail", item.email);
					localStorage.setItem("emailalbum", item.email);
						
                        
                    $("#recensioni").html("<img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed.png' height='30'><img src='img/feed.png' height='30'>")
                        
                        
                    $(document).on("tap", "#load_"+item.id2+"", function(e){
           
                       var loademail = this.id
                       loademail = loademail.replace("load_","")
                       
                       loadprofilodonna(loademail)
                       //alert(loademail)
                       
                    });
						
						
					$(document).on("touchstart", "#menuprofilo", function(e){

					   //$("#costobiglietto").html(biglietto)
					   
					   //$("#costobiglietto2").html(twobiglietto)
					   
						document.getElementById("lockprofiloin").value = localStorage.getItem("bloccaemail")
					   
					   $("#profilolock").show()
					   
					})
                     
                  /*  myScroll3 = new iScroll('wrapper3', {
                        click: true,
                        useTransform: false,
                        bounce: false,
                        onBeforeScrollStart: function (e)
                        {
                        var target = e.target;
                        while (target.nodeType != 1) {
                        target = target.parentNode;
                        }
                        
                        if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
                        e.preventDefault();
                        }
                        }
                        
                    });*/
                    
                    setTimeout (function(){
                                
                        myScroll2.scrollTo(0, 0);
                                
                        myScroll2.refresh();
								
						document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
						
						document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
						
						
						e.stopImmediatePropagation();
						
						e.preventDefault();
						
						return false;
						
						if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
                    
                    }, 0);
                 
                 });
             
                 $("#spinner8").hide()
             
             },
             error: function(){
             
              $("#spinner8").hide()
             
                 navigator.notification.alert(
                 'Errore di rete, riprova sotto copertura',  // message
                 alertDismissed,         // callback
                 'Errore di Rete',            // title
                 'OK'                  // buttonName
                 );
					
			   window.location.href = "index.html";
             
             },
             
             dataType:"jsonp"});

			
		}
		
        
        function loadprofilodonna(id){
            
            $("#bannerpresentazione").hide()
			
			setTimeout (function(){
				$("#makeparty").hide()
			}, 2000);
		   
            localStorage.setItem("idprofilo", id);
			
			$("#scheda").html("")
			
            $("#spinner8").show()
            
            $.ajax({
                   type:"GET",
                   url:"http://msop.it/om/check_utente.php?myid="+ id +"",
                   contentType: "application/json",
                   //data: {Lat:3,Longi:4},
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                   $.each(result, function(i,item){
                          
                          //$("#profiloman").html("<table width='100%' height='480' align='center' background='http://msop.it/public/"+item.foto+"' style='background-size: 100% auto; background-repeat: no-repeat;' class='uomo' valign='bottom'><tr><td width='100%' align='center' valign='bottom'></td></tr></table>")
                          
                          $("#profiloman").html("<div id='frecciaback' class='frecciasx'><a id='private'><img src='img/indietro_over.png' height='30px'></a></div><img src='http://msop.it/public/"+item.foto+"' class='pippo22profilo'><div id='#' class='puntini'><a id='menuprofilo'><img src='img/menu4.png' height='30px'></a></div>")
                          
                          var info1;
                          
                          info1 = item.info
                          
                          info1 = info1.replace("777A", "'");
                          
                          info1 = info1.replace("777B", "+");
                          
                          info1 = info1.replace("777C", "$");
                          
                          info1 = info1.replace("777D", "!");
                          info1 = info1.replace("777D7", "!!");
                          info1 = info1.replace("777D77", "!!!");
                          info1 = info1.replace("777D777", "!!!!");
                          info1 = info1.replace("777D7777", "!!!!!");
                          
                          info1 = info1.replace("777E", "(");
                          
                          info1 = info1.replace("777F",")");
                          
                          info1 = info1.replace("777G", ":");
                          
                          info1 = info1.replace("777H", "?");
                          info1 = info1.replace("777H7", "??");
                          info1 = info1.replace("777H77", "???");
                          info1 = info1.replace("777H777", "????");
                          info1 = info1.replace("777H7777", "?????");
                          
                          
						  if (item.info=== null || item.info=="null" || typeof(item.info) == 'undefined' ||item.info==0 || item.info=="") {
						  
						    $("#scheda").html("<font size='4'><b>Descrivi semplicemnte ciò che ti rende felice!</b> </font> <br>")
						  
						  }
						  else{
						    $("#scheda").html("<font size='4'><b>"+info1+"</b> </font> <br>")
						  }
                          
                          var contanick = item.nickname.length;
						  var contacitta = item.citta.length;
                          var nuovonick
                          
                          if(contanick <= 11){
                          
                            $("#name").html("<font class='AntonioFontBold' color='#00ffff' size='10'>"+item.nickname+"</font>")
                            $("#dati").html("<font class='AntonioFontBold' color='#00ffff' size='10'>"+item.citta + ", " + item.eta+"</font>")
                          
                          }
                          else{
                          
                            //nuovonick = item.nickname.slice(0,10)
                          
                            //nuovonick = nuovonick + ".."
                          
							  $("#name").html("<font class='AntonioFontBold nomeprofilo' color='#00ffff' >"+item.nickname+"</font><br>")
							 
							 if(contacitta <= 15){
                        
							   $("#dati").html("<font class='AntonioFontBold nomecitta' color='#00ffff' >"+item.citta + ", " + item.eta+"</font>")
							 }
							 else{
								
								nuovacitta = item.citta.slice(0,15)
							
								nuovacitta = nuovacitta + ".."
							
							   $("#dati").html("<font class='AntonioFontBold nomecitta' color='#00ffff' >"+nuovacitta + ", " + item.eta+"</font>")
								
							 }
                          
                          }
                          
                          
                          $("#fotoby").html("<img id='load_"+item.id2+"' src='http://msop.it/public/"+item.foto2+"' class='utenteimg2B'>")
                          $("#name2").html(item.nickname2)
                          //$("#dati").html(item.citta2 + ", " + item.eta2)
                          
                          localStorage.setItem("nickname2", item.nickname);
                          localStorage.setItem("fotochat", item.foto);
						  localStorage.setItem("bloccaemail", item.email);
						  localStorage.setItem("emailalbum", item.email);
                          
                          $("#recensioni").html("<img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed.png' height='30'><img src='img/feed.png' height='30'>")
                          
                          
                          $(document).on("tap", "#load_"+item.id2+"", function(e){
                                         
                             var loademail = this.id
                             loademail = loademail.replace("load_","")
                             
                             loadprofilodonna(loademail)
                             //alert(loademail)
                                         
                            });
                          

                          setTimeout (function(){
                                      
                            myScroll2.refresh();
									  
							  document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
							  
							  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
							  
							  
							  e.stopImmediatePropagation();
							  
							  e.preventDefault();
							  
							  return false;
							  
							  if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
                                      
                        }, 0);
                          
                });
                   
                   $("#spinner8").hide()
                   
                   },
                   error: function(){
                   
                   $("#spinner8").hide()
                   
                   navigator.notification.alert(
						'Errore di rete, riprova sotto copertura',  // message
						alertDismissed,         // callback
						'Errore di Rete',            // title
						'OK'                  // buttonName
					);
				   
				   window.location.href = "index.html";
                   
                   },
                   
                   dataType:"jsonp"});
			
        }
                   
    
		
		function uploadPhoto(imageURI) {
			
			// Convert image
            
            //alert("1")
			
			 getFileContentAsBase64(imageURI,function(base64Image){
								   
			 localStorage.setItem("imgutente2", base64Image);
			 //localStorage.setItem("imgutente3", base64Image.replace("data:image/jpeg;base64,","").replace("data:image/jpeg;base64,",""));
			 localStorage.setItem("imgutente3", base64Image.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,",""));
			
            //alert(localStorage.getItem("nomegall"))
									
			setTimeout (function(){
				$.ajax({
					   type: "POST",
					   url: "http://msop.it/album.php",
					   data: {imgdata:localStorage.getItem("imgutente3"),foto:localStorage.getItem("nomegall"),email:localStorage.getItem("email")},
					   cache: false,
					   crossDomain: true,
					   contentType: "application/x-www-form-urlencoded",
					   success: function (result) {
					   
					   $("#spinner55").hide();
					   
							navigator.notification.alert(
							'File caricato correttamente.',  // message
							alertDismissed,         // callback
							'File Upload',           // title
							'Done'                  // buttonName
							);
					   
							ilmioalbum()

					   },
					   error: function(){
					   
					   $("#spinner55").hide();
					   
					   navigator.notification.alert(
						'Errore Imprevisto, contatta il fornitore',  // message
						alertDismissed,         // callback
						'Errore',            // title
						'OK'                  // buttonName
						);
					   
					   }
					   
				});
				
				}, 1000);
									
		   });
			
		}
		
		
		function getFileContentAsBase64(path,callback){
            
            //alert("2")
            
			window.resolveLocalFileSystemURL(path, gotFile, fail);
			
			function fail(e) {
				alert('Cannot found requested file');
			}
			
			function gotFile(fileEntry) {
				   fileEntry.file(function(file) {
				   var reader = new FileReader();
				   reader.onloadend = function(e) {
				   var content = this.result;
				   
					var largeImage = document.getElementById('fotoalbum');
					largeImage.style.display = 'block';
					largeImage.src = content;
				   
					callback(content);

				   };
				   reader.readAsDataURL(file);
				});
			}
		}
		
		
		/*function getFileContentAsBase64(path,callback){
			window.resolveLocalFileSystemURL(path, gotFile, fail);
			
			function fail(e) {
				alert('Cannot found requested file');
			}
			
			
			function gotFile(fileEntry) {
				fileEntry.file(function(file) {
				   var reader = new FileReader();
				   canvas = null;
				   reader.onloadend = function(e) {
				   var content = this.result;
				   
				   image = new Image();
				   image.onload = validateImage;
				   image.src = this.result;
				   
				   callback(content);
				   
				   };
				   // The most important point, use the readAsDatURL Method from the file plugin
				   reader.readAsDataURL(file);
				   });
			}
			
			setTimeout (function(){
			  myScroll.refresh();
			}, 500);
			
			
		}*/
		
		
		function onFail(message) {
			
			navigator.notification.alert(
			 'Nessuna foto caricata',  // message
			 alertDismissed,         // callback
			 'Foto',            // title
			 'OK'                  // buttonName
			 );
			
		}
		
		
		$(document).on("tap", "#makeparty", function(e){
		   
		   $("#anteprimafinale2").hide();
		   $("#anteprimafinale").hide();
		   $("#anteprimaparty").hide();
		   $("#anteprimaparty2").hide();
                       
           $("#datiparty").hide();
		   
	

			/*window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#homecreaparty"
			 
			 page.iScroll = new IScroll("#target",options);
			 page.iScroll.on('scroll', page.updateContent);
			 page.iScroll.on('scrollEnd', page.updateContent);
			
			});*/

			   $.mobile.changePage("#homecreaparty", { transition: "fade" });
					   
			   document.ontouchmove = function(e){ e.preventDefault(); }
					   
			   $("#tastomenu").html("<a id='indietro3'><img src='img/indietro_over.png' height='30px'></a>");
					   
			   $("#anteprimaparty").hide();
			   $("#anteprimaparty2").hide();
			   $("#footerparty").hide();
			   
			   $("#listaparty").show();
			   
					   
			   setTimeout (function(){
				 $("#spinner14").hide();  
				   
						   
               	$("#listaparty").append("<tr><td align='center' bgcolor='#000000'><img id='massage' src='strisce/massage.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='cock' src='strisce/cock.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='moulin' src='strisce/moulin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='play' src='strisce/play.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='latin' src='strisce/latin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='hitme' src='strisce/hitme.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='sushi' src='strisce/sushi.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='lingerie' src='strisce/lingerie.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='boys' src='strisce/boys.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='disco' src='strisce/disco.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='toyboy' src='strisce/toy.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='colorp' src='strisce/color.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pool' src='strisce/pool.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='eat' src='strisce/eat.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='fetish' src='strisce/fetish.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='girls' src='strisce/girls.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='after' src='strisce/after.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='wonderfulldinner' src='strisce/wonderfoul.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='mask' src='strisce/mask.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pijama' src='strisce/pijama.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='massage' src='strisce/massage.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='cock' src='strisce/cock.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='moulin' src='strisce/moulin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='play' src='strisce/play.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='latin' src='strisce/latin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='hitme' src='strisce/hitme.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='sushi' src='strisce/sushi.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='lingerie' src='strisce/lingerie.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='boys' src='strisce/boys.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='disco' src='strisce/disco.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='toyboy' src='strisce/toy.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='colorp' src='strisce/color.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pool' src='strisce/pool.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='eat' src='strisce/eat.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='fetish' src='strisce/fetish.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='girls' src='strisce/girls.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='after' src='strisce/after.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='wonderfulldinner' src='strisce/wonderfoul.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='mask' src='strisce/mask.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pijama' src='strisce/pijama.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='massage' src='strisce/massage.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='cock' src='strisce/cock.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='moulin' src='strisce/moulin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='play' src='strisce/play.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='latin' src='strisce/latin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='hitme' src='strisce/hitme.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='sushi' src='strisce/sushi.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='lingerie' src='strisce/lingerie.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='boys' src='strisce/boys.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='disco' src='strisce/disco.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='toyboy' src='strisce/toy.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='colorp' src='strisce/color.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pool' src='strisce/pool.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='eat' src='strisce/eat.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='fetish' src='strisce/fetish.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='girls' src='strisce/girls.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='after' src='strisce/after.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='wonderfulldinner' src='strisce/wonderfoul.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='mask' src='strisce/mask.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pijama' src='strisce/pijama.jpg' width='100%'></td></tr>");
						   

	   //myScroll8 = new iScroll('wrapper8', { click: true,bounce: false });
	   
	   myScroll8 = new iScroll('wrapper8', {
		click: true,
		useTransform: false,
		bounce: false,
		onBeforeScrollStart: function (e)
		{
			var target = e.target;
			while (target.nodeType != 1) {
			target = target.parentNode;
			}
			
			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
			e.preventDefault();
			}
		}

	});
			   
			   
				setTimeout (function(){
						   
				   myScroll8.refresh();
				   
				}, 500);
					
					
						   
				  /* myScroll8.on("scrollEnd", function() {
						if (this.y == 0){
						 //alert("inizio")
						
						}
						if (this.y < 0){
						 //alert("inizio nascondi")
						}
						if (this.y == this.maxScrollY){
						
						 $("#listaparty").append("<tr><td align='center' bgcolor='#000000'><img id='massage' src='strisce/massage.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='cock' src='strisce/cock.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='moulin' src='strisce/moulin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='play' src='strisce/play.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='latin' src='strisce/latin.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='hitme' src='strisce/hitme.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='sushi' src='strisce/sushi.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='lingerie' src='strisce/lingerie.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='boys' src='strisce/boys.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='disco' src='strisce/disco.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='toyboy' src='strisce/toy.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='colorp' src='strisce/color.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pool' src='strisce/pool.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='eat' src='strisce/eat.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='fetish' src='strisce/fetish.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='girls' src='strisce/girls.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='after' src='strisce/after.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='wonderfulldinner' src='strisce/wonderfoul.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='mask' src='strisce/mask.jpg' width='100%'></td></tr><tr><td align='center' bgcolor='#000000'><img id='pijama' src='strisce/pijama.jpg' width='100%'></td></tr>");
						
						
						  setTimeout (function(){
							   
							   myScroll8.refresh();
							   
							}, 200);
						
						}
						if (this.y > this.maxScrollY){
						//alert("Fine Nascondi")
						
						}
					}) */
						 
   
			   }, 700);

		});
		
		
	$(document).on("tap", "#cock", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='cock2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/cock.jpg' width='100%'></td></tr></table>")
	   
	   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
	   
		$("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> EAT - MEETING -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> L'aperitivo è da sempre il miglior modo per conoscersi e lasciarsi andare alle più piacevoli conversazioni,ndalle più banali fino alle più confidenziali… <br>Il Cocktail Party può svolgersi nella propria abitazione sulla comodità di un divano o in un affollatissimo bar del centro. <br>Unico obbiettivo: fare amicizia!! <br>Per la completa riuscita dell'evento accompagnare con degli stuzzichini tutta la durata del Party. <br>TUTTO PUO' NASCERE DAVANTI A UN BUON COCKTAIL! <div><center><img src='img/macchia.png' width='60px'></center></div> Meet exciting new people in the simplest most classic way: over a drink!<br>The Cocktail Party may be organized  in hip central venues, or in the comfort of your own house.<br>The main goal is to mingle!<br>Who knows who is waiting to chat you up?Whilst you are flirting the night away , we will provide the best balance between snacks and great cocktails.<br>EVERYTHING CAN HAPPEN OVER A COCKTAIL! <br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#cock2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","cock")
		  localStorage.setItem("tipofesta","COCKTAIL PARTY")
		  
		  $("#fotoflyer").html("<img id='cock1' src='flyer/verticali/cock/cock1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='cock2' src='flyer/verticali/cock/cock2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='cock3' src='flyer/verticali/cock/cock3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#cock1").attr("border","4");
		  $("#cock2").attr("border","0");
		  $("#cock3").attr("border","0");
		  localStorage.setItem("festaimg","cock1.jpg")
		  
		  $(document).on("touchstart", "#cock1", function(e){
						 
			 $("#cock1").attr("border","4");
			 $("#cock2").attr("border","0");
			 $("#cock3").attr("border","0");
			 localStorage.setItem("festaimg","cock1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#cock2", function(e){
						 
			 $("#cock2").attr("border","4");
			 $("#cock1").attr("border","0");
			 $("#cock3").attr("border","0");
			 localStorage.setItem("festaimg","cock2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#cock3", function(e){
						 
			 $("#cock3").attr("border","4");
			 $("#cock2").attr("border","0");
			 $("#cock1").attr("border","0");
			 localStorage.setItem("festaimg","cock3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);

	   
	   });
		
		
	$(document).on("tap", "#latin", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='latin2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/latin.jpg' width='100%'></td></tr></table>")
	   
	   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
	   
		$("#anteprimaparty2").html("<br><table align='center' ><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4'> <br> Il Private Party che fa tendenza! <br>Come dice Luis: <br>'Quiero ver bailar tu pelo Quiero ser tu ritmo Que le enseñes a mi boca Tus lugares favoritos (Favorito, favorito baby)' <br>La musica latina è la più seducente e coinvolgente!  Passi di Salsa e Reggaeton regalano da sempre emozioni senza eguali!<br>Organizzare un Latin Party è semplicissimo: <br> melodie Caraibiche e un buon impianto Hi-Fi! <br>Chiudi gli occhi e immagina di trovarti a piedi nudi sulle spiagge di Cuba gustando un Mojito ghiacciato al ritmo di Bachata! <br>Non è un Private Party qualsiasi...  è la moda!!! <br>Per la completa riuscita dell'evento consigliamo una location dove il volume della musica non sia un problema per i vicini!<br>TODA LA NOCHE PARA BAILAR! <div><center><img src='img/macchia.png' width='60px'></center></div> This Private Party is always trendy!<br>How Luis is saying: <br>Quiero ver bailar tu pelo Quiero ser tu ritmo Que le enseñes a mi boca Tus lugares favoritos <br>(Favorito, favorito baby) <br>Latin music is without doubt the most seductive and addictive, dance steps of Salsa and Reggaeton give you unforgettable emotions.<br>It is very simple to organize:<br>you need only a caribbean melody and a good Hi-Fi sound sistem!<br>When you close your eyes you imagine yourself in the beaches of Cuba, with bare feet and a frozen Mojito, dancing to the rhythm of Bachata.<br> It's not just like any other private party...<br>It's a fashion style.<br>For guaranteed succes we recommend a location where the volume of the music won't be a problem for the neighbours! <br>TODA LA NOCHE PARA BAILAR! <br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#latin2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","latin")
		  localStorage.setItem("tipofesta","LATIN PARTY")
		  
		  $("#fotoflyer").html("<img id='latin1' src='flyer/verticali/latin/latin1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='latin2' src='flyer/verticali/latin/latin2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='latin3' src='flyer/verticali/latin/latin3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#latin1").attr("border","4");
		  $("#latin2").attr("border","0");
		  $("#latin3").attr("border","0");
		  localStorage.setItem("festaimg","latin1.jpg")
		  
		  $(document).on("touchstart", "#latin1", function(e){
						 
			 $("#latin1").attr("border","4");
			 $("#latin2").attr("border","0");
			 $("#latin3").attr("border","0");
			 localStorage.setItem("festaimg","latin1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#latin2", function(e){
						 
			 $("#latin2").attr("border","4");
			 $("#latin1").attr("border","0");
			 $("#latin3").attr("border","0");
			 localStorage.setItem("festaimg","latin2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#latin3", function(e){
						 
			 $("#latin3").attr("border","4");
			 $("#latin2").attr("border","0");
			 $("#latin1").attr("border","0");
			 localStorage.setItem("festaimg","latin3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);
	   
	   
	   });
		
		
 $(document).on("tap", "#play", function(e){
					   
   $("#listaparty").hide();
   $("#anteprimaparty").show();
   $("#anteprimaparty2").show();
   
   $("#anteprimafinale").hide();
   $("#anteprimafinale2").hide();
   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
   
   $("#footerparty").show();
   $("#tastocrea").html("<a id='play2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
   
   
   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/play.jpg' width='100%'></td></tr></table>")
   
   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
   
    $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Hai mai sognato di rivivere gli anni delle fantastiche e spregiudicate notti bollenti , passate nella Playboy Mansion di BeverlyHills , insieme al fondatore del magazine per uomini più famoso al mondo?<br>Rigorosamente in giacca e cravatta o nella storica vestaglia rossa è il dress code dei ragazzi!<br>Body , polsini , papillon e le immancabili orecchie da coniglietta è la divisa delle ragazze! <br>Per la completa riuscita dell'evento dimenticate timidezza e monogamia!<br>CONIGLIETTA UNA VOLTA…<br>CONIGLIETTA PER SEMPRE! <div><center><img src='img/macchia.png' width='60px'></center></div> Have you ever dreamed of reliving the years of  fantastic and unconventional hot nights spent in FAMOUSE  Playboy mansion  in Beverlyhills, together with the founder of the most noted men's magazine in the world?<br>Strictly in a suit and tie or in historical dressing-gown, it's a dress code for boys. <br>Body, cuffs,papillons and of course inevitable bunny ears it's an uniform for girls. <br>For the complete success of the event forget shyness and monogamy! <br>BUNNY FOR ONCE… BUNNY FOREVER!  <br></font></b></td></tr></table>")
   
   
   $(document).on("touchstart", "#play2", function(e){
				  
	  document.ontouchmove = function(e){ e.preventDefault(); }
	  
	  localStorage.setItem("cartellaimg","play")
	  localStorage.setItem("tipofesta","PLAYBOY PARTY")
	  
	  $("#fotoflyer").html("<img id='play1' src='flyer/verticali/play/play1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='play2' src='flyer/verticali/play/play2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='play3' src='flyer/verticali/play/play3.jpg' width='105px' border='0'>");
	  
	  $("#anteprimaparty").hide();
	  $("#datiparty").show();
	  $("#anteprimaparty2").hide();
	  
	  $("#play1").attr("border","4");
	  $("#play2").attr("border","0");
	  $("#play3").attr("border","0");
	  localStorage.setItem("festaimg","play1.jpg")
	  
	  $(document).on("touchstart", "#play1", function(e){
					 
		 $("#play1").attr("border","4");
		 $("#play2").attr("border","0");
		 $("#play3").attr("border","0");
		 localStorage.setItem("festaimg","play1.jpg")
		 
		 });
	  
	  
	  $(document).on("touchstart", "#play2", function(e){
					 
		 $("#play2").attr("border","4");
		 $("#play1").attr("border","0");
		 $("#play3").attr("border","0");
		 localStorage.setItem("festaimg","play2.jpg")
		 
		 });
	  
	  $(document).on("touchstart", "#play3", function(e){
					 
		 $("#play3").attr("border","4");
		 $("#play2").attr("border","0");
		 $("#play1").attr("border","0");
		 localStorage.setItem("festaimg","play3.jpg")
		 
		 });
				  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
   
   
   setTimeout (function(){
			   
	  myScroll8.scrollTo(0, 0);
	   
	   myScroll8.refresh();
	   
	   }, 500);
   
   
   });
		
		
  $(document).on("tap", "#moulin", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='moulin2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/moulin.jpg' width='100%'></td></tr></table>")
	   
	   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
	   
		$("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Fantasia per molti… realtà per pochi!<br>Questo Private Party nasce con lo scopo di esibirsi in uno show decisamente travolgente!<br>Anche una semplice abitazione può trasformarsi nel teatro più stupefacente!<br>Quali sono le caratteristiche diuno spettacolo Burlesque?<br>Possiamo definirlo uno streap-tease dalle sfumature comiche!<br>Lo stile delle ballerine è inconfondibile:<br>corpetti , bustini , pizzi , merletti e parigine!<br>Look che ricorda le protagonistedel mitico Moulin Rouge!<br>Per la completa riuscita dell'evento consigliamo di creare una playlist decisamente da spogliarello!<br>LEDIES AND GENTLEMAN... SI VA IN SCENA! <div><center><img src='img/macchia.png' width='60px'></center></div> Fantasy for many,  reality for a few!<br>This Private Party is born with the purpose of performing in a definitely overwhelming show!<br>Even a common home can be transformed into the most amazing theater!<br>What are the characteristics of a Burlesque show?<br>We can call it a strip-tease with comic nuances!<br>The style of the dancers is unmistakable: bodices, bustiers, and lace.<br>A Parisian story with the protagonist playing the part of the legendary Moulin Rouge!<br>For the complete success of the event , we advice there has been created a perfect strip playlist!<br>LEDIES AND GENTLEMAN ... IT'S ON STAGE! <br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#moulin2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","moulin")
		  localStorage.setItem("tipofesta","MOULIN ROUGE")
		  
		  $("#fotoflyer").html("<img id='moulin1' src='flyer/verticali/moulin/moulin1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='moulin2' src='flyer/verticali/moulin/moulin2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='moulin3' src='flyer/verticali/moulin/moulin3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#moulin1").attr("border","4");
		  $("#moulin2").attr("border","0");
		  $("#moulin3").attr("border","0");
		  localStorage.setItem("festaimg","moulin1.jpg")
		  
		  $(document).on("touchstart", "#moulin1", function(e){
						 
			 $("#moulin1").attr("border","4");
			 $("#moulin2").attr("border","0");
			 $("#moulin3").attr("border","0");
			 localStorage.setItem("festaimg","moulin1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#moulin2", function(e){
						 
			 $("#moulin2").attr("border","4");
			 $("#moulin1").attr("border","0");
			 $("#moulin3").attr("border","0");
			 localStorage.setItem("festaimg","moulin2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#moulin3", function(e){
						 
			 $("#moulin3").attr("border","4");
			 $("#moulin2").attr("border","0");
			 $("#moulin1").attr("border","0");
			 localStorage.setItem("festaimg","moulin3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
				   myScroll8.scrollTo(0, 0);
				   
				   myScroll8.refresh();
				   
				   }, 500);
	   
	   
	   });
		
		
	$(document).on("tap", "#massage", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='massage2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/massage.jpg' width='100%'></td></tr></table>")
	   
	   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
	   
	  $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Il Private Party incentrato totalmente sul piacere del RELAX. <br>Organizzato sia dai ragazzi che dalle ragazze , ha lo scopo di donare piacere all'altro con la magia dell'arte del massaggio. <br>Musica rilassante , candele profumate ed oli caldi doneranno momenti di assoluto godimento. <br>Per la completa riuscita dell'evento assicurarsi che ogni postazione massaggi sia comoda e ben confortevole. <br>LA PARTE PIU' EMOZIONANTE E DIVERTENTE SARA' PROVARE SEMPRE DIVERSE MANI E RICAMBIARNE IL PIACERE! <div><center><img src='img/macchia.png' width='60px'></center></div> This type of Private Party is entirely focused on the pleasure of RELAXATION. <br>Organized by both men and women it is focused on giving  pleasure to one another with the art of  magic massage. <br>Relaxing music, scented candles and hot oils will provide moments  of maximum enjoyment. <br>For the complete success of the event must be provide high quality massage chairs. <br>EXPERIENCE  DIFFERENT HANDS AND DIFFRENT PLEASURES THEY CAN PROVIDE! <br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#massage2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","massage")
		  localStorage.setItem("tipofesta","MASSAGE PARTY")
		  
		  $("#fotoflyer").html("<img id='massage1' src='flyer/verticali/massage/massage1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='massage2' src='flyer/verticali/massage/massage2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='massage3' src='flyer/verticali/massage/massage3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#massage1").attr("border","4");
		  $("#massage2").attr("border","0");
		  $("#massage3").attr("border","0");
		  localStorage.setItem("festaimg","massage1.jpg")
		  
		  $(document).on("touchstart", "#massage1", function(e){
						 
			 $("#massage1").attr("border","4");
			 $("#massage2").attr("border","0");
			 $("#massage3").attr("border","0");
			 localStorage.setItem("festaimg","massage1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#massage2", function(e){
						 
			 $("#massage2").attr("border","4");
			 $("#massage1").attr("border","0");
			 $("#massage3").attr("border","0");
			 localStorage.setItem("festaimg","massage2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#massage3", function(e){
						 
			 $("#massage3").attr("border","4");
			 $("#massage2").attr("border","0");
			 $("#massage1").attr("border","0");
			 localStorage.setItem("festaimg","massage3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);
	   
	   
	   });
        
        
    
    $(document).on("tap", "#girls", function(e){
                       
       $("#listaparty").hide();
       $("#anteprimaparty").show();
       $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
       
       $("#anteprimafinale").hide();
       $("#anteprimafinale2").hide();
       
       $("#footerparty").show();
       $("#tastocrea").html("<a id='girls2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
       
       
       $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/girls.jpg' width='100%'></td></tr></table>")
       
			//<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
       
        $("#anteprimaparty2").html("<br><table align='center' ><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> GIRLS&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY -FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Organizzato dalle ragazze per le ragazze , vivendo una notte nell'immenso piacere femminile! <br>UN EVENTO PER CREARE NUOVE AMICIZIE E NON SOLO... <div><center><img src='img/macchia.png' width='60px'></center></div> Organized by women for women ,Bring in the female pleasure!<br>AN EVENT TO MEET NEW FRIENDS AND MORE... <br></font></b></td></tr></table>")
       
       
		   $(document).on("touchstart", "#girls2", function(e){
						  
				  document.ontouchmove = function(e){ e.preventDefault(); }
				  
				  localStorage.setItem("cartellaimg","girls")
				  localStorage.setItem("tipofesta","GIRLS ONLY PARTY")
				  
				  $("#fotoflyer").html("<img id='girls1' src='flyer/verticali/girls/girls1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='girls2' src='flyer/verticali/girls/girls2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='girls3' src='flyer/verticali/girls/girls3.jpg' width='105px' border='0'>");
				  
				  $("#anteprimaparty").hide();
				  $("#datiparty").show();
				  $("#anteprimaparty2").hide();
				  
				  $("#girls1").attr("border","4");
				  $("#girls2").attr("border","0");
				  $("#girls3").attr("border","0");
				  localStorage.setItem("festaimg","girls1.jpg")
				  
				  $(document).on("touchstart", "#girls1", function(e){
								 
					 $("#girls1").attr("border","4");
					 $("#girls2").attr("border","0");
					 $("#girls3").attr("border","0");
					 localStorage.setItem("festaimg","girls1.jpg")
					 
				   });
				  
				  
				  $(document).on("touchstart", "#girls2", function(e){
								 
					 $("#girls2").attr("border","4");
					 $("#girls1").attr("border","0");
					 $("#girls3").attr("border","0");
					 localStorage.setItem("festaimg","girls2.jpg")
					 
					});
				  
				  $(document).on("touchstart", "#girls3", function(e){
								 
					 $("#girls3").attr("border","4");
					 $("#girls2").attr("border","0");
					 $("#girls1").attr("border","0");
					 localStorage.setItem("festaimg","girls3.jpg")
					 
					 });
				  
				  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
				  
				  
				  setTimeout (function(){
							  
					  myScroll8.refresh();
					  
				  }, 500);
						  
			})
                       
				   
		   setTimeout (function(){
					   
			 myScroll8.scrollTo(0, 0);
					   
			  myScroll8.refresh();
		   
		   }, 500);
                       
                       
        });
		
		
		
		$(document).on("tap", "#after", function(e){
					   
			   $("#listaparty").hide();
			   $("#anteprimaparty").show();
			   $("#anteprimaparty2").show();
			   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
			   
			   $("#anteprimafinale").hide();
			   $("#anteprimafinale2").hide();
			   
			   $("#footerparty").show();
			   $("#tastocrea").html("<a id='after2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
					   
			   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/after.jpg' width='100%'></td></tr></table>")
					   
			   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
					   
			   $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MEETING - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Rigorosamente dalle 4.00 del mattino , un vero After Party non ha regole e limitazioni! <br>Per gli amanti delle prime luci dell’alba , ancora delusi dalla chiusura delle discoteche , è paragonabile ad un oasi nel deserto! <br>Occhiali da sole e look caotico sono l'inevitabile dress code di ogni partecipante!<br>Tutto ciò che non si è riuscito a dire e a fare durante la notte come per incanto l'After Party lo renderà possibile , trasportando ogni partecipante in un vortice di spensieratezza molto più che surreale! <br>TUTTO COME IN UN QUADRO DI SALVADOR DALI'! <div><center><img src='img/macchia.png' width='60px'></center></div> After 4:00 am, a real After Party doesnt have rules and limits! <br>For the lovers of the morning light, still dissapointed from the shut down of the club, comparable with an oasis in the dessert. <br>Sun glasses and caothic look are the unavoidable dress code of ebery participant. <br>All that hasnt been said or done during the night, as an enchant , After Party will make it possible transporting in a vortex of not thinking more than surreal <br>ALL LIKE IN A SALVADOR DALI’ PAINT! <br> </font></b></td></tr></table>")
					   
				$(document).on("touchstart", "#after2", function(e){
									  
				  document.ontouchmove = function(e){ e.preventDefault(); }
				  
				  localStorage.setItem("cartellaimg","after")
				  localStorage.setItem("tipofesta","AFTER PARTY")
				  
				  $("#fotoflyer").html("<img id='after1' src='flyer/verticali/after/after1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='after2' src='flyer/verticali/after/after2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='after3' src='flyer/verticali/after/after3.jpg' width='105px' border='0'>");
				  
				  $("#anteprimaparty").hide();
				  $("#datiparty").show();
				  $("#anteprimaparty2").hide();
				  
				  $("#after1").attr("border","4");
				  $("#after2").attr("border","0");
				  $("#after3").attr("border","0");
				  localStorage.setItem("festaimg","after1.jpg")
						  
				  $(document).on("touchstart", "#after1", function(e){
								 
					 $("#after1").attr("border","4");
					 $("#after2").attr("border","0");
					 $("#after3").attr("border","0");
					 localStorage.setItem("festaimg","after1.jpg")
					 
					 });
						  
						  
				  $(document).on("touchstart", "#after2", function(e){
								 
					 $("#after2").attr("border","4");
					 $("#after1").attr("border","0");
					 $("#after3").attr("border","0");
					 localStorage.setItem("festaimg","after2.jpg")
					 
					 });
						  
				  $(document).on("touchstart", "#after3", function(e){
								 
					 $("#after3").attr("border","4");
					 $("#after2").attr("border","0");
					 $("#after1").attr("border","0");
					 localStorage.setItem("festaimg","after3.jpg")
					 
					 });
						  
				  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
				  
				  
				  setTimeout (function(){
							  
					  myScroll8.refresh();
					  
					  }, 500);
				  
				  })
					   
					   
					   
		   setTimeout (function(){
					   
			  myScroll8.scrollTo(0, 0);
					   
			   myScroll8.refresh();
			   
			}, 500);
					   
		});
		
		
		
		
		$(document).on("tap", "#wonderfulldinner", function(e){
					   		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		 
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
					   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='wonderfulldinner2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
					  
			
			$("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/wonderful.jpg' width='100%'></td></tr></table>")
            
            //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
                       
            $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> GIRLS - BOYS&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Questo Private Party nasce solo ed esclusivamente per recitare , divertirsi e stupire!<br>Ogni partecipante alla cena impersonificherà un personaggio famoso a sua scelta , storico o contemporaneo , assumendone letteralmente movenze e peculiarità!<br>Non sarà una semplice festa in maschera , ma bensì una vera e propria rappresentazione teatrale.<br>Tutti i commensali si sentiranno come immersi in uno splendido LIVING THEATRE ineguagliabile! <br>Per la completa riuscita dell'evento ogni partecipante dovrà studiare accuratamente il proprio personaggio ed immedesimarsi completamente per tutta la durata del Party.<br>LA VITA E' TROPPO SERIA PER ESSERE PRESA SERIAMENTE! <div><center><img src='img/macchia.png' width='60px'></center> </div> The Wonderful Dinner is the hot new dress up party with a twist. <br>Dress code: famous characters from any era, and will embody the said character during the duration of the night.<br>Consider it as a theatrical event.<br>Make sure to do some reasearch on your character to be fully prepared for this night of madness. <br>LIFE IS TOO SERIOUS TO BE TAKEN SERIOUSLY! <br></font></b></td></tr></table>")
   

			$(document).on("touchstart", "#wonderfulldinner2", function(e){
						   
				document.ontouchmove = function(e){ e.preventDefault(); }
						   
				localStorage.setItem("cartellaimg","wonderfulldinner")
				localStorage.setItem("tipofesta","WONDERFUL DINNER")
							
				$("#fotoflyer").html("<img id='wonver1' src='flyer/verticali/wonderfulldinner/wonver1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='wonver2' src='flyer/verticali/wonderfulldinner/wonver2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='wonver3' src='flyer/verticali/wonderfulldinner/wonver3.jpg' width='105px' border='0'>");
				
				$("#anteprimaparty").hide();
				$("#datiparty").show();
				$("#anteprimaparty2").hide();
						   
			   $("#wonver1").attr("border","4");
			   $("#wonver2").attr("border","0");
			   $("#wonver3").attr("border","0");
			   localStorage.setItem("festaimg","wonver1.jpg")
				
				$(document).on("touchstart", "#wonver1", function(e){
				
				$("#wonver1").attr("border","4");
			    $("#wonver2").attr("border","0");
				$("#wonver3").attr("border","0");
				localStorage.setItem("festaimg","wonver1.jpg")
				
				});
				
						   
				$(document).on("touchstart", "#wonver2", function(e){
				
					$("#wonver2").attr("border","4");
					$("#wonver1").attr("border","0");
					$("#wonver3").attr("border","0");
					localStorage.setItem("festaimg","wonver2.jpg")
				
				});
				
				$(document).on("touchstart", "#wonver3", function(e){
				
					$("#wonver3").attr("border","4");
					$("#wonver2").attr("border","0");
					$("#wonver1").attr("border","0");
					localStorage.setItem("festaimg","wonver3.jpg")
							
				});
						   
				$("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
						   
						   
				setTimeout (function(){
							   
				  myScroll8.refresh();
				   
				}, 500);
						   
			})
					   
					   
					   
	    setTimeout (function(){
					   
		   myScroll8.scrollTo(0, 0);
					   
		   myScroll8.refresh();
		   
		   }, 500);
					   
					   
		});
		
		
		
		$(document).on("tap", "#mask", function(e){
					   
		   //alert()
		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='mask2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/mask.jpg' width='100%'></td></tr></table>")
		   
		   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
		   
        $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY - MEETING - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Alla domanda:<br>'sei mai stato ad una festa in maschera?'<br>rispondiamo immancabilmente tutti di si!<br>'…e in mascherina?'<br>Sexy , divertente , enigmatica e provocatoria!<br>Questo Private Party è tra tutti il più semplice da realizzare e il più difficile da far decollare!<br>In un contesto casual-elegant , ciò che caratterizza l'evento , è l'obbligo per i partecipanti di indossare per tutta la durata del Party una misteriosa mascherina Venezian style. <br>Una festa vissuta di sensazioni , flirt e battiti di cuore... <br>Ciò che ci affascina di più è sempre ciò che non conosciamo affatto! <br>Per la riuscita dell'evento consigliamo maschere comode che lascino le labbra completamente libere!<br>A VOLTE UNA MASCHERA CI DICE PIU' DI UN VOLTO!  <div><center><img src='img/macchia.png' width='60px'></center></div> To the question: <br>'have you ever been to a mask party?' <br> we all respond without fail: yes!<br> And… 'in a little mask?' <br>Sexy, fun, enigmatic and provocative! <br> This type of private party is one of the simplest and the most difficult to start! <br>In a casual-elegant context, which characterises the event, it’s obligatory for the participants to wear a mysterious Venetian mask for the duration of the party.  <br>A party filled with sensations, flirting and heart beats... because after all, what fascinates us most is what we don’t fully know! <br>For the complete success of the event, we suggest comfortable masks and that you leave the lips completely free! <br>AT TIMES A MASK REVEALS MORE THAN A FACE! <br></font></b></td></tr></table>")
		   
			   
		   $(document).on("touchstart", "#mask2", function(e){
						  
			  document.ontouchmove = function(e){ e.preventDefault(); }
			  
			  localStorage.setItem("cartellaimg","mask")
			  localStorage.setItem("tipofesta","MASK PARTY")
			  
			  $("#fotoflyer").html("<img id='mask1' src='flyer/verticali/mask/mask1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='mask2' src='flyer/verticali/mask/mask2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='mask3' src='flyer/verticali/mask/mask3.jpg' width='105px' border='0'>");
			  
			  $("#anteprimaparty").hide();
			  $("#datiparty").show();
			  $("#anteprimaparty2").hide();
			  
			  $("#mask1").attr("border","4");
			  $("#mask2").attr("border","0");
			  $("#mask3").attr("border","0");
			  localStorage.setItem("festaimg","mask1.jpg")
			  
			  $(document).on("touchstart", "#mask1", function(e){
							 
				 $("#mask1").attr("border","4");
				 $("#mask2").attr("border","0");
				 $("#mask3").attr("border","0");
				 localStorage.setItem("festaimg","mask1.jpg")
				 
			   });
			  
			  
			  $(document).on("touchstart", "#mask2", function(e){
							 
				 $("#mask2").attr("border","4");
				 $("#mask1").attr("border","0");
				 $("#mask3").attr("border","0");
				 localStorage.setItem("festaimg","mask2.jpg")
				 
			 });
			  
			  $(document).on("touchstart", "#mask3", function(e){
							 
				 $("#mask3").attr("border","4");
				 $("#mask2").attr("border","0");
				 $("#mask1").attr("border","0");
				 localStorage.setItem("festaimg","mask3.jpg")
				 
			 });
			  
			  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
			  
			  
			  setTimeout (function(){
						  
				  myScroll8.refresh();
				  
				  }, 500);
			  
			  })
		   
		   
		   
		   setTimeout (function(){
					   
			  myScroll8.scrollTo(0, 0);
					   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
	$(document).on("tap", "#pijama", function(e){
				   
		   //alert()
		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='pijama2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/pijama.jpg' width='100%'></td></tr></table>")
		   
		   //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
	   
            $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL&nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Chi non ha mai partecipato oppure organizzato un indimenticabile Pigiama Party?<br>La festa per i più piccoli che finalmente potevano passare la notte a casa con gli amici. <br>Un pigiama , tanti cuscini del buon gossip e il party è fatto!<br>TRA IL DIRE E IL FARE C'E' DI MEZZO IL PIGIAMA!  <div><center><img src='img/macchia.png' width='60px'></center></div> Who had never participated  or organized a memorable Pajama Party?<br>A party for kids where they could finally spend the night  at  home with friends . <br>Pajama,  pillow, blanket , good gossip and the party is done! <br>BETWEEN SAYING AND DOING  SOMETHING THERE IS  ALWAYS PAJAMA! <br> </font></b></td></tr></table>")
		   
		   
		   $(document).on("touchstart", "#pijama2", function(e){
						  
				  document.ontouchmove = function(e){ e.preventDefault(); }
				  
				  localStorage.setItem("cartellaimg","pijama")
				  localStorage.setItem("tipofesta","PIJAMA PARTY")
				  
				  $("#fotoflyer").html("<img id='pijama1' src='flyer/verticali/pijama/pijama1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='pijama2' src='flyer/verticali/pijama/pijama2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='pijama3' src='flyer/verticali/pijama/pijama3.jpg' width='105px' border='0'>");
				  
				  $("#anteprimaparty").hide();
				  $("#datiparty").show();
				  $("#anteprimaparty2").hide();
				  
				  $("#pijama1").attr("border","4");
				  $("#pijama2").attr("border","0");
				  $("#pijama3").attr("border","0");
				  localStorage.setItem("festaimg","pijama1.jpg")
				  
				  $(document).on("touchstart", "#pijama1", function(e){
								 
					 $("#pijama1").attr("border","4");
					 $("#pijama2").attr("border","0");
					 $("#pijama3").attr("border","0");
					 localStorage.setItem("festaimg","pijama1.jpg")
					 
					});
				  
				  
				  $(document).on("touchstart", "#pijama2", function(e){
								 
					 $("#pijama2").attr("border","4");
					 $("#pijama1").attr("border","0");
					 $("#pijama3").attr("border","0");
					 localStorage.setItem("festaimg","pijama2.jpg")
								 
					});
				  
				  $(document).on("touchstart", "#pijama3", function(e){
								 
					 $("#pijama3").attr("border","4");
					 $("#pijama2").attr("border","0");
					 $("#pijama1").attr("border","0");
					 localStorage.setItem("festaimg","pijama3.jpg")
								 
					});
				  
				  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
				  
				  
				  setTimeout (function(){
							  
					  myScroll8.refresh();
					  
					}, 500);
						  
			})
		   
		   
		   
		   setTimeout (function(){
					   
			  myScroll8.scrollTo(0, 0);
					   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
	 $(document).on("tap", "#hitme", function(e){
	   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='hitme2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/hitme.jpg' width='100%'></td></tr></table>")
	   
        $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Il Private Party più crazy e originale!<br>L’evento dove ogni ragazza indosserà abiti maschili e ogni ragazzo abiti femminili!! <br>Per lei camicia , giacca e baffi finti… per lui vestitino , tacchi , trucco e parrucco!<br>Ma non sarà soltanto lo scambio di abbigliamento a caratterizzare l'evento: per tutta la durata della festa anche i comportamenti e atteggiamenti dovranno essere invertiti! <br>Chi indosserà i pantaloni sarà galante e complimentoso mostrando molte attenzioni verso le sexy e provocatorie 'signorine muscolose'! <br>BABY CONQUISTAMI ANCORA UNA VOLTA!<br>Divertimento assicurato! <br>Sogno proibito di molti… <br>desiderio realizzato per pochi! <br>Per la completa riuscita dell'evento consigliamo un piccolo aiuto da entrambe le parti per il rituale del travestimento e scambio di identità! <div><center><img src='img/macchia.png' width='60px'></center></div> The most crazy and original! <br>Private Party where every girl wears men’s clothes and every boy  wears  women's clothes. <br>For her shirts,  jackets and fake mustaches. <br>For him dress, heels and wig. <br>Not only exchange of clothing  characterize this event. <br>For entire duration of this special party, also behaviors and attitudes  have to be reversed. <br>Who is wearing  the pants have to  be gallant and complimentary, by showing a lot of attention to  sexy and provocative 'muscled young ladies'! <br>HIT ME BABY ONE MORE TIME! <br>Exclusive fun.  Forbidden dream of  many! <br>Desire realized by a few. <br>For the complete success of the event we recommend a little help from both sexes to facilitatethe process of dressing up and playing exchange of identity! <br> </font></b></td></tr></table>")
	   
	   
	    $(document).on("touchstart", "#hitme2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","hitme")
		  localStorage.setItem("tipofesta","BABY ONE MORE TIME")
		  
		  $("#fotoflyer").html("<img id='hitme1' src='flyer/verticali/hitme/hitme1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='hitme2' src='flyer/verticali/hitme/hitme2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='hitme3' src='flyer/verticali/hitme/hitme3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#hitme1").attr("border","4");
		  $("#hitme2").attr("border","0");
		  $("#hitme3").attr("border","0");
		  localStorage.setItem("festaimg","hitme1.jpg")
		  
		  $(document).on("touchstart", "#hitme1", function(e){
						 
			 $("#hitme1").attr("border","4");
			 $("#hitme2").attr("border","0");
			 $("#hitme3").attr("border","0");
			 localStorage.setItem("festaimg","hitme1.jpg")
				 
			});
		
		  
		  $(document).on("touchstart", "#hitme2", function(e){
						 
			 $("#hitme2").attr("border","4");
			 $("#hitme1").attr("border","0");
			 $("#hitme3").attr("border","0");
			 localStorage.setItem("festaimg","hitme2.jpg")
				 
			});
		  
		  $(document).on("touchstart", "#hitme3", function(e){
						 
			 $("#hitme3").attr("border","4");
			 $("#hitme2").attr("border","0");
			 $("#hitme1").attr("border","0");
			 localStorage.setItem("festaimg","hitme3.jpg")
						 
			});
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
				   
		   myScroll8.refresh();
		   
		   }, 500);
					   
	});
		
		$(document).on("tap", "#sushi", function(e){
					   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='sushi2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/sushi.jpg' width='100%'></td></tr></table>")
		   
		   $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> EAT - MEETING - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Sushi , Giappone , Gheishe e Kimoni. <br>L'immancabile angolo del SUSHI , preparato al momento da scenografici e pittoreschi maestri orientali , di certo non sarà l’unica delle tante attrazioni del Party! <br>Tutti gli invitati , rigorosamente a tema , indosseranno tutto ciò che la cultura giapponese richiede. <br>Per la completa riuscita dell'evento fornire bacchette e gadget a tema. <br>FARE L'AMORE E' COME MANGIARE SUSHI… NON CI SI STANCA MAI!!! <div><center><img src='img/macchia.png' width='60px'></center></div> The exotic flavours of  SUSHI, the extravagant style and culture brought by geishas and their frivolous kimonos. <br>Be ready to expect all of the above, including a sushi buffet freshly prepared on demand by our talented sushi masters. <br>All guests are encouraged to follow a Japan-inspired dress code Charming Geishas and brave ninja warriors will make this night memorable! <br>MAKING LOVE IS LIKE EATING SUSHI… YOU WILL NEVER HAVE ENOUGH!!! <br> </font></b></td></tr></table>")
		   
		   
	 $(document).on("touchstart", "#sushi2", function(e){
						  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","sushi")
		  localStorage.setItem("tipofesta","SUSHI PARTY")
		  
		  $("#fotoflyer").html("<img id='sushi1' src='flyer/verticali/sushi/sushi1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='sushi2' src='flyer/verticali/sushi/sushi2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='sushi3' src='flyer/verticali/sushi/sushi3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#sushi1").attr("border","4");
		  $("#sushi2").attr("border","0");
		  $("#sushi3").attr("border","0");
		  localStorage.setItem("festaimg","sushi1.jpg")
		  
		  $(document).on("touchstart", "#sushi1", function(e){
						 
			 $("#sushi1").attr("border","4");
			 $("#sushi2").attr("border","0");
			 $("#sushi3").attr("border","0");
			 localStorage.setItem("festaimg","sushi1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#sushi2", function(e){
						 
			 $("#sushi2").attr("border","4");
			 $("#sushi1").attr("border","0");
			 $("#sushi3").attr("border","0");
			 localStorage.setItem("festaimg","sushi2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#sushi3", function(e){
						 
			 $("#sushi3").attr("border","4");
			 $("#sushi2").attr("border","0");
			 $("#sushi1").attr("border","0");
			 localStorage.setItem("festaimg","sushi3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
		   
		   
		   setTimeout (function(){
					   
			  myScroll8.scrollTo(0, 0);
					   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
		
	$(document).on("tap", "#lingerie", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='lingerie2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/lingerie.jpg' width='100%'></td></tr></table>")
	   
        $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Come alzare il livello di sensualità con un pizzico di malizia? <br>Il divertentissimo Lingerie Party prevede  una regola fondamentale: <br>'Allo scoccare della mezzanotte ad ogni partecipante al Party sarà richiesto di continuare la serata indossando soltanto lingerie intima!'  <br>Per la completa riuscita dell'evento assicurarsi un buon impianto di riscaldamento.<br>LINGERIE... VERA ARMA DI SEDUZIONE! <div><center><img src='img/macchia.png' width='60px'></center></div>   The goal of this party is to increase levels of eroticism with a touch of naughtiness. The hottest Lingerie Party provides the  basic following rule: <br>At midnight every participant of the Party, will be asked to strip down and stay with intimate lingerie!'<br>For the complete success of the event must be provide a good heating system. <br>LINGERIE... IS THE TRUE WEAPON OF SEDUCTION!<br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#lingerie2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","lingerie")
		  localStorage.setItem("tipofesta","LINGERIE PARTY")
		  
		  $("#fotoflyer").html("<img id='lingerie1' src='flyer/verticali/lingerie/lingerie1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='lingerie2' src='flyer/verticali/lingerie/lingerie2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='lingerie3' src='flyer/verticali/lingerie/lingerie3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#lingerie1").attr("border","4");
		  $("#lingerie2").attr("border","0");
		  $("#lingerie3").attr("border","0");
		  localStorage.setItem("festaimg","lingerie1.jpg")
		  
		  $(document).on("touchstart", "#lingerie1", function(e){
						 
			 $("#lingerie1").attr("border","4");
			 $("#lingerie2").attr("border","0");
			 $("#lingerie3").attr("border","0");
			 localStorage.setItem("festaimg","lingerie1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#lingerie2", function(e){
						 
		 $("#lingerie2").attr("border","4");
		 $("#lingerie1").attr("border","0");
		 $("#lingerie3").attr("border","0");
		 localStorage.setItem("festaimg","lingerie2.jpg")
		 
		 });
		  
		  $(document).on("touchstart", "#lingerie3", function(e){
						 
			 $("#lingerie3").attr("border","4");
			 $("#lingerie2").attr("border","0");
			 $("#lingerie1").attr("border","0");
			 localStorage.setItem("festaimg","lingerie3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);
	   
	   });
		
		
	$(document).on("tap", "#boys", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='boys2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/boys.jpg' width='100%'></td></tr></table>")
	   
      $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> BOYS&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Organizzato dai ragazzi per i ragazzi , vivendo una notte nell'immenso piacere maschile!<br>UN EVENTO PER CREARE NUOVE AMICIZIE E NON SOLO... <div><center><img src='img/macchia.png' width='60px'></center></div> Organized by men for men, bring in the male pleasure! <br>AN EVENT TO MEET NEW FRIENDS AND MORE... <br> </font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#boys2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","boys")
		  localStorage.setItem("tipofesta","BOYS ONLY PARTY")
		  
		  $("#fotoflyer").html("<img id='boys1' src='flyer/verticali/boys/boys1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='boys2' src='flyer/verticali/boys/boys2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='boys3' src='flyer/verticali/boys/boys3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#boys1").attr("border","4");
		  $("#boys2").attr("border","0");
		  $("#boys3").attr("border","0");
		  localStorage.setItem("festaimg","boys1.jpg")
		  
		  $(document).on("touchstart", "#boys1", function(e){
						 
			 $("#boys1").attr("border","4");
			 $("#boys2").attr("border","0");
			 $("#boys3").attr("border","0");
			 localStorage.setItem("festaimg","boys1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#boys2", function(e){
						 
			 $("#boys2").attr("border","4");
			 $("#boys1").attr("border","0");
			 $("#boys3").attr("border","0");
			 localStorage.setItem("festaimg","boys2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#boys3", function(e){
						 
			 $("#boys3").attr("border","4");
			 $("#boys2").attr("border","0");
			 $("#boys1").attr("border","0");
			 localStorage.setItem("festaimg","boys3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);
	   
	   });
		
		
		
	$(document).on("tap", "#disco", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='disco2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/disco.jpg' width='100%'></td></tr></table>")
	   
	   $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY - MEETING - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Discoteca , alcool , musica e divertimento! <br>Invita le persone con cui desideri passare la serata nel tuo Privè della tua discoteca preferita e realizza la tua notte perfetta! <br>Uno spazio riservato darà più prestigio all'evento ma anche ballare e scatenarsi in pista sarà la parte più divertente. <br>BALLA... SEI VIVO! <div><center><img src='img/macchia.png' width='60px'></center></div> Disco , alcool , music and fun! <br>Have a venue hired for you, be on the VIP list, get dancing, and  have a drink or true! Invite your favourite single friends and let's get this party started! <br>Having a private room reserved will allow you dance like no one is watching at least, not all the club. Imagine a crazy night out with people who think exactly like you! <br>DANCE... FEEL ALIVE! <br></font></b></td></tr></table>")
	   
	   
	   $(document).on("touchstart", "#disco2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","disco")
		  localStorage.setItem("tipofesta","DISCO PARTY")
		  
		  $("#fotoflyer").html("<img id='disco1' src='flyer/verticali/disco/disco1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='disco2' src='flyer/verticali/disco/disco2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='disco3' src='flyer/verticali/disco/disco3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#disco1").attr("border","4");
		  $("#disco2").attr("border","0");
		  $("#disco3").attr("border","0");
		  localStorage.setItem("festaimg","disco1.jpg")
		  
		  $(document).on("touchstart", "#disco1", function(e){
						 
			 $("#disco1").attr("border","4");
			 $("#disco2").attr("border","0");
			 $("#disco3").attr("border","0");
			 localStorage.setItem("festaimg","disco1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#disco2", function(e){
						 
			 $("#disco2").attr("border","4");
			 $("#disco1").attr("border","0");
			 $("#disco3").attr("border","0");
			 localStorage.setItem("festaimg","disco2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#disco3", function(e){
						 
			 $("#disco3").attr("border","4");
			 $("#disco2").attr("border","0");
			 $("#disco1").attr("border","0");
			 localStorage.setItem("festaimg","disco3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
	   
	   
	   setTimeout (function(){
				   
		   myScroll8.scrollTo(0, 0);
		   
		   myScroll8.refresh();
		   
		   }, 500);
	   
	   });
		
		
		$(document).on("tap", "#toyboy", function(e){
		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
	       $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='toyboy2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/toyboy.jpg' width='100%'></td></tr></table>")
		   
        $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> GIRLS&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'>  Questo tipo di PrivateParty nasce con lo scopo di realizzare ogni più amato desiderio femminile! <br>Organizzato dalle ragazze , il ToyBoy Party , consiste nello scegliere ed invitare un numero di ragazzi disposti ad esaudire ogni tipo di capriccio e sfizio: <br>CAMERIERE , BALLERINO , TOY BOY , BARMAN o semplicemente AMANTE! <br>Per la completa riuscita dell'evento il numero dei ToyBoy deve essere sempre inferiore di quello delle organizzatrici e partecipanti. <br>IN QUESTO PARTY E' LA DONNA CHE COMANDA! <div><center><img src='img/macchia.png' width='60px'></center></div> This Private Party is to realize every female desire. Organized by women , the ToyBoy Party is to choose and invite a number of guys disposed to realized any kind of female whim: <br>WAITER , DANCER ,  TOYBOY , BARMAN or simply LOVER!<br>For the complete success of the event , the number of Boy Toys are limited to be less than other  participants. <br>THIS IS THE PARTY WHERE WOMEN COMMAND!  <br></font></b></td></tr></table>")
		   
		   
		   $(document).on("touchstart", "#toyboy2", function(e){
						  
			  document.ontouchmove = function(e){ e.preventDefault(); }
			  
			  localStorage.setItem("cartellaimg","toyboy")
			  localStorage.setItem("tipofesta","TOY BOY PARTY")
			  
			  $("#fotoflyer").html("<img id='toyboy1' src='flyer/verticali/toyboy/toyboy1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='toyboy2' src='flyer/verticali/toyboy/toyboy2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='toyboy3' src='flyer/verticali/toyboy/toyboy3.jpg' width='105px' border='0'>");
			  
			  $("#anteprimaparty").hide();
			  $("#datiparty").show();
			  $("#anteprimaparty2").hide();
			  
			  $("#toyboy1").attr("border","4");
			  $("#toyboy2").attr("border","0");
			  $("#toyboy3").attr("border","0");
			  localStorage.setItem("festaimg","toyboy1.jpg")
			  
			  $(document).on("touchstart", "#toyboy1", function(e){
							 
				 $("#toyboy1").attr("border","4");
				 $("#toyboy2").attr("border","0");
				 $("#toyboy3").attr("border","0");
				 localStorage.setItem("festaimg","toyboy1.jpg")
				 
				 });
			  
			  
			  $(document).on("touchstart", "#toyboy2", function(e){
							 
				 $("#toyboy2").attr("border","4");
				 $("#toyboy1").attr("border","0");
				 $("#toyboy3").attr("border","0");
				 localStorage.setItem("festaimg","toyboy2.jpg")
				 
				 });
			  
			  $(document).on("touchstart", "#toyboy3", function(e){
							 
				 $("#toyboy3").attr("border","4");
				 $("#toyboy2").attr("border","0");
				 $("#toyboy1").attr("border","0");
				 localStorage.setItem("festaimg","toyboy3.jpg")
				 
				 });
			  
			  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
			  
			  
			  setTimeout (function(){
						  
				  myScroll8.refresh();
				  
				  }, 500);
			  
			  })
		   
		   
		   setTimeout (function(){
					   
			   myScroll8.scrollTo(0, 0);
			   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
 $(document).on("tap", "#colorp", function(e){
					   
   $("#listaparty").hide();
   $("#anteprimaparty").show();
   $("#anteprimaparty2").show();
   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
   
   $("#anteprimafinale").hide();
   $("#anteprimafinale2").hide();
   
   $("#footerparty").show();
   $("#tastocrea").html("<a id='colorp2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
   
   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/color.jpg' width='100%'></td></tr></table>")
   
    $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MEETING - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Qual'è il tuo colore preferito? <br>Rosso come il fuoco o blu come il cielo? <br>Total withe or total black? <br>Un Private Party semplice ma che ama stupire! <br>Ricco di creatività e dal forte impatto visivo! <br>Tutti gli invitati indosseranno abiti e accessori dello stesso colore deciso e comunicato precedentemente dall'organizzatore! <br>Ballare , bere e scatenarsi per una notte che non si dimenticherà molto facilmente! <br>NE VEDRETE DI TUTTI COLORI! <div><center><img src='img/macchia.png' width='60px'></center></div> What is your favourite colour?<br>Red like fire or blue like the sky? <br>Total white or total black? <br>A simple but astonishing private party. <br>Rich with creativity and a strong visual impact! <br>All the guests will wear clothes and accessories of the same colour decided previously by the organiser! <br>Dancing, drinking and rampaging for a night that you won’t forget very easily!<br>YOU WILL SEE ALL COLOURS! <br></font></b></td></tr></table>")
   
   
   $(document).on("touchstart", "#colorp2", function(e){
				  
	  document.ontouchmove = function(e){ e.preventDefault(); }
	  
	  localStorage.setItem("cartellaimg","color")
	  localStorage.setItem("tipofesta","COLOR PARTY")
	  
	  $("#fotoflyer").html("<img id='color1' src='flyer/verticali/color/color1.jpg' width='105px' border='0' bordercolor='red'>&nbsp;&nbsp;<img id='color2' src='flyer/verticali/color/color2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='color3' src='flyer/verticali/color/color3.jpg' width='105px' border='0'>");
	  
	  $("#anteprimaparty").hide();
	  $("#datiparty").show();
	  $("#anteprimaparty2").hide();
	  
	  $("#color1").attr("border","4");
	  $("#color2").attr("border","0");
	  $("#color3").attr("border","0");
	  localStorage.setItem("festaimg","color1.jpg")
	  
	  $(document).on("touchstart", "#color1", function(e){
					 
		 $("#color1").attr("border","4");
		 $("#color2").attr("border","0");
		 $("#color3").attr("border","0");
		 localStorage.setItem("festaimg","color1.jpg")
		 
		 });
	  
	  
	  $(document).on("touchstart", "#color2", function(e){
					 
		 $("#color2").attr("border","4");
		 $("#color1").attr("border","0");
		 $("#color3").attr("border","0");
		 localStorage.setItem("festaimg","color2.jpg")
		 
		 });
	  
	  $(document).on("touchstart", "#color3", function(e){
					 
		 $("#color3").attr("border","4");
		 $("#color2").attr("border","0");
		 $("#color1").attr("border","0");
		 localStorage.setItem("festaimg","color3.jpg")
		 
		 });
				  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
   
   
   setTimeout (function(){
			   
	   myScroll8.scrollTo(0, 0);
	   
	   myScroll8.refresh();
	   
	   }, 500);

   });
		
		
		
	$(document).on("tap", "#pool", function(e){
					   
	   $("#listaparty").hide();
	   $("#anteprimaparty").show();
	   $("#anteprimaparty2").show();
	   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
	   
	   $("#anteprimafinale").hide();
	   $("#anteprimafinale2").hide();
	   
	   $("#footerparty").show();
	   $("#tastocrea").html("<a id='pool2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
	   
	   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/pool.jpg' width='100%'></td></tr></table>")
	   
	   $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Il Party per eccellenza è sempre stato quello che si conclude con un bagno in piscina tutti insieme!<br>Quello più ambito invece è quello dove c'è una vasca idromassaggio!! <br>Vivere un PoolParty dà la possibilità di divertirsi nell'acqua calda anche d'inverno o di tuffarsi d'estate nelle piscine più cool!! <br>Molti centri estetici danno la possibilità di affittare per una notte una location corredata con Jacuzzi e buffet. <br>Per la completa riuscita dell'evento assicurarsi acqua calda in inverno e controllare le previsioni del tempo in estate! <br>VOGLIA DI H2O! <div><center><img src='img/macchia.png' width='60px'></center></div>The excellence Party has always been that one with a swim in the pool all together, the most coveted Party, has always been that one where we can find a spa bath!! <br> Living a Pool party gives us the opportunity to have always fun, even in winter or hot summer days! Many of beauty salons offer the chance to rent,for one night, a location with jacuzzi and buffet. <br>For the complete success of the event, make sure that temperature of water, its cold in winter and  prefect in summer! <br>WANT H2O! <br></font></b></td></tr></table>")
					   
					   
	   $(document).on("touchstart", "#pool2", function(e){
					  
		  document.ontouchmove = function(e){ e.preventDefault(); }
		  
		  localStorage.setItem("cartellaimg","pool")
		  localStorage.setItem("tipofesta","POOL PARTY")
		  
		  $("#fotoflyer").html("<img id='pool1' src='flyer/verticali/pool/pool1.jpg' width='105px' border='0' borderpool='red'>&nbsp;&nbsp;<img id='pool2' src='flyer/verticali/pool/pool2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='pool3' src='flyer/verticali/pool/pool3.jpg' width='105px' border='0'>");
		  
		  $("#anteprimaparty").hide();
		  $("#datiparty").show();
		  $("#anteprimaparty2").hide();
		  
		  $("#pool1").attr("border","4");
		  $("#pool2").attr("border","0");
		  $("#pool3").attr("border","0");
		  localStorage.setItem("festaimg","pool1.jpg")
		  
		  $(document).on("touchstart", "#pool1", function(e){
						 
			 $("#pool1").attr("border","4");
			 $("#pool2").attr("border","0");
			 $("#pool3").attr("border","0");
			 localStorage.setItem("festaimg","pool1.jpg")
			 
			 });
		  
		  
		  $(document).on("touchstart", "#pool2", function(e){
						 
			 $("#pool2").attr("border","4");
			 $("#pool1").attr("border","0");
			 $("#pool3").attr("border","0");
			 localStorage.setItem("festaimg","pool2.jpg")
			 
			 });
		  
		  $(document).on("touchstart", "#pool3", function(e){
						 
			 $("#pool3").attr("border","4");
			 $("#pool2").attr("border","0");
			 $("#pool1").attr("border","0");
			 localStorage.setItem("festaimg","pool3.jpg")
			 
			 });
		  
		  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
		  
		  
		  setTimeout (function(){
					  
			  myScroll8.refresh();
			  
			  }, 500);
		  
		  })
					   
					   
		   setTimeout (function(){
					   
			   myScroll8.scrollTo(0, 0);
			   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
		
	$(document).on("tap", "#eat", function(e){
					   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='eat2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/eat.jpg' width='100%'></td></tr></table>")
		   
		   $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - EAT - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> Come trasformare la solita cena in un'esperienza indimenticabile?<br>Dall'antipasto al dolce , passando per qualsisi finger food vogliate gustare , purchè sia posizionato sul corpo semi nudo del ragazzo o della ragazza che abbia deciso di provare questa emozione! <br>Ogni pietanza che verrà assaporata avrà un gusto completamente diverso , presa direttamente con il solo uso della bocca , renderà il momento divertente e senza alcun dubbio altamente sensuale! <br>A tavola si seduce e si prendono grandi decisoni , durante un Eat My Body Party si vive un gustoso preliminare veramente memorabile! <br>MANGIAMI!!! <div><center><img src='img/macchia.png' width='60px'></center></div> How to transform the usual dinner into an unforgettable experience? <br>Eat it off of some hottie's semi-naked body! <br>From sushi, to exotic desserts, may also include some, ahem, finger food. <br>What is the catch, you ask? <br>Guests cannot use their hands. <br>Expect a fun , sexy and exciting atmosphere , similar to preliminary pleasures... <br>EAT ME! <br></font></b></td></tr></table>")
					   
					   
		   $(document).on("touchstart", "#eat2", function(e){
						  
				  document.ontouchmove = function(e){ e.preventDefault(); }
				  
				  localStorage.setItem("cartellaimg","eat")
				  localStorage.setItem("tipofesta","EAT MY BODY")
				  
				  $("#fotoflyer").html("<img id='eat1' src='flyer/verticali/eat/eat1.jpg' width='105px' border='0' bordereat='red'>&nbsp;&nbsp;<img id='eat2' src='flyer/verticali/eat/eat2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='eat3' src='flyer/verticali/eat/eat3.jpg' width='105px' border='0'>");
				  
				  $("#anteprimaparty").hide();
				  $("#datiparty").show();
				  $("#anteprimaparty2").hide();
				  
				  $("#eat1").attr("border","4");
				  $("#eat2").attr("border","0");
				  $("#eat3").attr("border","0");
				  localStorage.setItem("festaimg","eat1.jpg")
				  
				  $(document).on("touchstart", "#eat1", function(e){
								 
					 $("#eat1").attr("border","4");
					 $("#eat2").attr("border","0");
					 $("#eat3").attr("border","0");
					 localStorage.setItem("festaimg","eat1.jpg")
					 
					 });
				  
				  
				  $(document).on("touchstart", "#eat2", function(e){
								 
					 $("#eat2").attr("border","4");
					 $("#eat1").attr("border","0");
					 $("#eat3").attr("border","0");
					 localStorage.setItem("festaimg","eat2.jpg")
					 
					 });
				  
				  $(document).on("touchstart", "#eat3", function(e){
								 
					 $("#eat3").attr("border","4");
					 $("#eat2").attr("border","0");
					 $("#eat1").attr("border","0");
					 localStorage.setItem("festaimg","eat3.jpg")
					 
					 });
				  
				  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
				  
				  
				  setTimeout (function(){
							  
						  myScroll8.refresh();
						  
						  }, 500);
				  
				  })
					   
					   
		   setTimeout (function(){
					   
			   myScroll8.scrollTo(0, 0);
			   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });
		
		
	$(document).on("tap", "#fetish", function(e){
					   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
		   $("#tastomenu").html("<a id='makeparty'><img src='img/indietro_over.png' height='30px'></a>");
		   
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
		   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='fetish2'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
		   
		   $("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/fetish.jpg' width='100%'></td></tr></table>")
		   
        $("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> MIX&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOT - SEXY - FUN&nbsp;</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>&nbsp;LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL &nbsp;</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='4' class='#'> La prima regola è il look!<br>Dress code obbligatorio! <br>Si consigliano abiti di gomma , di latex e di pelle di ogni colore. <br>Un Party multicolor che privilegia fantasia e stravaganza.<br>Si possono indossare anche uniformi militari , scolastiche o da lavoro modificati con accessori per sottolineare il ruolo dominante o sottomesso del soggetto (la frusta, o il collare). <br>Abiti particolarmente provocanti o esibizionisti che mostrano parti del corpo come il seno o il lato B…anche se il piede è quello che va  per la maggiore! <br>Il tutto si svolge in un atmosfera molto sensuale ma mai volgare.<br>Il Fetish è arte e diversità. <br>Un Private Party dove sperimentare nuove fantasie sessuali senza alcun obbligo apparte quello di interpretare un personaggio altamente seducente. <br>Per la completa riuscita dell’evento consigliamo una musica rock , gothic , punk , metal , trip hop.<br>ANCHE IL PRINCIPE AZZURRO SI INNAMORO' DELLA SCARPETTA DI CENERENTOLA!  <div><center><img src='img/macchia.png' width='60px'></center></div> The first rule is the look!<br>Obligatory dress code! <br>The Fetish is in sexual practices where there is a particular focus to one  part of the body or an object worn. <br>We recommend latex, leather skirts, leather pants of any color . <br>Many imagine this Party  as exclusively in black rather as a multicolor party, that can also favors fantasy and extravagance. <br>Its possible to wear military uniforms , in particular for men, but remember to except  the Nazi uniforms and similar , which are considered inappropriate.<br>Welcomed School's uniforms , specially for women. <br>Formal working clothes,  modified with accessories to emphasize the dominant or submissive role of the subject (eg. the whip, or the collar) <br>Particularly provocative clothing or exhibitionists. <br>This clothing can also predict exposure erotic parties of the body , for example the breast or the side b. <br>Obviously underwear, Apparel non-daily use, such as bustiers, corset, loincloth for men’s, should be very maintained and special as bourlesque. <br>All this takes place in a very sensual but never vulgar atmosphere. <br>The Fetish is  about art and diversity.  <br>A Private Party for applying new sexual fantasies without any obligation apart to interpret a highly seductive character. <br>For the complete success of the party we suggest a rock music, gothic, punk, metal, trip hop. <br>ALSO THE PRINCE CHARMING FELL IN LOVE WITH CINDERELLA SHOE! <br> </font></b></td></tr></table>")
					   
					   
			$(document).on("touchstart", "#fetish2", function(e){
									  
				  document.ontouchmove = function(e){ e.preventDefault(); }
				  
				  localStorage.setItem("cartellaimg","fetish")
				  localStorage.setItem("tipofesta","FETISH PARTY")
				  
				  $("#fotoflyer").html("<img id='fetish1' src='flyer/verticali/fetish/fetish1.jpg' width='105px' border='0' borderfetish='red'>&nbsp;&nbsp;<img id='fetish2' src='flyer/verticali/fetish/fetish2.jpg' width='105px' border='0'>&nbsp;&nbsp;<img id='fetish3' src='flyer/verticali/fetish/fetish3.jpg' width='105px' border='0'>");
				  
				  $("#anteprimaparty").hide();
				  $("#datiparty").show();
				  $("#anteprimaparty2").hide();
				  
				  $("#fetish1").attr("border","4");
				  $("#fetish2").attr("border","0");
				  $("#fetish3").attr("border","0");
				  localStorage.setItem("festaimg","fetish1.jpg")
				  
				  $(document).on("touchstart", "#fetish1", function(e){
								 
					 $("#fetish1").attr("border","4");
					 $("#fetish2").attr("border","0");
					 $("#fetish3").attr("border","0");
					 localStorage.setItem("festaimg","fetish1.jpg")
					 
					 });
				  
				  
				  $(document).on("touchstart", "#fetish2", function(e){
								 
					 $("#fetish2").attr("border","4");
					 $("#fetish1").attr("border","0");
					 $("#fetish3").attr("border","0");
					 localStorage.setItem("festaimg","fetish2.jpg")
					 
					 });
				  
				  $(document).on("touchstart", "#fetish3", function(e){
								 
					 $("#fetish3").attr("border","4");
					 $("#fetish2").attr("border","0");
					 $("#fetish1").attr("border","0");
					 localStorage.setItem("festaimg","fetish3.jpg")
					 
					 });
				  
				  $("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")
				  
				  
				  setTimeout (function(){
							  
					  myScroll8.refresh();
					  
					  }, 500);
				  
				  })
					   
					   
		   setTimeout (function(){
					   
			   myScroll8.scrollTo(0, 0);
			   
			   myScroll8.refresh();
			   
			   }, 500);
		   
		   });

		
		
		$(document).on("touchstart", "#filtri", function(e){
                       
            if (localStorage.getItem("filtrofeste")=="1"){
					   
                $("#spinner11").hide();
                       
                document.getElementById("sessofiltro").value = localStorage.getItem("sessofiltro")
                document.getElementById("cittafiltro").value = localStorage.getItem("cittafiltro")
                document.getElementById("etafiltro").value = localStorage.getItem("etafiltro")
                document.getElementById("nickfiltro").value = localStorage.getItem("nickfiltro")
                       
                $.mobile.changePage("#home11", { transition: "fade" });
                       
            }
            else{
               
               document.getElementById("cittapersone").value = localStorage.getItem("miacitta")
               document.getElementById("etapersone").value = localStorage.getItem("miaeta")
               //document.getElementById("sessopersone").value = localStorage.getItem("miosesso")
            
                if (localStorage.getItem("miosesso") === null || localStorage.getItem("miosesso")=="null" || typeof(localStorage.getItem("miosesso")) == 'undefined' || localStorage.getItem("miosesso")==0 || localStorage.getItem("miosesso")=="") {

					$("#selectsesso").html("<select name='sessopersone' id='sessopersone' class='scrivo'><option value='F'>Girls</option><option value='M'>Boys</option><option value='' selected>ALL</option></select>");
				}
					   
			   if(localStorage.getItem("miosesso")=="F"){
					$("#selectsesso").html("<select name='sessopersone' id='sessopersone' class='scrivo'><option value='F' selected>Girls</option><option value='M' >Boys</option><option value=''>ALL</option></select>");
			   }
			   
			   
			   if(localStorage.getItem("miosesso")=="M"){
					$("#selectsesso").html("<select name='sessopersone' id='sessopersone' class='scrivo'><option value='F'>Girls</option><option value='M' selected>Boys</option><option value='' >ALL</option></select>");
			   }
					   
               document.getElementById("nickpersone").value = localStorage.getItem("mionickname")
                       
               $.mobile.changePage("#homefiltropersone", { transition: "fade" });
                
            }
					   
		})
		
		
		$(document).on("touchstart", "#salvaimpostazioni", function(e){
			$("#spinner8").show();
			
			$("#scheda1").hide();
			$("#scheda2").hide();
			$("#scheda3").hide();
			$("#scheda4").hide();
			
			$("#bannerpresentazione").hide()
			$("#imginiziale").hide();
			
			$("#persone").hide();
			$("#loadpersonaggi").hide();
			$("#chatnuove").hide();
			$("#mostrachat").hide();
                       
            localStorage.setItem("sessofiltro", self.document.formiafiltri.sessofiltro.value);
            localStorage.setItem("cittafiltro", self.document.formiafiltri.cittafiltro.value);
            localStorage.setItem("etafiltro", self.document.formiafiltri.etafiltro.value);
            localStorage.setItem("nickfiltro", self.document.formiafiltri.nickfiltro.value);
                       
           $("#scheda1").hide();
           $("#scheda2").hide();
           $("#scheda3").hide();
           $("#scheda4").hide();
           
           $("#bannerpresentazione").hide()
           $("#imginiziale").hide();
           
           $("#persone").hide();
           $("#loadpersonaggi").hide();
           $("#chatnuove").hide();
           $("#mostrachat").hide();
                       
           setTimeout (function(){
                       
           window.plugins.nativepagetransitions.fade({
             "duration"       :  400, // in milliseconds (ms), default 400
             "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
             "androiddelay"   :  600,
             "href" : "index.html"
             });
                       
            }, 500);
		})
		
		
        $(document).on("touchstart", "#salvaimpostazionipersone", function(e){
           $("#spinner8").show();
           
           $("#scheda1").hide();
           $("#scheda2").hide();
           $("#scheda3").hide();
           $("#scheda4").hide();
           
           $("#bannerpresentazione").hide()
           $("#imginiziale").hide();
           
           $("#persone").hide();
           $("#loadpersonaggi").hide();
           $("#chatnuove").hide();
           $("#mostrachat").hide();
           
           localStorage.setItem("miacitta", self.document.formiapersone.cittapersone.value);
           localStorage.setItem("miosesso", self.document.formiapersone.sessopersone.value);
           localStorage.setItem("miaeta", self.document.formiapersone.etapersone.value);
           localStorage.setItem("mionickname", self.document.formiapersone.nickpersone.value);
           
           
           $("#scheda1").hide();
           $("#scheda2").hide();
           $("#scheda3").hide();
           $("#scheda4").hide();
           
           $("#bannerpresentazione").hide()
           $("#imginiziale").hide();
           
           $("#persone").hide();
           $("#loadpersonaggi").hide();
           $("#chatnuove").hide();
           $("#mostrachat").hide();
                       
           setTimeout (function(){
                       
           window.plugins.nativepagetransitions.fade({
            "duration"       :  400, // in milliseconds (ms), default 400
            "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
            "androiddelay"   :  600,
            "href" : "index.html?id=modificapersone"
            });
                       
            //personaggi()
                       
        }, 500);
    })
        
        
        
        $(document).on("touchstart", "#salvailmioprofilo", function(e){
               //$("#spinner8").show();
               
               $("#scheda1").hide();
               $("#scheda2").hide();
               $("#scheda3").hide();
               $("#scheda4").hide();
               
               $("#bannerpresentazione").hide()
               $("#imginiziale").hide();
               
               $("#persone").hide();
               $("#loadpersonaggi").hide();
               $("#chatnuove").hide();
               $("#mostrachat").hide();
                       
                
                // MODIFICA PROFILO
                       
               var info1;
               
               info1 = self.document.formiaprofilo.orgasmomentale.value
                       
               
               
               info1 = info1.replace("'","777A");
               
               info1 = info1.replace("+","777B");
               
               info1 = info1.replace("$","777C");
               
               info1 = info1.replace("!","777D");
               info1 = info1.replace("!!","777D7");
               info1 = info1.replace("!!!","777D77");
               info1 = info1.replace("!!!!","777D777");
               info1 = info1.replace("!!!!!","777D7777");
               info1 = info1.replace("!!!!!!","777D77777");
               
               info1 = info1.replace("(","777E");
               
               info1 = info1.replace(")","777F");
               
               info1 = info1.replace(":","777G");
               
               info1 = info1.replace("?","777H");
                       
               info1 = info1.replace("?","777H");
               info1 = info1.replace("??","777H7");
               info1 = info1.replace("???","777H77");
               info1 = info1.replace("????","777H777");
               info1 = info1.replace("?????","777H7777");
               info1 = info1.replace("??????","777H77777");
                       
               info1 = info1.replace("à", "777I");
               info1 = info1.replace("è", "777L");
               info1 = info1.replace("ì", "777M");
               info1 = info1.replace("ò", "777N");
               info1 = info1.replace("ù", "777O");
               
               info1 = info1.replace(/[&\/\\#,~%.*<>{}]/g,'');
                       
			   localStorage.setItem("orgasmomentale", info1);
                     
               localStorage.setItem("cittaprofilo", self.document.formiaprofilo.cittaprofilo.value);
               localStorage.setItem("etaprofilo", self.document.formiaprofilo.etaprofilo.value);
               localStorage.setItem("nickname", self.document.formiaprofilo.nickprofilo.value);
			   
					   
			   //alert("http://msop.it/om/check_modificautente.php?email="+ localStorage.getItem("email") +"&citta="+ localStorage.getItem("cittaprofilo") +"&data_nascita="+ localStorage.getItem("etaprofilo") +"&nickname="+localStorage.getItem("nickname")+"&info="+ localStorage.getItem("orgasmomentale") +"")
                
				$("#spinner8").show()
                $.ajax({
                      type:"GET",
                      url:"http://msop.it/om/check_modificautente.php?email="+ localStorage.getItem("email") +"&citta="+ localStorage.getItem("cittaprofilo") +"&data_nascita="+ localStorage.getItem("etaprofilo") +"&nickname="+localStorage.getItem("nickname")+"&info="+ localStorage.getItem("orgasmomentale") +"",
                      contentType: "application/json",
                      //data: {Lat:3,Longi:4},
                      timeout: 7000,
                      jsonp: 'callback',
                      crossDomain: true,
                      success:function(result){
             
                      $.each(result, function(i,item){
             
						 navigator.notification.alert(
						  'Modifica dati riuscita',  // message
						   alertDismissed,         // callback
						  'Modifica Dati',            // title
						  'OK'                  // buttonName
						  );
							 
							 
						 $("#scheda1").hide();
						 $("#scheda2").hide();
						 $("#scheda3").hide();
						 $("#scheda4").hide();
						 
						 $("#bannerpresentazione").hide()
						 $("#imginiziale").hide();
						 
						 $("#persone").hide();
						 $("#loadpersonaggi").hide();
						 $("#chatnuove").hide();
						 $("#mostrachat").hide();
						 
						 setTimeout (function(){
									 
							 window.plugins.nativepagetransitions.fade({
							   "duration"       :  400, // in milliseconds (ms), default 400
							   "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
							   "androiddelay"   :  600,
							   "href" : "index.html"
							   });
									 
						}, 500);
							 
					  });
             
                      $("#spinner8").hide()
             
                      },
                      error: function(){
             
                      $("#spinner8").hide()
             
                      	navigator.notification.alert(
						   'Errore di rete, riprova sotto copertura',  // message
						   alertDismissed,         // callback
						   'Errore di Rete',            // title
						   'OK'                  // buttonName
						   );
					   
					   window.location.href = "index.html";
             
                      },
             
                      dataType:"jsonp"});
	   
    })
		

		
	$(document).on("touchstart", "#creafesta", function(e){
                   
        $("#anteprimafinale").html("")
	 
		if(self.document.formia8.cittafesta.value == "") {
		   navigator.notification.alert(
			'inserire una Citta',  // message
			alertDismissed,         // callback
			'Citta',            // title
			'OK'                  // buttonName
			);
			return;
		   }
		
		
		if (self.document.formia8.ora.value == "") {
			navigator.notification.alert(
		    'inserire un Orario',  // message
			 alertDismissed,         // callback
			 'Ora',            // title
			 'OK'                  // buttonName
			 );
			return;
		}
		
		if (self.document.formia8.ospiti.value == "") {
			navigator.notification.alert(
			 'inserire numero di ospiti',  // message
			 alertDismissed,         // callback
			 'Ora',            // title
			 'OK'                  // buttonName
			 );
			return;
		}
		
		if (self.document.formia8.location.value == "") {
			navigator.notification.alert(
			 'inserire la Location della festa',  // message
			 alertDismissed,         // callback
			 'Location',            // title
			 'OK'                  // buttonName
			 );
			return;
		}
				   
		
		// ANTEPRIMA FESTA
				   
		 $("#datiparty").hide();
	     $("#anteprimaparty").hide();
	     $("#anteprimaparty2").hide();
				   
		 $("#anteprimafinale").show();
		 $("#anteprimafinale2").show();
				   
	   
		   $("#anteprimafinale").html("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+localStorage.getItem("cartellaimg")+"/"+localStorage.getItem("festaimg")+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+localStorage.getItem("tipofesta")+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
				   
		   $("#antdata").html(self.document.formia8.giorno.value + "/" + self.document.formia8.mese.value + " alle ore: " + self.document.formia8.ora.value)
		   $("#antinfo").html(self.document.formia8.info.value)
				   
			var importotot = self.document.formia8.ospiti.value*self.document.formia8.prezzo.value
				   
		   //var prezzoposti = self.document.formia8.prezzo.value
		   $("#antprezzo").html("IMPORTO TOTALE PER "+self.document.formia8.ospiti.value+" INVITATI:" + importotot)
				   
		   var calcolacommissione = (importotot/100)*20;
				   
		   $("#antcommissione").html("COMMISSIONE O.M.: 20%") //+calcolacommissione.toFixed(2)
				   
			var guadagno = importotot - calcolacommissione
				   
		   $("#antaltro").html("GUADAGNO ORGANIZZATORE:"+ guadagno.toFixed(2))
                   
           $("#footerparty").hide();
		   $("#footerparty2").show();
                   
	       $("#tastocrea2").html("<table widht='100%'><tr><td width='25%' align='center' valign='center'><a id='modifica' class='buttonbb buttonb1 AntonioFont'><font size='4' color='#fff'><b>MODIFICA</b></font></a></td><td width='75%' align='center' valign='center'><a id='creafestaDB' class='buttonbb buttonb3 AntonioFont'><font class='AntonioFontBold' color='#00ffff' size='5'>PUBBLICA PRIVATE PARTY</font></a></td></tr></table>")
				   
				   
	   setTimeout (function(){
				   
		   myScroll8.refresh();
		   
		}, 500);
				   
	});
		
		
	$(document).on("touchstart", "#modifica", function(e){
                   
        $("#footerparty2").hide();
        $("#footerparty").show();
				   
		$("#anteprimafinale").html("")
				   
		$("#listaparty").hide();
	    $("#anteprifinale").hide();
	    $("#anteprimafinale2").hide();
		
		$("#anteprimaparty").hide();
		$("#anteprimaparty2").hide();
	   
		$("#datiparty").show();
				   
		$("#footerparty").show();
				   
		$("#tastocrea").html("<a id='creafesta'><font class='AntonioFont' color='#00ffff' size='6'>OK</font></a>")
				   
				   
		setTimeout (function(){
				   
		   myScroll8.refresh();
		   
		}, 500);
		
	});
		
		
		$(document).on("touchstart", "#creafestaDB", function(e){
					   
				if(self.document.formia8.cittafesta.value == "") {
					   navigator.notification.alert(
													'inserire una Citta',  // message
													alertDismissed,         // callback
													'Citta',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   
					   if (self.document.formia8.ora.value == "") {
					   navigator.notification.alert(
													'inserire un Orario',  // message
													alertDismissed,         // callback
													'Ora',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   if (self.document.formia8.ospiti.value == "") {
					   navigator.notification.alert(
													'inserire numero di ospiti',  // message
													alertDismissed,         // callback
													'Ora',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
					   if (self.document.formia8.location.value == "") {
					   navigator.notification.alert(
													'inserire la Location della festa',  // message
													alertDismissed,         // callback
													'Location',            // title
													'OK'                  // buttonName
													);
					   return;
					   }
					   
                       
                       $("#footerparty2").hide();
                       $("#footerparty").show();
					   
					   $("#tastocrea").html("<a id='creafestaDB'><font class='AntonioFontBold' color='#00ffff' size='6'>OK</font></a>")

					   
					   $("#spinner14").show();
                       
                       var info1;
                       
                       info1 = self.document.formia8.info.value
                       
                       info1 = info1.replace("'","777A");
                       
                       info1 = info1.replace("+","777B");
                       
                       info1 = info1.replace("$","777C");
                       
                       info1 = info1.replace("!","777D");
                       info1 = info1.replace("!!","777D7");
                       info1 = info1.replace("!!!","777D77");
                       info1 = info1.replace("!!!!","777D777");
                       info1 = info1.replace("!!!!!","777D7777");
                       info1 = info1.replace("!!!!!!","777D77777");
                       
                       info1 = info1.replace("(","777E");
                       
                       info1 = info1.replace(")","777F");
                       
                       info1 = info1.replace(":","777G");
                       
                       info1 = info1.replace("?","777H");
                       
                       info1 = info1.replace("?","777H");
                       info1 = info1.replace("??","777H7");
                       info1 = info1.replace("???","777H77");
                       info1 = info1.replace("????","777H777");
                       info1 = info1.replace("?????","777H7777");
                       info1 = info1.replace("??????","777H77777");
                       
                       info1 = info1.replace("à", "777I");
                       info1 = info1.replace("è", "777L");
                       info1 = info1.replace("ì", "777M");
                       info1 = info1.replace("ò", "777N");
                       info1 = info1.replace("ù", "777O");
                       
                       info1 = info1.replace(/[&\/\\#,~%.*<>{}]/g,'');
                       
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/om/insert_festa.php?email="+ localStorage.getItem("email")+"&anno="+self.document.formia8.anno.value+"&mese="+self.document.formia8.mese.value+"&giorno="+self.document.formia8.giorno.value+"&ora="+self.document.formia8.ora.value+"&ospiti="+self.document.formia8.ospiti.value+"&etafesta="+self.document.formia8.etafesta.value+"&girl="+self.document.formia8.vgirls.value+"&boy="+self.document.formia8.vboys.value+"&location="+self.document.formia8.location.value+"&info="+info1+"&prezzo="+self.document.formia8.prezzo.value+"&flyer="+localStorage.getItem("festaimg")+"&tipofesta="+localStorage.getItem("cartellaimg")+"&nomefesta="+localStorage.getItem("tipofesta")+"&citta="+self.document.formia8.cittafesta.value+"",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							  $.each(result, function(i,item){
									 
								 $("#spinner14").hide();
								 
								 $("#persone").hide();
								 $("#loadpersonaggi").hide();
                                 
								 $("#feste").show();
                                    
								 
								 $("#parte1").show();
								 $("#parte2").show();
								 $("#parte3").show();
									 
								 gohome8()
								 
                              });
							  
							  
							  $("#spinner1").hide()
							  
							  },
							  error: function(){
							  
							  $("#spinner1").hide()
							  
							  navigator.notification.alert(
							   'Errore di rete, riprova sotto copertura',  // message
							   alertDismissed,         // callback
							   'Errore di Rete',            // title
							   'OK'                  // buttonName
							   );
							  
							  window.location.href = "index.html";
							  
							  },
							  
							  dataType:"jsonp"});
					   
		});
        
        
$(document).on("touchstart", "#editparty", function(e){
                       
   if(self.document.formiamodp.cittafestaedit.value == "") {
     navigator.notification.alert(
        'inserire una Citta',  // message
        alertDismissed,         // callback
        'Citta',            // title
        'OK'                  // buttonName
        );
   return;
   }
   
   
   if (self.document.formiamodp.oraedit.value == "") {
       navigator.notification.alert(
        'inserire un Orario',  // message
        alertDismissed,         // callback
        'Ora',            // title
        'OK'                  // buttonName
        );
       return;
   }
   
   if (self.document.formiamodp.invitatiedit.value == "") {
   navigator.notification.alert(
    'inserire numero di ospiti',  // message
    alertDismissed,         // callback
    'Ora',            // title
    'OK'                  // buttonName
    );
   return;
   }
   
   if (self.document.formiamodp.locationedit.value == "") {
        navigator.notification.alert(
        'inserire la Location della festa',  // message
        alertDismissed,         // callback
        'Location',            // title
        'OK'                  // buttonName
        );
        return;
    }
   
   
   $("#spinnermodparty").show();
               
   //alert("http://msop.it/om/modifica_festa.php?email="+ localStorage.getItem("email")+"&anno="+self.document.formiamodp.annoedit.value+"&mese="+self.document.formiamodp.meseedit.value+"&giorno="+self.document.formiamodp.giornoedit.value+"&ora="+self.document.formiamodp.oraedit.value+"&ospiti="+self.document.formiamodp.invitatiedit.value+"&etafesta="+self.document.formiamodp.etaedit.value+"&location="+self.document.formiamodp.locationedit.value+"&info="+self.document.formiamodp.infoedit.value+"&prezzo="+self.document.formiamodp.prezzoedit.value+"&citta="+self.document.formiamodp.cittafestaedit.value+"")
               
    
   var info1;
   
   info1 = self.document.formiamodp.infoedit.value
   
   info1 = info1.replace("'","777A");
   
   info1 = info1.replace("+","777B");
   
   info1 = info1.replace("$","777C");
   
   info1 = info1.replace("!","777D");
   info1 = info1.replace("!!","777D7");
   info1 = info1.replace("!!!","777D77");
   info1 = info1.replace("!!!!","777D777");
   info1 = info1.replace("!!!!!","777D7777");
   info1 = info1.replace("!!!!!!","777D77777");
   
   info1 = info1.replace("(","777E");
   
   info1 = info1.replace(")","777F");
   
   info1 = info1.replace(":","777G");
   
   info1 = info1.replace("?","777H");
   
   info1 = info1.replace("?","777H");
   info1 = info1.replace("??","777H7");
   info1 = info1.replace("???","777H77");
   info1 = info1.replace("????","777H777");
   info1 = info1.replace("?????","777H7777");
   info1 = info1.replace("??????","777H77777");
               
   info1 = info1.replace("à", "777I");
   info1 = info1.replace("è", "777L");
   info1 = info1.replace("ì", "777M");
   info1 = info1.replace("ò", "777N");
   info1 = info1.replace("ù", "777O");
   
   info1 = info1.replace(/[&\/\\#,~%.*<>{}]/g,'');
    
   
   $.ajax({
          type:"GET",
          url:"http://msop.it/om/modifica_festa.php?id="+ self.document.formiamodp.idfesta.value+"&anno="+self.document.formiamodp.annoedit.value+"&mese="+self.document.formiamodp.meseedit.value+"&giorno="+self.document.formiamodp.giornoedit.value+"&ora="+self.document.formiamodp.oraedit.value+"&ospiti="+self.document.formiamodp.invitatiedit.value+"&etafesta="+self.document.formiamodp.etaedit.value+"&location="+self.document.formiamodp.locationedit.value+"&info="+info1+"&prezzo="+self.document.formiamodp.prezzoedit.value+"&citta="+self.document.formiamodp.cittafestaedit.value+"",
          contentType: "application/json",
          //data: {Lat:3,Longi:4},
          timeout: 7000,
          jsonp: 'callback',
          crossDomain: true,
          success:function(result){
          
          $("#spinnermodparty").hide();
          
          $.each(result, function(i,item){
                 
             //alert(item.Token)
                 
             navigator.notification.alert(
              'Private Party Modificato',  // message
              alertDismissed,         // callback
              'Modifica Effettuata',            // title
              'OK'                  // buttonName
              );
                 
            });
          
          
          $("#spinner1").hide()
          
          },
          error: function(){
          
          $("#spinner1").hide()
          
            navigator.notification.alert(
               'Errore di rete, riprova sotto copertura',  // message
               alertDismissed,         // callback
               'Errore di Rete',            // title
               'OK'                  // buttonName
               );
          
            window.location.href = "index.html";
          
          },
          
          dataType:"jsonp"});
                       
        });
		
		
		$(document).on("touchstart", "#indietro14", function(e){
					   
			$("#listaparty").show();
					   
			$("#datiparty").hide();
			$("#anteprimaparty").hide();
			$("#anteprimaparty2").hide();
					   
		});
		
		$(document).on("touchstart", "#cambiafotoprofilo", function(e){
					   
		   localStorage.setItem("primavolta","1")
           localStorage.setItem("selfie", "0");
					   
		   window.location.href = "indexFoto.html";
					   
					   
		});
		
		
		$(document).on("touchstart", "#addalbum", function(e){
					   
		  window.location.href = "indexGalleria.html";
					   
		});
		
		
		
    $(document).on("touchstart", "#accetto", function(e){
                   
           window.location.href = "indexFoto.html";
					   
           /*if (document.getElementById('privacy').checked) {
           
               $("#persone").hide();
               $("#loadpersonaggi").hide();
               $("#feste").show();
           
             $("#parte1").show();
             $("#parte2").show();
             $("#parte3").show();
           
              gohome8()
       
           }
           else {
            navigator.notification.alert(
                'Devi Accettare i termini per proseguire',  // message
                alertDismissed,         // callback
                'Privacy',            // title
                'OK'                  // buttonName
                );
            return;
           
           }*/
					   
    });
		
		
		function gohome8(){
			
			//alert()

            setTimeout (function(){
						
				StatusBar.styleDefault();
                StatusBar.backgroundColorByHexString("#fff");
						
				//$("#parte3").show();
                        
                //$("#spinner8").hide();
						
				//alert()
				
            }, 1200); 
            

			$("#spinner8").show();
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/tuned.php?email="+ localStorage.getItem("email")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
                   
                    $("#spinner8").hide();
				   
				   $.each(result, function(i,item){
						  
						  if(item.accesso=="0"){
						  
						  /*window.plugins.nativepagetransitions.fade({
							"duration"       :  1000,
							"iosdelay"       :   50,
							"androiddelay"   :  500,
							"href" : "#home7"
							});*/
						  
						   $.mobile.changePage("#home7", { transition: "fade" });
						   
						   $("#bannerpresentazione").hide()
						  
						  }
						  else{
						  
						  localStorage.setItem("registrato","3")
						  
                          localStorage.setItem("myid", item.id);
                          localStorage.setItem("nickname", item.nickname);
                          localStorage.setItem("etaprofilo", item.data_nascita);
                          localStorage.setItem("cittaprofilo", item.citta);
                          
                          localStorage.setItem("orgasmomentale", item.info);
                          
                          localStorage.setItem("nomeimg", item.foto)
                          
                          localStorage.setItem("registrato", "3");
                          
                          localStorage.setItem("loggato", "1");

						  $.mobile.changePage("#home8", { transition: "fade" });
						  
						  $("#feste").show();
						  
						  $("#parte1").show();
						  $("#parte2").show();
						  
						  $("#persone").hide();
						  $("#loadpersonaggi").hide();
						  $("#bannerpresentazione").hide()
						  
						   $("#feste").html("")
	
							  setTimeout (function(){
                                          
                                  listafeste()
										  
							  }, 300);
						  
						  
						  $("#fotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  $("#loadfotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  $("#loadfotoprofilo2").attr("src","http://msop.it/public/"+item.foto)
						  
						  $("#cambiafotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  
						  //$("#loadfotoprofilo").attr("id","http://msop.it/public/")
						  
						}

					});
				   
				   
				   $("#spinner8").hide()
				   
				   
				   
				   },
				   error: function(){
				   
				   $("#spinner8").hide()
				   
				   navigator.notification.alert(
					'Errore di rete, riprova sotto copertura',  // message
					alertDismissed,         // callback
					'Errore di Rete',            // title
					'OK'                  // buttonName
					);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				dataType:"jsonp"});
			
			
			//$("#feste").html("<table width='320' height='220' align='center' class='#' background='flyer/orizzontali/toyboy/toyor1.png' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>TOY BOY PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>ROMA 21 NOVEMBRE</font><br><a id='goparty'><img src='http://msop.it/public/woman.png' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>FEDERICA</font><br><font class='AntonioFont' color='#fff' size='4'>10€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
			
			//$("#feste").append("<br><table width='320' height='220'><tr><td></td></tr></table>")

			/*
			 $("#spinner8").show();
			 
			 $.ajax({
			 type:"GET",
			 url:"http://msop.it/om/tuned.php?email="+ localStorage.getItem("email")+"",
			 contentType: "application/json",
			 //data: {Lat:3,Longi:4},
			 timeout: 7000,
			 jsonp: 'callback',
			 crossDomain: true,
			 success:function(result){
			 
			 $.each(result, function(i,item){
			 
			 if(item.accesso=="0"){
			 
			 window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home7"
			 });
			 }
			 else{
			 
			 $("#spinner8").hide();
			 
			 window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home8"
			 });
			 
			 
			 //$("#feste").html("<table width='320' height='220' align='center' class='#' background='flyer/orizzontali/toyboy/toyor1.png' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>TOY BOY PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>ROMA 21 NOVEMBRE</font><br><a id='goparty'><img src='http://msop.it/public/woman.png' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>FEDERICA</font><br><font class='AntonioFont' color='#fff' size='4'>10€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
			 
			 $("#feste").append("<br><table width='320' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>"+item.data+"</font><br><a id='goparty'><img src='http://msop.it/public/"+item.foto+"' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>"+item.nickname+"</font><br><font class='AntonioFont' color='#fff' size='4'>"+item.prezzo+"€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
			 
			 
			 $("#feste").append("<br><table width='320' height='220'><tr><td></td></tr></table>")
			 
			 
			 $("#fotoprofilo").attr("src","http://msop.it/public/"+item.foto)
			 $("#loadfotoprofilo").attr("src","http://msop.it/public/"+item.foto)
			 
			 
			 $(document).on("touchstart", "#goparty", function(e){
			 
			 gohomeparty()
			 
			 });
			 
			 
			 }
			 
			 
			 
			 });
			 
			 
			 $("#spinner1").hide()
			 
			 },
			 error: function(){
			 
			 $("#spinner8").hide()
			 
			 navigator.notification.alert(
			 'Errore di rete, riprova sotto copertura',  // message
			 alertDismissed,         // callback
			 'Errore di Rete',            // title
			 'OK'                  // buttonName
			 );
			 
			 },
			 
			 dataType:"jsonp"});
			 */
			
		}
		
		
		function listafeste(){
			
            $("#feste").html("");
			
			$("#spinner8").show();
            
            localStorage.setItem("filtrofeste","1")
            
            if (localStorage.getItem("sessofiltro") === null || localStorage.getItem("sessofiltro")=="null" || typeof(localStorage.getItem("sessofiltro")) == 'undefined' || localStorage.getItem("sessofiltro")==0 || localStorage.getItem("sessofiltro")=="") {
                
                localStorage.setItem("sessofiltro","")
            }
			
			if (localStorage.getItem("cittafiltro") === null || localStorage.getItem("cittafiltro")=="null" || typeof(localStorage.getItem("cittafiltro")) == 'undefined' || localStorage.getItem("cittafiltro")==0 || localStorage.getItem("cittafiltro")=="") {
                
                localStorage.setItem("cittafiltro","")
            }
            
            if (localStorage.getItem("etafiltro") === null || localStorage.getItem("etafiltro")=="null" || typeof(localStorage.getItem("etafiltro")) == 'undefined' || localStorage.getItem("etafiltro")==0 || localStorage.getItem("etafiltro")=="") {
                
                localStorage.setItem("etafiltro","")
            }
            
            if (localStorage.getItem("nickfiltro") === null || localStorage.getItem("nickfiltro")=="null" || typeof(localStorage.getItem("nickfiltro")) == 'undefined' || localStorage.getItem("nickfiltro")==0 || localStorage.getItem("nickfiltro")=="") {
                
                localStorage.setItem("nickfiltro","")
            }
			

			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_festa_filtri.php?email="+ localStorage.getItem("email")+"&citta="+localStorage.getItem("cittafiltro")+"&eta="+localStorage.getItem("etafiltro")+"&nick="+localStorage.getItem("nickfiltro")+"&sesso="+localStorage.getItem("sessofiltro")+"",
				   contentType: "application/json",
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
					   $.each(result, function(i,item){
							  
                        if(item.Token=="1"){


                            $("#feste").append("<br><table width='100%' height='260' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><a id='goparty"+item.id+"'><font class='AntonioFontBold' color='#00ffff' size='6'><b>"+item.titolo+"</b></font></a><br><font class='AntonioFontBold' color='#fff' size='4'>"+item.citta+" "+item.data+"</font><br><font class='AntonioFontBold' color='#fff' size='5'><b><img src='img/euro2.png' height='20'>"+item.prezzo+"</b></font><br><a id='goparty"+item.id+"'><img src='http://msop.it/public/"+item.foto+"' height='30' class='utenteimg2A'></a><br><font class='AntonioFontBold' color='#fff' size='5'>"+item.nickname+"</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
                          
                          
                              $(document).on("tap", "#goparty"+item.id+"", function(e){
                                    
                                var numerofesta = this.id
                                numerofesta = numerofesta.replace("goparty","")
                                
                                gohomeparty(numerofesta)
                                             
                              });
                          
                        }
                        else{
                           $("#feste").append("Nessuna festa in programma")
                        }

					   });
				   
 
				   /*myScroll2 = new IScroll('wrapper2', { click: true,
						bounce: false
					    
					});*/
					
					myScroll2 = new iScroll('wrapper2', {
						click: true,
						useTransform: false,
						bounce: false,
						onBeforeScrollStart: function (e)
						{
							var target = e.target;
							while (target.nodeType != 1) {
							target = target.parentNode;
							}
							
							if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
							e.preventDefault();
							}
						}
		
					});


				   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
				   
				   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				   
				   
				   setTimeout (function(){
							   
					   myScroll2.refresh();
                               
                       if(screen.width>320){
                         
                       }
                       
                       controllachat()
							   
					   
					}, 200);
                   
                   
                   
                   setTimeout (function(){
                        $("#parte3").fadeIn();
                       
                    }, 2000);
				   

				   },
				   error: function(){
				   
				   $("#spinner8").hide()
				   
				   navigator.notification.alert(
					'Errore di rete, riprova sotto copertura',  // message
					alertDismissed,         // callback
					'Errore di Rete',            // title
					'OK'                  // buttonName
					);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				   
			  dataType:"jsonp"});

		}
		
        function controllachat(){
            
             nuovechat2()
            
            /*if (localStorage.getItem("linkorganizzatore") === null || localStorage.getItem("linkorganizzatore")=="null" || typeof(localStorage.getItem("linkorganizzatore")) == 'undefined' || localStorage.getItem("linkorganizzatore")==0 || localStorage.getItem("linkorganizzatore")=="") {
                
                 nuovechat2()
                
            }
             else{
                loadprofilo(localStorage.getItem("linkorganizzatore"))
             } */
            
           
        }
		
		
		function gohomeparty(cost){
			
	
			$.mobile.changePage("#homeparty", { transition: "fade" });
			
			$("#spinner13").show();
			
            $("#infoparty").html("")
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_festabyid.php?id="+ cost +"",
				   contentType: "application/json",
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
						  if(item.Token=="1"){
						  
							  $("#spinner13").hide();

							  $("#party").html("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+item.titolo+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
                          
                            // LEGGO FESTA //
                          
                              var info1;
                          
                              info1 = item.info
                          
                              info1 = info1.replace("777a", "'");
                          
                              info1 = info1.replace("777b", "+");
                          
                              info1 = info1.replace("777c", "$");
                          
                              info1 = info1.replace("777d", "!");
                              info1 = info1.replace("777d7", "!!");
                              info1 = info1.replace("777d77", "!!!");
                              info1 = info1.replace("777d777", "!!!!!");
                              info1 = info1.replace("777d7777", "!!!!!!");
                          
                              info1 = info1.replace("777e", "(");
                          
                              info1 = info1.replace("777f",")");
                          
                              info1 = info1.replace("777g", ":");
                          
                              info1 = info1.replace("777h", "?");
                              info1 = info1.replace("777h7", "??");
                              info1 = info1.replace("777h77", "???");
                              info1 = info1.replace("777h777", "????");
                              info1 = info1.replace("777h7777", "?????");
                          
                              info1 = info1.replace("777i", "à");
                              info1 = info1.replace("777l", "è");
                              info1 = info1.replace("777m", "ì");
                              info1 = info1.replace("777n", "ò");
                              info1 = info1.replace("777o", "ù");
                          
                              var giorno = item.data;
                              giorno.replace("i", "ì");
                          
                             // alert(giorno)

						     $("#dataparty").html(item.citta+" "+giorno+" "+item.location+" ore:"+item.ora+" Eta' Max:"+ item.eta)
						     $("#infoparty").append("<font class='AntonioFont' color='#000' size='5'>" + info1 + "</font>")
						     $("#nome_organizzatore").html(item.nickname)
						  
						  
						     $("#dati_organizzatore").html(item.citta_organizzatore+", "+item.data_organizzatore)
                          
							 $("#foto_organizzatore").attr("src","http://msop.it/public/"+item.foto)
                          
                          
                                $(document).on("tap", "#linkorganizzatore", function(e){

                                   $.mobile.changePage("#home8", { transition: "fade" });
                                   
                                   myScroll2 = new iScroll('wrapper2', { click: true,
                                     bounce: false
                                       
                                  });
                                   
                                   
                                   setTimeout (function(){
                                               
                                       loadprofilo(item.idorganizzatore)
                                       
                                    }, 500);
                                   
                                   
                                   return;
											   
                                });
						  
						  	localStorage.setItem("nickname2", item.nickname);
						  	localStorage.setItem("fotochat", item.foto);
						  
                            localStorage.setItem("idbuyfesta", cost);
                            localStorage.setItem("prezzofesta", item.prezzo);
                            localStorage.setItem("nomefesta", item.titolo);
						  
                            partecipanti_festa2(cost)
                          
                            // LIMITE FESTA
                          
                            if(item.invitati==item.venduti){
                              $("#buyp").hide();
                              $("#buyp2").show();
                            }
                          

						  }
						  else{
						  	$("#party").append("Nessuna festa in programma")
						  }
						  
					});
				   

				   $("#spinner13").hide();
				   
				   
				   setTimeout (function(){
							   
					   myScroll7.refresh();
					   
					   
					}, 500);
				   
				   },
				   error: function(){
				   
					   $("#spinner13").hide();
				   
					   navigator.notification.alert(
						'Errore di rete, riprova sotto copertura',  // message
						alertDismissed,         // callback
						'Errore di Rete',            // title
						'OK'                  // buttonName
						);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				   
				   dataType:"jsonp"});

		}
		
		
		function invitaparty(cost){
			
			
			$.mobile.changePage("#invitaparty", { transition: "fade" });
			
			$("#spinnerinvita").show();
			
			//$("#infoparty2").html("")
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_festabyid.php?id="+ cost +"",
				   contentType: "application/json",
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
					  if(item.Token=="1"){
					  
					  $("#spinnerinvita").hide();
					  
					  $("#party2").html("<table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+item.titolo+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
					  
					  $("#dataparty2").html(item.citta+" "+item.data+" "+item.location+" ore:"+item.ora+" Eta' Max:"+ item.eta)
					  //$("#infoparty2").append("dati dati dati")

					  
					  }
					  else{
						$("#party2").append("Nessuna festa in programma")
					  }
						  
					});
				   
				   
				   $("#spinnerinvitati").hide();
				   
				   
				    myScroll27 = new iScroll('wrapper27', { click: true, bounce: false });
				   
				   
				     setTimeout (function(){
							   
						 myScroll27.refresh();
								 
					  }, 500);
				   
				   },
				   error: function(){
				   
				   $("#spinnerinvitati").hide();
				   
				     navigator.notification.alert(
						'Errore di rete, riprova sotto copertura',  // message
						alertDismissed,         // callback
						'Errore di Rete',            // title
						'OK'                  // buttonName
					  );
				   
				     window.location.href = "index.html";
				   
				   },
				   
				   
				   dataType:"jsonp"});
			
		}
		
		
		function partecipanti_festa2(cost){
			
			$("#partecipanti_festa").html("")
			
			$("#spinner13").show();
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_invitatifesta.php?idfesta="+ cost +"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
					  if(item.Token=="1"){
					  
					  $("#spinner13").hide();
					  
						  $("#partecipanti_festa").append("<br><table width='100%' align='center' class='#' border='0'><tr><td align='left' valign='center' >&nbsp;<a id='gopeople2v_"+item.id+"'><img id='#' src='http://msop.it/public/"+item.foto+"' width='105px' border='0' bordercolor='red' class='utenteimg2B'><font class='AntonioFontBold' color='#000' size='6'><b> "+item.nickname+"</b></font></a></td></tr></table>")
                          
                          
                          $(document).on("touchstart", "#gopeople2v_"+item.id+"", function(e){

							var numeropers = this.id
							numeropers = numeropers.replace("gopeople2v_","")
										 
							
										 
							$.mobile.changePage("#home8", { transition: "fade" });
										 
							 myScroll2 = new iScroll('wrapper2', { click: true,
							 bounce: false
							 
							 });
										 
										 
							 setTimeout (function(){
										 
								loadprofilo(numeropers)
							 
							 }, 500);
							
										 
							return;
						   });
 
					  }
					  else{
						  $("#partecipanti_festa").append("Nessun Partecipante al momento")
					  }
						  
				});
				   
				   
				   $("#spinner13").hide();
				   
				   myScroll7 = new iScroll('wrapper7', { click: true, bounce: false });
				   

				   setTimeout (function(){
							   
					   myScroll7.refresh();
					   
					}, 500);
				   
				   },
				   error: function(){
				   
				   $("#spinner13").hide();
				   
				   navigator.notification.alert(
					'Errore di rete, riprova sotto copertura',  // message
					alertDismissed,         // callback
					'Errore di Rete',            // title
					'OK'                  // buttonName
					);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				   
				   dataType:"jsonp"});
			
		}
		
		
		//// COMPRA FESTA ////
		
		$(document).on("touchstart", "#buyparty", function(e){
                       
			var biglietto = parseInt(localStorage.getItem("prezzofesta"))
                
            var twobiglietto = (2*parseInt(localStorage.getItem("prezzofesta")))
            localStorage.setItem("twobiglietto", twobiglietto)
       
            $("#costobiglietto").html(biglietto)
                       
            $("#costobiglietto2").html(twobiglietto)
            
            $("#partylock").show()

		})
        
        $(document).on("touchstart", "#precompracarta", function(e){
                       
            var email2amico = self.document.formia33.email2biglietto.value;
                       
            if (email2amico!=""){
                localStorage.setItem("emailinvito",email2amico)
                localStorage.setItem("prezzofesta",localStorage.getItem("twobiglietto"))
            }
            else{
                localStorage.setItem("emailinvito","")
            }
                       
            //alert(email2amico)
                       
            //localStorage.setItem("prezzofesta",biglietto)
                       
            //$("#costobiglietto").html(localStorage.getItem("prezzofesta2") + email2amico)
                       
            compraCarta()
                       
         })
        
        $(document).on("touchstart", "#bloccautente", function(e){
                       
            bloccautente()
                       
        })
        
        
        $(document).on("touchstart", "#annulla22", function(e){
                       
           $("#partylock").hide()
           
        })
		
		$(document).on("touchstart", "#annulla23", function(e){
					   
			$("#profilolock").hide()
					   
		})
        
        $(document).on("touchstart", "#annulla233", function(e){
                       
           $("#albumlock").hide()
           
        })
        
        
		function compraCarta() {

			var num1 = Math.floor((Math.random() * 20) + 1);
			var num2 = Math.floor((Math.random() * 20) + 1);
			var num3 = Math.floor((Math.random() * 20) + 1);
			var num4 = Math.floor((Math.random() * 20) + 1);
			var num5 = Math.floor((Math.random() * 20) + 1);
			var num6 = Math.floor((Math.random() * 20) + 1);
			var num7 = Math.floor((Math.random() * 20) + 1);
			var num8 = Math.floor((Math.random() * 20) + 1);
			
			var transazionemia = num1+""+num2+""+num3+""+num4+""+num5+""+num6+""+num7+""+num8;
			
			var item_number= "ABC1122";
			
			
			var amount = localStorage.getItem("prezzofesta");
            
            //alert(amount)
			
			amount = amount.replace(",",".")
			
			if (amount == 0) {
				navigator.notification.alert(
				 'Non hai nessun party da acquistare',
				 alertDismissed,
				 'Ordine Fallito',
				 'OK'
				 );
				
				return;
			}
			
            
			$(".spinner13").show();
			 
            $.ajax({
            type:"GET",
            url:"http://msop.it/om/Check_TransactionV2.asp",
            contentType: "application/json",
            data: {email:localStorage.getItem("email"),email2:localStorage.getItem("emailinvito"),id_prodotto:localStorage.getItem("idbuyfesta"),qta:1,tot:amount,transazionemia:transazionemia,NomeProdotto:localStorage.getItem("nomefesta"),EmailEsercente:"info@orgasmomentale.com",idTransazione:"CC",Ordine:localStorage.getItem("nomefesta"),Richiesta:localStorage.getItem("idbuyfesta")},
            timeout: 7000,
            jsonp: 'callback',
            crossDomain: true,
            success:function(result){
			 
			 $.each(result, function(i,item){
					
                  //alert("OK")
                 
                 if (item.Token == "1"){
                    
                   //alert("Ok, Festa comprata")
                 
                   var ref = window.open('http://msop.it/om/wbspaypal.asp?Transprodotto='+ transazionemia +'', '_blank', 'location=no');
                 
                   ref.addEventListener('loadstop', function(event) { if (event.url.match("mobile/close")) { ref.close(); } });
                 
                 }
                 else if(item.Token == "2") {
                    navigator.notification.alert(
                     'Sei gia in possesso di un biglietto per questo evento',  // message
                     alertDismissed,         // callback
                     'Attenzione',            // title
                     'OK'                  // buttonName
                     );
                 }
                else if(item.Token == "3") {
                    navigator.notification.alert(
                     'La tua amica/o deve essere registrato ad O.M.',  // message
                     alertDismissed,         // callback
                     'Attenzione',            // title
                     'OK'                  // buttonName
                     );
                    }
                 else{
                     navigator.notification.alert(
                     'Possibile errore di rete, riprova tra qualche minuto',  // message
                     alertDismissed,         // callback
                     'Attenzione',            // title
                     'Done'                  // buttonName
                     );
                 }
			 
			 });
			 
			 $(".spinner13").hide();
			 
			 },
			 
			 error: function(){
				$(".spinner13").hide();
			 
				 navigator.notification.alert(
				 'Possibile errore di rete, riprova tra qualche minuto',  // message
				 alertDismissed,         // callback
				 'Attenzione',            // title
				 'Done'                  // buttonName
				 );
			 
			 },
			 dataType:"jsonp"});
			
		}
		
		
		////
		
		function updateRating(){
			alert("fine pagina")
		}
		

		function gohome11(){
			
			localStorage.setItem("filtrofeste","0")
            
            
			$("#persone").html("")
			
			if (localStorage.getItem("miacitta") === null || localStorage.getItem("miacitta")=="null" || typeof(localStorage.getItem("miacitta")) == 'undefined' || localStorage.getItem("miacitta")==0 || localStorage.getItem("miacitta")=="") {
				
				localStorage.setItem("miacitta","")
			}
			
			if (localStorage.getItem("miaeta") === null || localStorage.getItem("miaeta")=="null" || typeof(localStorage.getItem("miaeta")) == 'undefined' || localStorage.getItem("miaeta")==0 || localStorage.getItem("miaeta")=="") {
				
				localStorage.setItem("miaeta","")
			}
            
            if (localStorage.getItem("miosesso") === null || localStorage.getItem("miosesso")=="null" || typeof(localStorage.getItem("miosesso")) == 'undefined' || localStorage.getItem("miosesso")==0 || localStorage.getItem("miosesso")=="") {
                
                localStorage.setItem("miosesso","")
            }
			
			if (localStorage.getItem("mionickname") === null || localStorage.getItem("mionickname")=="null" || typeof(localStorage.getItem("mionickname")) == 'undefined' || localStorage.getItem("mionickname")==0 || localStorage.getItem("mionickname")=="") {
				
				localStorage.setItem("mionickname","")
			}
			
			
			$("#spinner8").show();
			
			//alert("http://msop.it/om/lista_persone_filtri.php?email="+ localStorage.getItem("email")+"&citta="+localStorage.getItem("miacitta")+"&eta="+localStorage.getItem("miaeta")+"&nick="+localStorage.getItem("mionickname")+"")
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/lista_persone_filtri.php?email="+ localStorage.getItem("email")+"&citta="+localStorage.getItem("miacitta")+"&eta="+localStorage.getItem("miaeta")+"&nick="+localStorage.getItem("mionickname")+"&sesso="+localStorage.getItem("miosesso")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
						  $("#spinner8").hide();
						  
						  //$("#persone").append("<br> <table width='95%' align='center' border='0' valign='bottom'><tr><td colspan='2' width='100%' ><img src='http://msop.it/public/"+item.foto+"' width='100%'></td></tr><tr bgcolor='#000'><td width='100%' align='left'><a id='gopeople"+item.id+"'><font class='AntonioFont' color='#00ffff' size='5'> "+item.nickname+", "+item.citta+", "+item.eta+"</font></a></td><td width='50'><img src='img/mess_uomo1.png' width='40'></td></tr></table>")
						  
						  var contanick = item.nickname.length;
						  var nuovonick
						  
						  if(contanick <= 12){
						  
						   nuovonick = item.nickname;
						  
						  }
						  else{
						   nuovonick = item.nickname.slice(0,10)
						   nuovonick = nuovonick + ".."
						  
						  }
						  
						  var contacitta = item.citta.length;
						  var nuovacitta
						  
						  if(contacitta <= 14){
						  
						  nuovacitta = item.citta;
						  
						  }
						  else{
						  nuovacitta = item.citta.slice(0,12)
						  nuovacitta = nuovacitta + ".."
						  
						  }
						  
						  var linkfoto = item.foto
						  linkfoto = linkfoto.replace(".png","")

						  $("#persone").append("<table width='100%' align='center' class='#' background='http://msop.it/public/"+item.foto+"' border='0'><tr><td align='right' valign='center' height='180'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop4'><table width='100%' height='60' align='center' border='0'><tr><td width='85%' align='left' valign='center'><a id='#'><a id='gopeople"+item.id+"'><font class='AntonioFontBold' color='#00ffff' size='6'><b>"+nuovonick+"</font><font class='AntonioFont' color='#00ffff' size='4'> "+item.eta+"</b></a></font></a></td><td width='15%' align='center' valign='middle'><a id='go_"+linkfoto+"go_"+item.nickname+"'><img src='img/mess_uomo1.png' width='40'></a></td></tr></table></div><div id='curtain4' style=''>&nbsp;</div></div></td></tr></table>")
						  
						  $("#persone").append("<table width='100%' height='20px'><tr><td></td></tr></table>")
						  
						  
						  $(document).on("tap", "#gopeople"+item.id+"", function(e){
                                         
                             myScroll2.scrollTo(0, 0);
										 
							 var numeropers = this.id
							   numeropers = numeropers.replace("gopeople","")
								
								loadprofilo(numeropers)
										 
							});
						  
						  
						  $(document).on("tap", "#go_"+linkfoto+"go_"+item.nickname+"", function(e){
										 
							var str=this.id;
										 
							//alert(this.id)
									 
							 var a1 = new Array();
							 a1=str.split("go_");
							
							 //alert(a1[1] +" "+ a1[2])
										 
							var linkfoto2 = a1[1]+".png"
									 
							localStorage.setItem("nickname2", a1[2]);
							localStorage.setItem("fotochat", linkfoto2);
									 
							 chatdonnabypersone()
										 
						  });
						  
					});

				   $("#spinner11").hide()
				   
				   
				   

				   setTimeout (function(){
							   
					  myScroll2.refresh();
							   
							   
					   myScroll2.on("scrollEnd", function() {
							if (this.y == 0){
							  //alert("inizio")
							
							}
							if (this.y < 0){
							  //alert("inizio nascondi")
							}
							if (this.y == this.maxScrollY){
							 //alert("Fine")
                                    
                                  /*$("#persone").append("<br><br>21212<br><br>")
                                    $("#persone").append("<br><br>21212<br><br>")
                                    $("#persone").append("<br><br>21212<br><br>")
                                    $("#persone").append("<br><br>21212<br><br>")
                                    $("#persone").append("<br><br>21212<br><br>")
                                    $("#persone").append("<br><br>21212<br><br>")
                                    
                                     myScroll2.refresh();*/
									
                             // inserire la quary per paginazione.
							}
							if (this.y > this.maxScrollY){
							  //alert("Fine Nascondi")
							
							}
						})
							   							   
							   
					  //var scrollHeight = $(document).height();
							   
					   //var width = screen.width;
					   //var height = screen.height;
 
					    //alert(width)

   
					}, 200);
				   
				   
				   },
				   error: function(){
				   
				   $("#spinner8").hide()
				   
				   navigator.notification.alert(
					'Errore di rete, riprova sotto copertura',  // message
					alertDismissed,         // callback
					'Errore di Rete',            // title
					'OK'                  // buttonName
					);
				   
				   window.location.href = "index.html";
				   
				   },
				   
				   dataType:"jsonp"});
		}
		
		
		
		$(document).on("touchstart", "#btncount", function(e){
					   
			   //window.location.href = "index33.html";
			   
			   window.plugins.nativepagetransitions.fade({
				 "duration"       :  1000, // in milliseconds (ms), default 400
				 "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				 "androiddelay"   :  600,
				 "href" : "index33.html"
				 });
					   
		  });
		

		$(document).on("touchstart", "#indietro2", function(e){
					   
		   $("#allenati").hide()
		   $("#btnallenati").show()
		   $("#btnsfida").show()
		   $("#bliard").show()
		   $("#btnlancia").show()
		   $("#risultati").show()
		});
		
	
		$(document).on("tap", "#altro", function(e){
					   
		   $("#btnpanel").click();
		   
		});
		
		
		$(document).on("tap", "#altro1", function(e){
					   
		    $("#btnpanel1").click();
					   
        });
		
		$(document).on("tap", "#altro2", function(e){
					   
			$("#btnpanel2").click();
					   
        });
		
		$(document).on("tap", "#altro3", function(e){
					   
			$("#btnpanel3").click();
					   
        });
		
		
		$(document).on("touchstart", "#ritorna", function(e){
					   
		   window.location.href = "#home8";
		   
		   $("#chatnuove").hide();
		   
		   $("#loadpersonaggi").hide();
		   $("#persone").hide();
		   $("#chatnuove").hide();
		   $("#mostrachat").hide();
		   
		   setTimeout (function(){
			
			$("#feste").show();
			
			$("#parte1").show();
			$("#parte2").show();
			$("#parte3").show();
			
			myScroll2.refresh();
			
			document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
			
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			
			
			e.stopImmediatePropagation();
			
			e.preventDefault();
			
			return false;
			
			if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
			
			}, 0);
					   
		});
		
		
		$(document).on("touchstart", "#ritornadallachat", function(e){
			
		   //window.location.href = "#home8";
					   
		   $("#chatnuove").hide();
		   
		   $("#loadpersonaggi").hide();
		   $("#persone").hide();
           $("#chatnuove").hide();
           $("#mostrachat").hide();
					   
		  loadprofilo(localStorage.getItem("idprofilo"))
		   
		  /* setTimeout (function(){
					   
			   $("#feste").show();
			   
			   $("#parte1").show();
			   $("#parte2").show();
			   $("#parte3").show();
					   
			   myScroll2.refresh();
					   
			   document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
			   
			   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			   
			   
			   e.stopImmediatePropagation();
			   
			   e.preventDefault();
			   
			   return false;
			   
			   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
			   
			}, 0); */
	   
		});
        
        
       function personaggi(){
                       
           $("#feste").hide();
           
           $("#loadpersonaggi").hide();
           
           $("#chatnuove").hide();
           $("#mostrachat").hide();
           
           setTimeout (function(){
               $("#persone").show();
               
               $("#parte1").show();
               $("#parte2").show();
               $("#parte3").show();
               
               gohome11()
            }, 500);
         
        }
		
		
		$(document).on("touchstart", "#personaggi", function(e){
					   
		   localStorage.setItem("sonoin", "personaggi");
					   
		   $("#feste").hide();
					   
		   $("#loadpersonaggi").hide();
		   $("#bannerpresentazione").hide()
					   
           $("#chatnuove").hide();
           $("#mostrachat").hide();
                       
			setTimeout (function(){
			   $("#persone").show();
						
				$("#parte1").show();
				$("#parte2").show();
				$("#parte3").show();
						
			   gohome11()
			}, 500);
					   
					   
		});
		
		
		$(document).on("touchstart", "#private", function(e){
					   
		   localStorage.setItem("sonoin", "private");
					   
		   $("#scheda1").hide();
		   $("#scheda2").hide();
		   $("#scheda3").hide();
		   $("#scheda4").hide();
		   
		   $("#bannerpresentazione").hide()
		   $("#imginiziale").hide();
		   
			$("#persone").hide();
			$("#loadpersonaggi").hide();
            $("#chatnuove").hide();
            $("#mostrachat").hide();
                       
		   setTimeout (function(){
		   //$("#feste").show();
		   
		   //$("#parte1").show();
		   //$("#parte2").show();
		   //$("#parte3").show();
		   
		   window.plugins.nativepagetransitions.fade({
			 "duration"       :  400, // in milliseconds (ms), default 400
			 "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
			 "androiddelay"   :  600,
			 "href" : "index.html"
			 });
					   
		   //app.initialize();
					   
		   //gohome8()
		 }, 500);
					   
		});
		
		
		function personaggi(){
			
			$("#feste").hide();
			
			$("#loadpersonaggi").hide();
			
			$("#chatnuove").hide();
			$("#mostrachat").hide();
			
			setTimeout (function(){
			$("#persone").show();
			
			$("#parte1").show();
			$("#parte2").show();
			$("#parte3").show();
			
			gohome11()
			}, 500);
		}
		
		function private(){
			
			//$("#spinner8").show();
			
			$("#scheda1").hide();
			$("#scheda2").hide();
			$("#scheda3").hide();
			$("#scheda4").hide();
			
			$("#bannerpresentazione").hide()
			$("#imginiziale").hide();
			
			$("#persone").hide();
			$("#loadpersonaggi").hide();
			$("#chatnuove").hide();
			$("#mostrachat").hide();
			
			setTimeout (function(){
				//$("#feste").show();
				
				//$("#parte1").show();
				//$("#parte2").show();
				//$("#parte3").show();
				
				window.plugins.nativepagetransitions.fade({
				  "duration"       :  400, // in milliseconds (ms), default 400
				  "iosdelay"       :   60, // ms to wait for the iOS webview to update before animation kicks in, default 60
				  "androiddelay"   :  600,
				  "href" : "index.html"
				  });
						
				//app.initialize();
				
				//gohome8()
				}, 500);
		}
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
					   
		   navigator.notification.confirm(
			  'vuoi uscire?',  // message
			   onConfirm3,              // callback to invoke with index of button pressed
			  'Logout',            // title
			  'Esci,Annulla'      // buttonLabels
			  );
					  
					   
		   function onConfirm3(button) {
			   if(button==1){    //If User selected No, then we just do nothing
				   $("#scheda1").show();
				   $("#scheda2").show();
				   $("#scheda3").show();
				   $("#scheda4").show();
				   
				   $("#bannerpresentazione").show()
				   $("#imginiziale").show();
				   
				   localStorage.setItem("loggato", "0");
				   
				   localStorage.setItem("email","")
				   localStorage.setItem("registrato", "");
				   
				   
				   window.location.href = "index.html";
				   
			   }
		   
		   }

			
		});
        
        $(document).on("touchstart", "#esci2", function(e){
                       
           $("#scheda1").show();
           $("#scheda2").show();
           $("#scheda3").show();
           $("#scheda4").show();
           
           $("#bannerpresentazione").show()
           $("#imginiziale").show();
           
           localStorage.setItem("loggato", "0");
           
           localStorage.setItem("email","")
           localStorage.setItem("registrato", "");
           
           
           window.location.href = "index.html";
                       
        });
		
		
		$(document).on("touchstart", "#entra", function(e){
                       
                       
            if(screen.height<500){
                       
               var email2 = document.getElementById("emaillogin2").value;
               var pin2 =  document.getElementById("pswlogin2").value;
               
               if (email2 == "") {
               navigator.notification.alert(
                                            'inserire Username',  // message
                                            alertDismissed,         // callback
                                            'Email',            // title
                                            'OK'                  // buttonName
                                            );
               return;
               }
               
               
               if (pin2 == "") {
               navigator.notification.alert(
                                            'inserire una Password',  // message
                                            alertDismissed,         // callback
                                            'Password',            // title
                                            'OK'                  // buttonName
                                            );
               return;
               }
               
               EmailAddr = document.getElementById("emaillogin2").value;
               Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
               if (Filtro.test(EmailAddr)) {
               
               
               }
               else {
               navigator.notification.alert(
                                            'Caratteri email non consentiti',  // message
                                            alertDismissed,         // callback
                                            'Email',            // title
                                            'OK'                  // buttonName
                                            );
               return;
               }
                       
                       
               LoginVera(email2,pin2);
                       
            }
            else{
					   
                var email2 = document.getElementById("emaillogin").value;
                var pin2 =  document.getElementById("pswlogin").value;
                       
                if (email2 == "") {
                    navigator.notification.alert(
                    'inserire Username',  // message
                    alertDismissed,         // callback
                    'Email',            // title
                    'OK'                  // buttonName
                    );
                    return;
                }
                       
                       
                if (pin2 == "") {
                    navigator.notification.alert(
                        'inserire una Password',  // message
                        alertDismissed,         // callback
                        'Password',            // title
                        'OK'                  // buttonName
                    );
                    return;
                }
                       
                EmailAddr = document.getElementById("emaillogin").value;
                Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
                if (Filtro.test(EmailAddr)) {
                       
                       
                }
                else {
                    navigator.notification.alert(
                                                        'Caratteri email non consentiti',  // message
                                                        alertDismissed,         // callback
                                                        'Email',            // title
                                                        'OK'                  // buttonName
                    );
                    return;
                }
                       
                       
                LoginVera(email2,pin2);
					
            }
					   
			
					   
			// Esempio di Login
			//localStorage.setItem("email","salvatore.bruni@gmail.com")
			//localStorage.setItem("registrato", "3");
					   
			//gohome8()
					   
		});
		
		
		function LoginVera(email2,pin2) {
			
			    $("#spinner22").show();
				$.ajax({
					   type:"GET",
					   url:"http://msop.it/om/check_accesso.php?email="+ email2 +"&password="+ pin2 +"",
					   contentType: "application/json",
					   timeout: 7000,
					   jsonp: 'callback',
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
							  
							if (item.Token == "1"){
							  
							  localStorage.setItem("email", email2);
							  localStorage.setItem("nickname", item.nickname);
                              localStorage.setItem("etaprofilo", item.data_nascita);
                              localStorage.setItem("cittaprofilo", item.citta);
							  
							  //alert(item.info)
							  
							  localStorage.setItem("orgasmomentale", item.info);
							  
                              localStorage.setItem("nomeimg", "add_"+email2.replace("@","").replace(".","").replace(".",""))
                              
							  localStorage.setItem("registrato", "3");
                              localStorage.setItem("myid", item.id);
							  
							  localStorage.setItem("loggato", "1");
							  
							  $("#bannerpresentazione").hide()
							  $("#imginiziale").hide();
							  
							  $("#scheda1").hide();
							  $("#scheda2").hide();
							  $("#scheda3").hide();
							  $("#scheda4").hide();

							  //localStorage.setItem("fotoprof", item.foto.replace(".jpg","").replace(".png",""));

							  /*if(localStorage.getItem("fotoprof")=="default"){
							  localStorage.setItem("nomefoto", "default")
							  localStorage.setItem("nomeimg", "add_"+email.replace("@","").replace(".","").replace(".",""))
							  }
							  else{
							  localStorage.setItem("nomefoto", "add_"+email.replace("@","").replace(".","").replace(".",""))
							  }*/
							  
							  $("#spinner22").hide();
							  
							 
							  $("#persone").hide();
							  $("#feste").show();
							  
							  $("#parte1").show();
							  $("#parte2").show();
							  $("#parte3").show();
							  
							  gohome8()
							  
							}
							else if(item.Token == "3"){
							  
							  $.mobile.changePage("#home7", { transition: "fade" });
							  
							  $("#bannerpresentazione").hide()
							  
							}
							else{
							  
							  $("#spinner22").hide();
							  navigator.notification.alert(
							   'Email e/o password non corretti',  // message
							   alertDismissed,         // callback
							   'Attenzione',            // title
							   'Done'                  // buttonName@
							   );
							}
							  
					   });
					   
						 $("#spinner22").hide();
					   
					   },
					   error: function(){
					     $("#spinner22").hide();
					   
					   navigator.notification.alert(
							'Possibile errore di rete, riprova tra qualche minuto',  // message
							alertDismissed,         // callback
							'Attenzione',            // title
							'Done'                  // buttonName
							);
					   
					   },
					   dataType:"jsonp"});
			
		}
		
		
		function chatdonnabypersone(){
			
			localStorage.setItem("chatpass","")
			
			$.mobile.changePage("#homechat", { transition: "fade" });
			
            if (localStorage.getItem("arrivochat")=="1"){
                 $("#nuovodietro").html("<img id='indietro3' src='img/indietro_over.png' width='30'>")
            }
			
			chatdonna()
			
			$("#loadfotoprofilo6").attr("src", "http://msop.it/public/"+localStorage.getItem("fotochat")+"");
			$("#nomechat").html(localStorage.getItem("nickname2"));
			
			myScroll6 = new iScroll('wrapper6', { click: true });
			
			/*myScroll6 = new iScroll('wrapper6', {
			click: true,
			useTransform: false,
			bounce: false,
			onBeforeScrollStart: function (e)
			{
			var target = e.target;
			while (target.nodeType != 1) {
			target = target.parentNode;
			}
			
			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
			e.preventDefault();
			}
			}
			
			});*/
			
			setTimeout (function(){
						
			myScroll6.refresh();
			
			}, 500);
		}
		
		
		
		$(document).on("tap", "#chatdonna", function(e){
					   
			localStorage.setItem("chatpass","")
					   
			$.mobile.changePage("#homechat", { transition: "fade" });
			
			//return;
					   
			  // $("#spinner12").show();
			   
			   chatdonna()
			   
			   $("#loadfotoprofilo6").attr("src", "http://msop.it/public/"+localStorage.getItem("fotochat")+"");
			   $("#nomechat").html(localStorage.getItem("nickname2"));
			   
			  myScroll6 = new iScroll('wrapper6', { click: true });
					   
				/*myScroll6 = new iScroll('wrapper6', {
				   click: true,
				   useTransform: false,
				   bounce: false,
				   onBeforeScrollStart: function (e)
				   {
				   var target = e.target;
				   while (target.nodeType != 1) {
				   target = target.parentNode;
				   }
				   
				   if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
				   e.preventDefault();
				   }
				   }
									   
				});*/
			   
			   setTimeout (function(){
						   
				 myScroll6.refresh();
				   
				}, 500);
		
		})
		
		$(document).on("tap", "#goalbum", function(e){
					   
		   $.mobile.changePage("#homealbum", { transition: "fade" });
					   
		   ilmioalbum()
		   
		   $("#spinner55").hide();

		   myScroll55 = new iScroll('wrapper55', { click: true, bounce: false });
		   
		  
					   
		})
		
		
		function chatdonna() {
			var contanick
			var nuovonick;
			//document.getElementById("chattext").value = "";
			
			localStorage.setItem("tastiera","0")
			localStorage.setItem("pagina","chat")
			
			var height = -20;
			var conta = 40;
			
			//alert("http://msop.it/om/leggi_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ localStorage.getItem("nickname2") +"&last_id=0")
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/leggi_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ localStorage.getItem("nickname2") +"&last_id=0",
				   contentType: "application/json",
				   //data: {ID: "Lazio"}, LIMIT 10
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   if(localStorage.getItem("chatpass")==JSON.stringify(result)){

				     $("#spinner12").hide();
				   
				    }
				   else{

				   $("#offerta12").html("");
				   $("#spinner12").hide();
				   
				   $.each(result, function(i,item){
						height = height + 40;
						  
						if (height>319){
						  conta = conta + 45
						}
						  
						localStorage.setItem("chatpass", JSON.stringify(result))
						  
						if(item.Token==1){
						  
						  if(item.scrive==localStorage.getItem("nickname")){
						  
						  var indirizzo = item.messaggio.replace("777A","'");
						  
						  indirizzo = indirizzo.replace("777B", "+");
						  
						  indirizzo = indirizzo.replace("777C", "$");
						  
						  indirizzo = indirizzo.replace("777D", "!");
						  
						  indirizzo = indirizzo.replace("777E", "(");
						  
						  indirizzo = indirizzo.replace("777F", ")");
						  
						  indirizzo = indirizzo.replace("777G", ":");
						  
						  indirizzo = indirizzo.replace("777H", "?");
						  
						  $("#offerta12").append("<div class='bubbledRight HelveticaFont'>"+ indirizzo +"</div>")
						  
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")

						  }
						  else{
						   var indirizzo = item.messaggio.replace("777A","'");
						  
						   indirizzo = indirizzo.replace("777B", "+");
						  
						   indirizzo = indirizzo.replace("777C", "$");
						  
						   indirizzo = indirizzo.replace("777D", "!");
						  
						   indirizzo = indirizzo.replace("777E", "(");
						  
						   indirizzo = indirizzo.replace("777G", ":");
						  
						   indirizzo = indirizzo.replace("777H", "?");
						  
						   $("#offerta12").append("<div class='bubbledLeft HelveticaFont'>"+ indirizzo +"</div>")
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")
						  
		  
						  
						  }
			  
					   }
						  
					});
				   
				    $("#offerta12").append("<table id='spaziosotto' height='20px'><tr><td></td></tr></table>")
				   
				   
					   if (height>340){
				   
					     setTimeout (function(){
								   
						   myScroll6.refresh();
						   
						   var ciccio = document.body.scrollTop = document.body.scrollHeight;
						   ciccio = ciccio+conta
						   
						   myScroll6.scrollTo(0, -conta);
						   
						   }, 700);
				   
					   }
				   
				   }
				   
				   },
				   error: function(){
				   
				   //$("#led").html("<img src='img/ledrosso.png' width='25px'>");
				   //$("#led5").html("<img src='img/ledrosso.png' width='25px'>");
				   
				   navigator.notification.alert(
					'Possibile errore di rete, riprova tra qualche minuto.',  // message
					alertDismissed,         // callback
					'Attenzione',           // title
					'Ok'                  // buttonName
					);
				   
				   window.location.href = "index.html";
				   
				   
				   },
				   dataType:"jsonp"});
			
			
			
			setTimeout(function() {
			    
				chatdonna();
				
			}, 2500);
			
			
			
			/*refreshIntervalId = setInterval(function() {
									 
				chatting();
									 
			}, 3000);*/
			
		}
		
		
		function chatdonnaby(nick) {
			var contanick
			var nuovonick;
			localStorage.setItem("nickname2",nick)
			
			var height = -20;
			var conta = 40;
			
			localStorage.setItem("tastiera","0")
			localStorage.setItem("pagina","chat")
			
			//alert("http://msop.it/om/leggi_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ localStorage.getItem("nickname2") +"&last_id=0")
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/leggi_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ nick +"&last_id=0",
				   contentType: "application/json",
				   //data: {ID: "Lazio"}, LIMIT 10
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   
				   if(localStorage.getItem("chatpass")==JSON.stringify(result)){
				   
				   	$("#spinner12").hide();
				   
				   }
				   else{
				   
				     $("#offerta12").html("");
				     $("#spinner12").hide();
				   
				     $.each(result, function(i,item){
						  height = height + 20;
						  
						  if (height>319){
						    conta = conta + 45
						  }
						  
						  localStorage.setItem("chatpass", JSON.stringify(result))
						  
						  if(item.Token==1){
						  
						  if(item.scrive==localStorage.getItem("nickname")){
						  
						  var indirizzo = item.messaggio.replace("777A","'");
						  
						  indirizzo = indirizzo.replace("777B", "+");
						  
						  indirizzo = indirizzo.replace("777C", "$");
						  
						  indirizzo = indirizzo.replace("777D", "!");
						  
						  indirizzo = indirizzo.replace("777E", "(");
						  
						  indirizzo = indirizzo.replace("777F", ")");
						  
						  indirizzo = indirizzo.replace("777F", ":");
							
							indirizzo = indirizzo.replace("777H", "?");
						  
						  $("#offerta12").append("<div class='bubbledRight HelveticaFont'>"+ indirizzo +"</div>")
						  
						  
						   setTimeout (function(){

								//myScroll6.refresh();
									  
							}, 500);
						  
						  }
						  else{
						  var indirizzo = item.messaggio.replace("777A","'");
						  
						  indirizzo = indirizzo.replace("777B", "+");
						  
						  indirizzo = indirizzo.replace("777C", "$");
						  
						  indirizzo = indirizzo.replace("777D", "!");
						  
						  indirizzo = indirizzo.replace("777E", "(");
						  
						  indirizzo = indirizzo.replace("777F", ")");
						  
						  indirizzo = indirizzo.replace("777F", ":");
							
						  indirizzo = indirizzo.replace("777H", "?");
						  
						  $("#offerta12").append("<div class='bubbledLeft HelveticaFont'>"+ indirizzo +"</div>")
						  						  
						  
						   setTimeout (function(){
									  
							  //myScroll6.refresh();
							  
							}, 500);

						  }
						  
						  }
						  
						});
				   
					   $("#offerta12").append("<table id='spaziosotto' height='20px'><tr><td></td></tr></table>")
				   
				        if (height>340){
				   
							setTimeout (function(){
										
								myScroll6.refresh();
										
								var ciccio = document.body.scrollTop = document.body.scrollHeight;
								ciccio = ciccio+conta
								
								myScroll6.scrollTo(0, -conta);
										
							}, 700);
				   
				        }
				   
				   }
				   
				   },
				   error: function(){
				   
				   //$("#led").html("<img src='img/ledrosso.png' width='25px'>");
				   //$("#led5").html("<img src='img/ledrosso.png' width='25px'>");
				   
				   navigator.notification.alert(
						'Possibile errore di rete, riprova tra qualche minuto.',  // message
						alertDismissed,         // callback
						'Attenzione',           // title
						'Ok'                  // buttonName
						);
				   
				   
				   },
				   dataType:"jsonp"});
			
			
			setTimeout(function() {
			   chatdonna();
			   }, 2500);
			
			
			/*refreshIntervalId = setInterval(function() {
			 
			 chatting();
			 
			 }, 3000);*/
			
		}
		
		
		$(document).on("touchstart", "#chatting", function(e){
			var indirizzo = document.getElementById("chattext").value;
					   
			//indirizzo = indirizzo.replace(/[&\/\\#,~%.*<>{}]/g,'');
					   
			indirizzo = indirizzo.replace("'","777A");
													 
			indirizzo = indirizzo.replace("+","777B");
													 
			indirizzo = indirizzo.replace("$","777C");
													 
			indirizzo = indirizzo.replace("!","777D");
													 
			indirizzo = indirizzo.replace("(","777E");
													 
			indirizzo = indirizzo.replace(")","777F");
													 
			indirizzo = indirizzo.replace(":","777G");
										  
			indirizzo = indirizzo.replace("?","777H");
                       
            indirizzo = indirizzo.replace(/[&\/\\#?!,~%.*<>{}]/g,'');
													 
			//$("#spinner12").show();
										  
			if (indirizzo == "") {
					
			  navigator.notification.alert(
			   'Inserire Messaggio',  // message
			   alertDismissed,         // callback
			   'Attenzione',           // title
			   'Ok'                  // buttonName
			   );
										  
			}
			else{
			  //2alert(indirizzo)
										  
				//alert("http://msop.it/om/pubblica_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ localStorage.getItem("nickname2") +"&messaggio="+ indirizzo +"")
										  
				//$("#spinner12").show();
				$.ajax({
					 type:"GET",
					 url:"http://msop.it/om/pubblica_chat.php?nickname="+ localStorage.getItem("nickname") +"&nickname2="+ localStorage.getItem("nickname2") +"&messaggio="+ indirizzo +"",
					 contentType: "application/json",
					 //data: {ID: "Lazio"}, LIMIT 10
					 timeout: 7000,
					 jsonp: 'callback',
					 crossDomain: true,
					 success:function(result){

					   $.each(result, function(i,item){
							  
							//alert()
							  
							document.getElementById("chattext").value = "";
							
							  $("#chattext").blur();
							  
							  //cordova.plugins.Keyboard.close();
							  Keyboard.hide();
							  
							  chatdonna()
					   });
					 
					 },
					 error: function(){
					 $("#spinner12").hide();
					
					 
					 navigator.notification.alert(
					  'Possibile errore di rete, riprova tra qualche minuto.',  // message
					  alertDismissed,         // callback
					  'Attenzione',           // title
					  'Ok'                  // buttonName
					  );

												 
				},
				dataType:"jsonp"});
					
			}
					   
		})

        function err() {
			
        }

		
    }
    
};


function testa(testo) {
	
	if (localStorage.getItem("RegToken") === null || typeof(localStorage.getItem("RegToken")) == 'undefined' || localStorage.getItem("RegToken")=="null" || localStorage.getItem("RegToken")==""){
		
		setTimeout (function(){
					
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/tanadelletigri/Check_RegToken.asp",
				   data: {device:testo,platform:"ios"},
				   contentType: "application/json",
				   json: 'callback',
				   timeout: 7000,
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
					  localStorage.setItem("RegToken", "1");
					  //alert(testo);
						  
					});
				   
				   },
				   error: function(){
				   
				   
				   },
				   dataType:"json"});
			
			}, 500);
		
	}
}

function back2() {
    window.plugins.pagetransitions.slide({
	 'direction': 'left',
	 'duration': 400,
	 'androiddelay': 50,
	 'href': 'index.html'
	 },
	 function () {
	 console.log('slide transition finished');
	 });
}

function onResume() {
					   
   // CONTROLLO INTERNET
   
   var connectionStatus = false;
   connectionStatus = navigator.onLine ? 'online' : 'offline';
   
   if(connectionStatus=='online'){
					   
		controllachat()
			   
	   if(localStorage.getItem("registrato")=="2"){
	   
		   $("#spinner5").hide()
		   
		   $.mobile.changePage("#home5", { transition: "fade" });
	   
	   
	   }
	   else if(localStorage.getItem("registrato")=="3"){
	   
			controlloregistrazione()
	   
	   }
	   else{
					   
		     controlloregistrazione()
					   
	   }
                       
					   
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
       
    }, 15000);

   }
	
}


function onPause() {
	
	   // CONTROLLO INTERNET
	   
   var connectionStatus = false;
   connectionStatus = navigator.onLine ? 'online' : 'offline';
   
   if(connectionStatus=='online'){
	   
	controllachat()
					   
	if(localStorage.getItem("registrato")=="2"){
	   
	   $("#spinner5").hide()
	   
	   $.mobile.changePage("#home5", { transition: "fade" });
	   
	   
	}
	else if(localStorage.getItem("registrato")=="3"){
	   
	   controlloregistrazione()
	   
	}
	
	else{
	   
	  controlloregistrazione()
	   
	}
	   
	   
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
	   
	   window.location.href = "index.html";
	   
	}
	
}

function checkemail(email3,emailamico3,sesso) {
	
	//alert("http://msop.it/om/check_email.php?email="+ email3 +"&email2="+ emailamico3 +"")
	
	$("#spinner2").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/om/check_email.php?email="+ email3 +"&email2="+ emailamico3 +"&sesso="+ sesso +"",
		   contentType: "application/json",
		   //data: {email:email,pin:pin},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   //alert("ok")
		   localStorage.setItem("email", email3);
		   
		   $.each(result, function(i,item){
				  
				  
			   if(item.Token=="1"){
				  
				   /*window.plugins.nativepagetransitions.fade({
					"duration"       :  1000,
					"iosdelay"       :   50,
					"androiddelay"   :  500,
					"href" : "#home4"
					});*/
				  
				  localStorage.setItem("email", email3);
				  localStorage.setItem("nomeimg", "add_"+email3.replace("@","").replace(".","").replace(".",""))
				  
				  $.mobile.changePage("#home4", { transition: "fade" });
				  
				  
			   }
				  
			  if(item.Token=="2"){
				  
				  navigator.notification.alert(
				   item.mess,  // message
				   alertDismissed,         // callback
				   'Attenzione',            // title
				   'Done'                  // buttonName
				   );
				  
			  }
				  
			  if(item.Token=="3"){
				  
				  navigator.notification.alert(
				   item.mess,  // message
				   alertDismissed,         // callback
				   'Attenzione',            // title
				   'Done'                  // buttonName
				   );

			   }
				  
			  
			  if(item.Token=="4"){
				  
				  navigator.notification.alert(
				   item.mess,  // message
				   alertDismissed,         // callback
				   'Attenzione',            // title
				   'Done'                  // buttonName
				   );
				  
			  }
				  
				  
		   });
		   
		    $("#spinner2").hide();
		   
		   },
		   error: function(){
		     $("#spinner2").hide();
		   
		    navigator.notification.alert(
				'Possibile errore di rete, riprova tra qualche minuto',  // message
				alertDismissed,         // callback
				'Attenzione',            // title
				'Done'                  // buttonName
				);
		   
		   },
		   dataType:"jsonp"});
	
}

function mostracal(){
	
	var options = {
		
	date: new Date(),
		
	mode: 'date',
		
	doneButtonLabel: 'OK',
	doneButtonColor: '#000000',
	cancelButtonLabel: 'RESET',
	cancelButtonColor: '#000000'
		
	};
	
	
	datePicker.show(options, function(date){
		var datta = String(date).substring(4, 15);
					
		var datta1 = datta.replace("Sep","09")
		var datta2 = datta1.replace("Oct","10")
		var datta3 = datta2.replace("Nov","11")
		var datta4 = datta3.replace("Dec","12")
		var datta5 = datta4.replace("Jan","01")
		var datta6 = datta5.replace("Feb","01")
		var datta7 = datta6.replace("Mar","03")
		var datta8 = datta7.replace("Apr","04")
		var datta9 = datta8.replace("May","05")
		var datta10 = datta9.replace("Jun","06")
		var datta11 = datta10.replace("Jul","07")
		var datta12 = datta11.replace("Aug","08")
					
		//document.getElementById("datacal").value = datta12
		var dattag = String(datta).substring(3, 2);
		var dattam = String(datta12).substring(0, 2);
		var dattaa = String(datta).substring(6, 4);
					
		document.getElementById("datacal").value = datta
					
		$("#datacal").blur();
					
	});
}


function persistTasks() {
	
	localStorage.setItem("spinno", "0");
	
}

   //// CROP ////
   
   var crop_max_width = 400;
   var crop_max_height = 300;
   var jcrop_api;
   var canvas;
   var context;
   var image;
   
   var prefsize;
					   
   
  $("#file").change(function() {
	 loadImage(this);
	 });
   
   
   function loadImage(input) {
   if (input.files && input.files[0]) {
   var reader = new FileReader();
   canvas = null;
   reader.onload = function(e) {
   image = new Image();
   image.onload = validateImage;
   image.src = e.target.result;
   }
   
   reader.readAsDataURL(input.files[0]);
   }
   }
   
   
   function dataURLtoBlob(dataURL) {
   
   $("#spinner5").show();
   
   var pippo = dataURL.toString()
   
   document.getElementById("nome").innerHTML = pippo.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","");
   
   localStorage.setItem("imgutente3", pippo.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,",""));
   
   
   $("#spinner5").show();
					   
	
   setTimeout (function(){
	 $.ajax({
		  type: "POST",
		  url: "http://msop.it/picture.php",
		  data: {imgdata:localStorage.getItem("imgutente3"),foto:localStorage.getItem("nomeimg"),email:localStorage.getItem("email")},
		  cache: false,
		  crossDomain: true,
		  contentType: "application/x-www-form-urlencoded",
		  success: function (result) {
		  
		  $("#spinner5").hide();
			
		  localStorage.setItem("registrato","OK")
		  
		  navigator.notification.alert(
			   'File caricato correttamente.',  // message
			   alertDismissed,         // callback
			   'File Upload',           // title
			   'Done'                  // buttonName
			   );
		  
		  
		  },
		  error: function(){
		  
			$("#spinner5").hide();
		  
			  navigator.notification.alert(
			   'Errore Imprevisto, contatta il fornitore',  // message
			   alertDismissed,         // callback
			   'Errore',            // title
			   'OK'                  // buttonName
			   );
		  
		  }
		  
		  });
   
   }, 1000);
		

   var BASE64_MARKER = ';base64,';
   if (dataURL.indexOf(BASE64_MARKER) == -1) {
   var parts = dataURL.split(',');
   var contentType = parts[0].split(':')[1];
   var raw = decodeURIComponent(parts[1]);
   
   
   return new Blob([raw], {
   type: contentType
   });
   
   
   }
   var parts = dataURL.split(BASE64_MARKER);
   var contentType = parts[0].split(':')[1];
   var raw = window.atob(parts[1]);
   var rawLength = raw.length;
		
		
   var uInt8Array = new Uint8Array(rawLength);
   for (var i = 0; i < rawLength; ++i) {
   uInt8Array[i] = raw.charCodeAt(i);
   }
		
		
   return new Blob([uInt8Array], {
   type: contentType
   });
		
   }
	
   function validateImage2() {
   
   if (canvas != null) {
   image = new Image();
   image.onload = restartJcrop2;
   image.src = canvas.toDataURL('image/png');
   } else restartJcrop2();
	   
   }
	
   function validateImage() {
   
   if (canvas != null) {
   image = new Image();
   image.onload = restartJcrop;
   image.src = canvas.toDataURL('image/png');
   } else restartJcrop();
	   
   }
	
   function restartJcrop() {
   if (jcrop_api != null) {
   jcrop_api.destroy();
   }
   $("#views").empty();
   $("#views").append("<canvas id=\"canvas\">");
   canvas = $("#canvas")[0];
   context = canvas.getContext("2d");
   canvas.width = image.width;
   canvas.height = image.height;
   context.drawImage(image, 0, 0);
   $("#canvas").Jcrop({
					  
	  //aspectRatio: 1,
	  setSelect:   [50, 30, 400, 300],
	  onSelect: selectcanvas,
	  onRelease: clearcanvas,
	  boxWidth: crop_max_width,
	  boxHeight: crop_max_height,
	  allowResize: false
	  
	  /*allowResize: false
	   allowSelect: false
	   
	   onSelect: selectcanvas,
	   onRelease: clearcanvas,
	   boxWidth: crop_max_width,
	   boxHeight: crop_max_height*/
	  }, function() {
	  jcrop_api = this;
	  });
	   
  $("#cropbutton").hide();
					   
   clearcanvas();
	   
   }
	
	
   function restartJcrop2() {
   if (jcrop_api != null) {
   jcrop_api.destroy();
   }
   $("#views").empty();
   $("#views").append("<canvas id=\"canvas\">");
   canvas = $("#canvas")[0];
   context = canvas.getContext("2d");
   canvas.width = image.width;
   canvas.height = image.height;
   context.drawImage(image, 0, 0);
   $("#canvas").Jcrop({
					  
  onSelect: selectcanvas,
  onRelease: clearcanvas,
  boxWidth: crop_max_width,
  boxHeight: crop_max_height
  }, function() {
  jcrop_api = this;
  });
   clearcanvas();
   }
	
   function clearcanvas() {
   prefsize = {
   x: 0,
   y: 0,
   w: canvas.width,
   h: canvas.height,
   };
   }
	
   function selectcanvas(coords) {
	   prefsize = {
	   x: Math.round(coords.x),
	   y: Math.round(coords.y),
	   w: Math.round(coords.w),
	   h: Math.round(coords.h)
	   };
   }
	
   function applyCrop() {
	   canvas.width = prefsize.w;
	   canvas.height = prefsize.h;
	   context.drawImage(image, prefsize.x, prefsize.y, prefsize.w, prefsize.h, 0, 0, canvas.width, canvas.height);
	   
	   validateImage2();
	   
	   
	   $("#ciccio1").show();
	   
	   $(function() {
		
		$("#pippo").swipe( {
		
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		
		alert("You swiped " + direction );
		
		},
		
		threshold:0
		});
		});
   }
	

   $("#cropbutton").click(function(e) {
		applyCrop();
	});

	
   $("#form").submit(function(e) {
	 e.preventDefault();
	 formData = new FormData($(this)[0]);
	 var blob = dataURLtoBlob(canvas.toDataURL('image/png'));
	 
	});
	
	
   ///// FINE CROP ////
	
	
$(document).on("touchstart", "#ciccio1", function(e){
			   
	ciccio();
			   
});

					   
function ciccio() {
	
	var blob = dataURLtoBlob(canvas.toDataURL('image/png'));
	
}
					   


$(document).on("tap", "#invitaamici", function(e){
			   
   window.plugin.email.open({
   //cordova.plugins.email.open({
	  to:      "",
	  subject: "Invito Speciale",
	  body:    "Scopri Orgasmo Mentale, <br> http://orgasmomentale.com",
	  isHtml:  true
	});
			   
});
					   
					   
$(document).on("tap", "#comefunziona", function(e){
			  
	var ref = window.open('http://orgasmomentale.com/app/', '_system', 'location=no');
			  
});

$(document).on("tap", "#loginfacebook", function(e){
               
   openFB.login(
    function(response) {
    if(response.status === 'connected') {
        alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
         getInfo()
    } else {

      navigator.notification.alert(
         'Login Facebook fallita, riprova in seguito o fai login con Ridy',
         alertDismissed,
         'Login Facebook',
         'OK'
         );
    }
    }, {scope: 'email,public_profile,user_friends'});
               
});

function getInfo() {
    
    openFB.api({
       path: '/me',
       success: function(data) {
       console.log(JSON.stringify(data));
       
         //alert(data.name);
         //alert(data.email);
       
         //alert('http://graph.facebook.com/' + data.id + '/picture?type=small');
         //document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
       
       
         LoginFacebookVera(data.email,data.name)
       
       },
       
       error: errorHandler});
}


function LoginFacebookVera(email,nome){
  
    $("#spinner22").show();
    $.ajax({
           type:"GET",
           url:"http://msop.it/om/check_social.php?email="+ email +"",
           contentType: "application/json",
           timeout: 7000,
           jsonp: 'callback',
           crossDomain: true,
           success:function(result){
           
           $.each(result, function(i,item){
                  
                  if (item.Token == "1"){
                  
                  localStorage.setItem("email", email);
                  localStorage.setItem("nickname", item.nickname);
                  localStorage.setItem("etaprofilo", item.data_nascita);
                  localStorage.setItem("cittaprofilo", item.citta);
                  
                  //alert(item.info)
                  
                  localStorage.setItem("orgasmomentale", item.info);
                  
                  localStorage.setItem("nomeimg", "add_"+email2.replace("@","").replace(".","").replace(".",""))
                  
                  localStorage.setItem("registrato", "3");
                  localStorage.setItem("myid", item.id);
                  
                  localStorage.setItem("loggato", "1");
                  
                  $("#bannerpresentazione").hide()
                  $("#imginiziale").hide();
                  
                  $("#scheda1").hide();
                  $("#scheda2").hide();
                  $("#scheda3").hide();
                  $("#scheda4").hide();
                  
                  $("#spinner22").hide();
                  
                  $("#persone").hide();
                  $("#feste").show();
                  
                  $("#parte1").show();
                  $("#parte2").show();
                  $("#parte3").show();
                  
                  gohome8()
                  
                  }
                  else if(item.Token == "3"){
                  
                  $.mobile.changePage("#home7", { transition: "fade" });
				  
				  $("#bannerpresentazione").hide()
                  
                  }
                  else{
                  
                  $("#spinner22").hide();
                     navigator.notification.alert(
                       'Email e/o password non corretti',  // message
                       alertDismissed,         // callback
                       'Attenzione',            // title
                       'Done'                  // buttonName@
                       );
                  }
                  
            });
           
           $("#spinner22").hide();
           
           },
           error: function(){
           $("#spinner22").hide();
           
           navigator.notification.alert(
                'Possibile errore di rete, riprova tra qualche minuto',  // message
                alertDismissed,         // callback
                'Attenzione',            // title
                'Done'                  // buttonName
                );
           
           },
           dataType:"jsonp"});
    
}

					   
					   
$(document).on("tap", "#termini", function(e){
               
    var ref = window.open('http://msop.it/termini.html', '_system', 'location=no');
               
});



function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}
					   
					   
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	  results = regex.exec(location.search);
	  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
