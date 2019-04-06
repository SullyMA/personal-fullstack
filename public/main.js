var addToCart = document.getElementsByClassName("fa-shopping-bag");

Array.from(addToCart).forEach(function(element) {
  element.addEventListener('click', function(){
    const _id = this.parentNode.parentNode.getAttribute('id')
    if (_id in cart.clothes) {
      console.log("exists")
      cart.clothes[_id].QTY += 1
    } else{
      console.log("DNE")
      cart.clothes[_id] = { 'QTY': 1 }
    }
    fetch('carts', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cart)
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

var trash = document.getElementsByClassName ("fa-trash")
Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    //this is icon that is being click
    const _id = this.parentNode.parentNode.getAttribute('id')
    delete cart.clothes [_id]
    fetch('carts', {
      method: 'put',
      //additional info about the request- content
      headers: {'Content-Type': 'application/json'},
      //body what is actually inside request
      body: JSON.stringify(cart)
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
