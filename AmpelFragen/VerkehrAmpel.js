export const VerkehrFragenA1 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level1/Economy.png",
            "./Bilder/Ampel/Verkehr/Level1/Business.png",
            "./Bilder/Ampel/Verkehr/Level1/First.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Du möchtest in den Urlaub fliegen. Es gibt verschiedene Buchungsklassen, doch welche ist in Bezug auf deine CO2-Bilanz wohl die Beste?",
        answers: [
            { text: "Economy (Wenig Platz und Service)", correct: "correct" },
            { text: "Business (Mehr Platz und besseres Essen)", correct: "ok" },
            { text: "First (Oft so viel Platz, dass man die Füße ganz ausstrecken kann besonderen Service bekommt)", correct: "wrong" },
        ],
        expl: "Je mehr Platz du im Flugzeug brauchst, desto weniger Menschen finden in der Maschine Platz. Um die selbe Anzahl Personen zu befördern muss der Flieger also öfter dieselbe Route abfliegen und benötigt dafür mehr Treibstoff."
    }
]

export const VerkehrFragenA2 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level2/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level2/EScooter.png",
            "./Bilder/Ampel/Verkehr/Level2/Auto.png",
            "./Bilder/Ampel/Verkehr/Level2/Fahrrad.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Für deinen Weg zur Schule gibt es mehrere Optionen. Welche wählst du?",
        answers: [
            { text: "Escooter", correct: "ok" },
            { text: "Auto", correct: "wrong" },
            { text: "Fahrrad", correct: "correct" },
        ],
        expl: "Leihbare Scooter sind leider oft sehr schnell reif für den Müll. Die Produktion der Akkus braucht zudem viel Energie. Daher lieber Fahrradfahren oder laufen, das ist (fast) CO2-neutral. Das Auto ist die schlechteste Wahl, es benötigt selbst unter den besten Voraussetzungen etwa doppelt so viel Energie wie ein E-Scooter."
    },
]

export const VerkehrFragenA3 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level3/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level3/Dachträger.png",
            "./Bilder/Ampel/Verkehr/Level3/HalbesGepäck.png",
            "./Bilder/Ampel/Verkehr/Level3/UnnötigesGepäck.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Manchmal führt kein Weg um das Autofahren herum. Auf was sollte man dabei aber achten, weil es besonders viel Zusatz-Benzin verbraucht?",
        answers: [
            { text: "Dachträger abmontieren", correct: "correct" },
            { text: "Lieber zwei mal fahren, dafür mit weniger Ladung im Kofferraum", correct: "wrong" },
            { text: "Kofferraum leerräumen", correct: "ok" },
        ],
        expl: "Sowohl den Dachträger abzumontieren als auch unnötiges Gepäck auszuladen ist zu empfehlen, denn das verbraucht unnötige Zusatzenergie. Der Dachträger verursacht viel Windwiderstand, und verbraucht so 1 Liter Kraftstoff mehr pro 100 km. Gepäck also lieber in den Kofferraum. Doch auch hier braucht Zusatzgewicht mehr Sprit."
    }
]

export const VerkehrFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level4/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level4/Minivan.png",
            "./Bilder/Ampel/Verkehr/Level4/SUV.png",
            "./Bilder/Ampel/Verkehr/Level4/Sportwagen.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Deine Eltern wollen sich ein neues Auto kaufen. Welches hat wohl die beste Klimabilanz?",
        answers: [
            { text: "Kleinwagen", correct: "correct" },
            { text: "SUV (Stadtgeländewagen mit erhöhtem Komfort) / Geländewagen", correct: "ok" },
            { text: "Sportwagen", correct: "wrong" }
        ],
        expl: "Ein Minivan ist deutlich effizienter als ein SUV. Selbst ein Großraum-Van fährt noch sparsamer als der Geländewagen. Noch schlechter sind Sportwagen, die durch besonders starke Motoren extrem viel Benzin verbrauchen."
    }
]

export const VerkehrFragenA5 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level5/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level5/EBike.png",
            "./Bilder/Ampel/Verkehr/Level5/Elektroauto.png",
            "./Bilder/Ampel/Verkehr/Level5/ÖPNV.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Das Auto hat die schlechteste Klimabilanz im Nahverkehr. Doch welche der folgenden Alternativen ist die Zweitschlechteste?",
        answers: [
            { text: "Elektrofahrrad", correct: "wrong" },
            { text: "Elektroauto", correct: "correct" },
            { text: "Bus/Bahn/Tram", correct: "ok" }
        ],
        expl: "Ein Auto zu bewegen braucht sehr viel Energie, auch bei Strom-Antrieb. Aktuell kommt ca 70,3 % des Stroms in Deutschland aus nicht-erneuerbaren Energien. Dessen Produktion erzeugt also CO2. Bus oder Bahn sind dank hoher Auslastung effizienter, brauchen aber mehr Strom als ein Elektrofahrrad."
    }
]



