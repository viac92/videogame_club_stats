const playerTotalPresenceData = {
    labels: [
        'Viac',
        'Rose',
        'Forn',
        'Ale',
        'Nixon',
        'Olly'
    ],
    datasets: [{
        label: 'Presenze',
        data: [
            36,
            29,
            29,
            23,
            15,
            11
        ],
        borderWidth: 3
    }]
};

const playedGamesData = {
    labels: [
        'Halo Infinite',
        'Valheim',
        'The Finals',
        'Age of Empires 4',
        'Deep Rock Galactic',
        'Lego Fortnite',
        'PlateUp!',
        'Moving Out 2',
        'Helldivers 2',
        'Baldur\'s Gate 3',
        'Chivalry 2',
        'Clone Drone in the Danger Zone',
        'Dead by Daylight',
        'Human Fall Flat',
        'Palworld',
        'Project Zomboid',
        'Warhammer 40k: Darktide',
        'Crusader Kings 3',
        'Age of Mythology: Retold'
    ],
    datasets: [{
        label: 'Giocate',
        data: [6, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        hoverOffset: 4
    }]
};

const labelsPlayDays = [
    '18/10/2023', 
    '01/11/2023', 
    '08/11/2023', 
    '15/11/2023', 
    '22/11/2023', 
    '29/11/2023', 
    '6/12/2023', 
    '27/12/2023', 
    '3/1/2024', 
    '10/1/2024', 
    '17/1/2024', 
    '24/1/2024', 
    '31/1/2024', 
    '7/2/2024', 
    '21/2/2024', 
    '28/2/2024',
    '6/3/2024',
    '13/3/2024',
    '20/3/2024',
    '3/4/2024',
    '8/5/2024',
    '15/5/2024',
    '22/5/2024',
    '29/5//2024',
    '05/06/2024',
    '12/06/2024',
    '19/06/2024',
    '26/06/2024',
    '03/07/2024',
    '10/07/2024',
    '17/07/2024',
    '24/07/2024',
    '31/07/2024',
    '28/08/2024',
    '04/09/2024',
    '11/09/2024',
    '18/09/2024'
];

const playersPresenceByDayData = {
    labels: labelsPlayDays,
    datasets: [{
        label: 'Presenza Settimanale',
        data: [
            5, 
            5, 
            4,
            2,
            5,
            4,
            5,
            2,
            3,
            4,
            3,
            5,
            4,
            3,
            4,
            3,
            3,
            4,
            4,
            4,
            2,
            5,
            4,
            3,
            5,
            2,
            5,
            4,
            5,
            4,
            5,
            3,
            3,
            4,
            3,
            4,
            5
        ],
        fill: false,
        tension: 0.1
    }]
};

const playedGamesGenresData = {
    labels: [
        'FPS',
        'Survival',
        'Party Games',
        'RPG',
        'RTS',
        'Altro'
    ],
    datasets: [{
        label: 'Giocate',
        data: [
            13,
            8,
            5,
            2,
            4,
            4
        ],
        fill: true
    }]
}

export { playedGamesData, playersPresenceByDayData, playedGamesGenresData, playerTotalPresenceData };
