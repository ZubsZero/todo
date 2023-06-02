document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length <= 4){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#show-list').innerHTML += `
            <div class="task">
                <span id="taskname">
                <input type="checkbox" class="checkbox">
                ${document.querySelector('#input').value}
                
                </span>
                <button class="delete">
                X
                </button>
            </div>
        `;

        var inputs = document.querySelectorAll(".delete");
        for(var i=0; i<inputs.length; i++){
            inputs[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
      
      
      
      
      
      
      
    
