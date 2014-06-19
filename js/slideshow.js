var image = new Array("image/1633743.jpg", "image/sjobod_moljen_gladahudik.jpg", "image/wallpaper-571528.png", "image/wallpaper-741903.jpg");

		var image_number = 0;
		var image_Length = image.length -1;

		function change_image( num ){
			image_number = image_number + num;

			if(image_number > image_Length){
				image_number = 0;
			}
			if(image_number < 0){
				image_number = image_Length;
			}
			document.slideshow.src= image[image_number];
			return false;
		}