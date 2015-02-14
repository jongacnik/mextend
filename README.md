# mextend

mextend means microextend means MICRO EXTEND for keepin it real basic. If you need complex extends, don't use.

## Getting Started

	npm install mextend

mextend is meant to be consumed in a [CommonJS](http://www.commonjs.org/), [Browserify](http://browserify.org/) environment:
	
	var mextend = require('mextend');
	
	var defaults = {
		'a' : 0,
		'b' : {},
		'c' : function(){ }
	}

	var options = {
		'a' : 0,
		'b' : {
			'super' : 'duper'
		},
		'c' : function(){ 
			console.log('really cool');
		}
	}
	
	console.log(mextend(defaults, options));

	# Output
	{
		'a' : 0,
		'b' : {
			'super' : 'duper'
		},
		'c' : function(){ 
			console.log('really cool');
		}
	}