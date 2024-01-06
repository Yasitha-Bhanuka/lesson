const myarray = JSON.parse(localStorage.getItem('myarray')) || [{
  name :'',
  dueDate: ''
  }];  
    
    renderDetails();
    
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
      myarray.push({
        name,
        dueDate
      });
      
      renderDetails();

      saveToStorage();
      
      inputElement.value = '';

      dateInputElement.value = '';
      
    }
    
    function renderDetails(){
      
      let ListElement = '';
        
      const displayElement = document.querySelector('.js-list');
      
      for (let i = 0; i<myarray.length; i++){

        
        const todoObject = myarray[i];

        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;

        const { name, dueDate } = todoObject;
        
        const todoraw = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delete-btn"
          onclick="
            myarray.splice(${i}, 1);
            
            renderDetails();

            saveToStorage();
          "
          >Delete</button>
          `;
          
        ListElement += todoraw;
        
      }

    displayElement.innerHTML = ListElement;

   }

   function saveToStorage(){
    localStorage.setItem('myarray', JSON.stringify(myarray));
   }