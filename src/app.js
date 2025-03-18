const inputWrapper = document.querySelector('.input-wrapper');
const friendNameInput = document.getElementById('friendName');
const buttonAdd = document.getElementById('button-add');
const buttonDraw = document.getElementById('button-draw');
const listFriends = document.getElementById('listFriends');
const result = document.getElementById('result');

let list = [];

function addFriend() {
const name = friendNameInput.value.trim();
  if (name) {
    list.push(name)
    friendNameInput.value = '';
    updateListFriends();
  } else {
    
  }
}

function updateListFriends() {
  listFriends.textContent = '';
  list.forEach((friend, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${friend}`;
    listFriends.appendChild(li);
  })
}  

function drawFriend() {
    if(list.length > 1) {
      const random = Math.floor(Math.random() * list.length);
      const winner = list[random];
      result.textContent = `O amigo secreto sorteado é ${winner}`;
    } else if(list.length < 2){
      result.textContent = 'Adicione mais amigos para sortear.'
    }
    else {
      result.textContent = 'Adicione amigos para sortear.'
    }
  }
  
inputWrapper.addEventListener('Submit', addFriend);
buttonDraw.addEventListener('Click', drawFriend);