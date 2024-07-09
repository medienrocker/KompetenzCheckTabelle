function generateXML(repetitions) {
    const template = `<field>
<type>text</type>
<name>Anmerkung{{num}}</name>
<required>0</required>
</field>`;

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(2, '0');
        console.log(template.replace('{{num}}', formattedNumber));
    }
}

// Example usage: generate XML 20 times
generateXML(20);
