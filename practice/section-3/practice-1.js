'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = objectB.value;
  for (var i = 0;i<collectionA.length;i++){
	  for (var j = 0; j<arr.length;j++){
		  if (collectionA[i].key===arr[j])
			  collectionA[i].count = (parseInt(collectionA[i].count))-1;
	  }
  }
  return collectionA;
}
