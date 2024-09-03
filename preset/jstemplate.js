let kcm_competences = [
`START Hier drunter deine Kompetenzen eintragen (eine pro Zeile):
Erste Kompetenzfrage
Zweite Kompetenzfrage
Dritte Kompetenzfrage
Vierte Kompetenzfrage
Fünfte Kompetenzfrage
Sechste K.
ENDE (ACHTUNG! Keine leeren Zeilen lassen!)`
];

document.addEventListener('DOMContentLoaded', function () {
    // Process the kcm_competences array
    kcm_competences = kcm_competences[0].split('\n').map(item => item.trim());

    // Remove the first and last entries
    kcm_competences = kcm_competences.slice(1, -1);

    // Count the number of competences
    const competenceCount = kcm_competences.length;
    console.log('Number of competences:', competenceCount);

    let listView = document.getElementById('kcm_table-container-list-view');

    if (!listView) {
        console.log('Not on List View');

        // Replace dummy competences with the ones from the array
        const kompTds = document.querySelectorAll('td.kcm_komp');
        const tbody = document.querySelector('.kcm_table tbody');
        let lastReplacedIndex = -1;

        kompTds.forEach((td, index) => {
            if (index < kcm_competences.length) {
                td.textContent = kcm_competences[index];
                lastReplacedIndex = index;
            }
        });

        // Remove excess rows
        const rows = tbody.querySelectorAll('tr');
        for (let i = rows.length - 1; i > lastReplacedIndex; i--) {
            tbody.removeChild(rows[i]);
        }
    } else {
        console.log('List View');
    }
});


// Formatänderung des moodle-Datums.
// Ausgeschriebene Monate werden zu zweistelligen Zahlen

document.addEventListener("DOMContentLoaded", function () {
    const monthMapping = {
        "Januar": "01",
        "Februar": "02",
        "März": "03",
        "April": "04",
        "Mai": "05",
        "Juni": "06",
        "Juli": "07",
        "August": "08",
        "September": "09",
        "Oktober": "10",
        "November": "11",
        "Dezember": "12"
    };

    document.querySelectorAll('.kcm_last-edit').forEach(dateSpan => {
        let dateText = dateSpan.textContent.trim();
        let dateParts = dateText.split(' ');

        if (dateParts.length === 3) {
            let day = dateParts[0].replace('.', ''); // Remove any trailing full stop from the day
            let month = monthMapping[dateParts[1]];
            let year = dateParts[2];

            if (month) {
                let formattedDate = `${day}.${month}.${year}`;
                dateSpan.textContent = formattedDate;
            }
        }
    });
});