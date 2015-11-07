$(document).ready( function() {

	$(window).load( function() {

		setTimeout( function() {

			simpleCart.update();

		}, 500);

		/*
		 *
		 *	Slideshow 
	     *
		 */

		 	$(".slideshow").each( function() {

		 		$(this).find("img.photo").eq(0).addClass("active");

		 	});

		 	$(".item")

		 /* End Section */

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

		simpleCart.shipping(function(){
			return 9.95;
		});

		$(document).on("click",".shippingtype",function() {

			$(".shippingtype").removeClass("active");
			var element = $(this);
			element.addClass("active");
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