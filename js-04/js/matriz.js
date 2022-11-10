// un arreglo tiene corchetes

let arr = [[4,7,2],
 [2,3,4],
 [6,1,5] ];

let arr2= [
    [7,6,3],
     [1,6,3],
     [6,2,5] ];

for (let i = 0; i <=2; i++) {
    for (let j = 0; j <= 2; j++){
        console.log(arr [i][j] * arr2[i][j]);

    }
console.log("------");
}


// m1 = [[1,2,3],[4,5,6]];
// m2 = [[7,8],[9,10],[11,12]];
// fil_m1 = m1.length;
// col_m1 = m1[0].length;

// fil_m2 = m2.length;
// col_m2 = m2[0].length;
// if (col_m1 != fil_m2)
//   throw "No se pueden multiplicar las matrices";
// let multiplicacion = new Array(fil_m1);
// for (x=0; x < multiplicacion.length; x++) {
//     for (y=0; y < multiplicacion[x].length; y++)
    
//     {                                
//         for (z=0; z<col_m1; z++) {
//             multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z]*m2[z][y]; 
//         }
//     }
// }
