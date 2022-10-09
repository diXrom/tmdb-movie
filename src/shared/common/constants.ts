const ROUTE_PATH = {
  INDEX: '/',
  ABOUT_US: 'about',
  FORMS: 'forms',
  MOVIE: 'movie',
  NOT_FOUND: '404',
};

const STORAGE_KEY = 'DIXROM_SEARCH';

const MOCK_API_RESPONSE = {
  page: 1,
  results: [
    {
      id: 27205,
      title: 'Inception',
      release_date: '2010-07-15',
      vote_average: 8.4,
      poster_path: '/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg',
      overview: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
    },
    {
      id: 157336,
      title: 'Interstellar',
      release_date: '2014-11-05',
      vote_average: 8.4,
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    },
    {
      id: 155,
      title: 'The Dark Knight',
      release_date: '2008-07-14',
      vote_average: 8.5,
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      overview:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    },
    {
      id: 24428,
      title: 'The Avengers',
      release_date: '2012-04-25',
      vote_average: 7.7,
      poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
      overview:
        'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
    },
    {
      id: 293660,
      title: 'Deadpool',
      release_date: '2016-02-09',
      vote_average: 7.6,
      poster_path: '/zq8Cl3PNIDGU3iWNRoc5nEZ6pCe.jpg',
      overview:
        'The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
    },
    {
      id: 19995,
      title: 'Avatar',
      release_date: '2009-12-15',
      vote_average: 7.5,
      poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      overview:
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
    },
    {
      id: 299536,
      title: 'Avengers: Infinity War',
      release_date: '2018-04-25',
      vote_average: 8.3,
      poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      overview:
        'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    },
    {
      id: 118340,
      title: 'Guardians of the Galaxy',
      release_date: '2014-07-30',
      vote_average: 7.9,
      poster_path: '/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
      overview:
        'Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.',
    },
    {
      id: 550,
      title: 'Fight Club',
      release_date: '1999-10-15',
      vote_average: 8.4,
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    },
    {
      id: 680,
      title: 'Pulp Fiction',
      release_date: '1994-09-10',
      vote_average: 8.5,
      poster_path: '/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    },
    {
      id: 13,
      title: 'Forrest Gump',
      release_date: '1994-06-23',
      vote_average: 8.5,
      poster_path: '/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
      overview:
        'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
    },
    {
      id: 1726,
      title: 'Iron Man',
      release_date: '2008-04-30',
      vote_average: 7.6,
      poster_path: '/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
      overview:
        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    },
    {
      id: 671,
      title: "Harry Potter and the Philosopher's Stone",
      release_date: '2001-11-16',
      vote_average: 7.9,
      poster_path: '/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
      overview:
        "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    },
    {
      id: 68718,
      title: 'Django Unchained',
      release_date: '2012-12-25',
      vote_average: 8.2,
      poster_path: '/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
      overview:
        'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
    },
    {
      id: 278,
      title: 'The Shawshank Redemption',
      release_date: '1994-09-23',
      vote_average: 8.7,
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      overview:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    },
    {
      id: 603,
      title: 'The Matrix',
      release_date: '1999-03-30',
      vote_average: 8.2,
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      overview:
        'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    },
    {
      id: 299534,
      title: 'Avengers: Endgame',
      release_date: '2019-04-24',
      vote_average: 8.3,
      poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      overview:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    },
    {
      id: 597,
      title: 'Titanic',
      release_date: '1997-11-18',
      vote_average: 7.9,
      poster_path: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
      overview:
        "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    },
    {
      id: 120,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      release_date: '2001-12-18',
      vote_average: 8.4,
      poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      overview:
        'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
    },
    {
      id: 475557,
      title: 'Joker',
      release_date: '2019-10-01',
      vote_average: 8.2,
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      overview:
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    },
  ],
  total_pages: 20,
  total_results: 20,
};

export { ROUTE_PATH, STORAGE_KEY, MOCK_API_RESPONSE };
