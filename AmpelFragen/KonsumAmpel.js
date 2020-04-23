export const konsumFragenA1 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level1/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Konsum/Level1/Nachbarin.png",
            "./Bilder/Ampel/Konsum/Level1/plastikgeschirr.png",
            "./Bilder/Ampel/Konsum/Level1/pappgeschirr.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Für deine Geburtstagsparty morgen musst du noch einige Sachen besorgen. Außerdem hast du für die 20 Partygäste nicht genug Geschirr zuhause. Was machst du?",
        answers: [
            { text: "Ich leihe mir Geschirr von einem Nachbarn aus.", correct: "correct" },
            { text: "Ich kaufe praktisches Plastik-Einweggeschirr", correct: "wrong" },
            { text: "Ich kaufe praktisches Papp-Einweggeschirr aus Recyclingfasern.", correct: "ok" }
        ],
        expl: "Vorhandenes auszuleihen ist immer die beste Option. So sparst du nicht nur Geld, sondern auch Ressourcen und damit CO2 ein. Papierbecher sind meist mit Plastik beschichtet, da sie dir sonst einfach in der Hand zerlaufen würden. Der Becher landet somit im Restmüll, wobei für ein kg Abfall im Schnitt 320g CO2 anfallen."
    }
]

export const konsumFragenA2 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level2/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Konsum/Level2/mülleimer.png",
            "./Bilder/Ampel/Konsum/Level2/rucksack.png",
            "./Bilder/Ampel/Konsum/Level2/bank.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Im Einkaufszentrum hast du dir schnell eine leckere Sushi-Box to-go geholt. Was machst du mit der Plastikbox in der die Sushirollen verpackt waren?",
        answers: [
            { text: "Ich schmeiße sie einfach in den Mülleimer im Einkaufszentrum.", correct: "ok" },
            { text: "Ich nehme die Box mit nach Hause und schmeiße sie dort in den gelben Sack oder gebe sie meinen Eltern für die Wertstoffinsel mit.", correct: "correct" },
            { text: "Ich lasse die Box auf der Bank stehen, wo das Reinigungspersonal sie mitnehmen kann.", correct: "false" }
        ],
        expl: "Öffentlich aufgestellte Mülleimer sind, wenn nicht anders gekennzeichnet, immer Restmüll. Dieser wird verbrannt, wobei viel CO2 frei wird und Ressourcen einfach verschwendet werden. Kannst du Plastik nicht vermeiden, so versuche zumindest, es durch die richtige Entsorgung im gelben Sack oder einer Wertstoffinsel zu recyclen."
    },
]

export const konsumFragenA3 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level3/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Konsum/Level3/normalerblock.png",
            "./Bilder/Ampel/Konsum/Level3/recyclingblock.png",
            "./Bilder/Ampel/Konsum/Level3/chlorfreierblock.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Für die Schule brauchst du dringend einen neuen Schreibblock, welchen wählst du?",
        answers: [
            { text: "Ich nehme den Standard-Block, chlorgebleicht.", correct: "false" },
            { text: "Ich nehme den Recycling-Block.", correct: "correct" },
            { text: "Ich nehme den nicht chlorgebleichten Standardblock.", correct: "ok" }
        ],
        expl: "Recyclingpapier verbraucht pro kg 80% weniger Emissionen als chlorgebleichtes Standardpapier! Recyceltes Papier ist übrigens schon lange nicht mehr braun, bei vielen Blöcken sieht man gar keinen Unterschied mehr zum normalen Papier."
    },
]

export const konsumFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level4/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Konsum/Level4/StandardBangladesh.png",
            "./Bilder/Ampel/Konsum/Level4/StandardPolen.png",
            "./Bilder/Ampel/Konsum/Level4/BioPolen.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],

        type: "ampel",
        question: "Beim Shoppen hast du drei T-Shirts gefunden, die dir besonders gut gefallen, welches hat die beste Klimabilanz?",
        answers: [
            { text: "Standard Baumwollshirt, Made in China", correct: "wrong" },
            { text: "Standard Baumwollshirt, Made in Poland", correct: "ok" },
            { text: "Bio Baumwollshirt, Made in Poland ", correct: "correct" }
        ],
        expl: "Durch den Baumwoll-Anbau entstehen große Umweltschäden, besonders durch Pestizide und einen hohen Wasserverbrauch. Bio-Baumwolle schneidet hierbei aber deutlich besser ab. Schau im eingenähten Schildchen nach, wo das T-Shirt hergestellt wurde und kaufe am besten in Europa genähte Kleidung."
    },

]

export const konsumFragenA5 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level5/AlleHintergründe.png",
        items: [
            "./Bilder/Ampel/Konsum/Level5/restmülltonne.png",
            "./Bilder/Ampel/Konsum/Level5/gelbersack.png",
            "./Bilder/Ampel/Konsum/Level5/papiertonne.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Gerade ist zuhause die Milch ausgegangen. In welche Tonne gehört der leere Tetrapack?",
        answers: [
            { text: "In den Restmüll.", correct: "ok" },
            { text: "In den gelben Sack/ die gelbe Tonne oder zur Wertstoffinsel.", correct: "correct" },
            { text: "In die Papiertonne", correct: "false" }
        ],
        expl: "Tetrapacks können nur recycelt werden, wenn sie über den gelben Sack entsorgt werden. In vielen Städten gibt es hierfür statt dem gelben Sack öffentliche Wertstoffinseln. Auf keinen Fall darf der Getränkekarton in die Papiertonne, denn obwohl er von außen aussieht wie aus Pappe, ist im inneren Plastik verarbeitet."

    }
]







