let displayList=document.getElementById('itemList');
function toDo(){
    var task=document.getElementById('addTask').value;
   if (task==='') {
    alert('You must write something');
   }
   else{
 
    var list=document.createElement('li');
    list.textContent=task;
    displayList.appendChild(list);
    document.getElementById('addTask').value='';
    document.getElementById('empty').innerHTML='Pending tasks'
    let taskCount=document.getElementsByTagName('li');
    document.getElementById('taskCounter').innerHTML=taskCount.length+' pending tasks'
   }
   
}
function clearList(){

while(displayList.firstChild){
    
    displayList.removeChild(displayList.firstChild);
    document.getElementById('empty').innerHTML='Todo list is empty';
    document.getElementById('taskCounter').innerHTML='0 pending tasks'
}
}


