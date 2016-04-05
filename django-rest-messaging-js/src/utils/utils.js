

var deepExtend = function(out) {
  /*
   * Extend without jquery
   * Source: http://youmightnotneedjquery.com/
   */ 
	
	out = out || {};

	for (var i = 1; i < arguments.length; i++) {
		var obj = arguments[i];

		if (!obj)
			continue;

		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === 'object'){
					out[key] = deepExtend(out[key], obj[key]);
				}
				else {
					out[key] = obj[key];
				}	
			}
		}
	}

	return out;
};

var utils = {
	deepExtend: deepExtend,
}

module.exports = utils;