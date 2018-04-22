//modified versino of: https://www.npmjs.com/package/merge-images

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mergeImages = factory());
}(this, (function () { 'use strict';

// Defaults
var defaultOptions = {
	format: 'image/png',
	quality: 0.92,
	width: undefined,
	height: undefined,
	Canvas: undefined,
	customMode: ''
};

// Return Promise
var mergeImages = function (sources, options) {

	console.log(options);

	if ( sources === void 0 ) sources = [];
	if ( options === void 0 ) options = {};

	return new Promise(function (resolve) {
	options = Object.assign({}, defaultOptions, options);

	// Setup browser/Node.js specific variables
	var canvas = options.Canvas ? new options.Canvas() : window.document.createElement('canvas');
	var Image = options.Canvas ? options.Canvas.Image : window.Image;
	if (options.Canvas) {
		options.quality *= 100;
	}

	// Load sources
	var images = sources.map(function (source) { return new Promise(function (resolve, reject) {
		// Convert sources to objects
		if (source.constructor.name !== 'Object') {
			source = { src: source };
		}

		// Resolve source and img when loaded
		var img = new Image();
		img.onerror = function () { 
			return reject(new Error('Couldn\'t load image')); 
		};
		img.onload = function () { 
			return resolve(Object.assign({}, source, { img: img })); 
		};
		img.src = source.src;
	}); });

	// Get canvas context
	var ctx = canvas.getContext('2d');

	// When sources have loaded
	resolve(Promise.all(images)
		.then(function (images) {
			if(images === null || images === undefined || images.length == 0) {
				return;
			}

			var firstImage = images[0];
			var firstImageHeight = firstImage.img["height"];
			var firstImageWidth = firstImage.img["width"];

			// Set canvas dimensions
			//var getSize = function (dim) { return options[dim] || Math.max.apply(Math, images.map(function (image) { return image.img[dim]; })); };
			canvas.width = firstImageWidth;
			canvas.height = firstImageHeight;

			// Draw images to canvas
			var myCounter = 0;
			images.forEach(function (image) {
				ctx.globalAlpha = image.opacity ? image.opacity : 1;

				var x = image.x || 0;
				var y = image.y || 0;
				var width = firstImageWidth;
				var height = firstImageHeight;

				if(myCounter != 0) {
					if(options.customMode == 'wave'){
						var xPosAdopt = -20;
						var yPosAdopt = 20;
						var heightAdopt = 0;
						var widthAdopt = 60;
	
						height = firstImageHeight * 0.3 + heightAdopt;
						width = firstImageWidth + widthAdopt;
	
						x = (firstImageWidth/2) - (width/2) + xPosAdopt;
						y = firstImageHeight - height + yPosAdopt;
					} else if (options.customMode == 'icoText'){
						var xPosAdopt = -10;
						var yPosAdopt = -20;
	
						height = image.img["height"];
						width = image.img["width"];
	
						x = firstImageWidth - width + xPosAdopt;
						y = firstImageHeight - height + yPosAdopt;
					} else if (options.customMode == 'icoLogo'){
						var xPosAdopt = -10;
						var yPosAdopt = -20;
	
						height = image.img["height"];
						width = image.img["width"];
	
						x = firstImageWidth - width + xPosAdopt;
						y = 0 + height + yPosAdopt;
					}
				}

				myCounter++;
				return ctx.drawImage(image.img, x, y, width, height);
			});

			if (options.Canvas && options.format === 'image/jpeg') {
				// Resolve data URI for node-canvas jpeg async
				return new Promise(function (resolve) {
					canvas.toDataURL(options.format, {
						quality: options.quality,
						progressive: false
					}, function (err, jpeg) {
						if (err) {
							throw err;
						}
						resolve(jpeg);
					});
				});
			}

			// Resolve all other data URIs sync
			return canvas.toDataURL(options.format, options.quality);
		}));
});
};

return mergeImages;

})));
//# sourceMappingURL=index.umd.js.map
