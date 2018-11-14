'use strict';

function countSameElements(collection) {
    var result = [];
  for (var i=0;i<collection.length;i++){
	  var found = false;
	  for (var j=0;j<result.length;j++){
		  	  if (collection[i] === result[j].key){
				  found = true;
				  break;			
			  }				  
	  }
	if (found===false)
	{		
		if (collection[i].length===1){
			result.push({"key": collection[i], "count": 1});
		}else{
			result.push({"key": collection[i].charAt(0), "count": (parseInt(collection[i].charAt(2)))});
		}
		
	}
	if (found===true)
	{
		result[j].count = (parseInt(result[j].count))+1;
	}
  }
  return result;
}
