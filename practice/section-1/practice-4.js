'use strict';

function collectSameElements(collectionA, objectB) {
    var common = [];
	
  var arrB = objectB.value;
    for ( var i =0;i<collectionA.length;i++){
		for ( var j = 0; j<arrB.length;j++){
			if (collectionA[i].key === arrB [j])
				common.push(collectionA[i].key);
		}
	}
	return common;
}
