//ideas property is a array of objects
const data = {
    currentUser: 'currentUser',
    ideas: [
      {
        username: 'Isaac Patel',
        content:
          'Create a travel planning and design service that helps busy entrepreneurs plan and design their trips. You can offer customized itineraries that cater to their specific needs and preferences, as well as recommendations for the best places to stay, eat, and explore.\r\n',
        score: 3,
      },
      {
        username: 'Alexander Wong',
        content:
          'Start a company that specializes in designing and manufacturing sustainable travel accessories, such as eco-friendly luggage, reusable water bottles, and travel-sized toiletries. You can market your products to environmentally-conscious travelers who want to reduce their carbon footprint.\r\n',
        score: 10,
      },
      {
        username: 'Alexander Wong',
        content:
          'Launch a design firm that specializes in creating immersive and interactive experiences for travelers. You can work with tourism boards and hospitality companies to design attractions, exhibits, and events that showcase the local culture and history.\r\n',
        score: 6,
      },
      {
        username: 'Maya Singh',
        content:
          'Build a mobile app that connects travelers with local entrepreneurs who offer unique and authentic travel experiences. The app can feature a directory of local artisans, chefs, and guides who can provide personalized tours, cooking classes, and other experiences that go beyond the typical tourist attractions.\r\n',
        score: 8,
      },
      {
        username: 'currentUser',
        content:
          'Create a line of travel-inspired clothing and accessories that combines function and style. You can design products that are both practical and fashionable, such as convertible jackets, multi-purpose bags, and wrinkle-resistant fabrics.\r\n',
        score: 3,
      },
      {
        username: 'currentUser',
        content:
          'Develop a web-based platform that connects entrepreneurs who need design services with freelance designers who specialize in travel-related projects. You can offer a range of services, such as logo design, website design, and social media graphics.\r\n',
        score: 1,
      },
      {
        username: 'Maya Singh',
        content:
          'Launch a boutique hotel chain that combines stylish design with sustainable practices. You can source local materials and work with local artisans to create unique and eco-friendly accommodations that appeal to design-savvy travelers.\r\n',
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