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
//generateXML(25);

function generateXMLCHecks(repetitions) {
    const template = `<field>
<type>menu</type>
<name>Check{{num}}</name>
<required>0</required>
<param1>1&#x1F610;
2&#x1F642;
3&#x1F600;</param1>
</field>`;

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(2, '0');
        console.log(template.replace('{{num}}', formattedNumber));
    }
}

// Example usage: generate XML 20 times
generateXML(75);
