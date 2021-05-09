const form = document.getElementById("form");
const input = document.getElementById("input");
const  todoul = document.getElementById("todos");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    addTODO();
})
function addTODO(todo){
    var todotext = input.value;
    
    if(todotext){
        const todoel = document.createElement('li');

        if(todo && todo.t2){
            todoel.classList.add('t2');
        }
        todoel.innerText = todotext
        todoul.appendChild(todoel);

        todoel.addEventListener('click',()=>{
            todoel.classList.toggle('t2');
            todo    
            

        })
        todoel.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoel.remove();

        })

        input.value = '';
    }
}
