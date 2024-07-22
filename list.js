let taskN = document.getElementById("task-name");
let taskN1 = document.getElementById("sub");
let arr2 = []

taskN.onblur = function () {
    if (taskN.value !== "") {
        taskN1.onsubmit = function (e) {
            e.preventDefault();

            arr2.push({ id: Math.random(), title: taskN.value });
            console.log(arr2)
            taskN.value = "";
            localStorage.setItem("tasks", JSON.stringify(arr2));
            let cardFull = document.createElement("div");
            cardFull.className = "card";
            cardFull.classList.add("result");
            cardFull.style.cssText = "height: 100%;"; //---------
            document.body.appendChild(cardFull);
            let cardSub = document.createElement("div");
            cardSub.className = "card";
            cardSub.style.cssText = "width:90%;height:60px;margin:10px ;margin-left: 30px;";//---------------
            cardFull.appendChild(cardSub);
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            cardBody.classList.add("row");
            cardSub.appendChild(cardBody);
            let cardCol6 = document.createElement("div");
            cardCol6.className = "col-6";
            cardBody.appendChild(cardCol6);
            let h5 = document.createElement("h5");
            h5.style.cssText = "text-align: center;";//-------------
            h5.title = "task1";
            // task name=--------------------------



            var tasksJson = localStorage.getItem('tasks');


            // Step 2: Parse the JSON string into an array of objects
            var tasksArray = JSON.parse(tasksJson);
            for (let i = 0; i < tasksArray.length; i++) {
                h5.innerText = tasksArray[i].title;
            }
            // h5.innerText = taskName;
            // task name=--------------------------
            cardCol6.appendChild(h5);
            let cardCol6V2 = document.createElement("div");
            cardCol6V2.className = "col-6";
            cardBody.appendChild(cardCol6V2);
            let btn = document.createElement("button");
            btn.className = "btn";
            btn.classList.add("btn-danger");//--------------
            btn.classList.add("addBtn");//--------------
            btn.type = "submit";
            btn.innerText = "delete";
            btn.id = "delete-action";
            cardCol6V2.appendChild(btn);

            btn.onclick = function () {
                for (let w = 0; w < tasksArray.length; w++) {
                    if (h5.innerText == tasksArray[w].title) {
                        // Step 4: Remove the element from the array
                        if (tasksArray[w].title !=1 ) {
                            tasksArray.splice(w, 1);
                            cardFull.remove();
                        }
                    // Step 5: Update the local storage with the modified data
                        localStorage.setItem('tasks', JSON.stringify(tasksArray));
                        if(tasksArray.length==0){
                            localStorage.removeItem("tasks");
                        }
                    }
                }
            }


        }
        
    }


}
// for refresh 
if(localStorage.getItem("tasks")){
    let tasksJson2 = localStorage.getItem('tasks');
    let tasksArray2 = JSON.parse(tasksJson2);
    let cardFull = document.createElement("div");
    cardFull.className = "card";
    cardFull.id = "AllCards";
    cardFull.classList.add("result");
    cardFull.style.cssText = "height: 100%;";
    for (let w = 0; w < tasksArray2.length; w++) {
    document.body.appendChild(cardFull);
    let cardSub = document.createElement("div");
    cardSub.className = "card";
    cardSub.style.cssText = "width:90%;height:60px;margin:10px ;margin-left: 30px;";
    cardFull.appendChild(cardSub);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.classList.add("row");
    cardSub.appendChild(cardBody);
    let cardCol6 = document.createElement("div");
    cardCol6.className = "col-6";
    cardCol6.id = "allCol";
    cardBody.appendChild(cardCol6);
    // let h5 = document.createElement("h5");
    // h5.style.cssText = "text-align: center;";
    // h5.title = "task1";
    let h5 = document.createElement("h5");
    h5.style.cssText = "text-align: center;";
    h5.className = "task-name";
    h5.title = "task1";
    // task name=--------------------------

        h5.innerText=tasksArray2[w].title;
        cardCol6.appendChild(h5);

    // task name=--------------------------
    // cardCol6.appendChild(h5);
    let cardCol6V2 = document.createElement("div");
    cardCol6V2.className = "col-6";
    cardBody.appendChild(cardCol6V2);
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.classList.add("btn-danger");
    btn.classList.add("addBtn");//--------------
    btn.type = "submit";
    btn.innerText = "delete";
    btn.id = "delete-action";
    cardCol6V2.appendChild(btn);

    
    btn.onclick = function () {
        let h5T=document.querySelector(".task-name");
        for (let w = 0; w < tasksArray2.length; w++) {
            if (h5T.innerText == tasksArray2[w].title) {
                // Step 4: Remove the element from the array
                if (tasksArray2[w].title !=1 ) {
                    tasksArray2.splice(w, 1);
                    cardFull.remove();
                }
            // Step 5: Update the local storage with the modified data
                localStorage.setItem('tasks', JSON.stringify(tasksArray2));
                if(tasksArray2.length==0){
                    localStorage.removeItem("tasks");
                }
            }
        }
    }
}

}


