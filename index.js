function submitData () {
    fetch('http://localhost:3000/users', userData)
    .then(res => {
        return res.json();
    })
    .then(function (object) {
        appendObj(object);
      })};

const bodyData = {
    name: 'Steve',
    email: 'steve@steve.com'
}

const userData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(bodyData), 
}

function appendObj(object) {
    console.log(object.id);
    const li = document.createElement('li');
    li.textContent = object.id;
    document.querySelector("body").append(li);
}

submitData();