'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var arr = objectB.value;
   var count = 1;
  for (var i = 0;i<collectionA.length;i++){
	  for (var j = 0; j<arr.length;j++){
		  if (collectionA[i].key===arr[j]){
			  collectionA[i].count = (parseInt(collectionA[i].count))-count;
			  count++;
			  if (count>3)
				  count = 1;
		  }
	  }
  }
  return collectionA;
}
