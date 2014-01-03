module.exports.convert = function(path){
	var output;
	
	if (path){
		if (path.indexOf('\\') > -1){
			output = 'unix';
		} else if (path.indexOf('/') > -1){
			output = 'dos';
		}
	}
	
	switch (output){
		case 'unix':
			// Replace c:\ with /c/
			path = path.replace(/(\w):\\/, '/$1/');
			path = path.replace(/\\/g, '/');
			
			break;
		case 'dos':
			// Replace /c/ with c:\
			path = path.replace(/\/(\w)\//, '$1:\\');
			path = path.replace(/\//g, '\\');
			
			break;
	}
	
	return path;
};