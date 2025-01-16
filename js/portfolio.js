const filters = document.querySelector('.filters-list ');
const list = document.querySelector('.card-list');

filters.addEventListener('click', onclick)
function onclick(e) {
   if (e.target.nodeName !== 'BUTTON') {
     return;
    }
    // const btnValue = e.target.dataset.value;
    
    // filterList(portfolioCards);
}



const portfolioCards = [
  {
    type: 'website',
    src: 'technoquack',
    alt: 'Веб-сайт с описанием команды людей',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Технокряк',
    text: 'Веб - сайт',
  },
  {
    type: 'design',
    src: 'poster',
    alt: 'Постер баскетбольной команды',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Постер New Orlean vs Golden Star',
    text: 'Дизайн',
  },
  {
    type: 'app',
    src: 'restaurant',
    alt: 'Логотип ресторана морепродуктов',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Ресторан Seafood',
    text: 'Приложение',
  },
  {
    type: 'marketing',
    src: 'project-prime',
    alt: 'Наушники',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Проект Prime',
    text: 'Маркетинг',
  },
  {
    type: 'app',
    src: 'project-boxes',
    alt: 'Картонные коробки',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Проект Boxes',
    text: 'Приложение',
  },
  {
    type: 'website',
    src: 'inspiration',
    alt: 'Веб-сайт',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Inspiration has no Border',
    text: 'Веб-сайт',
  },
  {
    type: 'design',
    src: 'edition',
    alt: 'Книга',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Издание Limited Edition',
    text: 'Дизайн',
  },
  {
    type: 'marketing',
    src: 'project-lab',
    alt: 'Логотип проекта ЛАБ',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Проект LAB',
    text: 'Маркетинг',
  },
  {
    type: 'app',
    src: 'growing-business',
    alt: 'Веб-сайт приложения для бизнеса',
    descr:
      'Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения о компании или частном лице.',
    title: 'Growing Business',
    text: 'Приложение',
  },
];

function createMarkup(arr) {
    return arr.map(
      ({  src, alt, descr, title, text }) =>
        `<li class="card-list-item"">
              <a href="" class="card-list-link">
                <div class="card-list-top-wrap">
                  <picture>
                    <source
                      media="(min-width:1200px)"
                      srcset="
                        ./images/portfolio/${src}.jpg    1x,
                        ./images/portfolio/${src}-2x.jpg 2x
                      "
                    />
                    <source
                      srcset="
                        ./images/portfolio/${src}-tab.jpg    1x,
                        ./images/portfolio/${src}-tab-2x.jpg 2x
                      "
                      media="(min-width:768px)"
                    />
                    <source
                      srcset="
                        ./images/portfolio/${src}-mob.jpg    1x,
                        ./images/portfolio/${src}-mob-2x.jpg 2x
                      "
                      media="(max-width:767px)"
                    />
                    <img src="./images/portfolio/${src}.jpg" alt=${alt} />
                  </picture>

                  <p class="card-list-top-text">
                   ${descr}
                  </p>
                </div>
                <div class="card-box">
                  <h2 class="card-list-title">${title}</h2>
                  <p class="card-list-text">${text}</p>
                </div>
              </a>
            </li> `
    ).join('');
}

// function filterList(arr) {
//     arr.filter(item => console.log(item.type === btnValue))
// }



list.insertAdjacentHTML('beforeend', createMarkup(portfolioCards));
