const filters = document.querySelector('.filters-list ');
const list = document.querySelector('.card-list');

filters.addEventListener('click', onclick);
function onclick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btnValue = e.target.dataset.value;
  console.log(btnValue);
  
  const filteredCards = filterList(portfolioCards, btnValue);
  if (btnValue === 'all') {
  list.innerHTML = createMarkup(portfolioCards);
  } else {
    list.innerHTML = createMarkup(filteredCards);
  }
  
}

const portfolioCards = [
  {
    type: 'website',
    src: 'technoquack',
    alt: 'technoquack visualization',
    descr:
      'A corporate website for a technology company that develops innovative business solutions. The project includes a modern and user-friendly interface, seamless navigation, and responsive design.',
    title: 'Technoquack',
    text: 'Website',
  },
  {
    type: 'design',
    src: 'poster',
    alt: 'Poster of basketball team',
    descr:
      'A dynamic and eye-catching poster designed for a basketball match. The layout and color scheme were carefully chosen to reflect the energy and competitiveness of the game.',
    title: 'Poster New Orlean vs Golden Star',
    text: 'Design',
  },
  {
    type: 'app',
    src: 'restaurant',
    alt: 'Logo of seafood restaurant',
    descr:
      'A stylish and functional website for a seafood restaurant in the USA. It features an interactive menu, an online reservation system, and stunning visuals that enhance the user experience.',
    title: 'Seafood Restaurant',
    text: 'Application',
  },
  {
    type: 'marketing',
    src: 'project-prime',
    alt: 'Headphones',
    descr:
      'A cutting-edge web application for real-time data analytics. The platform enables businesses to track key performance indicators with intuitive dashboards and insightful reports.',
    title: 'Project Prime',
    text: 'Marketing',
  },
  {
    type: 'app',
    src: 'project-boxes',
    alt: 'Boxes image',
    descr:
      'An e-commerce website specializing in customizable cardboard packaging. The online store includes a product catalog, customization options, and a smooth checkout process to enhance customer convenience.',
    title: 'Проект Boxes',
    text: 'Application',
  },
  {
    type: 'website',
    src: 'inspiration',
    alt: 'Website',
    descr:
      'A creative website for an international art community. It serves as a platform for artists to showcase their work, collaborate, and connect with like-minded individuals worldwide.',
    title: 'Inspiration has no Border',
    text: 'Website',
  },
  {
    type: 'design',
    src: 'edition',
    alt: 'Book',
    descr:
      'The resource offers comprehensive solutions with different levels of functionality and services. This allows visitors to obtain complete information about a company or an individual.',
    title: 'Limited Edition Publication',
    text: 'Design',
  },
  {
    type: 'marketing',
    src: 'project-lab',
    alt: 'Project LAB logo',
    descr:
      'The resource offers comprehensive solutions with different levels of functionality and services. This allows visitors to obtain complete information about a company or an individual.',
    title: 'Project LAB',
    text: 'Marketing',
  },
  {
    type: 'app',
    src: 'growing-business',
    alt: 'Business application website',
    descr:
      'The resource offers comprehensive solutions with different levels of functionality and services. This allows visitors to obtain complete information about a company or an individual.',
    title: 'Growing Business',
    text: 'Application',
  },
];

function createMarkup(arr) {
  return arr
    .map(
      ({ src, alt, descr, title, text }) =>
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
    )
    .join('');
}

function filterList(arr, value) {
  return arr.filter(item => item.type === value);
}

list.insertAdjacentHTML('beforeend', createMarkup(portfolioCards))
