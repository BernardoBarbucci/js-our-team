// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!

// .1 array con i membri del team
const teamProfiles = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];

const customCards = document.getElementById('customCards');

for (let index = 0; index < teamProfiles.length; index++) {
    const profile = teamProfiles[index];
    customCards.innerHTML += `
    <div class="col-4 mb-4">
        <div class="profile text-center">
            <img class="profile-pic img-fluid mb-2" src="./style/img/${profile.img}" alt="profile pic">
            <div class="col-12 text-center profile-infos">
                <h1 class="profile-name mb-1">
                    ${profile.name}
                </h1>
                <p class="profile-position mb-3">
                    ${profile.position}
                </p>
            </div>
        </div>
    </div>`;
};

