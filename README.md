# shoppingcart
Shopping Cart Template Built using AngularJS and SimpleCartJS
## Demo / Example
http://chelseagrotonbank.rbapparelplus.com/
## Goal
Simple, lightweight shopping cart for various projects
## Installation
Download, Install package.json, run gulpfile, update scope items as necessary in public/js/app/controllers.js
```javascript
	$scope.items = [
		{ 	id: 'CG08210', 
			itemname: 'Mens Cool & Dry Mesh Pique Polo',
			description: '100% Polyester Moisture Wicking Polo',
			price: '$19.50',
			color: { default: "Silver", 
					 options: ["Silver", "White", "Purple"]}, 
			size: { default: "Small", options: ["Small", "Medium", "Large", "XLarge", "XXLarge", "3XLarge", "4XLarge", "5XLarge", "6XLarge"]},
			photos: { thumbnail: "photos/8210_silver.jpg", gallery: ["photos/8210_silver.jpg", "photos/8210_white.jpg", "photos/8210_purple.jpg"]}
		}
		];
```
## Contributing
<!-- 1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D -->
## History
TODO: Write history
## Credits
TODO: Write credits
## License
The MIT License (MIT)

Copyright (c) 2015 Jacob John Sauerhoefer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

