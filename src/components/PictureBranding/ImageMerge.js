//modified versino of: https://www.npmjs.com/package/merge-images

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mergeImages = factory());
}(this, (function () { 'use strict';

// Defaults
let defaultOptions = {
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
	let canvas = options.Canvas ? new options.Canvas() : window.document.createElement('canvas');
	let Image = options.Canvas ? options.Canvas.Image : window.Image;
	if (options.Canvas) {
		options.quality *= 100;
	}

	// Load sources
	let images = sources.map(function (source) { return new Promise(function (resolve, reject) {
		// Convert sources to objects
		if (source.constructor.name !== 'Object') {
			source = { src: source };
		}

		// Resolve source and img when loaded
		let img = new Image();
		img.onerror = function () { 
			return reject(new Error('Couldn\'t load image')); 
		};
		img.onload = function () { 
			return resolve(Object.assign({}, source, { img: img })); 
		};
		img.src = source.src;
	}); });

	// Get canvas context
	let ctx = canvas.getContext('2d');

	// When sources have loaded
	resolve(Promise.all(images)
		.then(function (images) {
			if(images === null || images === undefined || images.length == 0) {
				return;
			}

			let firstImage = images[0];
			let firstImageHeight = firstImage.img["height"];
			let firstImageWidth = firstImage.img["width"];

			// Set canvas dimensions
			//var getSize = function (dim) { return options[dim] || Math.max.apply(Math, images.map(function (image) { return image.img[dim]; })); };
			canvas.width = firstImageWidth;
			canvas.height = firstImageHeight;

			// Draw images to canvas
			let myCounter = 0;
			images.forEach(function (image) {
				ctx.globalAlpha = image.opacity ? image.opacity : 1;

				let x = image.x || 0;
				let y = image.y || 0;
				let width = firstImageWidth;
				let height = firstImageHeight;
				let firstImageRatio = width / height;

				if(myCounter != 0) {
					if(options.customMode == 'wave'){
						let xPosAdopt = -20;
						let yPosAdopt = 20;
						let heightAdopt = 0;
						let widthAdopt = 60;
	
						height = firstImageHeight * 0.3 + heightAdopt;
						width = firstImageWidth + widthAdopt;
	
						x = (firstImageWidth/2) - (width/2) + xPosAdopt;
						y = firstImageHeight - height + yPosAdopt;
					} else if (options.customMode == 'icoText'){
						let xPosAdopt = -10;
						let yPosAdopt = -20;
	
						height = image.img["height"] * firstImageRatio;
						width = image.img["width"] * firstImageRatio;
	
						x = firstImageWidth - width + xPosAdopt;
						y = firstImageHeight - height + yPosAdopt;
					} else if (options.customMode == 'icoLogo'){
						let xPosAdopt = -10;
						let yPosAdopt = -20;
	
						height = image.img["height"] * firstImageRatio;
						width = image.img["width"] * firstImageRatio;
	
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
