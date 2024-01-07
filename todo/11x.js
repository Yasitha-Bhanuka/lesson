const myarray = JSON.parse(localStorage.getItem('myarray')) || [{
  name,
  dueDate
  }];  
    
    renderDetails();

    document.querySelector('.delete-btn').addEventListener('click', function(){
      myarray.splice(0, 1);
      saveToStorage();
      renderDetails();
    });
    
    function btnFunction(event){
      
      if (event.key === 'Enter'){
        addToArray();
      }
      
    }
    
    function addToArray(){
      
      const inputElement = document.querySelector('.js-input');
      
      const dateInputElement = document.querySelector('.js-date-input');
      
      /*const namevalue = inputElement.value;
      const datevalue = dateInputElement.value; // in this method without using shorthand property
      myarray.push({
        name: namevalue,
        dueDate: datevalue
      });*/

      // using shortHand property

      const dueDate = dateInputElement.value;
      const name = inputElement.value;
      if (name && dueDate){
        myarray.push({
          name,
          dueDate
        });

      } else{

        alert('Please enter the value');

      }
      
      renderDetails();

      saveToStorage();
      
      inputElement.value = '';

      dateInputElement.value = '';
      
    }
    
    function renderDetails(){
      
      let ListElement = '';
        
      const displayElement = document.querySelector('.js-list');

      myarray.forEach(function(todoObject, index){

        const { name, dueDate } = todoObject;
        
        const todoraw = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delete-btn"
    
>Delete</button>
          `;
          
        ListElement += todoraw;

      });

      displayElement.innerHTML = ListElement;
   }

   function saveToStorage(){
    localStorage.setItem('myarray', JSON.stringify(myarray));
   }