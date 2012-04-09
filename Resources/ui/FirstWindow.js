var SecondWindow = require('ui/SecondWindow').SecondWindow;

function FirstWindow(navController) {
	var win = Ti.UI.createWindow({
		title:'IMIGUR',
		backgroundColor:'black',
		layout:'vertical'
	});

	var takePictureButton = Ti.UI.createButton({
		title:'Take Picute',
		height:'50dp',
		width:'200dp',
		top:'20dp'
	});
	takePictureButton.addEventListener('click', function() {		
		Titanium.Media.showCamera({
			success:function(event){
				Ti.API.debug('Our type was: '+event.mediaType);
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
					navController.open(new SecondWindow(navController, event.media));
				} else{
					alert("got the wrong type back ="+event.mediaType);
				}
			},
			cancel:function(){},
			error:function(error){
				// create alert
				var a = Titanium.UI.createAlertDialog({title:'Camera'});
				
				// set message
				if (error.code == Titanium.Media.NO_CAMERA){
					a.setMessage('Please run this test on device');
				} else{
					a.setMessage('Unexpected error: ' + error.code);
				}
				// show alert
				a.show();
			},
			saveToPhotoGallery:false,
			allowEditing:false,
			mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
			});
	});
	win.add(takePictureButton);

	var choosePictureButton = Ti.UI.createButton({
		title:'Choose From Gallery',
		height:'50dp',
		width:'200dp',
		top:'20dp'
	});

	choosePictureButton.addEventListener('click', function() {
		Titanium.Media.openPhotoGallery({
			success:function(event){
				Ti.API.debug('Our type was: '+event.mediaType);
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
					navController.open(new SecondWindow(navController, event.media));
				} else{
					alert("got the wrong type back ="+event.mediaType);
				}
			},
			cancel:function(){},
			error:function(error){
				// create alert
				var a = Titanium.UI.createAlertDialog({title:'Camera'});
				
				// set message
				if (error.code == Titanium.Media.NO_CAMERA){
					a.setMessage('Please run this test on device');
				} else{
					a.setMessage('Unexpected error: ' + error.code);
				}
				// show alert
				a.show();
			},
			saveToPhotoGallery:false,
			allowEditing:false,
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
			});
	});
	win.add(choosePictureButton);

	/*
	var home = Ti.UI.createButton({
			title:'Go to the Home Window',
			height:'50dp',
			width:'200dp',
			top:'20dp'
		});
	
	home.addEventListener('click', function() {
		navController.home();
	});
	win.add(home);*/

	return win;
};

exports.FirstWindow = FirstWindow;