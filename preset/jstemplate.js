/* CC-BY-SA bildungssprit.de | Falk Szyba @medienrocker */

/* ----- Kompetenz-Liste -----
 * Hier werden die Kompetenzen definiert, die in der Tabelle angezeigt werden.
 * Jede Zeile zwischen START und ENDE ist eine Kompetenz.
 * Maximal 50 Kompetenzen möglich.
 * KEINE leeren Zeilen zwischen den Einträgen lassen!
 */
let kcm_competences = [
`START Hier drunter deine Kompetenzen eintragen (eine pro Zeile):
Kommunikationsfähigkeit
Teamfähigkeit
Selbstorganisation
Zeitmanagement
Problemlösekompetenz
Kritisches Denken
Kreativität
Anpassungsfähigkeit
Lernbereitschaft
Selbstreflexion
Verantwortungsbewusstsein
Zuverlässigkeit
Interkulturelle Kompetenz
Empathie
Konfliktfähigkeit
ENDE (ACHTUNG! Keine leeren Zeilen lassen!)`
];

/* ----- Kompetenzen in Tabelle einsetzen ----- */
document.addEventListener('DOMContentLoaded', function () {
    // Mehrzeiligen String in Array aufsplitten, START/ENDE-Zeilen entfernen
    kcm_competences = kcm_competences[0].split('\n').map(item => item.trim());
    kcm_competences = kcm_competences.slice(1, -1);

    const competenceCount = kcm_competences.length;

    let listView = document.getElementById('kcm_table-container-list-view');

    if (!listView) {
        // Einzelansicht / Hinzufügen-Ansicht: Platzhalter ersetzen
        const kompTds = document.querySelectorAll('td.kcm_komp');
        const tbody = document.querySelector('.kcm_table tbody');
        let lastReplacedIndex = -1;

        kompTds.forEach((td, index) => {
            if (index < kcm_competences.length) {
                td.textContent = kcm_competences[index];
                lastReplacedIndex = index;
            }
        });

        // Überzählige Zeilen entfernen (wenn weniger Kompetenzen als Zeilen)
        const rows = tbody.querySelectorAll('tr');
        for (let i = rows.length - 1; i > lastReplacedIndex; i--) {
            tbody.removeChild(rows[i]);
        }

        // Einzelansicht: Nur bewertete Zeilen anzeigen (nicht im Bearbeiten-Modus)
        const isEditMode = document.getElementById('page-mod-data-edit') ||
                           document.querySelector('#page-mod-data-edit') ||
                           document.querySelector('.basefieldinput');
        if (!isEditMode) {
            const remainingRows = tbody.querySelectorAll('tr');
            remainingRows.forEach(row => {
                const emojiCell = row.querySelector('td.kcm_emoji');
                if (emojiCell) {
                    const content = emojiCell.textContent.trim();
                    // Zeile ausblenden wenn kein Check-Wert vorhanden
                    if (!content || !(/^[123]/.test(content))) {
                        row.style.display = 'none';
                    }
                }
            });
        }
    }
});


/* ----- Datumsformat anpassen -----
 * Moodle gibt Monate als deutsche Worte aus (z.B. "5. Januar 2025").
 * Hier werden sie in numerisches Format umgewandelt (5.01.2025).
 */
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
            let day = dateParts[0].replace('.', '');
            let month = monthMapping[dateParts[1]];
            let year = dateParts[2];

            if (month) {
                dateSpan.textContent = day + '.' + month + '.' + year;
            }
        }
    });
});
