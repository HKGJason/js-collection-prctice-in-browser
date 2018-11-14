'use strict';

function countSameElements(collection) {
    var result = [];
  for (var i=0;i<collection.length;i++){
	  var found = false;
	  for (var j=0;j<result.length;j++){
		  	  if (collection[i].charAt(0) === result[j].key){
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
		if (collection[i].length===1){
			result[j].count = (parseInt(result[j].count))+1;
		}
		else if (collection[i].charAt(0)==='[')
		{
			if (collection[i].length>2&&isNaN(collection[i].charAt(3)){
				result[j].count = (parseInt(result[j].count))+(parseInt(collection[i].charAt(2)));
			}else{
				var num = collection[i].charAt(2).concat(collection[i].charAt(3));
				result[j].count = (parseInt(result[j].count))+(parseInt(num));
				
			}
			
		}
		
	}
  }
  return result;
}
