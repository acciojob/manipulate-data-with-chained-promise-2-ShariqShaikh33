//your JS code here. If required.
function manipulateArray(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arr);
		},3000);	
}).catch(error => {
		console.log(error);
});
	
}

let arr = [1,2,3,4];
manipulateArray(arr)
	.then(arr1 => {
		let resarr1 = arr1.filter(num => num%2===0);
		setTimeout(() => {
			document.getElementById("output").innerHTML = resarr1;
		},1000);
		return resarr1;
}).then(arr => {
		let resarr2 = arr.map(num => num*2);
		setTimeout(() => {
			document.getElementById("output").innerHTML = resarr2;
		},2000);
});
