//ideas property is a array of objects
const data = {
    currentUser: 'currentUser',
    ideas: [
      {
        username: 'amyrobson',
        content:
          'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
        score: 3,
      },
      {
        username: 'maxblagun',
        content:
          'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
        score: 10,
      },
      {
        username: 'maxblagun',
        content:
          'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
        score: 6,
      },
      {
        username: 'maxblagun',
        content:
          'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
        score: 8,
      },
      {
        username: 'currentUser',
        content:
          'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
        score: 3,
      },
      {
        username: 'currentUser',
        content:
          'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
        score: 1,
      },
      {
        username: 'amyrobson',
        content:
          'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
        score: 7,
      },
    ],
  }

const $list = document.getElementById('list')
const $form = document.getElementById('form')
const $content = document.getElementById('content')
const $modal = document.getElementById('modal')
const $newContent = document.getElementById('newContent')
const $saveButton = document.getElementById('saveButton')
const $closeButton = document.getElementById('closeButton')
const $editForm = document.getElementById('editForm')

//add html dinamcally to the browser
function listData(){
  const html = []

  for(let i = 0; i < data.ideas.length; i++ ){
    if ('currentUser' == data.ideas[i].username) {
      html.push(`<li class="ideasBox">
                  <div class="number" id="number">
                      <button id="increase" class="bi bi-chevron-up increase" data-index="${i}"></button>
                      <div class="value">${data.ideas[i].score}</div>
                      <button id="decrease" class="bi bi-chevron-down decrease" data-index="${i}"></button>
                  </div>
                  <div>
                    <div class="current-user">
                      <h2>${data.ideas[i].username}</h2>
                      <p class="you"> You </p>
                      <div class="float">
                        <button id="delete" class="bi bi-trash2-fill delete" data-index="${i}"> Delete </button>
                        <button id="edit" class="bi bi-pen-fill" data-editindex="${i}"> Edit </button>
                      </div>
                    </div>
                    <p class="contentDisplay"> ${data.ideas[i].content} </p>
                  </div>
              </li>  <hr>`)
    } else {
      html.push(`<li class="ideasBox">
                    <div class="number" id="number">
                        <button id="increase" class="bi bi-chevron-up increase" data-index="${i}" ></button>
                        <div class="value">${data.ideas[i].score}</div>
                        <button id="decrease" class="bi bi-chevron-down decrease" data-index="${i}"></button>
                    </div>
                    <div>
                        <h2>${data.ideas[i].username}</h2>
                        <p class="contentDisplay"> ${data.ideas[i].content} </p>
                    </div>
                </li>  <hr>`)
            }
    }
    $list.innerHTML = html.join('')
}

listData()

//add new Ideas to the idea form

$form.addEventListener('submit', function (e){
  e.preventDefault()
    data.ideas.unshift({username: 'currentUser',
                    content: $content.value,
                    score: '0'})

    $form.reset()

    listData()
})

//add eventListener to Delete button

$list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const index = e.target.dataset.index

    data.ideas.splice(index, 1)

    listData()
  }
})

//add eventListener to Edit button

$list.addEventListener('click', function (e){
  if (e.target.dataset.editindex !== undefined){
    const editIdea = data.ideas[e.target.dataset.editindex]
  
    $newContent.value = editIdea.content

    $saveButton.dataset.editindex = e.target.dataset.editindex

    $modal.style.display = 'block'
  }
})

$saveButton.addEventListener('click', function (){
  const newContent = $newContent.value

  const editIndex = $saveButton.dataset.editindex

  data.ideas[editIndex].content = newContent

  listData()

  $editForm.reset()

  $modal.style.display = 'none'
})

// add eventListener to close button of the Edit Form

$closeButton.addEventListener('click', function(){
  $modal.style.display = 'none'
})


//add eventListener to buttons - upvote and downvote

$list.addEventListener('click', function (e){
    if (e.target.classList.contains('increase')){
      const index = e.target.dataset.index

      const idea = data.ideas[index]

      idea.score++
      
      listData()
    }

    if (e.target.classList.contains('decrease')){
      const index = e.target.dataset.index

      const idea = data.ideas[index]

      idea.score--
      
      listData()
    }
})