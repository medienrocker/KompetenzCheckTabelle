function generateHTML(repetitions) {
    let checkCounter = 1; // Counter for CheckXX fields

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(2, '0');
        let check1 = checkCounter.toString().padStart(2, '0');
        let check2 = (checkCounter + 1).toString().padStart(2, '0');
        let check3 = (checkCounter + 2).toString().padStart(2, '0');

        let html = `<tr>
    <td>Kompetenzfrage ${formattedNumber}</td>
    <td><span class="kcm_emoji">[[Check${check1}]]</span></td>
    <td><span class="kcm_emoji">[[Check${check2}]]</span></td>
    <td><span class="kcm_emoji">[[Check${check3}]]</span></td>
    <td>[[Anmerkung${formattedNumber}]]</td>
</tr>`;

        console.log(html);

        checkCounter += 3; // Increment the checkCounter by 3 for the next row
    }
}

// Example usage: generate HTML 20 times
generateHTML(20);
