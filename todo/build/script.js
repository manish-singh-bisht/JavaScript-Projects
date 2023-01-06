const create = document.querySelector(".createBtn");
const input = document.querySelector(".input");
const writingArea = document.querySelector(".displayArea");

class Todo {
    done(element) {
        let newData = element.parentElement.parentElement.querySelector(".display").innerHTML;
        element.parentElement.parentElement.querySelector(".display").innerHTML = `<del>${newData}</del>`;
    }
    delete(element) {
        const newData = element.parentElement.parentElement.parentElement;
        element.parentElement.parentElement.parentElement.remove(newData);
    }
    createTodo(data) {
        if (data === "") return;
        const template = `<div class=" ml-[calc(100vw-85vw)] flex max-w-fit flex-col gap-3 bg-black">
                <div class=" flex p-2 items-center">
                    <div class="display w-[42vw] break-words pr-2 text-white">${data}</div>
                    <div>
                        <button class=" rounded-md bg-yellow-300 p-4 hover:bg-yellow-500 active:bg-yellow-800" onClick="newTodo.done(this)" >DONE </button>
                        <button class=" rounded-md bg-yellow-300 p-4 hover:bg-yellow-500 active:bg-yellow-800  " onClick="newTodo.delete(this)">DELETE</button>
                    </div>
                </div>
            </div>`;
        writingArea.insertAdjacentHTML("beforeEnd", template);
        input.value = "";
    }
}
let newTodo = new Todo(writingArea);

create.addEventListener("click", () => {
    newTodo.createTodo(input.value);
});
