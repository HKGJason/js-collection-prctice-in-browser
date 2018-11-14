/*global collectSameElements*/
'use strict';

function collectSameElements(collectionA, collectionB) {
  //return 'Implement the practice require, and begin changing code in this row';
  var common = [];
    for ( var i =0;i<collectionA.length;i++){
		for ( var j = 0; j<collectionB.length;j++){
			if (collectionA[i] === collectionB [j])
				common.push(collectionA[i]);
		}
	}
	return common;
}
