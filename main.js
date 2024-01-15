const buttonAmmonia= document.getElementById('button-ammonia');
const buttonMedicine= document.getElementById('button-medicine');
const moleculesContainer = document.getElementById('molecules-container');

// const flyingAmmonia = `
//     <img class="flying-molecule-ammonia" alt="flying molecule ammonia" height="100" width="100" src="">
// `;
// const flyingMedicine = `
//     <img class="flying-molecule-medicine" alt="flying molecule medicine" height="100" width="100" src="">
// `;

const removeMolecule = () => {
    setTimeout(() => {
        moleculesContainer.firstChild.remove();
    }, 2000)
}

const addAmmoniaHandler = () => {
    const flyingAmmonia = document.createElement("img");
    flyingAmmonia.className = 'molecule-ammonia flying-molecule flying-molecule-ammonia';
    flyingAmmonia.alt = 'flying molecule ammonia'
    flyingAmmonia.src = '';
    flyingAmmonia.height = 100;
    flyingAmmonia.width = 100;

    moleculesContainer.appendChild(flyingAmmonia);

    removeMolecule();
};
const addMedicineHandler = () => {
    const flyingMedicine = document.createElement("img");
    flyingMedicine.className = 'molecule-medicine flying-molecule flying-molecule-medicine';
    flyingMedicine.alt = 'flying molecule medicine'
    flyingMedicine.src = '';
    flyingMedicine.height = 100;
    flyingMedicine.width = 100;

    moleculesContainer.appendChild(flyingMedicine);

    removeMolecule();
};

buttonAmmonia.addEventListener('click', addAmmoniaHandler);
buttonMedicine.addEventListener('click', addMedicineHandler);