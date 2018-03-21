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
		
		$("#spinner22").hide();
		
		var swiper = new Swiper('.swiper-container');
		var myScroll2;
		var myScroll3;
		var myScroll4;
		var myScroll7;
		var myScroll8;
		var refreshIntervalId;
		
		// Esempio di Login
		//localStorage.setItem("email","salvatore.bruni@gmail.com")
		//localStorage.setItem("registrato", "3");
		
		
		//Iphopne X
		
		osVersion = parseFloat(device.version);
		
		if(window.webkit && window.webkit.messageHandlers ) {
			webView = "WKWebView" ;
		}else{
			webView = "UIWebView" ;
		}
		

        app.setupPush();
		
		var applaunchCount = localStorage.getItem("launchCount");
		
		
		/*if (localStorage.getItem("spinno") === null || localStorage.getItem("spinno")=="null" || typeof(localStorage.getItem("spinno")) == 'undefined' || localStorage.getItem("spinno")!="1") {
			
			$("#sopra").hide()
			$("#bannerp").hide()
			$("#spinnero2").show()
			
			setTimeout (function(){
						
				$("#spinnero2").hide()
				$("#sopra").show()
				$("#bannerp").show()
						
			}, 2500);
			
		 }*/
		

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
			
			//$("#bannerp").show()
			
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
				
				
				window.plugins.nativepagetransitions.fade({
														  "duration"       :  1000,
														  "iosdelay"       :   50,
														  "androiddelay"   :  500,
														  "href" : "#home"
														  });

			}
			else{
				
				if(localStorage.getItem("registrato")=="3"){
					
					gohome8()
					
				}
				else{
					
					if(localStorage.getItem("registrato")=="2"){
						
						//controllo self video
						window.plugins.nativepagetransitions.fade({
																  "duration"       :  1000,
																  "iosdelay"       :   50,
																  "androiddelay"   :  500,
																  "href" : "#home5"
																  });
					}
					else{
						window.plugins.nativepagetransitions.fade({
																  "duration"       :  1000,
																  "iosdelay"       :   50,
																  "androiddelay"   :  500,
																  "href" : "#home4"
																  });
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
		
		
		$(document).on("touchstart", "#gofacebook", function(e){
					   
			var ref = window.open('https://www.facebook.com/groups/tanadelletigripoker/', '_system', 'location=no');
					   
        });
		


		
    $(document).on("touchstart", "#indietro", function(e){
					   
	   var swiper = new Swiper('.swiper-container');
                   
        $.mobile.changePage("#home", { transition: "fade", changeHash: false });
	   
	   
    });
		
		
		
		$(document).on("touchstart", "#indietro2", function(e){
					   
		   window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home"
			 });
		   
		   
		   });
		
		
		
		$(document).on("touchstart", "#indietro3", function(e){
					   
		   window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home8"
			 });
					   
		   setTimeout (function(){
					   
		   myScroll2.refresh();
		   
		   return
		   
		   }, 500);
					   
		});
		
		
		$(document).on("touchstart", "#indietro4", function(e){
					   
		   window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#home8"
			 });
					   
		   
		   setTimeout (function(){
					   
			myScroll2.refresh();
		   
		   return
		   
		   }, 500);
					   
		});
		
		
		$(document).on("touchstart", "#girl", function(e){
					   
                     $("#spinner2").hide();

					/* window.plugins.nativepagetransitions.fade({
					 "duration"       :  1000,
					 "iosdelay"       :   50,
					 "androiddelay"   :  500,
					 "href" : "#home2"
					 });*/
					   
                    
                       $.mobile.changePage("#home2", { transition: "fade" });
                       
                       
                       
                       
                         document.ontouchmove = function(e){ return true; }
                       
                       
                       /*var myScroll22 = new iScroll('wrapper22', {
                           click: true,
                           useTransform: false,
                           bounce: true,
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
                                   
                         myScroll22.refresh();
                           
                        }, 500);*/
                       
					   //$.mobile.changePage( "#home2", { transition: "slide", changeHash: false });
					   
					   
		});
		
		$(document).on("touchstart", "#boy", function(e){
					   
			//$("#spinner2").hide();
			   
			  window.plugins.nativepagetransitions.fade({
				 "duration"       :  1000,
				 "iosdelay"       :   50,
				 "androiddelay"   :  500,
				 "href" : "#home3"
				 //"href" : "#home6"
				 });
			   
			   
		  //$.mobile.changePage( "#home3", { transition: "slide", changeHash: false });
			   
		});
		
		/*$("#datacal").focus(function() {
							mostracal();
							});*/
		
		
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
					   
					   localStorage.setItem("email", email);
					   localStorage.setItem("nomeimg", "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".",""))
					   
					   
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

					   
					   localStorage.setItem("email", email2);
					   localStorage.setItem("nomeimg", "add_"+localStorage.getItem("email").replace("@","").replace(".","").replace(".",""))
					   
					   
					  window.plugins.nativepagetransitions.fade({
																 "duration"       :  1000,
																 "iosdelay"       :   50,
																 "androiddelay"   :  500,
																 "href" : "#home4"
																 });
					   
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
									   window.plugins.nativepagetransitions.fade({
																			   "duration"       :  1000,
																			   "iosdelay"       :   50,
																			   "androiddelay"   :  500,
																			   "href" : "#home5"
																			   });
									 
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
					   
	      // window.location.href = "indexFoto.html";
					   
		   navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
				
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				targetWidth: 400,
				targetHeight: 400
		   });
					   
	   });
		
		$(document).on("touchstart", "#loadfotoprofilo", function(e){
					   
			loadprofilo()

	   });
		
		$(document).on("touchstart", "#loadfotoprofilo2", function(e){
					   
			loadprofilo()
					   
		});
		
		$(document).on("touchstart", "#loadfotoprofilo6", function(e){
					   
			//loadprofilo()
					   
		});
		
		function loadprofilo(){
			$("#spinner9").hide()
			
			window.plugins.nativepagetransitions.fade({
													  "duration"       :  1000,
													  "iosdelay"       :   50,
													  "androiddelay"   :  500,
													  "href" : "#home9"
													  });
			
			
			$("#profiloman").html("<table width='100%' height='480' align='center' background='img/profilouomo.png' style='background-size: 100% auto; background-repeat: no-repeat;' class='uomo' valign='bottom'><tr><td width='100%' align='center' valign='bottom'><table width='40%' height='150' bgcolor='#fff' valign='center' align='right' class='table33D'><tr><td align='center' valign='center'><font class='AntonioFont' color='#e6007e' size='4'><b>PRESENT BY<b></font></td></tr><tr><td align='center' valign='center'><img id='loadfotoprofilodonna' src='img/profilo.png' class='utenteimg2B'></td></tr><tr><td align='center' valign='center'><font class='AntonioFont' color='#e6007e' size='4'>Maria Federica</font><br><font class='AntonioFont' color='#e6007e' size='4'>Roma 20</font><br></td></tr></table></td></tr></table>")
			
			
			$("#scheda").html("<font size='4'><b>Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</b> </font> <br>")
			
			
			myScroll3 = new iScroll('wrapper3', {
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
						
						myScroll3.refresh();
						
						}, 500);
		}
		
		$(document).on("touchstart", "#loadfotoprofilodonna", function(e){
					   
					   $("#scheda2").html("")
					   
					   $("#spinner10").hide()
					   
					   // carica dati donna //
					   
					   localStorage.setItem("nickname2", "sara");
					   localStorage.setItem("fotodonna", "img/profilo.png");
					   
					   
					   window.plugins.nativepagetransitions.fade({
																 "duration"       :  1000,
																 "iosdelay"       :   50,
																 "androiddelay"   :  500,
																 "href" : "#home10"
																 });
					   
					   
					   $("#profilowoman").html("<table width='100%' height='480' align='center' background='img/profilo.png' style='background-size: 100% auto; background-repeat: no-repeat;' class='donna' valign='bottom'><tr><td width='100%' align='center' valign='bottom'><table width='40%' height='150' bgcolor='#fff' valign='center' align='right' class='table33D'><tr><td align='center' valign='center'><font class='AntonioFont' color='#00ffff' size='4'><b>PRESENT BY<b></font></td></tr><tr><td align='center' valign='center'><img id='loadfotoprofilo' src='img/profilouomo.png' class='utenteimg2B'></td></tr><tr><td align='center' valign='center'><font class='AntonioFont' color='#00ffff' size='4'>Michelangelo</fonT><br><font class='AntonioFont' color='#00ffff' size='4'>Roma 20</font><br></td></tr></table></td></tr></table>")
					   
					   
					   $("#scheda2").append("<font size='4'><b>Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</font></b><br>")
					   
					   
					   myScroll4 = new iScroll('wrapper4', {
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
								   
								   myScroll4.refresh();
								   
								   }, 500);
					   
					   
					   
					   });
		
		
		function uploadPhoto(imageURI) {
			
			// Convert image
			
			getFileContentAsBase64(imageURI,function(base64Image){
								   
			 localStorage.setItem("imgutente2", base64Image);
			 localStorage.setItem("imgutente3", base64Image.replace("data:image/jpeg;base64,",""));
						   
					       $("#spinner8").show();
								   
						   setTimeout (function(){

							   $.ajax({
									type: "POST",
									url: "http://msop.it/picture.php",
									  data: {imgdata:localStorage.getItem("imgutente3"),foto:localStorage.getItem("nomeimg"),email:localStorage.getItem("email")},
									cache: false,
									crossDomain: true,
									contentType: "application/x-www-form-urlencoded",
									success: function (result) {
									
								     $("#spinner8").hide();
									
									 navigator.notification.alert(
									 'File caricato correttamente.',  // message
									 alertDismissed,         // callback
									 'File Upload',           // title
									 'Done'                  // buttonName
									 );
									
									
									},
									error: function(){
									
									$("#spinner8").hide();
									
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
							    //alert(content)

							   
							   };
							   // The most important point, use the readAsDatURL Method from the file plugin
							   reader.readAsDataURL(file);
				   });
			}
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
					   
			window.plugins.nativepagetransitions.fade({
			 "duration"       :  1000,
			 "iosdelay"       :   50,
			 "androiddelay"   :  500,
			 "href" : "#homecreaparty"
			
			});
					   
			   $("#listaparty").show();
			   $("#anteprimaparty").hide();
			   $("#anteprimaparty2").hide();
			   $("#footerparty").hide();
					   
			   myScroll8 = new iScroll('wrapper8', {
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
					   
					   
			   $("#spinner14").hide();
			   
			   
			   setTimeout (function(){
						   
					myScroll8.refresh();
						   
					return
						   
				}, 500);
					   
		});
		
		
		
		$(document).on("touchstart", "#wonderfulldinner", function(e){
					   		   
		   $("#listaparty").hide();
		   $("#anteprimaparty").show();
		   $("#anteprimaparty2").show();
					   
		   $("#footerparty").show();
		   $("#tastocrea").html("<a id='wonderfulldinner2'><font class='AntonioFont' color='#00ffff' size='6'>AVANTI</font></a>")
					  
			
			$("#anteprimaparty").html("<table width='320' height='290' align='center' class='#' background='sfondi/wonderful.png' border='0'><tr><td width='100%' align='right' valign='top'><div id='parent'><div id='backdrop'><table width='320' height='100' align='center' border='0'><tr><td width='100%' align='center' valign='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font></td></tr></table></div><div id='curtain8' style=''>&nbsp;</div></div></td></tr></table>")
					   
					   
			$("#anteprimaparty2").html("<br><table align='center'><tr bgcolor='#000'><td><b><font color='#00ffff' class='AntonioFont' size='4'>ORGANIZATION:</font><font color='#fff' class='AntonioFont' size='4'> GIRLS - BOYS</font></td></b></tr><tr bgcolor='#000'><td bgcolor='#000'><b><font color='#00ffff' class='AntonioFont' size='4'>CATEGORY:</font><font color='#fff' class='AntonioFont' size='4'> FUN</font></b></td></tr><tr bgcolor='#000'><td bgcolor='#000'><b><font color='#00ffff' class='AntonioFont' size='4'>LOCATION:</font><font color='#fff' class='AntonioFont' size='4'> HOME - LOCAL</font></b></td></tr></table><br><table width='100%' ><tr bgcolor='#00ffff'><td width='100%' align='center'><b><font color='#000' class='AntonioFont' size='4'>DESCRIZIONE</font></b></td></tr><tr><td width='100%' align='center'><b><font color='#000' size='3'>Questo Private Party nasce solo ed esclusivamente per recitare , divertirsi e stupire.<br>Ogni partecipante alla cena impersonificherà un personaggio famoso. Sia storico che contemporaneo , purchè ne assuma letteralmente sia le movenze che ogni peculiarità.<br>Non sarà una semplice festa in maschera , ma bensì una vera e propria rappresentazione teatrale.<br>Tutti i commensali si sentiranno come immersi in uno splendido LIVING THEATRE indimenticabile.<br>Per la completa riuscita dell'evento ogni partecipante dovrà studiare accuratamente il proprio personaggio ed immedesimarsi completamente per tutta la durata del Party.<br>LA VITA E' TROPPO SERIA PER ESSERE PRESA SERIAMENTE.<br><br>The Wonderful Dinner is the hot new dress up party with a twist. Dress code: famous characters from any era, and will embody the said character during the duration of the night. Consider it as a theatrical event.  Make sure to do some reasearch on your character to be fully prepared for this night of madness.<br>LIFE IS TOO SERIOUS TO BE TAKEN SERIOUSLY.</font></b></td></tr><tr><td width='100%' align='center'><img src='img/macchia.png' width='50px'></td></tr></table>")
   

			$(document).on("touchstart", "#wonderfulldinner2", function(e){
						   
				localStorage.setItem("cartellaimg","wonderfulldinner")
				localStorage.setItem("tipofesta","THE WONDERFULL DINNER PARTY")
							
				$("#fotoflyer").html("<img id='wonver1' src='flyer/verticali/wonderfulldinner/wonver1.png' width='100px' border='0' bordercolor='red'>&nbsp;<img id='wonver2' src='flyer/verticali/wonderfulldinner/wonver2.png' width='100px' border='0'>&nbsp;<img id='wonver3' src='flyer/verticali/wonderfulldinner/wonver3.png' width='100px' border='0'>");
				
				$("#anteprimaparty").hide();
				$("#datiparty").show();
				$("#anteprimaparty2").hide();
				
				$(document).on("touchstart", "#wonver1", function(e){
				
				$("#wonver1").attr("border","2");
			    $("#wonver2").attr("border","0");
				$("#wonver3").attr("border","0");
				localStorage.setItem("festaimg","wonver1.png")
				
				});
				
						   
				$(document).on("touchstart", "#wonver2", function(e){
				
					$("#wonver2").attr("border","2");
					$("#wonver1").attr("border","0");
					$("#wonver3").attr("border","0");
					localStorage.setItem("festaimg","wonver2.png")
				
				});
				
				$(document).on("touchstart", "#wonver3", function(e){
				
					$("#wonver3").attr("border","2");
					$("#wonver2").attr("border","0");
					$("#wonver3").attr("border","0");
					localStorage.setItem("festaimg","wonver3.png")
							
				});
						   
				$("#tastocrea").html("<a id='creafesta'><font class='AntonioFont' color='#00ffff' size='6'>AVANTI</font></a>")
						   
						   
				setTimeout (function(){
							   
				  myScroll8.refresh();
				   
				   return
				   
				}, 500);
						   
			})
					   
		   setTimeout (function(){
					   
		   myScroll8.refresh();
		   
		   return
		   
		   }, 500);
					   
					   
		});
		
		

		$(document).on("touchstart", "#toyboy", function(e){
					   
		   localStorage.setItem("creofesta","toyboy")
					   
		   $("#listaparty").show();
		   $("#datiparty").hide();
					   
					   
		   setTimeout (function(){
					   
			myScroll8.refresh();
		   
		   return
		   
		   }, 500);
					   
		});
		
		
		
	$(document).on("touchstart", "#creafesta", function(e){
	 
		if(self.document.formia8.citta.value == "") {
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
		
		
		$("#spinner14").show();
				   
		$.ajax({
			   type:"GET",
			   url:"http://msop.it/om/insert_festa.php?email="+ localStorage.getItem("email")+"&anno="+self.document.formia8.anno.value+"&mese="+self.document.formia8.mese.value+"&giorno="+self.document.formia8.giorno.value+"&ora="+self.document.formia8.ora.value+"&ospiti="+self.document.formia8.ospiti.value+"&etafesta="+self.document.formia8.etafesta.value+"&girl="+self.document.formia8.girls.value+"&boy="+self.document.formia8.boys.value+"&location="+self.document.formia8.location.value+"&info="+self.document.formia8.info.value+"&prezzo="+self.document.formia8.prezzo.value+"&flyer="+localStorage.getItem("festaimg")+"&tipofesta="+localStorage.getItem("cartellaimg")+"&citta="+self.document.formia8.citta.value+"",
			   contentType: "application/json",
			   //data: {Lat:3,Longi:4},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
					$("#spinner14").hide();
					  
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
						  
						  
						  $("#feste").html("")
						  //$("#feste").append("<br><table width='320' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>"+item.data+"</font><br><a id='goparty'><img src='http://msop.it/public/"+item.foto+"' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>"+item.nickname+"</font><br><font class='AntonioFont' color='#fff' size='4'>"+item.prezzo+"€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")

						  
						  listafeste()
						  
						  
						  $("#fotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  $("#loadfotoprofilo").attr("src","http://msop.it/public/"+item.foto)
						  

						}

					});
				   
				   
				   $("#spinner8").hide()
				   
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
					   
					   return
					   
					   }, 500);
				   
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
			
			//alert("1")
			
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
							  
							 // alert("2")
							  
							$("#spinner8").hide();

							$("#feste").append("<br><table width='320' height='220' align='center' class='#' background='flyer/orizzontali/"+item.tipofesta+"/"+item.flyer+"' border='0'><tr><td width='100%' align='center'><div id='parent'><div id='backdrop'><table width='260' height='240' align='center' border='0'><tr><td width='100%' align='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>"+item.data+"</font><br><a id='goparty"+item.id+"'><img src='http://msop.it/public/"+item.foto+"' height='70' class='utenteimg2A'></a><br><font class='AntonioFont' color='#fff' size='4'>"+item.nickname+"</font><br><font class='AntonioFont' color='#fff' size='4'>"+item.prezzo+"€</font></td></tr></table></div><div id='curtain' style=''>&nbsp;</div></div></td></tr></table>")
							  
							  
							  $(document).on("touchstart", "#goparty"+item.id+"", function(e){
									
									var numerofesta = this.id
									numerofesta = numerofesta.replace("goparty","")
									
									gohomeparty(numerofesta)
											 
							  });

					   });
				   
					   $("#feste").append("<br><table width='320' height='220'><tr><td></td></tr></table>")
				   
				   
					   $("#spinner8").hide()
				   
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
								
					   //alert("3")
					   
					   return
					   
					   }, 500);
				   
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
		
		
		
		function gohomeparty(id){
			
			//alert("id " + id)
			
			window.plugins.nativepagetransitions.fade({
			  "duration"       :  1000,
			  "iosdelay"       :   50,
			  "androiddelay"   :  500,
			  "href" : "#homeparty"
			  });
			
			
			$("#spinner13").hide();
			
			
			$("#party").html("<table width='280' height='380' align='center' class='#' background='flyer/verticali/wonderfulldinner/wonver3.png' border='0'><tr><td width='100%' align='right' valign='top'><br><br><table class='cerchietto' border='0'><tr><td><font class='AntonioFont' color='#fff' size='5'>10€</font></td></tr></table><br><br><br><br><br><br><br><br><br><div id='parent'><div id='backdrop3'><table width='280' height='130' align='center' border='0'><tr><td width='100%' align='center' valign='center'><font class='AntonioFont' color='#fff' size='6'><b>THE WONDERFUL DINNER PARTY</b></font><br><font class='AntonioFont' color='#fff' size='4'>ROMA 21 NOVEMBRE</font></td></tr></table></div><div id='curtain3' style=''>&nbsp;</div></div></td></tr></table>")
			
			
			myScroll7 = new iScroll('wrapper7', {
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
						
			myScroll7.refresh();
			
			return
			
			}, 500);
			 

		}
		
		
		function gohome11(){
			
			
			$("#spinner11").show();
			
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
						  
						  $("#spinner11").hide();
						  
						  window.plugins.nativepagetransitions.fade({
							"duration"       :  1000,
							"iosdelay"       :   50,
							"androiddelay"   :  500,
							"href" : "#home11"
							});
						  
						  
						  $("#persone").append("<br> <table width='320' align='center' border='0' valign='bottom'><tr><td colspan='2' width='100%' ><img src='http://msop.it/public/"+item.foto+"' width='100%'></td></tr><tr bgcolor='#000'><td width='100%' align='left'><a id='gopeople"+item.id+"'><font class='AntonioFont' color='#00ffff' size='5'> "+item.nickname+", "+item.citta+", "+item.eta+"</font></a></td><td width='50'><img src='img/mess_uomo1.png' width='40'></td></tr></table>")
						  
						  $("#persone").append("<br><table width='100%' height='22px'><tr><td></td></tr></table>")
						  
						  
						  $(document).on("touchstart", "#gopeople"+item.id+"", function(e){
										 
							 var numeropers = this.id
							   numeropers = numeropers.replace("gopeople","")
								loadfotoprofilo()
							 });
						  
						  
						  $("#loadfotoprofilo2").attr("src","http://msop.it/public/"+item.foto)
			 
						  
					});
				   
				   
				   myScroll5 = new iScroll('wrapper5', {
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
							   
					 myScroll5.refresh();
				   
				   }, 500);
				   
				   
				   $("#spinner11").hide()
				   
				   $("#persone").append("<table width='320' align='center' valign='bottom'><tr><td colspan='2' width='100%'><img src='img/profilo.png' width='100%'></td></tr><tr><td width='100%' align='left' ><font class='AntonioFont' color='#ee2c90' size='5'> Federica, ROMA, 20</font></td><td width='50'><img src='img/mess_donna1.png' width='40'></td></tr></table>")
				   
				   $("#persone").append("<br><table width='100%' height='220'><tr><td></td></tr></table>")
				   
				   
				   },
				   error: function(){
				   
				   $("#spinner11").hide()
				   
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
					   
			gohome8()
					   
		});
		
		
		$(document).on("touchstart", "#personaggi", function(e){
					   
			gohome11()
					   
		});
		
		
		
		$(document).on("touchstart", "#private", function(e){
					   
			gohome8()
		});
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
			// Esempio di Login
			localStorage.setItem("email","")
			localStorage.setItem("registrato", "0");
					
					   
					   window.plugins.nativepagetransitions.fade({
																 "duration"       :  700, // in milliseconds (ms), default 400
																 "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
																 "androiddelay"   :  500,
																 "href" : "#home"
																 });
			
		});
		
		$(document).on("touchstart", "#entra", function(e){
					   
			var email2 = self.document.formia22.emaillogin.value;
			var pin2 = self.document.formia22.pswlogin.value;
					   
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
					   
			EmailAddr = self.document.formia22.emaillogin.value;
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
							  localStorage.setItem("registrato", "3");

							  //localStorage.setItem("fotoprof", item.foto.replace(".jpg","").replace(".png",""));

							  /*if(localStorage.getItem("fotoprof")=="default"){
							  localStorage.setItem("nomefoto", "default")
							  localStorage.setItem("nomeimg", "add_"+email.replace("@","").replace(".","").replace(".",""))
							  }
							  else{
							  localStorage.setItem("nomefoto", "add_"+email.replace("@","").replace(".","").replace(".",""))
							  }*/
							  
							  $("#spinner22").hide();
							  
							  gohome8()
							  
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
		
		
		
		$(document).on("touchstart", "#chatdonna", function(e){
					   
			localStorage.setItem("chatpass","")
			
			window.plugins.nativepagetransitions.fade({
				"duration"       :  1000,
				"iosdelay"       :   50,
				"androiddelay"   :  500,
				"href" : "#homechat"
			 });
					   
					   
					   $("#spinner12").show();
					   
					   chatdonna()
					   
					   $("#loadfotoprofilo6").attr("src", localStorage.getItem("fotodonna"));
					   
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
						  
						  if(item.nick==localStorage.getItem("nickname")){
						  
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
				  
				   window.plugins.nativepagetransitions.fade({
															"duration"       :  1000,
															"iosdelay"       :   50,
															"androiddelay"   :  500,
															"href" : "#home4"
															});
				  
				  
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
