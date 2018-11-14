'use strict';

function collectSameElements(collectionA, collectionB) {
    var common = [];
	var arrB = collectionB[0];
    for ( var i =0;i<collectionA.length;i++){
		for ( var j = 0; j<arrB.length;j++){
			if (collectionA[i] === arrB [j])
				common.push(collectionA[i]);
		}
	}
	return common;
}
