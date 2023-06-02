document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length <= 4){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#show').innerHTML += `
            <div class="task">
            <input type="checkbox" class="checkbox">
                <span id="taskname">
                
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
      
      
      
      
      
      
      
    
