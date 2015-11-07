app.controller('itemController', ['$scope', function ($scope) {

	$scope.activeitem = 'CG08210';
	$scope.cardActive = false;

	$scope.showCard = function(itemid) {

		// alert("ok");
		$scope.cardActive = true;
		$scope.activeitem = itemid;

	}

	$scope.hideCard = function() {

		$scope.cardActive = false;
		$scope.activeitem = "";

	}

	$scope.items = [
		{ 	id: 'CG08210', 
			itemname: 'Mens Cool & Dry Mesh Pique Polo',
			description: '100% Polyester Moisture Wicking Polo',
			price: '$19.50',
			color: { default: "Silver", 
					 options: ["Silver", "White", "Purple"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge", "6XLarge"]},
			photos: { thumbnail: "photos/8210_silver.jpg", gallery: ["photos/8210_silver.jpg", "photos/8210_white.jpg", "photos/8210_purple.jpg"]}
		}, 
		{ 	id: 'CG0D100', 
			itemname: 'Mens Pima Pique Short Sleeve Polo',
			description: '6.8 oz. 100% Peruvian Cotton',
			price: '$26.75',
			color: { default: "New Silver", 
					 options: ["New Silver", "Purple", "White"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge", "6XLarge"]},
			photos: { thumbnail: "photos/D100_silver.jpg", gallery: ["photos/D100_silver.jpg", "photos/D100_purple.jpg", "photos/D100_white.jpg"]}
		},
		{ 	id: 'CGO363807', 
			itemname: 'Mens Nike Dri Fit Micro Pique Polo',
			description: '100% Polyester 4.4 oz. Moisture Management',
			price: '$40.00',
			color: { default: "White", 
					 options: ["White", "Purple", "Anthracite"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge"]},
			photos: { thumbnail: "photos/363807_white.jpg", gallery: ["photos/363807_white.jpg", "photos/363807_purple.jpg", "photos/363807_grey.jpg"]}
		},
		{ 	id: 'CGOD100W', 
			itemname: 'Ladies Pima Pique Short Sleeve Polo',
			description: '6.8 oz. 100% Peruvian Pima Cotton',
			price: '$26.75',
			color: { default: "New Silver", 
					 options: ["New Silver", "Purple", "White"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge"]},
			photos: { thumbnail: "photos/d100w_silver.jpg", gallery: ["photos/d100w_silver.jpg", "photos/d100w_deeppurple.jpg", "photos/d100w_White.jpg"]}
		},
		{ 	id: 'CG08210L', 
			itemname: 'Ladies Cool & Dry Mesh Pique Polo',
			description: ' 100% Polyester Moisture Wicking Polo Feminine Fit',
			price: '$19.50',
			color: { default: "Silver", 
					 options: ["Silver", "White", "Purple"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge"]},
			photos: { thumbnail: "photos/8210L_silver.jpg", gallery: ["photos/8210L_silver.jpg", "photos/8210L_white.jpg", "photos/8210L_purple.jpg"]}
		},
		{ 	id: 'CGO354067', 
			itemname: 'Ladies Nike Dri Fit Micro Pique Polo',
			description: '100% Polyester 4.4 oz. Moisture Management',
			price: '$40.00',
			color: { default: "Purple", 
					 options: ["Purple", "Black", "Pink"]}, 
			size: { default: "XSmall", options: ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge"]},
			photos: { thumbnail: "photos/354067_purple.jpg", gallery: ["photos/354067_purple.jpg", "photos/354067_black.jpg", "photos/354067_pink.jpg"]}
		},
		{ 	id: 'CGOS608', 
			itemname: 'Long Sleeve Easy Care Shirt w/ Contrasting Neckband',
			description: '4.5 oz. 55/45 Cotton/Poly Button Down Collar',
			price: '$26.75',
			color: { default: "White / Light Blue", 
					 options: ["White / Light Blue", "Purple / Light Stone"]}, 
						size: { default: "XSmall", options: ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge", "6XLarge", "7XLarge", "8XLarge", "9XLarge", "10XLarge"]},
			photos: { thumbnail: "photos/S608_white.jpg", gallery: ["photos/S608_white.jpg", "photos/S608_.jpg"]}
		},
		{ 	id: 'CGOL612', 
			itemname: 'Ladies 3/4Sleeve Easy Care Shirt w/ Contracting Neckband',
			description: '4.5 oz. 55/45 Cotton/Poly Button Down Collar',
			price: '$26.75',
			color: { default: "White / Light Stone", 
					 options: ["White / Light Stone", "Burgundy"]}, 
						size: { default: "XSmall", options: ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge", "6XLarge", "7XLarge", "8XLarge", "9XLarge", "10XLarge"]},
			photos: { thumbnail: "photos/L612_white.jpg", gallery: ["photos/L612_white.jpg", "photos/L612_burgundy.jpg"]}
		},
		{ 	id: 'CGOVO113', 
			itemname: 'Mens Van Heusen Long Sleeve Silky Poplin',
			description: '60/40 Cotton/Poly Button Down Collar',
			price: '$33.25',
			color: { default: "White", 
					 options: ["White", "Slate Grey", "Cardinal"]}, 
						size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge"]},
			photos: { thumbnail: "photos/V0113_white.jpg", gallery: ["photos/V0113_white.jpg", "photos/V0113_grey.jpg", "photos/V0113_cardinal.jpg"]}
		},
		{ 	id: 'CGOVO114', 
			itemname: 'Ladies Van Heusen Long Sleeve Silky Poplin',
			description: '60/40 Cotton/Poly Soft Point Collar',
			price: '$33.25',
			color: { default: "White", 
					 options: ["White", "Slate Grey", "Cardinal"]},
						size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge"]},
			photos: { thumbnail: "photos/V0114_white.jpg", gallery: ["photos/V0114_white.jpg", "photos/V0114_grey.jpg", "photos/V0114_cardinal.jpg"]}
		},
		{ 	id: 'CGOCR5099', 
			itemname: 'Ladies Full Zipper Rain Coat w/ Hood',
			description: 'Polyurethane Bonded to a Woven Backing Mesh Lined',
			price: '$53.00',
			color: { default: "Black", 
					 options: ["Black", "Hot Pink", "Aqua"]}, 
						size: { default: "XSmall", options: ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge"]},
			photos: { thumbnail: "photos/5099_black.jpg", gallery: ["photos/5099_black.jpg", "photos/5099_pink.jpg", "photos/5099_aqua.jpg"]}
		},
		{ 	id: 'CGOCR9199', 
			itemname: 'Mens New Englander Rain Jacket w/Hood',
			description: 'Polyurethane Bonded to Woven Backing Mesh Lined',
			price: '$53.00',
			color: { default: "Maroon", 
					 options: ["Maroon", "Black"]}, 
						size: { default: "XSmall", options: ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge"]},
			photos: { thumbnail: "photos/9199_maroon.jpg", gallery: ["photos/9199_maroon.jpg", "photos/9199_black.jpg"]}
		},
		];

	$scope.update = function() {

		// alert("unfocused");

	}

}]);