document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
	
	var myScroll;
	
	myScroll = new IScroll('#wrapper', {
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
        myScroll.refresh();
    }, 500);
	
	
	
	// INIZIO CARICAMENTO
		
		//StatusBar.hide();
		
        //var watchID = navigator.geolocation.getCurrentPosition(gpsonSuccess, gpsonError, {timeout: 30000, enableHighAccuracy: true, maximumAge: 90000 });
		
		//$("#lati").html(localStorage.getItem("lat") +", "+ localStorage.getItem("lng"));
		
		var crop_max_width = 420;
		var crop_max_height = 300;
		var jcrop_api;
		var canvas;
		var context;
		var image;
		
		
		/*var myScroll;
		   
		   myScroll = new iScroll('wrapper', {
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
					   
				myScroll.refresh();
					   
			}, 500);*/
		
		
		/*navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
									allowEdit: true,
									destinationType: Camera.DestinationType.FILE_URI,
									sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
									targetWidth: 400,
									targetHeight: 400
									});*/
		
	
		/*navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 30,
									//allowEdit: true,
									destinationType: Camera.DestinationType.DATA_URL,
									encodingType: Camera.EncodingType.PNG,
									targetWidth: 400,
									targetHeight: 400
									});*/
		

		//$("#spinner").hide();
	
		
	// START CODE //
	
	
	$("#spinner").show();
	
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90,
									
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		targetWidth: 960,
		targetHeight: 720
	
	});
	
	
  /*  if (localStorage.getItem("selfie")=="1"){
        
        $("#termini").show();
        $("#accetto").show();
        
        $(document).on("tap", "#termini", function(e){
                       
            var ref = window.open('http://msop.it/termini.html', '_system', 'location=no');
                       
        });
    }
    else{
        
        $("#termini").hide();
        $("#accetto").hide();
    } */
    
   
    $(document).on("touchstart", "#accetto", function(e){
                   
       $("#termini").hide();
       $("#accetto").hide();
       
       localStorage.setItem("selfie","0")
                   
    });
    
    
    $(document).on("touchmove", "#test", function(e){
                   
       $("#sparisci").hide();
                   
       $("#cropbutton").show();
       
    });

    
    $(document).on("tap", "#test2", function(e){
                   
       $("#sparisci").hide();
       
       $("#cropbutton").show();
       
    });
	
	
	if(localStorage.getItem("modofoto")=="prendi"){
		
		$("#spinner").show();
		
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90,
		
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		targetWidth: 960,
		targetHeight: 720
	 
	 });
		
		
	}
	
	
	if(localStorage.getItem("modofoto")=="scatta"){
		
		$("#spinner").show();
		
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 30,
		
		destinationType: Camera.DestinationType.DATA_URL,
		encodingType: Camera.EncodingType.PNG,
		targetWidth: 420
		//targetHeight: 300
	 
	 });
	}

	
	
	$(document).on("touchstart", "#fotomia", function(e){
				   
		/*$("#cropbutton").show();
		$("#ciccio1").hide();*/
        $("#ciccio1").hide();
        $("#cropbutton").hide();
                   
        $("#sparisci").show();
        
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90,
		   //allowEdit: true,
		   destinationType: Camera.DestinationType.FILE_URI,
		   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		   targetWidth: 840,
		   targetHeight: 620
		});
   
	});
		
	
	
		$(document).on("touchstart", "#scatta", function(e){
					   
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 30,
				   //allowEdit: true,
				   destinationType: Camera.DestinationType.DATA_URL,
				   encodingType: Camera.EncodingType.PNG,
				   targetWidth: 420,
				   targetHeight: 400
			});
   
		});
		

       /* $(document).on("touchstart", "#play", function(e){
                       
            playAudio2('successSound');
                       
        });
		
		$(document).on("touchstart", "#playvideo", function(e){
					   
			//playAudio2('successSound');
					   
        });*/
		
	
		
        function playAudio2(id) {
            
            var audioElement = document.getElementById(id);
            var url =  ""+ localStorage.getItem("path") +"" //"sound/pool.mp3" //localStorage.getItem("path").toString() //audioElement.getAttribute('src');
            
            var my_media2 = new Media(url,
                                      // success callback
                                      function () { console.log("playAudio():Audio Success"); },
                                      // error callback
                                      function (err) { console.log("playAudio():Audio Error: " + err); }
                                      );
            
            my_media2.play();
            
            
            
            setTimeout(function() {
                my_media2.stop();
            }, 10000);
            
        }
		
		
		
		// FOTO //
		
		function uploadPhoto(imageURI) {
			
			$("#spinner").hide();
			
			// Convert image
			getFileContentAsBase64(imageURI,function(base64Image){
								   
			   console.log(base64Image.replace("data:image/jpeg;base64,",""));
			   // Then you'll be able to handle the myimage.png file as base64
			   
			   localStorage.setItem("imgutente2", base64Image);
			   localStorage.setItem("imgutente3", base64Image.replace("data:image/jpeg;base64,",""));
			   
			   //$("#cropbutton").show();
			   //$("#rotatebutton").show();
                                   

			   setTimeout (function(){
					myScroll.refresh();
				}, 500);
 
		   });

		}
		
		
		function onPhotoDataSuccess(imageData) {
			
			$("#spinner").hide();
	  
			localStorage.setItem("biliard", "data:image/png;base64," + imageData);
	  
			canvas = null;
			
			image = new Image();
			image.onload = validateImage;
			image.src = localStorage.getItem("biliard");
			
			$("#cropbutton").show();
			$("#rotatebutton").show();
			
			setTimeout (function(){
				myScroll.refresh();
			}, 500);

			
         }
		
		
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
			
			
			setTimeout (function(){
				myScroll.refresh();
			}, 500);
	  
	  
		}
		
		
		function onFail(message) {
			
			
			navigator.notification.alert(
			 'Nessuna foto caricata',  // message
			 alertDismissed,         // callback
			 'Foto',            // title
			 'OK'                  // buttonName
			 );
										 
			
			setTimeout (function(){
					   
				$("#spinner").hide();
					   
			}, 1500);
		}
		
		
		
		
		// MEDIA //
		
		$(document).on("touchstart", "#mediacattura", function(e){
			
			
			// capture callback
			var captureSuccess = function(mediaFiles) {
				var i, path, len;
				for (i = 0, len = mediaFiles.length; i < len; i += 1) {
					path = mediaFiles[i].fullPath;
					// do something interesting with the file
					
					
					localStorage.setItem("path", mediaFiles[i].fullPath);
					
					//alert(localStorage.getItem("path"))
					
					uploadFile(mediaFiles[i]);
				}
			};
			
			
			
			// capture error callback
			var captureError = function(error) {
				navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
			};
			
			
			
			function uploadFile(mediaFile) {
				
				$("#spinner").show();
				
				var ft = new FileTransfer(),
				path = mediaFile.fullPath,
				name = mediaFile.name;
				
				ft.upload(path,
						  "http://microverba.com/filesu.php",
						  function(result) {
							  
					        $("#spinner").hide();
							  
						    //console.log('Upload success: ' + result.responseCode);
						    //console.log(result.bytesSent + ' bytes sent');
						  },
						  function(error) {
						    //alert('Error uploading file ' + path + ': ' + error.code);
							$("#spinner").hide();
						  },
						  { fileName: name });
						  
						  
				setTimeout (function(){
					   
				   $("#spinner").hide();
					   
			    }, 10000);
			}
			
			
			// start audio capture
			navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
			
			
		});
		
		$(document).on("touchstart", "#mediacatturavideo", function(e){
					   
					   
					   // capture callback
					  var captureSuccess = function(mediaFiles) {
					   var i, path, len;
					   for (i = 0, len = mediaFiles.length; i < len; i += 1) {
					    path = mediaFiles[i].fullPath;
					    // do something interesting with the file
					   
					   
					    localStorage.setItem("path", mediaFiles[i].fullPath);
					   
					    //alert(localStorage.getItem("path"))
					   
					    uploadFile(mediaFiles[i]);
					   }
					  };
					   
					   
					   // capture error callback
					   var captureError = function(error) {
					     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
					   };
					   
					   
					   
					   function uploadFile(mediaFile) {
						   
					    $("#spinner").show();
						   
					    var ft = new FileTransfer(),
					    path = mediaFile.fullPath,
					    name = mediaFile.name;
					   
					   ft.upload(path,
								 "http://microverba.com/filesu.php",
								 function(result) {
									 
									 $("#spinner").hide();
									 
								    //console.log('Upload success: ' + result.responseCode);
								    //console.log(result.bytesSent + ' bytes sent');
								 },
								 function(error) {
								   //alert('Error uploading file ' + path + ': ' + error.code);
								   $("#spinner").hide();
								 },
								 { fileName: name });
								 
								 
							setTimeout (function(){
					   
								$("#spinner").hide();
							   
							}, 10000);
							
					   }
					   
					   
					   // start audio capture
					   
					   navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
					   
					   
		 });
		
		
		$(document).on("touchstart", "#ciccio1", function(e){
                       
            ciccio();
			
          /* if (localStorage.getItem("selfie")=="1"){
                       
               navigator.notification.alert(
                    'devi accettare i termini e condizioni per proseguire',  // message
                    alertDismissed,         // callback
                    'Termini',            // title
                    'OK'                  // buttonName
                );

            }
            else{
                ciccio();
            }*/
					   
		});
		
		
		function ciccio() {
			
			//$("#spinner").show();

			var blob = dataURLtoBlob(canvas.toDataURL('image/png'));

		}
		
		
		
		function alertDismissed() {
			$("#spinner").hide();
		}
		
		
		//// CROP ////
		
		var crop_max_width = 420;
		var crop_max_height = 300;
		var jcrop_api;
		var canvas;
		var context;
		var image;
		
		var prefsize;
		
		//document.getElementById("nome").innerHTML = "Base64";
		
		
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
            
            localStorage.setItem("nomeimg", pippo)
            
			
			$("#spinner").show();
			
			var pippo = dataURL.toString()
			
			document.getElementById("nome").innerHTML = pippo.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","");
			
			localStorage.setItem("imgutente3", pippo.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,",""));
			
			setTimeout (function(){
				$.ajax({
				   type: "POST",
				   url: "http://msop.it/picture.php",
				   data: {imgdata:localStorage.getItem("imgutente3"),foto:localStorage.getItem("nomeimg"),email:localStorage.getItem("email")},
				   cache: false,
				   crossDomain: true,
				   contentType: "application/x-www-form-urlencoded",
				   success: function (result) {
				   
				   $("#spinner").hide();
					   
				   localStorage.setItem("registrato","3")
                       
                   //localStorage.setItem("selfie", "1");
				   
				   /*navigator.notification.alert(
					'File caricato correttamente.',  // message
					alertDismissed,         // callback
					'File Upload',           // title
					'Done'                  // buttonName
					);*/
				   
                     localStorage.setItem("fotook","1")
					   
					 window.location.href = "index.html";
					   
				   
				   },
				   error: function(){
				   
				   $("#spinner").hide();
				   
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
        } else restartJcrop();
    }
		
		function validateImage() {
			
			if (canvas != null) {
				image = new Image();
                
                //alert(image.width)
                
				image.onload = restartJcrop;
				image.src = canvas.toDataURL('image/png');
			} else restartJcrop();
		}
		
    
		function restartJcrop() {
            
            //alert("primo: "+ image.width)
            
            var larghezza;
            var altezza;
            
            if(image.width<439){
                 navigator.notification.alert(
                 'Questa foto non è adatta come foto profilo ma potrai caricarla nel tuo album personale! Ti consigliamo di provare con una in orizzonatale!',  // message
                 alertDismissed,         // callback
                 '',            // title
                 'OK'                  // buttonName
                 );
            }
            else if((image.width>440)&&(image.width<599)){
                larghezza = image.width
                altezza = image.height
                
                if (jcrop_api != null) {
                    jcrop_api.destroy();
                }
                $("#views").empty();
                $("#views").append("<canvas id=\"canvas\">");
                canvas = $("#canvas")[0];
                context = canvas.getContext("2d");
                canvas.width = larghezza; //image.width;
                canvas.height = altezza;//image.height;
                context.drawImage(image, 0, 0);
                
                $("#canvas").Jcrop({
                                   
                   //aspectRatio: 1,
                   setSelect:   [0, 0, 440, 315],
                   onSelect: selectcanvas,
                   onRelease: clearcanvas,
                   boxWidth: crop_max_width,
                   boxHeight: crop_max_height,
                   allowResize: false,
                   allowSelect: false
                   
                   }, function() {
                   jcrop_api = this;
                });
            }
            
            else if((image.width>600)&&(image.width<680)){
                
                larghezza = image.width
                altezza = image.height
                
                if (jcrop_api != null) {
                    jcrop_api.destroy();
                }
                $("#views").empty();
                $("#views").append("<canvas id=\"canvas\">");
                canvas = $("#canvas")[0];
                context = canvas.getContext("2d");
                canvas.width = larghezza; //image.width;
                canvas.height = altezza;//image.height;
                context.drawImage(image, 0, 0);
                
                $("#canvas").Jcrop({
                                   
                   //aspectRatio: 1,
                   setSelect:   [0, 0, 600, 430],
                   onSelect: selectcanvas,
                   onRelease: clearcanvas,
                   boxWidth: crop_max_width,
                   boxHeight: crop_max_height,
                   allowResize: false,
                   allowSelect: false
                   
                   }, function() {
                   jcrop_api = this;
                });
            }
            else{
                
                larghezza = image.width;
                altezza = image.height;
                
                if (jcrop_api != null) {
                    jcrop_api.destroy();
                }
                $("#views").empty();
                $("#views").append("<canvas id=\"canvas\">");
                canvas = $("#canvas")[0];
                context = canvas.getContext("2d");
                canvas.width = larghezza; //image.width;
                canvas.height = altezza;//image.height;
                context.drawImage(image, 0, 0);
                
                $("#canvas").Jcrop({
                                   
                   //aspectRatio: 1,
                   setSelect:   [0, 0, 700, 500],
                   onSelect: selectcanvas,
                   onRelease: clearcanvas,
                   boxWidth: crop_max_width,
                   boxHeight: crop_max_height,
                   allowResize: false,
                   allowSelect: false
                   
                   }, function() {
                   jcrop_api = this;
                });
            }

            
			clearcanvas();
		}
    
    function restartJcrop2() {
        
        //alert("diventa: "+ image.width)
        
        var larghezza;
        var altezza;
        
        if(image.width<420){
            
            larghezza = 420;
            altezza = 300;
        }
        else{
            
            larghezza = image.width;
            altezza = image.height;
        }
        
        
        if (jcrop_api != null) {
            jcrop_api.destroy();
        }
        $("#views").empty();
        $("#views").append("<canvas id=\"canvas\">");
        canvas = $("#canvas")[0];
        context = canvas.getContext("2d");
        canvas.width = larghezza;//image.width; //image.width;
        canvas.height = altezza;//image.height;
        context.drawImage(image, 0, 0);

        $("#canvas").Jcrop({

		   setSelect:   [0, 0, 700, 500],
		   onSelect: selectcanvas,
		   onRelease: clearcanvas,
		   boxWidth: crop_max_width,
		   boxHeight: crop_max_height,
		   allowResize: false,
		   allowSelect: false
						   
						   
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
			
			$("#cropbutton").hide();
			
			$("#ciccio1").show();
			
			/*$(function() {
              
					$("#pippo").swipe( {
                                
                            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

                              alert("You swiped " + direction );
                                
                            },
                                
                              threshold:0
                           });
              });*/
		}
		
		function applyScale(scale) {
			if (scale == 1) return;
			canvas.width = canvas.width * scale;
			canvas.height = canvas.height * scale;
			context.drawImage(image, 0, 0, canvas.width, canvas.height);
			validateImage();
		}
		
		function applyRotate() {
			canvas.width = image.height;
			canvas.height = image.width;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.translate(image.height / 2, image.width / 2);
			context.rotate(Math.PI / 2);
			context.drawImage(image, -image.width / 2, -image.height / 2);
			validateImage();
		}
		
		function applyHflip() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.translate(image.width, 0);
			context.scale(-1, 1);
			context.drawImage(image, 0, 0);
			validateImage();
		}
		
		function applyVflip() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.translate(0, image.height);
			context.scale(1, -1);
			context.drawImage(image, 0, 0);
			validateImage();
		}
	
	
		//$("#cropbutton").click(function(e) {
				//applyCrop();
		//});
	
	
		$(document).on("touchstart", "#cropbutton", function(e){
				   
			applyCrop();
				   
		});
	
	
		$("#scalebutton").click(function(e) {
								var scale = prompt("Scale Factor:", "1");
								applyScale(scale);
								});
		$("#rotatebutton").click(function(e) {
								 applyRotate();
								 });
		$("#hflipbutton").click(function(e) {
								applyHflip();
								});
		$("#vflipbutton").click(function(e) {
								applyVflip();
								});
		
		$("#form").submit(function(e) {
		  e.preventDefault();
		  formData = new FormData($(this)[0]);
		  var blob = dataURLtoBlob(canvas.toDataURL('image/png'));
		  
		  //---Add file blob to the form data
		  });
		
		///// FINE CROP ////
		
		
		
		
		function gpsonSuccess(position){
			
			var ciao = position.coords.latitude;
			var ciao1 = position.coords.longitude;
			var gradi = position.coords.heading;
			
			localStorage.setItem("lat", ciao)
			localStorage.setItem("lng", ciao1)
			localStorage.setItem("gradi", gradi)
			
			localStorage.setItem("geostory", "SI")
			
			
			$("#lati").html(ciao +", "+ ciao1);
			
			
			/*alert('Latitude: '          + position.coords.latitude          + '\n' +
			 'Longitude: '         + position.coords.longitude         + '\n' +
			 'Altitude: '          + position.coords.altitude          + '\n' +
			 'Accuracy: '          + position.coords.accuracy          + '\n' +
			 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			 'Heading: '           + position.coords.heading           + '\n' +
			 'Speed: '             + position.coords.speed             + '\n' +
			 'Timestamp: '         + position.timestamp                + '\n');*/
			
			
			//$("#distanza").html("<span style = 'font-size: 18px;'>"+ position.coords.speed +","+ position.coords.heading  +"</span>");
			
		}
		
		
		function gpsonError(){
			
			var lat = "41.889191";
			var lng = "12.492475";
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			navigator.notification.alert(
			 'Possibile errore GPS, assicurati di avere il gps del telefono attivato.',  // message
			 alertDismissed,         // callback
			 'Attenzione',           // title
			 'Done'                  // buttonName
			 );
			
		}
		
		
		// FINE CARICAMENTO //
	
	
	$(document).on("touchstart", "#indietro", function(e){
				   
		window.location.href = "index.html";
				   
	});
    
    
	
	
    
    /*$.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
	
	
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
	

    if(connectionStatus=='online'){

	
	
    }
    
    else{

		alert("No Connection")
		
    }*/

}


/*function onResume() {
    onDeviceReady();
}*/






