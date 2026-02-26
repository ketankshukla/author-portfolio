export interface Book {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  coverImage: string;
  color: string;
  kindleUrl?: string;
  paperbackUrl?: string;
}

export interface BoxSet {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bookIndices: number[];
}

export interface Series {
  id: string;
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  seriesUrl?: string;
  logo: string;
  landscapeCover: string;
  accentColor: string;
  accentColorRgb: string;
  books: Book[];
  boxSets?: BoxSet[];
}

export const series: Series[] = [
  {
    id: "aztec",
    name: "Aztec Samurai Adventures",
    tagline: "A Twelve-Book Epic Fantasy Saga",
    description:
      "An epic fantasy saga spanning twelve books and three acts. When the Dominion attacks, a reluctant warrior discovers she is the prophesied Blade-Bearer. She must assemble a team, forge alliances, and fight a war that will determine the fate of the world.",
    siteUrl: "https://aztec.ketanshukla.com",
    seriesUrl: "https://www.amazon.com/dp/B0GPDGDV58",
    logo: "/images/aztec/logo.png",
    landscapeCover:
      "/images/aztec/box-sets/complete-series-cover-landscape.png",
    accentColor: "#40e0d0",
    accentColorRgb: "64, 224, 208",
    books: [
      {
        id: 1,
        roman: "I",
        title: "Sunblade Rising",
        subtitle: "A Blade Forged in Light",
        coverImage: "/images/aztec/book-covers/book1-cover.png",
        color: "#40e0d0",
        kindleUrl: "https://www.amazon.com/dp/B0GPDH3C5B",
        paperbackUrl: "https://www.amazon.com/dp/B0GPJN79DV",
      },
      {
        id: 2,
        roman: "II",
        title: "The Mirror Siege",
        subtitle: "Reflections of Betrayal",
        coverImage: "/images/aztec/book-covers/book2-cover.png",
        color: "#6366f1",
        kindleUrl: "https://www.amazon.com/dp/B0GP9NW42M",
        paperbackUrl: "https://www.amazon.com/dp/B0GPP97B6S",
      },
      {
        id: 3,
        roman: "III",
        title: "Ash Oaths",
        subtitle: "Bonds Written in Blood",
        coverImage: "/images/aztec/book-covers/book3-cover.png",
        color: "#c9913b",
        kindleUrl: "https://www.amazon.com/dp/B0GPN6SNVQ",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPWBMKL",
      },
      {
        id: 4,
        roman: "IV",
        title: "The Starless Crown",
        subtitle: "The Darkness Unveiled",
        coverImage: "/images/aztec/book-covers/book4-cover.png",
        color: "#ef4444",
        kindleUrl: "https://www.amazon.com/dp/B0GPN7Q1B2",
        paperbackUrl: "https://www.amazon.com/dp/B0GPQGD3NQ",
      },
      {
        id: 5,
        roman: "V",
        title: "The Serpent's Gambit",
        subtitle: "A Spy Among Shadows",
        coverImage: "/images/aztec/book-covers/book5-cover.png",
        color: "#22c55e",
        kindleUrl: "https://www.amazon.com/dp/B0GPN6L8M6",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPP47ML",
      },
      {
        id: 6,
        roman: "VI",
        title: "Rain of Obsidian",
        subtitle: "Tides of Dark Magic",
        coverImage: "/images/aztec/book-covers/book6-cover.png",
        color: "#8b5cf6",
        kindleUrl: "https://www.amazon.com/dp/B0GPMBVC1B",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPQ2PZR",
      },
      {
        id: 7,
        roman: "VII",
        title: "Feathers and Bone",
        subtitle: "Wings of Defiance",
        coverImage: "/images/aztec/book-covers/book7-cover.png",
        color: "#ec4899",
        kindleUrl: "https://www.amazon.com/dp/B0GPNN49SY",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPTRQGH",
      },
      {
        id: 8,
        roman: "VIII",
        title: "The Shattered Blade",
        subtitle: "Forged Through Fire",
        coverImage: "/images/aztec/book-covers/book8-cover.png",
        color: "#f59e0b",
        kindleUrl: "https://www.amazon.com/dp/B0GPNJ3MHK",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPNMHL8",
      },
      {
        id: 9,
        roman: "IX",
        title: "The Forge of Souls",
        subtitle: "The Price of Power",
        coverImage: "/images/aztec/book-covers/book9-cover.png",
        color: "#f97316",
        kindleUrl: "https://www.amazon.com/dp/B0GPNK9W5D",
        paperbackUrl: "https://www.amazon.com/dp/B0GPPRDRC9",
      },
      {
        id: 10,
        roman: "X",
        title: "The Mirror Queen",
        subtitle: "Realm of Shattered Glass",
        coverImage: "/images/aztec/book-covers/book10-cover.png",
        color: "#14b8a6",
        kindleUrl: "https://www.amazon.com/dp/B0GPNRBXMK",
        paperbackUrl: "https://www.amazon.com/dp/B0GPQG1CNC",
      },
      {
        id: 11,
        roman: "XI",
        title: "Crown of Stars",
        subtitle: "The Final Siege",
        coverImage: "/images/aztec/book-covers/book11-cover.png",
        color: "#a855f7",
        kindleUrl: "https://www.amazon.com/dp/B0GPN4WNB1",
        paperbackUrl: "https://www.amazon.com/dp/B0GPQ9RXPP",
      },
      {
        id: 12,
        roman: "XII",
        title: "The Sun That Never Sets",
        subtitle: "Dawn of a New World",
        coverImage: "/images/aztec/book-covers/book12-cover.png",
        color: "#eab308",
        kindleUrl: "https://www.amazon.com/dp/B0GPNM97PJ",
        paperbackUrl: "",
      },
    ],
    boxSets: [
      {
        id: 1,
        title: "Act I — The Rising",
        subtitle: "Books 1–4",
        image: "/images/aztec/box-sets/box-set-1-landscape.png",
        bookIndices: [0, 1, 2, 3],
      },
      {
        id: 2,
        title: "Act II — The Breaking",
        subtitle: "Books 5–8",
        image: "/images/aztec/box-sets/box-set-2-landscape.png",
        bookIndices: [4, 5, 6, 7],
      },
      {
        id: 3,
        title: "Act III — The Reckoning",
        subtitle: "Books 9–12",
        image: "/images/aztec/box-sets/box-set-3-landscape.png",
        bookIndices: [8, 9, 10, 11],
      },
    ],
  },
  {
    id: "repetition",
    name: "Repetition: Mother of Mastery",
    tagline: "A Five-Book Non-Fiction Series",
    description:
      "A five-book journey from the science of repetition to the mastery of life. Discover the neuroscience, habits, real-world proof, cognitive techniques, and life integration that transform ordinary practice into extraordinary mastery.",
    siteUrl: "https://repetition.ketanshukla.com",
    seriesUrl: "https://www.amazon.com/dp/B0GNZ7B92N",
    logo: "/images/repetition/series-logo-repetition-mother-of-mastery.png",
    landscapeCover: "/images/repetition/complete-series-cover-landscape.png",
    accentColor: "#d4a843",
    accentColorRgb: "212, 168, 67",
    books: [
      {
        id: 1,
        roman: "I",
        title: "The Foundation of Mastery",
        subtitle: "The Science and Psychology of Repetition",
        coverImage: "/images/repetition/book1-cover.png",
        color: "#3b82f6",
        kindleUrl: "https://www.amazon.com/dp/B0GNYVY3GG",
        paperbackUrl: "https://www.amazon.com/dp/B0GP6P5423",
      },
      {
        id: 2,
        roman: "II",
        title: "The Habit Engine",
        subtitle: "Building Habits and the Journey to Excellence",
        coverImage: "/images/repetition/book2-cover.png",
        color: "#10b981",
        kindleUrl: "https://www.amazon.com/dp/B0GNYSFVP7",
        paperbackUrl: "https://www.amazon.com/dp/B0GP1N17RY",
      },
      {
        id: 3,
        roman: "III",
        title: "Mastery in Action",
        subtitle: "Sports, Arts, and Language",
        coverImage: "/images/repetition/book3-cover.png",
        color: "#f59e0b",
        kindleUrl: "https://www.amazon.com/dp/B0GNYJ9WHC",
        paperbackUrl: "https://www.amazon.com/dp/B0GP1CX4D6",
      },
      {
        id: 4,
        roman: "IV",
        title: "The Cognitive Edge",
        subtitle: "Memory, Learning, and Feedback",
        coverImage: "/images/repetition/book4-cover.png",
        color: "#8b5cf6",
        kindleUrl: "https://www.amazon.com/dp/B0GNWZSFHJ",
        paperbackUrl: "https://www.amazon.com/dp/B0GP21LZFT",
      },
      {
        id: 5,
        roman: "V",
        title: "Living Mastery",
        subtitle: "Routines, Growth, and Legacy",
        coverImage: "/images/repetition/book5-cover.png",
        color: "#ef4444",
        kindleUrl: "https://www.amazon.com/dp/B0GNWGD7HG",
        paperbackUrl: "https://www.amazon.com/dp/B0GP1XPM2B",
      },
    ],
  },
  {
    id: "reality",
    name: "Reality Without Belief",
    tagline: "A Five-Book Non-Fiction Series",
    description:
      "A five-book journey from the failure of belief to the freedom of reality. Dismantle belief, face reality directly, expose cultural conviction, develop clear seeing, and discover what remains when there is nothing left to defend.",
    siteUrl: "https://reality.ketanshukla.com",
    seriesUrl: "https://www.amazon.com/dp/B0GMXS6LHQ",
    logo: "/images/reality/series-logo-reality-without-belief.png",
    landscapeCover: "/images/reality/complete-series-cover-landscape.png",
    accentColor: "#00CED1",
    accentColorRgb: "0, 206, 209",
    books: [
      {
        id: 1,
        roman: "I",
        title: "The Anatomy of Belief",
        subtitle: "Why We Believe, Why It Fails, and What It Costs Us",
        coverImage: "/images/reality/book1-cover.png",
        color: "#00CED1",
        kindleUrl: "https://www.amazon.com/dp/B0GJMP6S72",
        paperbackUrl: "https://www.amazon.com/dp/B0GN2G1T8Q",
      },
      {
        id: 2,
        roman: "II",
        title: "The Nature of What Is So",
        subtitle: "Facing Reality Without Interpretation",
        coverImage: "/images/reality/book2-cover.png",
        color: "#009688",
        kindleUrl: "https://www.amazon.com/dp/B0GMGP1N5N",
        paperbackUrl: "https://www.amazon.com/dp/B0GNZZCZQN",
      },
      {
        id: 3,
        roman: "III",
        title: "The Theater of Conviction",
        subtitle: "How Culture Replaces Thinking",
        coverImage: "/images/reality/book3-cover.png",
        color: "#26A69A",
        kindleUrl: "https://www.amazon.com/dp/B0GMYF5GBK",
        paperbackUrl: "https://www.amazon.com/dp/B0GNZW5QKX",
      },
      {
        id: 4,
        roman: "IV",
        title: "The Practice of Clear Seeing",
        subtitle: "See, Listen, Decide, Respond",
        coverImage: "/images/reality/book4-cover.png",
        color: "#00BCD4",
        kindleUrl: "https://www.amazon.com/dp/B0GMY4YNWX",
        paperbackUrl: "https://www.amazon.com/dp/B0GP6WMY4Y",
      },
      {
        id: 5,
        roman: "V",
        title: "The Quiet Exit",
        subtitle: "Freedom, Loneliness, Death, and What Remains",
        coverImage: "/images/reality/book5-cover.png",
        color: "#4DD0E1",
        kindleUrl: "https://www.amazon.com/dp/B0GMY4MMJN",
        paperbackUrl: "https://www.amazon.com/dp/B0GP18MZFN",
      },
    ],
  },
];
