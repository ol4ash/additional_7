module.exports = function solveSudoku(matrix) {
 
// 1)

const zeros = [];
const len = matrix.length; 

for (let x=0; x<len; x++){
 	for (let y=0; y<len; y++){
 		if (matrix[x][y]===0){
 		zeros.push([x,y]);
		}
	}
}

// 2)

let matrixTest = matrix;
let j=1;

for (let i=0, lenZ=zeros.length; i<lenZ; ){

 	let row=zeros[i][0];
 	let column=zeros[i][1];

 	for (j; j<=len; ) {
    
 		let a = (checkHorizontal(j,row));
 		let b = (checkVertical(j,column));
    	let c = (checkSquare(row,column));

 		if ((a===1)&&(b===1)&&(c===1)){
 			matrixTest[zeros[i][0]][zeros[i][1]]=j;
 			j=1;
 			i++;
 			break;
 		}

 		if (((a===0)||(b===0)||(c===0))&&(j===len)) {
 		
 			while (true) {
		        i--;
 				j=(matrixTest[zeros[i][0]][zeros[i][1]])+1;

 				matrixTest[zeros[i][0]][zeros[i][1]]=0;
 				
 				if (j<=9){
 				row=zeros[i][0];
 				column=zeros[i][1]; 
 				break;}
 			}
		}
		else j++;
	}
}

// 3)

function checkHorizontal (j,row) {
	var answer = 1;
	for (var h=0; h<len; h++){
			if (matrixTest[row][h] === j) {answer = 0;};
		}
		return answer;
}

function checkVertical (j,column) {
	var answer = 1;
	for (var v=0; v<len; v++){
			if (matrixTest[v][column] === j) {answer = 0;};
		}
	return answer;
}

function checkSquare (row,column){
  var answer = 1;
  var r = rowLimit(row);
  var c = columnLimit(column);

  for (var r0=r-2; r0<=r; r0++){
    for (var c0=c-2; c0<=c; c0++){
      if (matrixTest[r0][c0] === j) {answer = 0;};
    }
  }
  return answer;
}

function rowLimit (row){
    if ((0<=row)&&(row<=2)) {r=2}
    if ((3<=row)&&(row<=5)) {r=5}
    if ((6<=row)&&(row<=8)) {r=8}
  return r;

}
function columnLimit (column) {
    if ((0<=column)&&(column<=2)) {c=2}
    if ((3<=column)&&(column<=5)) {c=5}
    if ((6<=column)&&(column<=8)) {c=8}
  return c
}

return matrixTest
}
