'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var result = [];
  for (var i=0;i<collectionA.length;i++){
	  var found = false;
	  for (var j=0;j<result.length;j++){
		  	  if (collectionA[i] === result[j].key){
				  found = true;
				  break;			
			  }				  
	  }
	if (found===false)
	{		
		result.push({"key": collectionA[i], "count": 1});
	}
	if (found===true)
	{
		result[j].count = (parseInt(result[j].count))+1;
	}
  }
    var arr = objectB.value;
	var count = 1;
  for (var i = 0;i<result.length;i++){
	  for (var j = 0; j<arr.length;j++){
		  if (result[i].key===arr[j]){
			  result[i].count = (parseInt(result[i].count))-count;
			   count++;
			  if (count>3)
				  count = 1;
		  }
	  }
  }
  return result;
}
