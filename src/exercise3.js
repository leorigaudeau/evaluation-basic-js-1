var applyMap = function(inputValues, inputMaps) {
  if (inputMaps===undefined) {
    return output=[]
  } else {
    for (let index = 0; index < inputMaps.length; index++) {
      var tablIntern= [];
      for (let itereur = 0; itereur < inputValues.length; itereur++) {
        const element = inputValues[itereur];
        const foncMap = inputMaps[index];
        tablIntern.push(foncMap(element));
      }
      output.push(tablIntern);
    }
    return output;
    
  }
}

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
