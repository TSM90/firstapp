var SILLY = (function(module){

	module.doIt = function(resultObject){
		resultObject.prepend( Date() + '<br/>' );
	};

	return module;
}(SILLY || {}));