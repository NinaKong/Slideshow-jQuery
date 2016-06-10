/*Nina Kong*/

function Overlay() {
	var getWidth = $(window).width();
	var target = $(".info");
	if ( getWidth > 768 ) {
		$(".ImagePart").mouseover(function(){
	        $(".Overlay").show();
	    });
	    $(".ImagePart").mouseout(function(){
	        $(".Overlay").hide();
	    });
	} else {
	    $(".Overlay").hide();
	    $(".RemoveHover").removeClass("ImagePart");
	}
}

var ImageSlide = document.getElementById("ImageSlide");

var imageArray = ["img/image2.jpg", "img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg"];
var imageIndex = 0;

function changeImage() {
	ImageSlide.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

window.onload = function() {
	setInterval(changeImage,3000);
	Overlay();
};
