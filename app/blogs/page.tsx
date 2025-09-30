import { InterviewCard } from "@/components/interview-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const interviewExperiences = [
  {
    id: 1,
    authorName: "Paul Thomas Anderson",
    company: "Google",
    role: "Software Engineering Intern",
    opportunityType: "Internship",
    date: "Summer 2024",
    applicationProcess:
      "Applied through the Google careers portal in September. Got an initial phone screen after 3 weeks, followed by two technical interviews (45 mins each) focusing on data structures and algorithms. Final round was a behavioral interview with the team lead.",
    interviewExperience:
      "The technical interviews were challenging but fair. First round focused on trees and graphs, second round on dynamic programming. Interviewers were friendly and provided hints when I got stuck. The behavioral round explored my past projects and teamwork experiences.",
    resources: [
      "LeetCode (focused on medium/hard problems)",
      "Cracking the Coding Interview book",
      "System Design Primer on GitHub",
      "Mock interviews with peers",
    ],
    thingsDifferently:
      "I would have practiced more system design questions even for the intern role. Also, I should have prepared more questions to ask the interviewers about team culture and day-to-day work.",
    outcome: "Accepted",
    tips: "Start preparing at least 2-3 months in advance. Focus on understanding concepts rather than memorizing solutions. Practice explaining your thought process out loud.",
  },
  {
    id: 2,
    authorName: "Sofia Coppola",
    company: "Meta",
    role: "Full-Stack Developer",
    opportunityType: "Full-Time",
    date: "Fall 2024",
    applicationProcess:
      "Referred by a former colleague. Initial recruiter call to discuss background and expectations. Then had 4 rounds of technical interviews over 2 days - 2 coding rounds, 1 system design, and 1 behavioral.",
    interviewExperience:
      "Very intense but well-organized. Coding rounds tested both frontend (React) and backend (Node.js) skills. System design round asked me to design a scalable notification system. Behavioral round used the STAR method extensively.",
    resources: [
      "Grokking the System Design Interview",
      "JavaScript: The Good Parts",
      "React documentation and advanced patterns",
      "Designing Data-Intensive Applications book",
    ],
    thingsDifferently:
      "I wish I had done more mock system design interviews. Also, I should have researched Meta's engineering culture more deeply to ask better questions during the behavioral round.",
    outcome: "Accepted",
    tips: "For full-time roles, system design is crucial. Don't just focus on coding. Also, leverage your network - referrals significantly increase your chances of getting an interview.",
  },
  {
    id: 3,
    authorName: "Michael Haneke",
    company: "Amazon",
    role: "SDE Intern",
    opportunityType: "Internship",
    date: "Spring 2024",
    applicationProcess:
      "Applied online through university career fair. Completed an online assessment (OA) with 2 coding questions and debugging tasks. Passed OA and got invited to a final round interview with 2 back-to-back technical sessions.",
    interviewExperience:
      "The OA was time-pressured but manageable if you've practiced LeetCode. Final interviews focused heavily on Amazon's Leadership Principles. Each technical question was followed by behavioral questions tied to leadership principles.",
    resources: [
      "LeetCode Amazon tagged questions",
      "Amazon Leadership Principles guide",
      "AlgoExpert for structured learning",
      "Blind 75 LeetCode questions",
    ],
    thingsDifferently:
      "I would have prepared more specific examples from my past experiences that align with each leadership principle. Also, I should have practiced coding under time pressure more.",
    outcome: "Accepted",
    tips: "Amazon heavily emphasizes their Leadership Principles - have concrete examples ready for each one. Practice the STAR method. For the OA, time management is key.",
  },
  {
    id: 4,
    authorName: "Alice Rohrwacher",
    company: "Microsoft",
    role: "Software Engineer",
    opportunityType: "Full-Time",
    date: "Winter 2024",
    applicationProcess:
      "Applied through LinkedIn. Had a recruiter screening call, then a technical phone screen. After passing, I had an onsite (virtual) with 4 rounds: 3 technical and 1 behavioral/cultural fit.",
    interviewExperience:
      "Microsoft's process was thorough but respectful of candidates' time. Technical rounds covered algorithms, system design, and object-oriented design. They care a lot about code quality and maintainability, not just getting the right answer.",
    resources: [
      "Elements of Programming Interviews",
      "Head First Design Patterns",
      "LeetCode and HackerRank",
      "YouTube channels: NeetCode, Tech Dummies Narendra L",
    ],
    thingsDifferently:
      "I would have spent more time on object-oriented design patterns. Microsoft really values clean, maintainable code. Also, I should have asked more questions about the specific team and projects.",
    outcome: "Accepted",
    tips: "Focus on writing clean, readable code. Microsoft values software engineering principles, not just algorithmic skills. Be prepared to discuss trade-offs in your solutions.",
  },
  {
    id: 5,
    authorName: "Jacques Demy",
    company: "Stripe",
    role: "Backend Engineering Intern",
    opportunityType: "Internship",
    date: "Summer 2024",
    applicationProcess:
      "Applied directly on Stripe's website. Got a coding challenge (take-home assignment) to build a small API. After submitting, had 2 technical interviews and 1 team fit interview.",
    interviewExperience:
      "The take-home was realistic and fun - building a payment processing simulation. Interviews were conversational and focused on discussing my approach to the take-home. They asked about scalability, error handling, and API design principles.",
    resources: [
      "RESTful API design best practices",
      "Postman for API testing",
      "System Design Interview book",
      "Stripe's own API documentation",
    ],
    thingsDifferently:
      "I would have added more comprehensive tests to my take-home project. Also, I should have documented my code better and included a more detailed README explaining my design decisions.",
    outcome: "Accepted",
    tips: "For companies with take-home assignments, treat it like a real project. Write tests, document your code, and consider edge cases. Quality over speed.",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1d2e] via-[#1a1d2e] to-[#0f1117]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground neon-glow"
            style={{ fontFamily: "var(--font-orbitron)" }}
            >
            <span>Interview </span>
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-foreground neon-glow"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
              Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-pretty">
            Real stories from our community members about their journey through technical interviews at top tech
            companies. Learn from their experiences, preparation strategies, and insights.
          </p>
        </div>
      </section>

      {/* Interview Cards */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {interviewExperiences.map((experience) => (
            <InterviewCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

    <Footer />
    <BackToTop />
    </div>
  )
}
