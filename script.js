//your JS code here. If required.
const promise1 = (arr) => new Promise(resolve =>{
	setTimeout(() => {resolve(arr);},3000);	
}).then(arr => {
	return arr.filter(num => num%2===0)
	});
	return evenarr;
}).then(arr => {
	return arr.map(num => num*2);
	
});

let arr = [1,2,3,4];
promise1([1,2,3,4]).then(result3 => {
	document.getElemenetById("output").innerHTML = result1;
});
