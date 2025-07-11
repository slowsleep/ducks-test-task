import Header from './components/Header.js';
import MainSection from './components/MainSection.js';
import SlideDownMenu from './components/SlideDownMenu.js';
import getAbsoluteHeight from './helpers/getAbsoluteHeight.js';
import FormPopUp from './components/FormPopUp.js';

function App() {
    const fragment = document.createDocumentFragment();

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'hidden');

    const formPopUp = FormPopUp(overlay);
    const slideDownMenu = SlideDownMenu(formPopUp);
    const header = Header(overlay, slideDownMenu, formPopUp);

    header.appendChild(slideDownMenu);
    fragment.appendChild(header);
    fragment.appendChild(overlay);

    const mainSection = MainSection();
    fragment.appendChild(mainSection);

    fragment.appendChild(formPopUp);

    // Устанавливаем высоту header после добавления в DOM
    setTimeout(() => {
        // надо брать высоту именно .header
        document.documentElement.style.setProperty('--header-height', getAbsoluteHeight('.header') + 'px');
    }, 1000);

    return fragment;
}

export default App;
