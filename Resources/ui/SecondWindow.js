function SecondWindow(navController, image) {
	var win = Ti.UI.createWindow({
		title:'IMIGUR',
		backgroundColor:'black',
		layout:'vertical'
	});
	
	var imageView = Ti.UI.createImageView({
		width:'270dp',
		height:'270dp',
		top: '10dp',
		image: image
	});
	win.add(imageView);
	
	var titleSection = Ti.UI.createView({
		height: '40dp',
		width: '300dp',
		top: '10dp',
		layout: 'horizontal'
	})
	
	var titleLabel = Ti.UI.createLabel({
		text:'Title:',
	    height:'auto', //'40dp',
	    width:'auto',//'50dp',
	    color:'white',
	    font:{fontSize:30},
	    textAlign:'center'
	});
	titleSection.add(titleLabel);
	
	var titleTextField = Ti.UI.createTextField({
		height: 'auto',//'40dp',
		width: '200dp',
		right: '0dp',
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	titleSection.add(titleTextField);
	win.add(titleSection);
	
	var captionSection = Ti.UI.createView({
		height: '40dp',
		width: '300dp',
		top: '10dp',
		layout: 'horizontal'
	});
	
	var captionLabel = Ti.UI.createLabel({
		text:'Caption:',
	    height:'auto',//'40dp',
	    width:'auto',//'50dp',
	    color:'white',
	    font:{fontSize:30},
	    textAlign:'center'
	});
	captionSection.add(captionLabel);
	
	var captionTextField = Ti.UI.createTextField({
		height: 'auto',//'40dp',
		width: '200dp',
		right: '0dp',
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	})
	captionSection.add(captionTextField);
	win.add(captionSection);
	
	var submitButton = Ti.UI.createButton({
		title: "Submit Picture",
		height:'50dp',
		width:'200dp'
	})
	
	submitButton.addEventListener('click', function(){
		Titanium.UI.createAlertDialog({title:'Camera', message: 'submit button clicked'}).show();
	})
	win.add(submitButton);
	
	var home = Ti.UI.createButton({
			title:'Back',
			height:'50dp',
			width:'200dp',
		});
	
	home.addEventListener('click', function() {
		navController.home();
	});
	win.add(home);

	return win;
};

exports.SecondWindow = SecondWindow;