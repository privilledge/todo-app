listTodo();
document.getElementById('addButton').addEventListener('click',addTo);
function addTo(){
    let task=document.getElementById('addTask').value;
    if(task!=''){
        setData(task);
        listTodo();
    }
    else{
        alert('Enter task');
    }
}
function setData(task){
   let counter=0;
    let data=getData();
    if(getData(data)==task){
       alert('Task already exists');
    }
    else{
        data=(data!=false)?data:[];
        data.push(task);
        data=JSON.stringify(data);
    
        localStorage.setItem('myTodo',data);
    }
  
    document.getElementById('addTask').value='';
}
function getData(task=null){
    let data=JSON.parse(localStorage.getItem('myTodo'));
    if(data){
        if(task){
            if(data.indexOf(task)!=-1){
                return data[task];
            }
            else{
                return false;
            }
        }
        return data;
    }
    return false;

}
function listTodo(){
    let data=getData();
    let html='';
    let displayList=document.getElementById('itemList');
    displayList.innerHTML=html;
    let counter=0;

    if(data){
        for (let i = 0; i < data.length; i++) {
          let list=document.createElement('li');
          list.textContent=data[i];
          displayList.appendChild(list); 
          counter+=1; 
        }
    }
    console.log(counter);
    document.getElementById('taskCounter').innerHTML=counter+' pending tasks';
}

function deleteTask(){
    localStorage.clear();
    listTodo();
}
document.getElementById('clear').addEventListener('click',deleteTask);



