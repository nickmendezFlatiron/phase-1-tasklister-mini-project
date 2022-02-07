document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let userInput = e.target.new_task_description.value
    buildList(userInput);
    form.reset()
  })
});

function buildList(item) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  li.innerText = item
  btn.innerText = ' Delete'
  btn.addEventListener('click', (e) =>{
    e.target.parentNode.remove()
  })
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}