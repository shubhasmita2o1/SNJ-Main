import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { Check, Calendar, Heart } from "lucide-react";

const days = [
  // Week 1 - Body Awareness
  { day: 1, week: 1, title: "Morning stretch — 10 min gentle movement", category: "Body" },
  { day: 2, week: 1, title: "Diaphragmatic breathing — 5 min", category: "Body" },
  { day: 3, week: 1, title: "Body scan meditation — 15 min", category: "Body" },
  { day: 4, week: 1, title: "Walk barefoot on grass — 10 min", category: "Body" },
  { day: 5, week: 1, title: "Gentle yoga nidra — 20 min", category: "Body" },
  { day: 6, week: 1, title: "Nutrition: cook one warm, seasonal meal", category: "Body" },
  { day: 7, week: 1, title: "Rest day: gratitude journaling — 5 min", category: "Body" },

  // Week 2 - Mind & Breath
  { day: 8, week: 2, title: "Anulom vilom pranayama — 10 min", category: "Mind" },
  { day: 9, week: 2, title: "One minute of silence — notice 5 sounds", category: "Mind" },
  { day: 10, week: 2, title: "Write down 3 fears — then breathe through each", category: "Mind" },
  { day: 11, week: 2, title: "Mindful eating — one meal without a screen", category: "Mind" },
  { day: 12, week: 2, title: "Bhramari (humming) breath — 5 min", category: "Mind" },
  { day: 13, week: 2, title: "Spend 20 min in nature without phone", category: "Mind" },
  { day: 14, week: 2, title: "Rest day: write a letter to your body", category: "Mind" },

  // Week 3 - Wisdom & Discernment
  { day: 15, week: 3, title: "Read one page of the Bhagavad Gita", category: "Intelligence" },
  { day: 16, week: 3, title: "Ask one medical question you have been avoiding", category: "Intelligence" },
  { day: 17, week: 3, title: "Learn one thing about your cancer type", category: "Intelligence" },
  { day: 18, week: 3, title: "Declutter one drawer — simplify one corner", category: "Intelligence" },
  { day: 19, week: 3, title: "Say no to one thing that drains you", category: "Intelligence" },
  { day: 20, week: 3, title: "Call someone who helped you — thank them", category: "Intelligence" },
  { day: 21, week: 3, title: "Rest day: review your daily rhythm", category: "Intelligence" },

  // Week 4 - Soul & Community
  { day: 22, week: 4, title: "Kirtan or devotional music — 15 min", category: "Soul" },
  { day: 23, week: 4, title: "Offer a meal to someone who needs it", category: "Soul" },
  { day: 24, week: 4, title: "Share your healing story — even just one sentence", category: "Soul" },
  { day: 25, week: 4, title: "Light a diya — sit in stillness for 10 min", category: "Soul" },
  { day: 26, week: 4, title: "Write your intention for the next year", category: "Soul" },
  { day: 27, week: 4, title: "Join or revisit the SNJ WhatsApp community", category: "Soul" },
  { day: 28, week: 4, title: "Rest day: meditate on the word 'wholeness'", category: "Soul" },

  // Integration
  { day: 29, week: 4, title: "Repeat your single favourite practice from the month", category: "Integration" },
  { day: 30, week: 4, title: "Write a letter to yourself — to open in 90 days", category: "Integration" },
];

export const Route = createFileRoute("/challenge")({
  head: () => ({
    meta: [
      { title: "30-Day Wellbeing Challenge — Swastha NavJeevan" },
      { name: "description", content: "Thirty days. A lifetime of change. Join the SNJ 4D Wellbeing Challenge." },
    ],
  }),
  component: Challenge,
});

function Challenge() {
  const [completed, setCompleted] = useState<number[]>(() => {
    const saved = localStorage.getItem("snj-challenge-progress");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleDay = (day: number) => {
    let newCompleted = [...completed];
    if (completed.includes(day)) {
      newCompleted = newCompleted.filter(d => d !== day);
    } else {
      newCompleted.push(day);
    }
    setCompleted(newCompleted);
    localStorage.setItem("snj-challenge-progress", JSON.stringify(newCompleted));
  };

  const progress = Math.round((completed.length / 30) * 100);

  return (
    <>
      <PageHero
        eyebrow="30-Day Challenge"
        title="Wellbeing · 30 Day Challenge"
        lead="Thirty days, a lifetime of change. A structured daily wellbeing programme grounded in the SNJ 4D Framework — one gentle practice at a time."
        image="/assets/challenge-hero.jpg"
      />

      <Section tone="white">
        <div className="container-wide max-w-4xl">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-sm uppercase tracking-widest text-teal-600">Your Progress</div>
              <div className="text-6xl font-light tabular-nums">{completed.length}<span className="text-3xl text-gray-400">/30</span></div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold text-teal-600">{progress}%</div>
              <div className="text-sm text-gray-500">complete</div>
            </div>
          </div>

          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-12">
            <div className="h-full bg-gradient-to-r from-teal-500 to-amber-500 transition-all" style={{ width: `${progress}%` }} />
          </div>

          {/* 4D Framework */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {["Body", "Mind", "Intelligence", "Soul"].map((dim, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <div className="text-xl font-semibold text-teal-700 mb-1">{dim}</div>
                <div className="text-xs text-gray-500">Daily focus area</div>
              </div>
            ))}
          </div>

          {/* Calendar */}
          <SectionTitle eyebrow="The 30-Day Calendar" title="One practice, each day." />

          <div className="mt-10 space-y-12">
            {[1, 2, 3, 4].map(week => (
              <div key={week}>
                <div className="uppercase text-xs tracking-widest text-amber-600 font-medium mb-4">Week {week}</div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {days.filter(d => d.week === week).map((day) => (
                    <button
                      key={day.day}
                      onClick={() => toggleDay(day.day)}
                      className={`p-5 rounded-2xl border text-left transition-all group flex gap-4 items-start ${
                        completed.includes(day.day) 
                          ? "bg-teal-50 border-teal-200" 
                          : "hover:border-teal-200 hover:bg-white"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                        completed.includes(day.day) ? "bg-teal-600 border-teal-600 text-white" : "border-gray-300 group-hover:border-teal-300"
                      }`}>
                        {completed.includes(day.day) ? <Check size={18} /> : day.day}
                      </div>
                      <div>
                        <div className="text-xs uppercase text-teal-600 font-medium">{day.category}</div>
                        <div className="font-medium mt-1 leading-snug">{day.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}