//  var h1 = React.createElement('h1',null,"mai hoon Giaan ")
// var h2 = React.createElement('h2',null,'me hu giaan ka dost yani Suniyo')

// var div = React.createElement('div',{id:'parent'},[h1,h2])


// var root = ReactDOM.createRoot(document.querySelector('#container'))

// root.render(div)

import parent from './parent.js'
const root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(parent())