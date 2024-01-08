document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;
    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className=='delete'){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);

        }
    });
      //add movies
        const addForm=forms['add-movies'];
        addForm.addEventListener('submit',function(e){
        e.preventDefault();
        6
        //creating element
        const value=addForm.querySelector('input[type="text"]').value;
        const li=   document.createElement('li');
        const movieName=document.createElement('span');
        const delBtn=document.createElement('span');
        //add text content
        movieName.textContent=value;
        delBtn.textContent='Delete';
        //add classes
         movieName.classList.add('name');
           delBtn.classList.add('delete');  
        // append DOM
        li.appendChild(movieName);
        li.appendChild(delBtn);
        list.appendChild(li);

    });
});
