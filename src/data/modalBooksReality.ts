export interface Chapter {
  number: number;
  title: string;
  summary: string;
}

export interface ModalBook {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  act?: string;
  focusCharacter?: string;
  epigraph: { quote: string; author: string };
  elaborateDescription: string;
  coverImage: string;
  chapters: Chapter[];
  color: string;
  kindleUrl?: string;
  paperbackUrl?: string;
}

export const realityBooks: ModalBook[] = [
  {
    id: 1,
    roman: "I",
    title: "The Anatomy of Belief",
    subtitle: "Why We Believe, Why It Fails, and What It Costs Us",
    epigraph: {
      quote:
        "What's so is what's so. What isn't so is what isn't so. It's not even that what's so is what's so, because that's saying something about what's so.",
      author: "Werner Erhard",
    },
    elaborateDescription:
      "What if the most powerful thing you could do for your life is stop believing — and start seeing? You were taught that believing is noble, that certainty is strength, that conviction signals character. But what if none of that is true? This groundbreaking first volume systematically dismantles the assumption that belief is inherently valuable — showing that belief, disbelief, conviction, and certainty are all psychological postures disconnected from truth. It examines the emotional economy that keeps you invested in positions that limit your life, reveals how identity fuses with belief to create invisible prisons, and exposes why humans prefer stories over reality. You will discover why the addiction to being right costs you more than you realize, why certainty is a comfort rather than a guarantee, and why facts do not negotiate. What remains when belief falls away is clarity, freedom, and a direct relationship with reality that is more powerful, more honest, and more alive than anything belief could ever provide.",
    coverImage: "/images/reality/book1-cover.png",
    color: "#00CED1",
    kindleUrl: "https://www.amazon.com/dp/B0GJMP6S72",
    paperbackUrl: "https://www.amazon.com/dp/B0GN2G1T8Q",
    chapters: [
      { number: 1, title: "Belief Is Not a Virtue", summary: "Dismantles the cultural assumption that believing is inherently noble, revealing belief as a psychological posture rather than a moral achievement." },
      { number: 2, title: "Disbelief Is Not Intelligence", summary: "Shows that rejecting beliefs is the mirror image of holding them — true clarity lies beyond both believing and disbelieving." },
      { number: 3, title: "Why Conviction Proves Nothing", summary: "Demonstrates that the strength of your conviction has zero bearing on truth — intensity is not evidence." },
      { number: 4, title: "The Emotional Economy of Belief", summary: "Reveals the hidden emotional investments that keep you attached to beliefs — comfort, belonging, identity, and the feeling of being right." },
      { number: 5, title: "Identity as a Belief Trap", summary: "Exposes how identity fuses with belief to create invisible prisons — and shows how to walk out of them." },
      { number: 6, title: "Why Humans Prefer Stories Over Reality", summary: "Examines the extraordinary power available when you choose reality over the comfortable narratives humans instinctively prefer." },
      { number: 7, title: "Certainty as Psychological Comfort", summary: "Shows that certainty is a comfort, not a guarantee — and that the willingness to be uncertain is one of the greatest strengths you can develop." },
      { number: 8, title: "The Addiction to Being Right", summary: "Reveals why the addiction to being right costs you more than you realize — and what extraordinary capability replaces it." },
      { number: 9, title: "Reality Needs No Permission", summary: "Establishes that reality does not need your permission to be what it is — and why aligning with it changes everything." },
      { number: 10, title: "Facts Do Not Negotiate", summary: "The culminating insight: facts do not negotiate, and that is the most liberating truth you will ever encounter." },
    ],
  },
  {
    id: 2,
    roman: "II",
    title: "The Nature of What Is So",
    subtitle: "Facing Reality Without Interpretation, Meaning, or Comfort",
    epigraph: {
      quote: "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
      author: "Richard Feynman",
    },
    elaborateDescription:
      "The universe is indifferent to your existence. And that is the most liberating truth you will ever discover. Having dismantled belief in Book 1, this volume turns to the nature of reality itself. It establishes that consequences are causal rather than moral, that evidence must be followed over preference, and that truth and meaning are fundamentally different things. It confronts you with cosmic indifference and introduces the discipline of accuracy — showing that developing this discipline is one of the most empowering things you will ever do. You will discover what life actually feels like when the mental commentary falls silent, why debates never resolve anything, why believers and skeptics are mirror images of the same limitation, how science becomes a trap when it becomes an identity, and how spirituality functions as narrative shelter. What you find here is more solid, more real, and more alive than any belief ever was.",
    coverImage: "/images/reality/book2-cover.png",
    color: "#009688",
    kindleUrl: "https://www.amazon.com/dp/B0GMGP1N5N",
    paperbackUrl: "https://www.amazon.com/dp/B0GNZZCZQN",
    chapters: [
      { number: 11, title: "Consequences Are Not Moral", summary: "Establishes that consequences are causal, not moral — and the extraordinary clarity that comes from seeing them accurately." },
      { number: 12, title: "Evidence Versus Preference", summary: "Reveals why evidence and preference are at war inside your mind — and how letting evidence win changes everything." },
      { number: 13, title: "The Difference Between Truth and Meaning", summary: "The crucial distinction that will revolutionize how you think about every important question in your life." },
      { number: 14, title: "Why Reality Is Indifferent", summary: "Shows why the universe's indifference is freedom, not tragedy — and why this recognition opens doors that belief keeps permanently shut." },
      { number: 15, title: "The Discipline of Accuracy", summary: "Introduces accuracy as a discipline — and shows why developing it is one of the most empowering things you will ever do." },
      { number: 16, title: "Living Without Interpretive Noise", summary: "Discovers what life actually feels like when the mental commentary falls silent — direct, vivid, and extraordinarily alive." },
      { number: 17, title: "Why Debates Never Resolve Anything", summary: "Shows why debates are structurally incapable of producing resolution — and what genuine understanding looks like instead." },
      { number: 18, title: "Believers and Skeptics as Mirror Images", summary: "Reveals that believers and skeptics are mirror images of the same limitation — and introduces the powerful third option that transcends both." },
      { number: 19, title: "Science Misused as Identity", summary: "Shows how science becomes a trap when it becomes an identity — and how to use it as the extraordinary tool it actually is." },
      { number: 20, title: "Spirituality as Narrative Shelter", summary: "Examines how spirituality functions as narrative shelter — and what becomes available when you step out of that shelter into the open." },
    ],
  },
  {
    id: 3,
    roman: "III",
    title: "The Theater of Conviction",
    subtitle: "How Culture, Identity, and Outrage Replace Thinking",
    epigraph: {
      quote: "The most dangerous man to any government is the man who is able to think things out for himself.",
      author: "H. L. Mencken",
    },
    elaborateDescription:
      "What if almost everything you call thinking is actually a performance — and there is something far more powerful on the other side? This is the pivot point of the series. It first exposes how belief operates in social and cultural systems — rationalism used as ego armor, opinions traded as social currency, outrage as a mechanism for reinforcing beliefs rather than examining them, and online discourse as a structurally broken theater. Then it pivots toward what becomes possible when belief is removed: direct responsibility without excuses, choice without the need for justification, accountability without blame, action without certainty, living without the projected futures of hope and fear, and the primacy of discipline over motivation. Once you see the theater for what it is, you gain access to something extraordinary: the ability to act from genuine clarity rather than borrowed conviction.",
    coverImage: "/images/reality/book3-cover.png",
    color: "#26A69A",
    kindleUrl: "https://www.amazon.com/dp/B0GMYF5GBK",
    paperbackUrl: "https://www.amazon.com/dp/B0GNZW5QKX",
    chapters: [
      { number: 21, title: "Rationalism as Ego Armor", summary: "Exposes the profound difference between genuinely using reason and hiding behind it as ego armor." },
      { number: 22, title: "The Social Currency of Opinions", summary: "Reveals why your opinions function as social signals — and the freedom that comes from holding them lightly." },
      { number: 23, title: "Outrage as Belief Reinforcement", summary: "Shows why outrage reinforces belief instead of challenging it — and how stepping out of the outrage cycle gives you genuine discernment." },
      { number: 24, title: "Why Online Discourse Is Structurally Broken", summary: "Demonstrates that online discourse is broken by design, not by bad actors — and what authentic communication looks like outside the broken system." },
      { number: 25, title: "Removing Belief Removes Excuses", summary: "Shows what happens when you stop using beliefs as excuses — and discover the extraordinary power of owning your choices directly." },
      { number: 26, title: "Choice Without Justification", summary: "Reveals how to choose without justification — and why the ability to act without elaborate reasons is a mark of genuine strength." },
      { number: 27, title: "Accountability Without Blame", summary: "Introduces the liberating difference between accountability and blame — and how separating them transforms your relationships." },
      { number: 28, title: "Action Without Certainty", summary: "Shows how to act without certainty — discovering that decisive action in the face of uncertainty is one of the most powerful capacities you can develop." },
      { number: 29, title: "Living Without Hope or Fear", summary: "Reveals how to live without the projections of hope and fear — and the remarkable presence that becomes available when you stop living in an imagined future." },
      { number: 30, title: "Discipline Over Motivation", summary: "The culminating insight: discipline will carry you where motivation never could — the most empowering realization in the entire series." },
    ],
  },
  {
    id: 4,
    roman: "IV",
    title: "The Practice of Clear Seeing",
    subtitle: "How to See, Listen, Decide, and Respond Without Belief",
    epigraph: {
      quote: "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
      author: "Shunryu Suzuki",
    },
    elaborateDescription:
      "This is where everything changes. This is where understanding becomes a way of life. You can understand that belief distorts perception — but can you actually see clearly in the heat of the moment? This book bridges that gap. It develops the capacity to choose clarity over reassurance, end dependence on external validation, see without interpretation, listen without agenda, decide without narrative, and act without ideology. It then addresses the hardest moments — letting reality correct you, handling being wrong with power, standing in not-knowing with confidence, and functioning when nothing makes sense. The practices in these pages will transform not just how you think, but how you see, how you listen, how you decide, and how you respond to everything life puts in front of you. This is not philosophy. This is practice. This is how you actually live in reality.",
    coverImage: "/images/reality/book4-cover.png",
    color: "#00BCD4",
    kindleUrl: "https://www.amazon.com/dp/B0GMY4YNWX",
    paperbackUrl: "https://www.amazon.com/dp/B0GP6WMY4Y",
    chapters: [
      { number: 31, title: "Clarity Over Reassurance", summary: "Develops the capacity to choose clarity over reassurance — discovering that clarity is the most powerful foundation you can build your life on." },
      { number: 32, title: "The End of External Validation", summary: "Ends the dependency on external validation — experiencing the extraordinary strength of making choices from your own direct seeing." },
      { number: 33, title: "Seeing Without Interpretation", summary: "Develops the ability to catch the moment when raw experience becomes a constructed story, giving you a choice you never had before." },
      { number: 34, title: "Listening Without Agenda", summary: "Discovers what genuine connection feels like when you actually receive what someone is communicating instead of filtering it." },
      { number: 35, title: "Deciding Without Narrative", summary: "Experiences the remarkable speed, clarity, and confidence that come from making choices without elaborate justifying stories." },
      { number: 36, title: "Acting Without Ideology", summary: "Takes each situation on its own terms, responding to what is actually there rather than to what a framework tells you should be there." },
      { number: 37, title: "Letting Reality Correct You", summary: "Discovers that welcoming correction is the fastest, most empowering path to accuracy and growth." },
      { number: 38, title: "When You Are Wrong", summary: "Discovers that wrongness faced honestly is always an advance, never a defeat — the power in those three words: I was wrong." },
      { number: 39, title: "When You Don't Know", summary: "Finds that honest uncertainty is more workable, more powerful, and more honest than false certainty has ever been." },
      { number: 40, title: "When Nothing Makes Sense", summary: "Discovers that the collapse of meaning is not the end of your effectiveness but the beginning of a deeper kind of engagement." },
    ],
  },
  {
    id: 5,
    roman: "V",
    title: "The Quiet Exit",
    subtitle: "Freedom, Loneliness, Death, and What Remains",
    epigraph: {
      quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts",
    },
    elaborateDescription:
      "This is the book that changes everything. This is where you discover what you truly are when everything borrowed has been returned. There is a kind of freedom that most people never experience — not because it is hidden, but because it requires releasing everything they have been holding onto. Identity. Narrative. The need to be right. The need to be someone. When all of that is set down — not destroyed, not denied, but simply set down — what remains is extraordinary. This final volume addresses the real-world costs of this orientation — leaving belief communities, losing social belonging, and the loneliness of walking a path most people do not walk. Then it moves into the deepest territory: freedom without identity, peace without meaning, living without explanation, facing death without belief, releasing the myth of legacy, and arriving at the place where there is nothing left to defend. The quiet exit is not a loss. It is an arrival. And what you arrive at is more real, more powerful, and more alive than anything you have ever experienced.",
    coverImage: "/images/reality/book5-cover.png",
    color: "#4DD0E1",
    kindleUrl: "https://www.amazon.com/dp/B0GMY4MMJN",
    paperbackUrl: "https://www.amazon.com/dp/B0GP18MZFN",
    chapters: [
      { number: 41, title: "Leaving Belief Communities", summary: "Faces what it means to leave belief communities — and the remarkable integrity that comes from choosing truth over comfortable belonging." },
      { number: 42, title: "Losing Social Belonging", summary: "Addresses what it means to outgrow social belonging — and the deeper, more authentic connections that become possible when you stop performing." },
      { number: 43, title: "Why This Path Is Lonely", summary: "Acknowledges that this path includes solitude — and reveals why that solitude is spaciousness, not emptiness." },
      { number: 44, title: "Freedom Without Identity", summary: "The breathtaking discovery that you do not need to be anyone in particular to live fully, powerfully, and with complete presence." },
      { number: 45, title: "Peace Without Meaning", summary: "The profound recognition that peace does not depend on answers, and that life without cosmic justification is more vivid and more real." },
      { number: 46, title: "Living Without Explanation", summary: "The liberation of releasing the constant craving for why — discovering that effective action does not require explanatory packaging." },
      { number: 47, title: "Death Without Belief", summary: "Facing the ultimate fact of existence with open eyes — discovering that mortality faced directly has a dignity no reassuring story can match." },
      { number: 48, title: "Legacy Without Myth", summary: "Releasing the drive to extend yourself beyond your end — discovering that significance does not require permanence." },
      { number: 49, title: "Reality at the End of the Self", summary: "The recognition that what you are is not separate from reality but an expression of it — what remains when self-sense dissolves is fullness, not emptiness." },
      { number: 50, title: "Nothing Left to Defend", summary: "The quiet, powerful arrival at what was always here: reality itself, undefended, unexplained, and entirely sufficient." },
    ],
  },
];
