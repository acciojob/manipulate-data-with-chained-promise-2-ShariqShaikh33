//your JS code here. If required.
function manipulateArray(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arr);
		},3000);	
}).then(arr => {
	return arr.filter(num => num%2===0)
}).then(arr => {
	return arr.map(num => num*2);
}).catch(error => {
		console.log(error);
});
	
}

let arr = [1,2,3,4];
manipulateArray(arr).then(result => {
	document.getElementById("output").innerHTML = result;
});
