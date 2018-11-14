'use strict';

function collectSameElements(collectionA, objectB) {
   //return 'Implement the practice require, and begin changing code in this row';
  var common = [];
  var arrB = objectB.value;
    for ( var i =0;i<collectionA.length;i++){
		for ( var j = 0; j<arrB.length;j++){
			if (collectionA[i] === arrB [j])
				common.push(collectionA[i]);
		}
	}
	return common;
}

