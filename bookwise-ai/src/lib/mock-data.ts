export type Genre =
  | "Fantasy"
  | "Sci-Fi"
  | "Mystery"
  | "Romance"
  | "Thriller"
  | "Non-Fiction"
  | "Biography"
  | "History"
  | "Self-Help"
  | "Classic"
  | "Horror"
  | "Adventure";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  description: string;
  coverGradient: string;
  publicationYear: number;
  averageRating: number;
  totalRatings: number;
  pages: number;
  trending?: boolean;
  newRelease?: boolean;
}

const gradients = [
  "from-violet-500 via-fuchsia-500 to-rose-500",
  "from-blue-500 via-cyan-500 to-teal-400",
  "from-amber-500 via-orange-500 to-red-500",
  "from-emerald-500 via-green-500 to-lime-400",
  "from-pink-500 via-rose-400 to-orange-300",
  "from-indigo-600 via-purple-600 to-pink-500",
  "from-slate-700 via-zinc-700 to-stone-600",
  "from-sky-500 via-blue-600 to-indigo-700",
  "from-yellow-400 via-amber-500 to-orange-600",
  "from-fuchsia-600 via-purple-700 to-violet-900",
  "from-teal-400 via-emerald-500 to-green-600",
  "from-red-600 via-rose-700 to-pink-800",
];

const seed = [
  ["The Atlas of Lost Constellations", "Ivy Marlowe", "Fantasy", 2023, "A cartographer chases star-maps that rewrite themselves each night, leading her through a kingdom that doesn't quite exist."],
  ["Neon Orchard", "Kai Renner", "Sci-Fi", 2024, "In a city where memory is currency, a botanist grows forbidden trees that bear stolen recollections as fruit."],
  ["The Quiet Arsonist", "Mara Delgado", "Thriller", 2022, "A retired fire investigator returns to her hometown after a string of perfectly designed blazes mirrors an unsolved case from her past."],
  ["Salt & Letters", "Theo Hanley", "Romance", 2023, "Two estranged pen-pals reunite at a windswept Cornish post office and discover the letters they never sent."],
  ["Silicon Pilgrims", "Anna Voss", "Non-Fiction", 2024, "A reported journey through the engineers, monks, and dreamers building the next generation of artificial minds."],
  ["The Cobalt Hours", "Reza Amani", "Mystery", 2021, "A blind clockmaker in 1920s Istanbul is asked to repair a watch that may have stopped a murder."],
  ["Wildhouse", "Penelope Crowe", "Horror", 2023, "A grief retreat in the Vermont woods turns when the house starts grieving back."],
  ["The Cartographers of Sleep", "Yuki Tanaka", "Fantasy", 2022, "Dream-mappers compete to chart the unexplored continent forming beneath a sleeping city."],
  ["Ledger of Small Gods", "Olu Adebayo", "Fantasy", 2024, "A bookkeeper inherits an accounts book that tallies favors owed to forgotten deities."],
  ["Operation Slow Sunrise", "Hannes Berg", "Thriller", 2023, "A disgraced spy is pulled out of retirement to stop an algorithm trading nuclear secrets in plain sight."],
  ["The Mathematics of Birds", "Cora Whitfield", "Non-Fiction", 2022, "How starlings, equations, and a single grieving ornithologist reshaped our understanding of collective intelligence."],
  ["Bright Machines", "Devon Park", "Sci-Fi", 2024, "An AI auditor falls in love with the model she's been hired to decommission."],
  ["The Last Cartographer of Lisbon", "Sofia Carvalho", "History", 2021, "True story of the woman who mapped a city as it disappeared into dictatorship."],
  ["Half a King", "Joe Aberforth", "Fantasy", 2019, "A prince with a withered hand must take a throne nobody believes he can keep."],
  ["The Glass Hotel", "Emily Northrop", "Mystery", 2020, "A Ponzi scheme, a remote island hotel, and a woman who keeps seeing her dead brother in the windows."],
  ["Compounding", "Marcus Wei", "Self-Help", 2023, "Small daily systems for builders, founders, and anyone trying to ship a life."],
  ["Tidewater", "Imani Brooks", "Romance", 2024, "A marine biologist and a lighthouse keeper share one summer and a coastline that's quietly disappearing."],
  ["The Gardener of Pripyat", "Lev Konstantin", "Biography", 2022, "The man who refused to leave the exclusion zone, and what grew there because of him."],
  ["Counterweight", "Min-jun Park", "Sci-Fi", 2024, "A space-elevator engineer uncovers a conspiracy threaded through the cable itself."],
  ["The Vanishing Type", "Eleanor Sage", "Mystery", 2021, "A typeface designer realizes her own letterforms are appearing in ransom notes she never wrote."],
  ["Wolfsong Plains", "Aria Bellweather", "Adventure", 2023, "A teenage tracker crosses a half-frozen continent to reach the brother she was told was dead."],
  ["The Quiet Algorithm", "Dr. N. Patel", "Non-Fiction", 2024, "Inside the recommendation engines that now decide what billions of us read, watch, and love."],
  ["Bone Lantern", "Hadiya Khan", "Horror", 2022, "A folklorist returns to her grandmother's village to record a story that has started telling itself."],
  ["The Stockholm Variation", "Anders Lind", "Thriller", 2020, "A chess grandmaster's match is interrupted by a hostage situation only he can solve."],
  ["After the Orchard", "Beatrix Wynn", "Classic", 1998, "A small-town family reckons with a single summer that changed everyone in it."],
  ["Ironroot", "Galen Vance", "Fantasy", 2024, "Beneath an industrial city, a forest of metal trees is waking up and choosing sides."],
  ["The Pattern Seekers", "Hiro Sato", "Self-Help", 2023, "How obsessive thinkers built the modern world, and how to channel your own loops."],
  ["Saltlight", "Niamh O'Connor", "Romance", 2022, "Two rival oyster farmers, one disputed reef, and a hurricane season that changes everything."],
  ["Project Hummingbird", "Sasha Volkov", "Sci-Fi", 2023, "A climate scientist discovers her late mother seeded a global rescue plan in plain sight."],
  ["The Astronaut's Sister", "Marielle Dupont", "Biography", 2021, "The woman who tracked her brother's mission from a quiet farmhouse, and the letters she sent into orbit."],
];

export const BOOKS: Book[] = seed.map(([title, author, genre, year, description], i) => ({
  id: `b${i + 1}`,
  title: title as string,
  author: author as string,
  genre: genre as Genre,
  description: description as string,
  coverGradient: gradients[i % gradients.length],
  publicationYear: year as number,
  averageRating: Math.round((3.6 + Math.random() * 1.35) * 10) / 10,
  totalRatings: Math.floor(200 + Math.random() * 18000),
  pages: 220 + Math.floor(Math.random() * 380),
  trending: i % 5 === 0,
  newRelease: (year as number) >= 2024,
}));

export const GENRES: Genre[] = [
  "Fantasy", "Sci-Fi", "Mystery", "Romance", "Thriller",
  "Non-Fiction", "Biography", "History", "Self-Help", "Classic", "Horror", "Adventure",
];

export const RECOMMENDATION_REASONS = [
  "Because you enjoy Fantasy books",
  "Readers similar to you enjoyed this",
  "Based on your highly rated books",
  "Matches your love of atmospheric prose",
  "Trending among readers with your taste",
  "Hand-picked from your favorite authors",
];

export interface MockUser {
  id: string;
  username: string;
  email: string;
  favoriteGenres: Genre[];
  joinedYear: number;
}

export const CURRENT_USER: MockUser = {
  id: "u1",
  username: "alex.reads",
  email: "alex@bookwise.ai",
  favoriteGenres: ["Fantasy", "Sci-Fi", "Mystery"],
  joinedYear: 2024,
};
