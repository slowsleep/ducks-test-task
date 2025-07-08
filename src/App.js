import Header from './components/Header.js';
import MainSection from './components/MainSection.js';

function App() {
    const container = document.createElement('div');

    const header = Header();
    container.appendChild(header);

    const mainSection = MainSection();
    container.appendChild(mainSection);

    return container;
}

export default App;
