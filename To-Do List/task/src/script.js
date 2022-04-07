function saveTask(){
    let taskList = document.getElementById('task-list').getElementsByTagName('li');
    let obj=[];
    for (let i = 0; i < taskList.length; i++) {
        let content = taskList[i].getElementsByTagName('span')[0].innerHTML;
        let checked = taskList[i].getElementsByTagName('input')[0].checked;
        obj.push([content,checked]);
        localStorage.setItem("tasks", JSON.stringify(obj));
        console.log(obj[i][1]);
    }
}
function getTask(){
    let obj = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById('task-list');
    taskList.innerHTML="";
    for(let i=0;i<obj.length;i++) {
        console.log(obj[i][1]);
        let newtask = document.createElement('li');
        let newspan = document.createElement('span');
        let newinput = document.createElement('input');
        let newbutton = document.createElement('button');
        newinput.type = 'checkbox';
        newinput.onchange = function (){
            if(this.checked)this.nextElementSibling.classList.add('del');
            else if(!this.checked)this.nextElementSibling.classList.remove('del');
            saveTask();
        }
        newspan.className = 'task';
        newspan.innerHTML = obj[i][0];
        newbutton.onclick = function () {
            this.parentNode.remove();
            saveTask();
        }
        newbutton.className = 'delete-btn';
        newtask.appendChild(newinput);
        newtask.appendChild(newspan);
        newtask.appendChild(newbutton);
        taskList.appendChild(newtask);
        if(obj[i][1]){
            newinput.checked=true;
            newinput.nextElementSibling.classList.add('del');
        }
    }
}
function addTask() {
    let inputbox = document.getElementById('input-task');
    if(inputbox.value==="")return;
    let tasks = document.getElementById('task-list');
    let newtask = document.createElement('li');
    let newspan = document.createElement('span');
    let newinput = document.createElement('input');
    let newbutton = document.createElement('button');
    newinput.type = 'checkbox';
    newinput.onchange = function (){
        if(this.checked)this.nextElementSibling.classList.add('del');
        else if(!this.checked)this.nextElementSibling.classList.remove('del');
        saveTask();
    }
    newspan.className = 'task';
    newspan.innerHTML = inputbox.value;
    newbutton.onclick = function () {
        this.parentNode.remove();
        saveTask();
    }
    newbutton.className = 'delete-btn';
    newtask.appendChild(newinput);
    newtask.appendChild(newspan);
    newtask.appendChild(newbutton);
    tasks.appendChild(newtask);
    saveTask();
    inputbox.value = null;
}
function delTask(my){
    my.parentNode.remove();
    saveTask();
}
function isCheck(my){
    if(my.checked){
        my.nextElementSibling.classList.add('del');
        saveTask();
    }
    else if(!my.checked)my.nextElementSibling.classList.remove('del');
}