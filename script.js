let dataGame = { date: "", duration: "", playersAndCharacters: [], typeOfGame: "" };

let players = [{ id: "maeva", name: "Maéva", victory: 3, games: 4 }, { id: "loic", name: "Loïc", victory: 1, games: 4 }, { id: "emmanuel", name: "Emmanuel", victory: 0, games: 1 }, { id: "helene", name: "Hélène", victory: 0, games: 1 }];

let characters = [{ name: "Zeus", victory: 0 }, { name: "Hades", victory: 0 }, { name: "Poséidon", victory: 0 }, { name: "Athena", victory: 0 }, { name: "Hermes", victory: 0 }, { name: "Apollon", victory: 0 }, { name: "Ares", victory: 0 }, { name: "Aphrodite", victory: 0 }];

let gamesType = [{ type: "Chronos", total: 0 }, { type: "Classique", total: 0 }, { type: "Duel", total: 0 }];

let totalTimePlayed = 0;

const formData = document.getElementById("formData");
const formPlayers = document.getElementById("formPlayers");
const dateJeu = document.getElementById("dateJeu");
const dureeJeu = document.getElementById("dureeJeu");
const typeGameSelect = document.getElementById("typeGameSelect");
const saveGame = document.getElementById("saveGame");
const gamesData = document.getElementById("gamesData");
// À DÉGAGER APRÈS LA PROD
const boxSelectedPlayers = document.getElementById("boxSelectedPlayers");

formPlayers.addEventListener("click", function(e) {
  if (e.target.tagName.toUpperCase() == 'INPUT' && e.target.type.toUpperCase() == 'CHECKBOX') {
    selectPlayers(e.target);
  }
})

dateJeu.addEventListener("change", function(e) {
  setDateGame(e);
})

dureeJeu.addEventListener("change", function(e) {
  setTimeGame(e);
})

typeGameSelect.addEventListener("change", function(e) {
  selectTypeGame(e);
})

saveGame.addEventListener("click", function(e) {
  e.preventDefault();
  checkDatas(dataGame);
})

// À DÉGAGER APRÈS LA PROD
const showAllTheData = () => {
  boxSelectedPlayers.innerHTML = ``;
  const span = document.createElement("span");
  let str = JSON.stringify(dataGame, null, 4);
  span.innerHTML = str;
  boxSelectedPlayers.appendChild(span);
}

const checkDatas = (datas) => {
  let empty = 0
  for (const data in datas) {
    if (!datas[data].length) {
      empty++;
    }
  }
  if (empty > 0) {
    alert("Remplir tous les champs");
  } else {
    saveDatas(dataGame);
    resetForm();
  }
}

const saveDatas = (datas) => {
  console.log(datas);
}

const setDateGame = (elem) => {
  const value = elem.target.value;
  dataGame.date = value;
  showAllTheData();
}

const setTimeGame = (elem) => {
  const value = elem.target.value;
  dataGame.duration = value;
  showAllTheData();
}

const selectTypeGame = (elem) => {
  const value = elem.target.value;
  dataGame.typeOfGame = value;
  showAllTheData();
}

const selectPlayers = (elem) => {
  const index = dataGame.playersAndCharacters.findIndex(e => e.player === elem.name);
  if (elem.checked && index < 0) {
    dataGame.playersAndCharacters.push({ id: elem.id, player: elem.name, character: "", score: 0, upgrades: 0 });
    showOptionCharacters(elem);
  } else {
    dataGame.playersAndCharacters.splice(index, 1);
    hideOptionCharacters(elem);
  }
  // À DÉGAGER APRÈS LA PROD
  showAllTheData();
}

const selectCharacter = (elem) => {
  const id = elem.dataset.name;
  const value = elem.value;
  const index = dataGame.playersAndCharacters.findIndex(e => e.id === id);
  dataGame.playersAndCharacters[index].character = value;
  showAllTheData();
}

const setNumbers = (elem) => {
  const id = elem.dataset.name;
  const value = elem.value;
  const index = dataGame.playersAndCharacters.findIndex(e => e.id === id);
  if (elem.classList.contains("numberPoints")) {
    dataGame.playersAndCharacters[index].score = value;
  } else if (elem.classList.contains("numberUpgrades")) {
    dataGame.playersAndCharacters[index].upgrades = value;
  }
  showAllTheData();
}

const showOptionCharacters = (e) => {
  const parent = e.parentElement;
  const optionsCharacter = document.createElement("div");
  optionsCharacter.setAttribute("class", "optionsCharacter");

  const selectCharacters = document.createElement("select");
  selectCharacters.setAttribute("class", "selectCharacter");
  selectCharacters.setAttribute("data-name", e.id);
  const opt1 = document.createElement("option");
  const opt2 = document.createElement("option");
  const opt3 = document.createElement("option");
  const opt4 = document.createElement("option");
  const opt5 = document.createElement("option");
  const opt6 = document.createElement("option");
  const opt7 = document.createElement("option");
  const opt8 = document.createElement("option");
  const opt9 = document.createElement("option");
  opt1.value = "";
  opt1.text = "Choisir un Olympien";
  opt2.value = "Aphrodite";
  opt2.text = "Aphrodite";
  opt3.value = "Apollon";
  opt3.text = "Apollon";
  opt4.value = "Ares";
  opt4.text = "Ares";
  opt5.value = "Athéna";
  opt5.text = "Athéna";
  opt6.value = "Hades";
  opt6.text = "Hades";
  opt7.value = "Hermes";
  opt7.text = "Hermes";
  opt8.value = "Poséidon";
  opt8.text = "Poséidon";
  opt9.value = "Zeus";
  opt9.text = "Zeus";
  selectCharacters.add(opt1, null);
  selectCharacters.add(opt2, null);
  selectCharacters.add(opt3, null);
  selectCharacters.add(opt4, null);
  selectCharacters.add(opt5, null);
  selectCharacters.add(opt6, null);
  selectCharacters.add(opt7, null);
  selectCharacters.add(opt8, null);
  selectCharacters.add(opt9, null);

  const numberPoints = document.createElement("div");
  const numberPointsLegend = document.createElement("legend");
  const numberPointsInput = document.createElement("input");

  numberPointsLegend.innerText = "Combien de points ?";
  numberPointsInput.setAttribute("type", "number");
  numberPointsInput.setAttribute("class", "numberPoints");
  numberPointsInput.setAttribute("data-name", e.id);
  numberPoints.appendChild(numberPointsLegend);
  numberPoints.appendChild(numberPointsInput);

  const numberUpgrades = document.createElement("div");
  const numberUpgradesLegend = document.createElement("legend");
  const numberUpgradesInput = document.createElement("input");

  numberUpgradesLegend.innerText = "Combien d'améliorations ?";
  numberUpgradesInput.setAttribute("type", "number");
  numberUpgradesInput.setAttribute("class", "numberUpgrades");
  numberUpgradesInput.setAttribute("data-name", e.id);
  numberUpgrades.appendChild(numberUpgradesLegend);
  numberUpgrades.appendChild(numberUpgradesInput);

  optionsCharacter.appendChild(selectCharacters);
  optionsCharacter.appendChild(numberPoints);
  optionsCharacter.appendChild(numberUpgrades);

  parent.appendChild(optionsCharacter);

  selectCharacters.addEventListener("change", function(e) {
    selectCharacter(e.target);
  })

  numberPointsInput.addEventListener("change", function(e) {
    setNumbers(e.target);
  })

  numberPointsInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setNumbers(e.target);
    }
  });

  numberUpgradesInput.addEventListener("change", function(e) {
    setNumbers(e.target);
  })

  numberUpgradesInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setNumbers(e.target);
    }
  });

}

const hideOptionCharacters = (e) => {
  const parent = e.parentElement;
  const toDelete = parent.querySelector(".optionsCharacter");
  toDelete.remove();
}

const setupForm = (players, formPlayers) => {
  players.forEach((player) => {
    let divPlayer = document.createElement("div");
    divPlayer.setAttribute("class", player.id);
    let labelPlayer = document.createElement("label");
    labelPlayer.innerHTML = `${player.name}`;
    let inputPlayer = document.createElement("input");
    inputPlayer.setAttribute("type", "checkbox");
    inputPlayer.setAttribute("id", player.name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
    inputPlayer.setAttribute("name", player.name);
    divPlayer.appendChild(inputPlayer);
    divPlayer.appendChild(labelPlayer);
    formPlayers.appendChild(divPlayer);
  })
}

const resetForm = () => {
  console.log("Reset");
}

setupForm(players, formPlayers);
