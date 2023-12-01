const section3Data = [
  {
    img: "/assets/hour.jpeg",
    title: "Бесперебойная работа",
    text: `Обеспечим бесперебойную работу вашей IT-инфраструктуры`,
    btnText: "Что мне это даст"
  },
  {
    img: "/assets/keyboard.jpeg",
    title: "Оперативное управление",
    text: `Помогаем организовать оперативное управление`,
    btnText: "Что мне это даст"
  },
  {
    img: "/assets/talking.jpeg",
    title: "Анализ бизнес-процессов",
    text: `Проводим анализ бизнес-процессов и внедряем автоматизацию`,
    btnText: "Что мне это даст"
  }
]
const whatDiv = document.getElementById("what")

function renderWhatCards() {
  for (const item of section3Data) {
    whatDiv.innerHTML += `
        <div class="what__card">
            <img src="${item.img}" alt="" />
            <div class="card-content">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              <a href="">
                <span>${item.btnText} </span>
                <img src="../assets/svg/red-arrow.svg" alt="" />
              </a>
            </div>
        </div>
    `
  }
}

renderWhatCards()

const year = document.querySelector(".year")
const currentYear = new Date().getFullYear()
year.innerText = currentYear
