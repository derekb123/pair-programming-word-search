const vertArray = function(matrix) {
    let result = []; //final outer array
    for ( let k = 0; k < matrix[0].length ; k++) {  //creates empty inner arrays to fill
      result[k] = Array(matrix.length);
    }
    for ( let i = 0; i < matrix.length ; i++) {  //iterating through rows
      for (let j = 0; j < matrix[i].length; j++){  //iterating through columns
        result[j][i] = matrix[i][j]; //filling the arrays
      }
    }
    return result;
  }


const wordSearch = (letters, word) => { 
    if (letters.length === 0){
        return undefined;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const vertJoin = vertArray(letters).map(ls => ls.join(''));
    for (v of vertJoin) {
        if (v.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch