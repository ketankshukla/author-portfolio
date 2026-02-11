"use client";

import { BookOpen, Feather, Pen, Globe } from "lucide-react";

export default function AuthorSection() {
  return (
    <section id="author" className="relative py-24 sm:py-32 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Author info */}
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-widest font-medium">
                About the Author
              </span>
            </div>

            {/* Author photo */}
            <div className="mb-6">
              <img
                src="/images/ketan-shukla.jpeg"
                alt="Ketan Shukla"
                className="w-40 h-40 rounded-full object-cover border-2 border-gold/30 shadow-gold"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
              <span className="heading-gradient">Ketan Shukla</span>
            </h2>

            <div className="space-y-4 text-cream/55 leading-relaxed text-base">
              <p>
                Ketan Shukla writes both fiction and non-fiction, driven by an
                honest curiosity about how things actually work — whether
                that&rsquo;s the mechanics of mastery, the nature of belief, or
                the interior life of characters facing impossible choices.
              </p>

              <p>
                His published work spans three series and twenty-two books. The{" "}
                <em className="text-gold/80">Repetition: Mother of Mastery</em>{" "}
                series is a five-book non-fiction exploration of the science,
                psychology, and daily practice of mastery — from neural pathways
                and habit formation to creative performance and long-term
                growth. The{" "}
                <em className="text-gold/80">Reality Without Belief</em> series
                is a five-book non-fiction work that dismantles the unexamined
                reverence for belief, faces reality directly, and arrives at the
                quiet freedom of having nothing left to defend.
              </p>

              <p>
                <em className="text-gold/80">Aztec Samurai Adventures</em> is
                his fiction work — a twelve-book epic fantasy saga spanning
                three acts. It follows a reluctant warrior and her growing team
                as they face an empire, forge alliances, lose mentors, and fight
                a war that tests everything they believe about leadership,
                sacrifice, and what it means to protect something worth
                protecting.
              </p>

              <p>
                Ketan approaches writing the way he approaches everything else:
                with patience, sustained effort, and the belief that the best
                work comes from genuine curiosity rather than borrowed formulas.
                He is not interested in writing quickly — he is interested in
                writing well. Each book in each series was written with the same
                standard: does this say something true? Does it earn the
                reader&rsquo;s time?
              </p>

              <p>
                When he&rsquo;s not writing, you&rsquo;ll likely find him at the
                snooker table — another pursuit where patience, precision, and
                repetition quietly reveal their rewards.
              </p>
            </div>

            {/* Amazon author link */}
            <div className="mt-8">
              <a
                href="https://www.amazon.com/stores/Ketan-Shukla/author/B0BZ1872FW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium underline underline-offset-4"
              >
                <Globe className="w-4 h-4" />
                View all books on Amazon
              </a>
            </div>
          </div>

          {/* Right: Writing philosophy + series links */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-6 text-center hover-lift">
                <BookOpen className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-cream font-serif">
                  22
                </div>
                <div className="text-cream/40 text-sm mt-1">
                  Books Published
                </div>
              </div>
              <div className="glass rounded-xl p-6 text-center hover-lift">
                <Feather className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-cream font-serif">
                  3
                </div>
                <div className="text-cream/40 text-sm mt-1">
                  Complete Series
                </div>
              </div>
              <div className="glass rounded-xl p-6 text-center hover-lift">
                <Pen className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-cream font-serif">
                  388
                </div>
                <div className="text-cream/40 text-sm mt-1">Total Chapters</div>
              </div>
              <div className="glass rounded-xl p-6 text-center hover-lift">
                <Globe className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-cream font-serif">
                  2
                </div>
                <div className="text-cream/40 text-sm mt-1">Genres</div>
              </div>
            </div>

            {/* Series cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cream mb-2">The Series</h3>

              <a
                href="https://aztec.ketanshukla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-5 hover:border-[#40e0d0]/30 hover:bg-[#40e0d0]/5 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "#40e0d0" }}
                  />
                  <div>
                    <p className="text-cream font-medium text-sm group-hover:text-[#40e0d0] transition-colors">
                      Aztec Samurai Adventures
                    </p>
                    <p className="text-cream/40 text-xs mt-1">
                      12 books &bull; 288 chapters &bull; Epic Fantasy &bull; 3
                      acts spanning war, loss, and redemption
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://repetition.ketanshukla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-5 hover:border-[#d4a843]/30 hover:bg-[#d4a843]/5 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "#d4a843" }}
                  />
                  <div>
                    <p className="text-cream font-medium text-sm group-hover:text-[#d4a843] transition-colors">
                      Repetition: Mother of Mastery
                    </p>
                    <p className="text-cream/40 text-xs mt-1">
                      5 books &bull; 50 chapters &bull; Non-Fiction &bull; The
                      science and practice of mastery
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://reality.ketanshukla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-5 hover:border-[#00CED1]/30 hover:bg-[#00CED1]/5 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "#00CED1" }}
                  />
                  <div>
                    <p className="text-cream font-medium text-sm group-hover:text-[#00CED1] transition-colors">
                      Reality Without Belief
                    </p>
                    <p className="text-cream/40 text-xs mt-1">
                      5 books &bull; 50 chapters &bull; Non-Fiction &bull;
                      Clarity, freedom, and direct seeing
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Writing philosophy */}
            <div className="mt-8 glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-cream mb-4">
                Writing Philosophy
              </h3>
              <div className="space-y-3 text-cream/45 text-sm leading-relaxed">
                <p>
                  &ldquo;I write the books I would want to read. If a
                  non-fiction book doesn&rsquo;t change how you think about
                  something, it hasn&rsquo;t done its job. If a fiction book
                  doesn&rsquo;t make you care about the people in it, none of
                  the plot matters.&rdquo;
                </p>
                <p>
                  &ldquo;Every series I write starts with a question I
                  can&rsquo;t answer quickly. The Repetition series started
                  with: why do some people achieve mastery and others
                  don&rsquo;t? The Reality series started with: what happens
                  when you stop believing and start seeing? The Aztec series
                  started with: what does it cost to protect something worth
                  protecting?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
