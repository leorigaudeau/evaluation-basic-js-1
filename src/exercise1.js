var removeNegativeValue = function(values) {
  
  if (values===undefined) {
    return output=[]
  } else {
    var output=[]
    for (let index = 0; index < values.length; index++) {
      if (values[index]>=0) {
        output.push(values[index]);
      }
    }
    return output 
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
