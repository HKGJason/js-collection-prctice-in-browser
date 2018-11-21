'use strict';

function collectSameElements(collectionA, objectB) {
	const result = collectionA.filter(a=> objectB.value.includes(a.key));
	return result.map(arr => arr.key);
}
