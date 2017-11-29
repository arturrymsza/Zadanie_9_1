function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	} else if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	}
}

console.log(getTriangleArea(10, 6));

var getTriangle1Area = getTriangleArea(3, 4);
var getTriangle2Area = getTriangleArea(5, 1);
var getTriangle3Area = getTriangleArea(78,91);

console.log(getTriangle1Area);
console.log(getTriangle2Area);
console.log(getTriangle3Area);