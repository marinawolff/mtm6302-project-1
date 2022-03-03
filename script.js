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

const $form = document.getElementById('form');
const $completed = document.getElementById('completed');
const $list = document.getElementById('list');

//User innerHTML on list variable to add content

function allList(){
    //Create a data array
    const dataList = []

    //use loop to interate over content
    for(let i = 0; i < 7; i++ ){
        dataList.push(`<li class="ideasBox">
                            <div class="number" id="a">
                                <button class="bi bi-chevron-up"></button>
                                <div class="value">${data['ideas']}</div>
                                <button class="bi bi-chevron-down"></button>
                            </div>
                            <div>
                                <h2> ${data['ideas'][i]['username']} </h2>
                                <p> ${data['ideas'][i]} </p>
                            </div>
                        </li>`)
    }

  $list.innerHTML = dataList.join('')
}

console.log(data['ideas'].length);
console.log(data['ideas'][0]['username']);


// const html = []

// for (const datas of data){
//     html.push(
//         `<div>
//             <h1>${data.username}</h1>
//             <p>${data.content}</p>
//         </div>`
//     )
// }

// ideaForum.innerHTML = html.join('')