/**
 *  Array
 * 
 */

 let employees = ['chourabi taher','test user', 'omar test','Mariem','Maher']
 /*
 employees.map((e,i)=>{ 
     const val = e;
     const index = i;

     console.log(val,index);
 })*/

/*
 let filtredArray = employees.filter(  e => e.indexOf('a') != -1  );

 console.log(filtredArray);*/

const transactions = [
    { id: 2, amount:2500 , date:'2021-01-05' },
    { id: 3,  amount:2500 , date:'2021-02-02' },
    { id:1 , amount:2500 , date:'2021-01-03' },
    { id:4,  amount:2500 , date:'2021-03-01' }, 
]

 
/**
 * notes.sort( (a,b)=> a-b  )
(9) [1, 2, 5, 13, 15, 16, 18, 18, 19]
 */

                                       
/**
 * const res = transactions.sort( (a,b)=> new Date(a.date).getTime()  -  new Date(b.date).getTime()  );

console.log(res);
 */


var notes = [15,18,19,13,1,5,2,18,16]


/**
 * notes
(9) [15, 18, 19, 13, 1, 5, 2, 18, 16]
notes[9]=20
20
notes
(10) [15, 18, 19, 13, 1, 5, 2, 18, 16, 20]
notes[notes.length]=20
20
notes
(11) [15, 18, 19, 13, 1, 5, 2, 18, 16, 20, 20]
notes.push(13)
12
notes
(12) [15, 18, 19, 13, 1, 5, 2, 18, 16, 20, 20, 13]
notes.pop()
13
notes
(11) [15, 18, 19, 13, 1, 5, 2, 18, 16, 20, 20]
notes.shift()
15
notes
(10) [18, 19, 13, 1, 5, 2, 18, 16, 20, 20]
notes[notes.length]=null
null
notes
(11) [18, 19, 13, 1, 5, 2, 18, 16, 20, 20, null]
notes[notes.length-1]=null
null
notes
(11) [18, 19, 13, 1, 5, 2, 18, 16, 20, 20, null]
notes[notes.length-2]=null
null
notes
(11) [18, 19, 13, 1, 5, 2, 18, 16, 20, null, null]
notes.splice(1,2)
(2) [19, 13]
notes
(9) [18, 1, 5, 2, 18, 16, 20, null, null]
 */

 /**************************************todo*********************************** */
 /**
  * 
    <ul id="todo-list">
        <li>
            <p> todo </p>
            <button>delete</button>
        </li> 
    </ul>

    <input type="text" id="myInput"> <button id="addBtn">ADD</button>

  */
/********************************************************************************* */

/*
var btnAdd = document.getElementById('addBtn');
var todoList = document.getElementById('todo-list');
var myInput = document.getElementById('myInput');

let todos = [];


btnAdd.addEventListener('click',function(){
    // 1 get the value from the input

    const todoTXT = myInput.value.trim();
    
    if (todoTXT != '') {
        todos.push(
            { todo: todoTXT, date: new Date(), index: todos.length }
        )

        // empty the input feild
        myInput.value = '';

        // update UI
        initList();
    }
})


function initList(){
    let blocHTML = '';

    todos.map((t)=>{
        blocHTML+=`
        <li>
            <p> `+t.todo+` </p><br/>
            <small>`+t.date+`</small>
            <button onClick="deleteTodo(`+t.index+`)" >delete</button>
        </li> 
        `;
    })

    todoList.innerHTML = blocHTML;
}

function deleteTodo(indexFromHtml){
    

    todos.map((e,i)=>{
        const index = e.index;

        if (indexFromHtml == index) {
            // we found it 
            
            let j = i;
            todos.splice(j,1);

            initList();
        }

    })
    
}*/

