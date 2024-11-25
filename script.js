//your JS code here. If required.
const promise1 = (arr) => new Promise(resolve =>{
	setTimeout(() => resolve(arr,3000));	
}).then(function(result){
	let evenarr =[];
	result.forEach((element) =>{
		if(element%2==0){
			evenarr.push(element);
		}
	});
	return evenarr;
}).then(function(result1){
	result1.forEach((element) => {
		element = element * 2;
	});
	document.getElemenetById("output").innerHTML = result1;
});

let arr = [1,2,3,4];
promise1([1,2,3,4]);
