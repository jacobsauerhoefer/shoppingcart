$(document).ready( function() {

	$(window).load( function() {

		setTimeout( function() {

			simpleCart.update();

		}, 500);

		$('.search').keyup(function() {
			// alert("yes");
			$('.images').slick('unslick');
			slickCarousel();
			$(this).val() // get the current value of the input field.

		});

		/**
		*
		*	Dropdown
		*
		*/

		$(document).on("click",".dropdown dt",function() {

		  console.log("test");

		  $(this).parent().find("dd ul").toggleClass("active");

		});

		$(document).on("click",".dropdown dd ul li",function() {

		  var text = $(this).data("value");
		  console.log(text);
		  $(this).parent().parent().parent().find("dt a span").text(text);
		  $(this).parent().toggleClass("active");

		});

		/* End Section */

		var slickCarousel = function() {
		
			$('.itemcard').each( function() {

				var itemid = $(this).data("item");

				console.log(itemid);

				$('.itemcard[data-item="'+itemid+'"] .images').slick({
					autoplay: false,
					prevArrow: "<div class='slick-prev'><i class='fa fa-angle-left'></i></div>",
					nextArrow: "<div class='slick-next'><i class='fa fa-angle-right'></i></div>",
					infinite: false,
					adaptiveHeight: true
				});

				$('.itemcard[data-item="'+itemid+'"] .item_color form').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
					asNavFor: '.itemcard[data-item="'+itemid+'"] .images',
					focusOnSelect: true
				});

			});

			$('.items .item').each( function() {

				var itemid = $(this).data("item");

				$('.items .item[data-item="'+itemid+'"] .images').slick({
					autoplay: false,
					prevArrow: "<div class='slick-prev'><i class='fa fa-angle-left'></i></div>",
					nextArrow: "<div class='slick-next'><i class='fa fa-angle-right'></i></div>",
					infinite: false,
					// adaptiveHeight: true
				});

				$('.items .item[data-item="'+itemid+'"] .item_color form').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
					asNavFor: '.items .item[data-item="'+itemid+'"] .images',
					focusOnSelect: true
				});

			});

		} // End Slickcarousel function

		slickCarousel();

		// $(document).on("click", ".item_color .color", function() {

		// 	$(this)

		// });

		simpleCart({
			checkout: { 
				type: "PayPal" , 
				email: "rich@rbapparelplus.com" 
			}
		});

		simpleCart({
			//Setting the Cart Columns for the sidebar cart display.
			cartColumns: [
				{ attr: "thumb", label: false, view: "image"},
				//Name of the item
				{ attr: "name", label: "Name" },
				{ attr: "price", label: "Price", view: 'currency' },
				{ attr: "size", label: "Size" },
				// { attr: "style", label: "Logo Style" },
				// { attr: "sku", label: "Sku" },
				// { attr: "playername", label: "playername" },
				// { attr: "playernumber", label: "playernumber" },
				{ attr: "color", label: "color" },
				{ view: "decrement", label: false },
				{ attr: "quantity", label: "Qty" },
				{ view: "increment", label: false },
				{ attr: "total", label: "SubTotal", view: 'currency' },
				{ view: "remove", text: "Remove", label: false }
			],
		cartStyle: "table"
		});

		$(document).on("click",".shippingtype",function() {

			var element = $(this);
			if( element.data("type") === "pickup" ){
			console.log("pickup free");

			simpleCart.shipping(function(){
			  return 0;
			});

			}
			else {

				console.log("not free")

				simpleCart.shipping(function(){
				  return 9.95;
				});

			}

		});

		// simpleCart({
		// 	// shippingFlatRate: 9.95
		// 	shippingCustom: function(){ 

		// 		if( simpleCart.quantity() > 20 ){

		// 			return 0;

		// 		} else {

		// 			return 9.95;

		// 		}

		// 	}
		// });


		// simpleCart.bind( 'beforeCheckout' , function( data ){
		// 	data.handling_cart = "$1.00";
		// 	console.log(data);
		// });

	});

}); // End Document Ready