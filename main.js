const state = {
    ammoniaCount: 0,
    cancerCount: 10,
    isCancerOpen: false,
}

const buttonAmmonia= document.getElementById('button-ammonia');
const buttonMedicine= document.getElementById('button-medicine');
const moleculesContainer = document.getElementById('molecules-container');

const removeMolecule = () => {
    setTimeout(() => {
        moleculesContainer.firstChild.remove();
    }, 2000)
}

const createFlyingMolecule = (moleculeType) => {
    const flyingMolecule = document.createElement("img");
    flyingMolecule.className = `molecule-${moleculeType} flying-molecule flying-molecule-${moleculeType}`;
    flyingMolecule.alt = `flying molecule ${moleculeType}`
    flyingMolecule.height = 100;
    flyingMolecule.width = 100;

    if (moleculeType === 'ammonia') {
        flyingMolecule.src = '';
    }

    if (moleculeType === 'medicine') {
        flyingMolecule.src = '';
    }

    return flyingMolecule;
}

const fixAmmoniaCount = () => {
    if (state.ammoniaCount > state.cancerCount) state.ammoniaCount = state.cancerCount;
    if (state.ammoniaCount < 0)  state.ammoniaCount = 0;
}

const showCancer = () => {
    if (!state.isCancerOpen) {
        state.isCancerOpen = true;
        const cancerClickHandler = (event) => {
            if (event) event.stopPropagation();

            cancerElement.classList.add('liver-cancer-out-animation');
            clearTimeout(setTimeoutId);

            setTimeout(() => {
                cancerElement.remove();
                state.isCancerOpen = false;
            }, 1000);
            cancerElement.removeEventListener('click', cancerClickHandler);
        }

        document.body.appendChild(createCancerElement());
        const cancerElement = document.getElementById('liver-cancer');

        const setTimeoutId = setTimeout(() => {
            cancerClickHandler();
        }, 3000)
        cancerElement.addEventListener('click', cancerClickHandler);
    }
}

const createCancerElement = () => {
    const cancerElement = document.createElement("img");
    cancerElement.className = 'liver-cancer';
    cancerElement.id = 'liver-cancer';
    cancerElement.alt = 'liver cancer';

    return cancerElement;
}

const createLiverCancerElement = () => {
    const liverCancerElement = document.createElement("img");
    liverCancerElement.className = 'liver-with-cancer';
    liverCancerElement.id = 'liver-with-cancer';
    liverCancerElement.alt = 'liver-with-cancer';
    liverCancerElement.src = '';
    liverCancerElement.height = 300;
    liverCancerElement.width = 300;

    liverCancerElement.addEventListener('click', showCancer);

    return liverCancerElement;
}

const moleculeInsideHandler = () => {
    removeMolecule();
    fixAmmoniaCount()

    if (state.ammoniaCount === state.cancerCount) {
        setTimeout(() => {
            if (!document.getElementById('liver-with-cancer')) {
                document.getElementById('liver-container')
                    .appendChild(createLiverCancerElement());
            }
        }, 2000);

       setTimeout(showCancer, 1800);
    }

    if (state.ammoniaCount === 0) {
        setTimeout(() => {
            const liverWithCancer = document.getElementById('liver-with-cancer');

            if (liverWithCancer) {
                liverWithCancer.classList.add('liver-cancer-out-animation');

                setTimeout(() => {
                    liverWithCancer.remove();
                    liverWithCancer.removeEventListener('click', showCancer);
                }, 1000);
            }
        }, 2000);
    }
}

const addAmmoniaHandler = () => {
    const flyingAmmonia = createFlyingMolecule('ammonia')

    moleculesContainer.appendChild(flyingAmmonia);
    state.ammoniaCount += 1;

    moleculeInsideHandler();
};
const addMedicineHandler = () => {
    const flyingMedicine = createFlyingMolecule('medicine')

    moleculesContainer.appendChild(flyingMedicine);
    state.ammoniaCount -= 1;

    moleculeInsideHandler();
};

buttonAmmonia.addEventListener('click', addAmmoniaHandler);
buttonMedicine.addEventListener('click', addMedicineHandler);