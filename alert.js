console.log('I am here');
// alert('Mother is coming');

const maComing = () => {
      alert('Mother is coming!!!');
}

const askPicnic = () => {
      const response = confirm('Are you going to picnic?');
      console.log(response);
      if (response === true) {
            alert('If going. Give me your fee please');
      }
      else {
            console.log('Not going. Say sorry');
      }
}

const askName = () => {
      const name = prompt('What is your name?');
      if (name) {
            console.log(name)
      }     
}