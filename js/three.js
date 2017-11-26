$(document).ready(function(){
	/*FOR IMAGE CAROUSEL*/
	$("#imageCarousel").carousel();


	/*FOR SIDE TAB*/
	var clickEvent = false;
	$("#imageCarousel").carousel({
		interval: 4000
	}).on("click",".list-group li",function(){
		clickEvent = true;
		$(".list-group li").removeClass("active");
	}).on("slid.bs.carousel",function(e){
		if(!clickEvent){
			var count = $(".list-group").children().length -1;
			var current = $(".list-group li.active");
			current.removeClass("active").next().addClass("active");
			var id = parseInt(current.data("slide-to"));
		if(count == id){
			$(".list-group li").first().addClass("active");
		}
		}
		clickEvent = false;
	})

	var boxheight = $("#imageCarousel .carousel-inner").innerHeight();
	var itemlength = $("#imageCarousel .item").length;
	var triggerheight = Math.round(boxheight/itemlength+1);
	$("#imageCarousel .list-group-item").outerHeight(triggerheight);



	//FOR READ MORE LINKS
	$(".Hidebtn").hide();
	$(".para").hide();
	$(".showbtn").click(function(){
		$(".para").show();
		$(".showbtn").hide();
		$(".Hidebtn").show();
	});

	$(".Hidebtn").click(function(){
		$(".para").hide();
		$(".showbtn").show();
		$(".Hidebtn").hide();
	});


	//FOR POPUP THAT TAKES UP
	$("#upBtn").click(function(){
		$("html,body").animate({scrollTop:0},2000);
	});


});








function yscroll(){
			var upBtn = document.getElementById("upBtn");
			var yPos = window.pageYOffset;
				if(yPos > 500){
				upBtn.style.transition = "right 0.5s ease-in-out 0s";
				upBtn.style.right="0px";
			}else{
				upBtn.style.transition = "right 0.5s ease-in-out 0s";
				upBtn.style.right="-90px";
			}
		}


		window.onscroll=yscroll;
