/*global collectSameElements*/
'use strict';

function collectSameElements(collectionA, collectionB) {
  //return 'Implement the practice require, and begin changing code in this row';
 
  return collectionA.filter(a => collectionB.includes(a));
}
