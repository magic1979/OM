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
        //document.addEventListener("resume", onResume, false);
		//document.addEventListener("pause", onPause, false);
		//document.addEventListener("unload", persistTasks, false);
        
         openFB.init({appId: '184833315394016'});
		
		StatusBar.styleDefault();
		StatusBar.backgroundColorByHexString("#fff");
		
        //StatusBar.hide();
		
		IDPage = getParameterByName('id');
		

		
		$("#spinner22").hide();
		
		var swiper = new Swiper('.swiper-container');
		var myScroll2;
		var myScroll3;
		var myScroll4;
		var myScroll7;
		var myScroll8;
		var refreshIntervalId;
		
		var crop_max_width = 400;
		var crop_max_height = 400;
		var jcrop_api;
		var canvas;
		var context;
		var image;
		
		// Esempio di Login
		//localStorage.setItem("email","")
		//localStorage.setItem("registrato", "2");
		
		
		if(screen.height<500){
            
            $("#loader").attr("height","60px");
            
            $("#presentazione").hide();
            
            $("#schermopiccolo").show();
            
        }
        else{
            $("#presentazione").show();
            
            $("#schermopiccolo").hide();
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
		

        //app.setupPush();
		
		var applaunchCount = localStorage.getItem("launchCount");
		
		/*document.addEventListener("touchmove",function(e) {
								  e.preventDefault();
								  },
								  false
								  );*/
		
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
			var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			
			$("#spinner1").hide()
			
			
			if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
				
				/*window.plugins.nativepagetransitions.fade({
					  "duration"       :  1000,
					  "iosdelay"       :   50,
					  "androiddelay"   :  500,
					  "href" : "#home"
					  });*/
				
				//$.mobile.changePage("#home", { transition: "fade" });

			}
			else{
				
				if(localStorage.getItem("registrato")=="3"){
					
					$("#feste").show();
					
					$("#parte1").show();
					$("#parte2").show();
					
					$("#persone").hide();
					$("#loadpersonaggi").hide();
					
					gohome8()
					
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
						
						$.mobile.changePage("#home7", { transition: "fade" });
						
					}
					else{
						
						$.mobile.changePage("#home4", { transition: "fade" });
						
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
			
			
			navigator.notification.alert(
			 'Errore di rete, riprova sotto copertura',  // message
			 alertDismissed,         // callback
			 'Errore di Rete',            // title
			 'OK'                  // buttonName
			 );
			
		}
		
		
		
		// % GIRLS In Input crea festa
		
		
		   document.getElementById("boys").value = 50;
		
			$('#girls').on('change', function(){
			
			   var $this = $(this),
			   $value = $this.val();
						   
			   var ragazzetti = 50
						   
			    if($value==0){
					ragazzetti = 100
				}
				else if($value==100){
					ragazzetti=0
				}
				else{
					ragazzetti = 50
				}
			   
			   document.getElementById("boys").value = ragazzetti;
			   
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
					   
		   $("#listaparty").show();
		   
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
	  
		   }, 0);
					   
		});
		
		
		$(document).on("tap", "#indietro42", function(e){
					
			$.mobile.changePage("#home8", { transition: "fade" });
					   

			//window.location.href = "#home8";
			   
			 /* setTimeout (function(){
			 
				myScroll2.refresh();
						  
			   }, 300);*/
					   
		});
		
		
		$(document).on("touchstart", "#girl", function(e){
			
			$("#bannerpresentazione").hide();
					   
			window.location.href = "index.html?id=girl";
		   
					   
		});
		
		
		$(document).on("touchstart", "#boy", function(e){
			
			 $("#bannerpresentazione").hide();
					   
			 window.location.href = "index.html?id=boy";
			   
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
					   var password = self.document.formia4.password.value;
					   var citta = self.document.formia4.citta.value;
					   
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
									 
									 }
									 else{
									 
									  navigator.notification.alert(
																  item.mess,  // message
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
							  
							  },
							  
							  dataType:"jsonp"});
					   

					   //$.mobile.changePage( "#home3", { transition: "slide", changeHash: false });
					   
					   
	   });
		
		
		// CARICA FOTO
		
		$(document).on("touchstart", "#fotoprofilo", function(e){
					   
		   navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
				
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				targetWidth: 400,
				targetHeight: 400
		   });
					   
	   });
		
		
		$(document).on("touchstart", "#loadfotoprofilo", function(e){
					   
			 $("#spinner8").show()
					   
			loadprofilo(localStorage.getItem("myid"))
					   
			//e.preventDefault();

	   });
		
		
		$(document).on("touchstart", "#fotoprofilo33", function(e){
					   
		   /*window.plugins.nativepagetransitions.fade({
			"duration"       :  1000,
			"iosdelay"       :   50,
			"androiddelay"   :  500,
			"href" : "#indexFoto.html"
		   });*/
					   
					   
			window.location.href = "indexFoto.html";
					   
		});
		
		
		$(document).on("touchstart", "#loadfotoprofilo2", function(e){
					   
			$("#spinner8").show()
					   
			loadprofilo(localStorage.getItem("myid"))
					   
		});
		
		
		$(document).on("touchstart", "#loadfotoprofilo6", function(e){
					   
			//loadprofilo()
					   
		});
        
        $(document).on("touchstart", "#controllamail", function(e){
                       
           $("#feste").hide();
           
           $("#loadpersonaggi").hide();
           
           setTimeout (function(){
               $("#chatnuove").show();
               
                 nuovechat()
            }, 500);

                       
        });
		
        function nuovechat(){
            $("#mostrachat").show();
            
            $("#mostrachat").html("<br><br><img id='#' src='http://msop.it/public/add_salvatorebrunigmailcom.png' width='105px' border='0' bordercolor='red' class='utenteimg2A'>&nbsp;&nbsp;<img id='#' src='http://msop.it/public/add_salvatorebrunigmailcom.png' width='105px' border='0' class='utenteimg2A'>&nbsp;&nbsp;<img id='wonver3' src='http://msop.it/public/add_salvatorebrunigmailcom.png' width='105px' border='0' class='utenteimg2A'><br>");
            
            
            setTimeout (function(){
                        
                myScroll2.scrollTo(0, 0);
                
				document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
				
				document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				
				
				e.stopImmediatePropagation();
				
				e.preventDefault();
				
				return false;
				
				if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
						
                
            }, 0);
            
        }
        
		function loadprofilo(id){
			
            //$.mobile.changePage("#home9", { transition: "fade" });
			
			$("#persone").hide();
			
			$("#feste").hide();
			$("#parte1").hide();
			$("#parte2").hide();
			$("#parte3").hide();
			
			$("#loadpersonaggi").show();
			
			localStorage.setItem("idprofilo", id);
        
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
                        
                    $("#profiloman").html("<img src='http://msop.it/public/"+item.foto+"' width='100%' class='pippo22'>")
                    
                    $("#scheda").html("<font size='4'><b>"+item.info+".</b> </font> <br>")
                        
                    $("#name").html(item.nickname)
                    $("#dati").html(item.citta + ", " + item.eta)
                        
                    $("#fotoby").html("<img id='load_"+item.id2+"' src='http://msop.it/public/"+item.foto2+"' class='utenteimg2B'>")
                    $("#name2").html(item.nickname2)
                    $("#dati2").html(item.citta2 + ", " + item.eta2)
						
				    localStorage.setItem("nickname2", item.nickname);
					localStorage.setItem("fotochat", item.foto);
                        
                    $("#recensioni").html("<img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed.png' height='30'><img src='img/feed.png' height='30'>")
                        
                        
                    $(document).on("touchstart", "#load_"+item.id2+"", function(e){
           
                       var loademail = this.id
                       loademail = loademail.replace("load_","")
                       
                       loadprofilodonna(loademail)
                       //alert(loademail)
                       
                    });
						                    
                     
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
             
             },
             
             dataType:"jsonp"});

			
		}
		
        
        function loadprofilodonna(id){
            
           
            localStorage.setItem("idprofilo", id);
            
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
                          
                          $("#profiloman").html("<table width='100%' height='100%' align='center' valign='top' class='uomo'><tr><td width='100%' align='center' valign='top'><img src='http://msop.it/public/"+item.foto+"' class='uomo'></td></tr></table>")
                          
                          $("#scheda").html("<font size='4'><b>"+item.info+".</b> </font> <br>")
                          
                          $("#name").html(item.nickname)
                          $("#dati").html(item.citta + ", " + item.eta)
                          
                          $("#fotoby").html("<img id='load_"+item.id2+"' src='http://msop.it/public/"+item.foto2+"' class='utenteimg2B'>")
                          $("#name2").html(item.nickname2)
                          $("#dati").html(item.citta2 + ", " + item.eta2)
                          
                          localStorage.setItem("nickname2", item.nickname);
                          localStorage.setItem("fotochat", item.foto);
                          
                          $("#recensioni").html("<img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed_uomo.png' height='30'><img src='img/feed.png' height='30'><img src='img/feed.png' height='30'>")
                          
                          
                          $(document).on("touchstart", "#load_"+item.id2+"", function(e){
                                         
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
                   
                   },
                   
                   dataType:"jsonp"});
            
            
        }
                   
    
		
		
		function uploadPhoto(imageURI) {
			
			// Convert image
			
			 getFileContentAsBase64(imageURI,function(base64Image){
								   
			 localStorage.setItem("imgutente2", base64Image);
			 localStorage.setItem("imgutente3", base64Image.replace("data:image/jpeg;base64,",""));
						   
			 //$("#spinner8").show();
									
			 $("#cropbutton").show();
									
		   
		   });
			
		}
		
		
		/*function getFileContentAsBase64(path,callback){
			window.resolveLocalFileSystemURL(path, gotFile, fail);
			
			function fail(e) {
				alert('Cannot found requested file');
			}
			
			function gotFile(fileEntry) {
				   fileEntry.file(function(file) {
				   var reader = new FileReader();
				   reader.onloadend = function(e) {
				   var content = this.result;
				   
					var largeImage = document.getElementById('fotoprofilo');
					largeImage.style.display = 'block';
					largeImage.src = content;
				   
					callback(content);

				   };
				   reader.readAsDataURL(file);
				});
			}
		}*/
		
		
		function getFileContentAsBase64(path,callback){
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
			
			/*setTimeout (function(){
			  myScroll.refresh();
			}, 500);*/
			
			
		}
		
		
		function onFail(message) {
			
			navigator.notification.alert(
			 'Nessuna foto caricata',  // message
			 alertDismissed,         // callback
			 'Foto',            // title
			 'OK'                  // buttonName
			 );
			
		}
		
		
		$(document).on("touchstart", "#makeparty", function(e){
		   
		   $("#anteprimafinale2").hide();
		   $("#anteprimafinale").hide();
		   $("#anteprimaparty").hide();
		   $("#anteprimaparty2").hide();
					   
					   
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
					   
			   //document.ontouchmove = function(e){ return true; }
			   document.ontouchmove = function(e){ e.preventDefault(); }
					   
			   $("#listaparty").show();
			   $("#anteprimaparty").hide();
			   $("#anteprimaparty2").hide();
			   $("#footerparty").hide();
					   
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
					   
					   
			   $("#spinner14").hide();
			   
			   
			   setTimeout (function(){
						   
					myScroll8.refresh();
						   
				}, 500);
					   
		});
		
		
		
		$(document).on("tap", "#wonderfulldinner", function(e){
					   		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
			
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
					   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='wonderfulldinner2'><font class='AntonioFont' color='#00ffff' size='6'>AVANTI</font></a>")
					  
			
			$("#anteprimaparty").html("<table width='100%' align='center' border='0'><tr><td width='100%' align='center' valign='center'><img src='sfondi/wonderful.png' width='100%'></td></tr></table>")
            
            //<span style='background-color:#000'><font color='#fff'>testo evidenziato</font>
                       
			$("#anteprimaparty2").html("<br><table align='center'><tr><td align='left'><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>ORGANIZATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> GIRLS - BOYS</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>CATEGORY:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> FUN</font><br><font style='background-color:#000' color='#00ffff' class='AntonioFontBold' size='5'>LOCATION:</font><font style='background-color:#000' color='#fff' class='AntonioFontBold' size='5'> HOME - LOCAL</font></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFontBold' size='5' align='center'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='3' class='GravityFontBold'>Questo Private Party nasce solo ed esclusivamente per recitare , divertirsi e stupire.<br>Ogni partecipante alla cena impersonificherà un personaggio famoso. Sia storico che contemporaneo , purchè ne assuma letteralmente sia le movenze che ogni peculiarità.<br>Non sarà una semplice festa in maschera , ma bensì una vera e propria rappresentazione teatrale.<br>Tutti i commensali si sentiranno come immersi in uno splendido LIVING THEATRE indimenticabile.<br>Per la completa riuscita dell'evento ogni partecipante dovrà studiare accuratamente il proprio personaggio ed immedesimarsi completamente per tutta la durata del Party.<br>LA VITA E' TROPPO SERIA PER ESSERE PRESA SERIAMENTE.<br><center><img src='img/macchia.png' width='60px'></center>The Wonderful Dinner is the hot new dress up party with a twist. Dress code: famous characters from any era, and will embody the said character during the duration of the night. Consider it as a theatrical event.  Make sure to do some reasearch on your character to be fully prepared for this night of madness.<br>LIFE IS TOO SERIOUS TO BE TAKEN SERIOUSLY.</font></b></td></tr></table>")
   

			$(document).on("touchstart", "#wonderfulldinner2", function(e){
						   
				document.ontouchmove = function(e){ e.preventDefault(); }
						   
				localStorage.setItem("cartellaimg","wonderfulldinner")
				localStorage.setItem("tipofesta","THE WONDERFULL DINNER")
							
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
						   
				$("#tastocrea").html("<a id='creafesta'><font class='AntonioFontBold' color='#00ffff' size='6'>AVANTI</font></a>")
						   
						   
				setTimeout (function(){
							   
				  myScroll8.refresh();
				   
				}, 500);
						   
			})
					   
					   
					   
		   setTimeout (function(){
					   
		   myScroll8.refresh();
		   
		   }, 500);
					   
					   
		});
		
		
		$(document).on("touchstart", "#toyboy", function(e){
					   
		   localStorage.setItem("creofesta","toyboy")
					   
		   $("#listaparty").show();
		   $("#datiparty").hide();
		   $("#anteprimafinale").hide();
		   $("#anteprimafinale2").hide();
					   
					   
		   setTimeout (function(){
					   
			myScroll8.refresh();
		   
		   return
		   
		   }, 500);
					   
		});
		
		
		
	$(document).on("touchstart", "#creafesta", function(e){
	 
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
				   
				   
		 //$("#anteprimafinale").html("<br><table width='95%' height='220' align='center' class='#' background='flyer/orizzontali/"+localStorage.getItem("cartellaimg")+"/"+localStorage.getItem("festaimg")+"' border='0'><tr><td align='right' valign='center' height='110'><table class='cerchietto' border='0'><tr><td><font class='AntonioFont' color='#fff' size='5'>10€</font></td></tr></table></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFont' color='#fff' size='6'>&nbsp;&nbsp;<b>THE WONDERFULL DINNER</b></font></a><br><font class='AntonioFont' color='#fff' size='4'>ROMA, 21 Novembre</font></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
				   
		   $("#anteprimafinale").html("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+localStorage.getItem("cartellaimg")+"/"+localStorage.getItem("festaimg")+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+localStorage.getItem("tipofesta")+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
				   
		   $("#antdata").html(self.document.formia8.giorno.value + "/" + self.document.formia8.mese.value + " alle ore: " + self.document.formia8.ora.value)
		   $("#antinfo").html(self.document.formia8.info.value)
		   $("#antprezzo").html("Prezzo :" + self.document.formia8.prezzo.value)
		   $("#antcommissione").html("Commissione : --")
		   $("#antaltro").html("Altro : -- ")
                   
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
				   
		$("#tastocrea").html("<a id='creafesta'><font class='AntonioFont' color='#00ffff' size='6'>AVANTI</font></a>")
				   
				   
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
					   
					   
					   $("#tastocrea").html("<a id='creafestaDB'><font class='AntonioFontBold' color='#00ffff' size='6'>AVANTI</font></a>")

					   
					   $("#spinner14").show();
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/om/insert_festa.php?email="+ localStorage.getItem("email")+"&anno="+self.document.formia8.anno.value+"&mese="+self.document.formia8.mese.value+"&giorno="+self.document.formia8.giorno.value+"&ora="+self.document.formia8.ora.value+"&ospiti="+self.document.formia8.ospiti.value+"&etafesta="+self.document.formia8.etafesta.value+"&girl="+self.document.formia8.girls.value+"&boy="+self.document.formia8.boys.value+"&location="+self.document.formia8.location.value+"&info="+self.document.formia8.info.value+"&prezzo="+self.document.formia8.prezzo.value+"&flyer="+localStorage.getItem("festaimg")+"&tipofesta="+localStorage.getItem("cartellaimg")+"&nomefesta="+localStorage.getItem("tipofesta")+"&citta="+self.document.formia8.cittafesta.value+"",
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
							  
							  },
							  
							  dataType:"jsonp"});
					   
		});
		
		
		$(document).on("touchstart", "#indietro14", function(e){
					   
			$("#listaparty").show();
					   
			$("#datiparty").hide();
			$("#anteprimaparty").hide();
			$("#anteprimaparty2").hide();
					   
		});
		
		
		
		$(document).on("touchstart", "#accetto", function(e){
					   
					   if (document.getElementById('privacy').checked) {
					   
						   $("#persone").hide();
					       $("#loadpersonaggi").hide();
						   $("#feste").show();
					   
					     $("#parte1").show();
					     $("#parte2").show();
					     $("#parte3").show();
					   
						  gohome8()
					   
					     /* $.ajax({
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
									 
									 gohome8() */
									 
								       /*$("#spinner8").hide();
									 
									   window.plugins.nativepagetransitions.fade({
																			   "duration"       :  1000,
																			   "iosdelay"       :   50,
																			   "androiddelay"   :  500,
																			   "href" : "#home8"
																			   });
									 
									 
									 $("#feste").html("<table width='310' height='220' align='center' class='#' background='img/pigiama1.png'><tr><td width='90%' align='center'><div id='parent'><div id='backdrop'><table width='220' height='200' align='center' height='200'><tr><td width='100%' align='center'><font class='DemoFont' color='#fff' size='6'>PIGIAMA PARTY</font></td></tr><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='4'>ROMA 21 LUGLIO</font></td></tr><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='5'>10€</font></td></tr><tr><td width='100%' align='center'><img src='img/fotodefault.png' height='90' class='utenteimg2'><br><font class='AntonioFont' color='#00ffff' size='4'>MARCO</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
									 
									 
									 
									 myScroll2 = new iScroll('wrapper2', {
															click: true,
															useTransform: false,
															//bounce: false,
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
												 
										 myScroll2.refresh();
												 
									 }, 200);
									 
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
							  
							  },
							  
							  dataType:"jsonp"});*/
					   
					   }
					   else {
					    navigator.notification.alert(
							'Devi Accettare i termini per proseguire',  // message
							alertDismissed,         // callback
							'Privacy',            // title
							'OK'                  // buttonName
							);
					    return;
					   
					   }
					   

				//$.mobile.changePage( "#home3", { transition: "slide", changeHash: false });
					   
			});
		
		
		
		function gohome8(){
			
            setTimeout (function(){
                        
                StatusBar.backgroundColorByHexString("#fff");
						
				$("#parte3").show();
				
            }, 3000);
            

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
						  
						  /*window.plugins.nativepagetransitions.fade({
							"duration"       :  1000,
							"iosdelay"       :   50,
							"androiddelay"   :  500,
							"href" : "#home7"
							});*/
						  
						   $.mobile.changePage("#home7", { transition: "fade" });
						  
						  }
						  else{
						  
						  $("#spinner8").hide();
						  
						  /*window.plugins.nativepagetransitions.fade({
							"duration"       :  1000,
							"iosdelay"       :   50,
							"androiddelay"   :  500,
							"href" : "#home8"
							});*/

						   $.mobile.changePage("#home8", { transition: "fade" });
						  
						  $("#feste").show();
						  
						  $("#parte1").show();
						  $("#parte2").show();
						  
						  $("#persone").hide();
						  $("#loadpersonaggi").hide();
						  
						   $("#feste").html("")
						   //$("#feste").append("<br><table width='320' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>"+item.data+"</font><br><a id='goparty'><img src='http://msop.it/public/"+item.foto+"' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>"+item.nickname+"</font><br><font class='AntonioFont' color='#fff' size='4'>"+item.prezzo+"€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")


							  setTimeout (function(){
										  
								 listafeste()
										  
							  }, 300);
						  
						  
						  $("#fotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  $("#loadfotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  $("#loadfotoprofilo2").attr("src","http://msop.it/public/"+item.foto)

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
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_festa.php?email="+ localStorage.getItem("email")+"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
					   $.each(result, function(i,item){
                              
                        if(item.Token=="1"){
                          
                            $("#spinner8").hide();
							  
							  /*var contanick = item.nickname.length;
							  var nuovonick
							  
							  if(contanick <= 12){
							  
							    nuovonick = item.nickname;
							  
							  }
							  else{
							    nuovonick = item.nickname.slice(0,10)
							    nuovonick = nuovonick + ".."
							  
							  }*/
							  

                            $("#feste").append("<br><table width='100%' height='260' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><a id='goparty"+item.id+"'><font class='AntonioFontBold' color='#00ffff' size='6'><b>"+item.titolo+"</b></font></a><br><font class='AntonioFontBold' color='#fff' size='4'>"+item.citta+" "+item.data+"</font><br><font class='AntonioFontBold' color='#fff' size='5'><b>€"+item.prezzo+"</b></font><br><a id='goparty"+item.id+"'><img src='http://msop.it/public/"+item.foto+"' height='30' class='utenteimg2A'></a><br><font class='AntonioFontBold' color='#fff' size='5'>"+item.nickname+"</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
                          
                          
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
				   
					   $("#feste").append("<br><table width='320' height='220'><tr><td></td></tr></table>")
				   
				   
					   $("#spinner8").hide()
				       //$("#parte3").show();
				   
					  /* myScroll2 = new iScroll('wrapper2', {
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
				   
					 }); */
				   
				   
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
				   
				   //alert("1")
				   
				   setTimeout (function(){
							   
					   myScroll2.refresh();
							   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					}, 0);
				   
				  /* setTimeout (function(){
							   
					   myScroll2.refresh();
					   
					   
					   return;
					   
					}, 0); */
				
				   
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

		}
		
		
		
		function gohomeparty(cost){
			
			//alert("id " + cost)
			
			/*window.plugins.nativepagetransitions.fade({
			  "duration"       :  1000,
			  "iosdelay"       :   50,
			  "androiddelay"   :  500,
			  "href" : "#homeparty"
			  });*/
			
			/*window.plugins.nativepagetransitions.fade({
													  "duration"       :  1000,
													  "iosdelay"       :   50,
													  "androiddelay"   :  500,
													  "href" : "#homeparty"
													  });*/
			
			
			$.mobile.changePage("#homeparty", { transition: "fade" });
			
			$("#spinner13").show();
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/check_festabyid.php?id="+ cost +"",
				   contentType: "application/json",
				   //data: {Lat:3,Longi:4},
				   timeout: 7000,
				   jsonp: 'callback',
				   crossDomain: true,
				   success:function(result){
				   
				   $.each(result, function(i,item){
						  
						  if(item.Token=="1"){
						  
							  $("#spinner13").hide();
						  
							  //$("#feste").append("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><a id='goparty"+item.id+"'><font class='AntonioFontBold' color='#fff' size='6'><b>THE WONDERFUL DINNER</b></font></a><br><font class='AntonioFont' color='#fff' size='4'>"+item.data+","+item.citta+"</font><br><font class='AntonioFontBold' color='#fff' size='5'><b>"+item.prezzo+"€</b></font><br><a id='goparty"+item.id+"'><img src='http://msop.it/public/"+item.foto+"' height='30' class='utenteimg2A'></a><br><font class='AntonioFontBold' color='#00ffff' size='5'>"+item.nickname+"</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
						  
							  $("#party").html("<br><table width='100%' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td align='right' valign='center' height='110'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop3'><table width='270' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><a id='#'><font class='AntonioFontBold' color='#00ffff' size='6'>&nbsp;&nbsp;<b>"+item.titolo+"</b></font></a></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")

						     $("#dataparty").html(item.citta+", "+item.data)
						     $("#infoparty").html(item.info)
						     $("#nome_organizzatore").html(item.nickname)
						     $("#dati_organizzatore").html(item.citta_organizzatore+", "+item.data_organizzatore)
							 $("#foto_organizzatore").attr("src","http://msop.it/public/"+item.foto)
						  
						  	 localStorage.setItem("idbuyfesta", cost);
						     localStorage.setItem("prezzofesta", item.prezzo);
						     localStorage.setItem("nomefesta", item.titolo);

						  
						  }
						  else{
						  	$("#party").append("Nessuna festa in programma")
						  }
						  
					});
				   

				   	$("#spinner13").hide();
				   
				   myScroll7 = new iScroll('wrapper7', {
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
							   
					   myScroll7.refresh();
					   
					   //return
					   
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
				   
				   },
				   
				   
				   dataType:"jsonp"});

		}
		
		
		//// COMPRA FESTA ////
		
		
		$(document).on("touchstart", "#buyparty", function(e){
		
			//alert(localStorage.getItem("idbuyfesta"))
					   
			compraCarta()
		
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
			
			
			//alert(amount)
			//"+localStorage.getItem("deviceid")+"
			
			
			$(".spinner13").show();
			 
			 $.ajax({
			 type:"GET",
			 url:"http://msop.it/om/Check_TransactionV2.asp",
			 contentType: "application/json",
			 data: {email:localStorage.getItem("email"),id_prodotto:localStorage.getItem("idbuyfesta"),qta:1,tot:amount,transazionemia:transazionemia,NomeProdotto:localStorage.getItem("nomefesta"),EmailEsercente:"info@pokeranswer.it",idTransazione:"CC",Ordine:localStorage.getItem("nomefesta"),Richiesta:localStorage.getItem("idbuyfesta")},
			 timeout: 7000,
			 jsonp: 'callback',
			 crossDomain: true,
			 success:function(result){
			 
			 $.each(result, function(i,item){
					
			  //alert("OK")
			 
			 if (item.Token == "1"){
					
			   //alert("Ok, Festa comprata")
			 
			   var ref = window.open('http://msop.it/om/wbspaypal.asp?Transprodotto='+ transazionemia +'', '_blank', 'location=no');
			 
			   //ref.addEventListener('loadstop', function(event) { if (event.url.match("mobile/close")) { ref.close(); } });
			 
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
		

		function gohome11(){
			
			// myScroll2.scrollTo(0, 0);
            
			$("#persone").html("")
			
			//$.mobile.changePage("#home11", { transition: "fade" });
			
			/* window.plugins.nativepagetransitions.fade({
			  "duration"       :  400,
			   "iosdelay"       :   50,
			   "androiddelay"   :  500,
			  "href" : "#home11"
			  });*/
			
			
			$("#spinner8").show();
			
			
			$.ajax({
				   type:"GET",
				   url:"http://msop.it/om/lista_persone.php?email="+ localStorage.getItem("email")+"",
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

						  $("#persone").append("<table width='100%' align='center' class='#' background='http://msop.it/public/"+item.foto+"' border='0'><tr><td align='right' valign='center' height='180'></td></tr><tr><td width='100%' align='center'><div id='parent'><div id='backdrop4'><table width='100%' height='60' align='center' border='0'><tr><td width='85%' align='left' valign='center'><a id='#'><a id='gopeople"+item.id+"'><font class='AntonioFontBold' color='#00ffff' size='6'><b>"+nuovonick+"</font><font class='AntonioFont' color='#00ffff' size='4'> "+nuovacitta+" "+item.eta+"</b></a></font></a></td><td width='15%' align='center' valign='middle'><a id='go_"+linkfoto+"go_"+item.nickname+"'><img src='img/mess_uomo1.png' width='40'></a></td></tr></table></div><div id='curtain4' style=''>&nbsp;</div></div></td></tr></table>")
						  
						  $("#persone").append("<table width='100%' height='20px'><tr><td></td></tr></table>")
						  
						  
						  $(document).on("tap", "#gopeople"+item.id+"", function(e){
                                         
                             myScroll2.scrollTo(0, 0);
										 
							 var numeropers = this.id
							   numeropers = numeropers.replace("gopeople","")
								
								loadprofilo(numeropers)
										 
							});
						  
						  
						  $(document).on("tap", "#go_"+linkfoto+"go_"+item.nickname+"", function(e){
										 
							var str=this.id;
										 
							//alert(str)
									 
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
				   
				   $("#persone").append("<br><table width='100%' height='50px'><tr><td></td></tr></table>")
				   
				   //$("#persone").append("<table width='320' align='center' valign='bottom'><tr><td colspan='2' width='100%'><img src='img/profilo.png' width='100%'></td></tr><tr><td width='100%' align='left' ><font class='AntonioFont' color='#ee2c90' size='5'> Federica, ROMA, 20</font></td><td width='50'><img src='img/mess_donna1.png' width='40'></td></tr></table>")
				   
				   /*myScroll5 = new iScroll('wrapper5', {
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
							   
					  myScroll2.refresh();
							   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
   
					}, 0);
				   
				   
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
		
		
		$(document).on("touchstart", "#personaggi", function(e){
					   
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
					   
					   
		});
		
		
		$(document).on("touchstart", "#private", function(e){
					   
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
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
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
							  
							  window.location.href = "index.html";
							  
							}
							else if(item.Token == "3"){
							  
							  $.mobile.changePage("#home7", { transition: "fade" });
							  
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
			
			//return;
			
			$("#spinner12").show();
			
			chatdonna()
			
			$("#loadfotoprofilo6").attr("src", "http://msop.it/public/"+localStorage.getItem("fotochat")+"");
			$("#nomechat").html(localStorage.getItem("nickname2"));
			
			myScroll6 = new iScroll('wrapper6', {
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
						
			myScroll6.refresh();
			
			}, 500);
		}
		
		
		
		$(document).on("touchstart", "#chatdonna", function(e){
					   
			localStorage.setItem("chatpass","")
					   
			$.mobile.changePage("#homechat", { transition: "fade" });
			
			//return;
					   
			   $("#spinner12").show();
			   
			   chatdonna()
			   
			   $("#loadfotoprofilo6").attr("src", "http://msop.it/public/"+localStorage.getItem("fotochat")+"");
			   $("#nomechat").html(localStorage.getItem("nickname2"));
			   
			   myScroll6 = new iScroll('wrapper6', {
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
						   
				 myScroll6.refresh();
				   
				}, 500);
		
		})
		
		
		function chatdonna() {
			var contanick
			var nuovonick;
			
			localStorage.setItem("tastiera","0")
			localStorage.setItem("pagina","chat")
			
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
						//alert(item.Token)
						  
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
						  
						  $("#offerta12").append("<div class='bubbledRight'>"+ indirizzo +"</div>")
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")
						  
						  
						  setTimeout (function(){
									  
								myScroll6.refresh();
									  
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
						  
						   $("#offerta12").append("<div class='bubbledLeft'>"+ indirizzo +"</div>")
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")
						  
						  
						   setTimeout (function(){
									  
							  myScroll6.refresh();
									  
						   }, 500);
						  
						  
						  }
			  
					   }
						  
					});
				   
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
			}, 5000);
			
			
			/*refreshIntervalId = setInterval(function() {
									 
				chatting();
									 
			}, 3000);*/
			
		}
		
		
		function chatdonnaby(nick) {
			var contanick
			var nuovonick;
			localStorage.setItem("nickname2",nick)
			
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
						  //alert(item.Token)
						  
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
						  
						  $("#offerta12").append("<div class='bubbledRight'>"+ indirizzo +"</div>")
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")
						  
						  
						  setTimeout (function(){
									  
									  myScroll6.refresh();
									  
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
						  
						  $("#offerta12").append("<div class='bubbledLeft'>"+ indirizzo +"</div>")
						  
						  //$("#offerta12").append("<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d<br><br><br>sdksjdkasjd j sadjkas d")
						  
						  
						  setTimeout (function(){
									  
									  myScroll6.refresh();
									  
									  }, 500);
						  
						  
						  }
						  
						  }
						  
						  });
				   
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
			   }, 5000);
			
			
			/*refreshIntervalId = setInterval(function() {
			 
			 chatting();
			 
			 }, 3000);*/
			
		}
		
		
		$(document).on("touchstart", "#chatting", function(e){
			var indirizzo = document.getElementById("chattext").value;
					   
			indirizzo = indirizzo.replace(/[&\/\\#,~%.*<>{}]/g,'');
					   
			indirizzo = indirizzo.replace(/'/g,"777A");
													 
			indirizzo = indirizzo.replace("+","777B");
													 
			indirizzo = indirizzo.replace("$","777C");
													 
			indirizzo = indirizzo.replace("!","777D");
													 
			indirizzo = indirizzo.replace("(","777E");
													 
			indirizzo = indirizzo.replace(")","777F");
													 
			indirizzo = indirizzo.replace(":","777F");
													 
													 
			$("#spinner12").show();
										  
						
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
										  
				$("#spinner12").show();
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

		
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "XXXXXXXX"
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true,
			    "clearBadge": true
            },
            "windows": {}
        });
        console.log('after init');

            push.on('registration', function(data) {
				
            //console.log('registration event: ' + data.registrationId);
			//testa(data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
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
					   
   $("#persone").hide();
   $("#feste").show();
					   
   $("#parte1").show();
   $("#parte2").show();
   $("#parte3").hide();
					   
	gohome8();
	
	//window.location.href = "index.html";

	/*$("#sopra").hide()
	$("#bannerp").hide()
	$("#spinnero2").show()
	
	setTimeout (function(){
				
		$("#spinnero2").hide()
		$("#sopra").show()
		$("#bannerp").show()
				
	}, 2000);*/
	
}


function onPause() {
	
	/*$("#sopra").hide()
	$("#bannerp").hide()
	$("#spinnero2").show()
	
	setTimeout (function(){
				
		$("#spinnero2").hide()
		$("#sopra").show()
		$("#bannerp").show()
				
	}, 2000);*/
	
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
                       
                       $(document).on("tap", "#loginfacebook", function(e){
                                      
                          //alert("1")
                          
                          openFB.login(
                           function(response) {
                           if(response.status === 'connected') {
                           //alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
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
                       
                       
                       function errorHandler(error) {
                         alert(error.message);
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
                                     
                                     localStorage.setItem("nomeimg", "add_"+email.replace("@","").replace(".","").replace(".",""))
                                     
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
                                     
                                      window.location.href = "index.html";
                                     
                                     }
                                     else if(item.Token == "3"){
                                     
                                     $.mobile.changePage("#home7", { transition: "fade" });
                                     
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
					   


$(document).on("tap", "#logoanswer", function(e){
			   
   window.plugin.email.open({
   //cordova.plugins.email.open({
	  to:      "associazione.gameanswer@gmail.com",
	  subject: "Contattaci",
	  body:    "Richiedi informazioni",
	  isHtml:  true
	});
			   
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
