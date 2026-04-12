# Handreichung: KompetenzCheck-Tabelle

**Moodle-Datenbankaktivität — Preset für die Selbsteinschätzung von Kompetenzen**

---

## Was ist der KompetenzCheck?

Der KompetenzCheck ist ein Moodle-Datenbank-Preset, mit dem Lernende ihre Kompetenzen selbst einschätzen. Pro Kompetenz wählen sie eine von drei Stufen (Emoji-Skala) und können eine Anmerkung hinterlassen. Eine Übersicht zeigt alle Einschätzungen als Balkendiagramm.

---

## Teil A: Technik — Einrichtung und Bedienung

### 1. Preset importieren

1. Erstelle in deinem Moodle-Kurs eine neue **Datenbankaktivität**.
2. Gehe zu **Vorlagen > Vorlagen importieren**.
3. Lade die Datei `Kompetenzcheck-preset.zip` hoch und klicke auf **Importieren**.
4. Die Felder und Templates werden automatisch angelegt.

### 2. Kompetenzen eintragen (wichtigster Schritt!)

Die Kompetenzen werden **im JavaScript-Template** definiert, nicht in den Datenbankfeldern selbst.

1. Gehe zu **Vorlagen > JavaScript-Vorlage** (`jstemplate.js`).
2. Ganz oben findest du diesen Block:

```javascript
let kcm_competences = [
`START Hier drunter deine Kompetenzen eintragen (eine pro Zeile):
Ich kann gut mit Moodle umgehen
Ich kenne den Angebotsvergleich
...
ENDE (ACHTUNG! Keine leeren Zeilen lassen!)`
];
```

3. **Ersetze die Beispiel-Kompetenzen** zwischen `START` und `ENDE` durch deine eigenen. Eine Kompetenz pro Zeile.
4. **Maximal 50 Kompetenzen** sind möglich.
5. **Keine leeren Zeilen** zwischen den Kompetenzen lassen!
6. Die Zeilen `START ...` und `ENDE ...` müssen stehen bleiben.
7. Speichere die JavaScript-Vorlage.

**Beispiel:**

```javascript
let kcm_competences = [
`START Hier drunter deine Kompetenzen eintragen (eine pro Zeile):
Ich kann eine Rechnung erstellen
Ich kenne die Grundlagen der Buchführung
Ich kann ein Angebot vergleichen
Ich kann Skonto berechnen
ENDE (ACHTUNG! Keine leeren Zeilen lassen!)`
];
```

> **Hinweis:** Das JavaScript entfernt automatisch überzählige Tabellenzeilen. Wenn du z.B. nur 10 Kompetenzen einträgst, werden nur 10 Zeilen angezeigt. Die restlichen 40 verschwinden automatisch.

### 3. Bewertungsskala

Jede Kompetenz wird mit einem Dropdown bewertet:

| Wahl | Emoji | Bedeutung |
|------|-------|-----------|
| 1    | 😐    | Unsicher / Anfänger |
| 2    | 🙂    | Grundlagen vorhanden |
| 3    | 😀    | Sicher / Kompetent |

### 4. Ansichten

| Ansicht | Beschreibung |
|---------|-------------|
| **Einzelansicht** | Zeigt nur die bereits bewerteten Kompetenzen mit Emoji-Bewertung und Anmerkungen. Nicht bewertete Kompetenzen werden automatisch ausgeblendet. |
| **Hinzufügen/Bearbeiten** | Formular zum Auswählen der Bewertungen und Eintragen von Anmerkungen. Hier sind immer alle Kompetenzen sichtbar. |
| **Listenansicht** | Übersicht aller Teilnehmenden mit Balkendiagramm der Selbsteinschätzung |

### 5. Balkendiagramm (Listenansicht)

In der Listenansicht wird für jeden Teilnehmenden ein Balkendiagramm angezeigt:

- **Gelber Balken** = Stufe 1 (unsicher)
- **Hellgrüner Balken** = Stufe 2 (Grundlagen)
- **Dunkelgrüner Balken** = Stufe 3 (sicher)
- **Grauer Balken** = Noch nicht bewertet

> **Tipp:** Beim Überfahren eines Balkens mit der Maus wird der Name der zugehörigen Kompetenz als Tooltip angezeigt.

### 6. Einstellungen der Datenbankaktivität

Das Preset setzt automatisch:
- **Max. Einträge pro Teilnehmer:** 1 (jeder Lernende hat genau einen Eintrag)
- **Einträge nötig für Ansicht:** 2 (Lernende müssen erst selbst eintragen, bevor sie andere sehen)

---

## Teil B: Pädagogischer Einsatz

### Hauptszenario: Begleitende Kompetenz-Selbsteinschätzung

Setze den KompetenzCheck zu **Beginn und Ende** einer Unterrichtseinheit ein:

1. **Einstieg:** Lernende schätzen ihre Kompetenzen ein (Ist-Stand).
2. **Während der Einheit:** Optional Zwischencheck, um Fortschritte sichtbar zu machen.
3. **Abschluss:** Lernende aktualisieren ihre Einschätzung. Das Datum wird automatisch gesetzt.

Die Lehrkraft sieht in der Listenansicht auf einen Blick, wie sich die Klasse einschätzt.

### Einsatzvariante: Peer-Feedback

1. Lernende füllen den KompetenzCheck für sich aus.
2. In der Listenansicht sehen sie (nach eigenem Eintrag) die Übersicht der Mitschülerinnen und Mitschüler.
3. Der Ergebnis-Vergleich kann Grundlage für Peer-Gespräche sein.

---

*CC-BY-SA bildungssprit.de | Falk Szyba @medienrocker*
