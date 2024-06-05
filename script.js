
const dataList = [
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    // Add more items as needed
];

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    const totalSlides = slides.length;
    let currentSlide = 0;

    function fillGrid(slide) {
        const gridContainer = slide.querySelector('.grid-container');
        gridContainer.innerHTML = '';
        let counter = currentSlide * 12; // 4 columns * 3 rows = 12 items per slide
        const items = dataList.slice(counter, counter + 12);
        items.forEach(itemData => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            const titleElement = document.createElement('h3');
            titleElement.classList.add('item-title');
            titleElement.textContent = itemData.title;
            const descElement = document.createElement('p');
            descElement.classList.add('item-description');
            descElement.textContent = itemData.description;
            gridItem.appendChild(titleElement);
            gridItem.appendChild(descElement);
            gridContainer.appendChild(gridItem);
        });
    }

    function initCarousel() {
        fillGrid(slides[currentSlide]);
    }

    initCarousel();

    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        fillGrid(slides[currentSlide]);
    });

    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        fillGrid(slides[currentSlide]);
    });
});

