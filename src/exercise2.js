var mapCustomer = function(customer) {
  
  /*if (output===undefined) {
    var output={
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    };
    return output;
  }*/

  var output=customer;
  var totalMoneySpent;
  for (let index = 0; index < customer.length; index++) {
    totalMoneySpent+=2
    
  }

  return output
  
  
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
