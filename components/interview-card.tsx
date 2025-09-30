import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, CheckCircle2, Lightbulb, BookOpen, RefreshCw } from "lucide-react"

interface InterviewExperience {
  id: number
  authorName: string
  company: string
  role: string
  opportunityType: string
  date: string
  applicationProcess: string
  interviewExperience: string
  resources: string[]
  thingsDifferently: string
  outcome: string
  tips: string
}

interface InterviewCardProps {
  experience: InterviewExperience
}

export function InterviewCard({ experience }: InterviewCardProps) {
  const getOpportunityColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "internship":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
      case "full-time":
        return "bg-pink-500/10 text-pink-400 border-pink-500/30"
      default:
        return "bg-purple-500/10 text-purple-400 border-purple-500/30"
    }
  }

  const getOutcomeColor = (outcome: string) => {
    return outcome.toLowerCase() === "accepted"
      ? "bg-green-500/10 text-green-400 border-green-500/30"
      : "bg-orange-500/10 text-orange-400 border-orange-500/30"
  }

  return (
    <Card className="bg-[#1e2235]/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <CardHeader className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-2xl font-bold text-white">{experience.authorName}</h3>
              <Badge className={getOutcomeColor(experience.outcome)}>{experience.outcome}</Badge>
            </div>
            <p className="text-gray-400 text-lg">{experience.role}</p>
            <p className="text-sm text-gray-500">{experience.company}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className={getOpportunityColor(experience.opportunityType)}>{experience.opportunityType}</Badge>
            <Badge variant="outline" className="text-gray-400 border-gray-600">
              <Calendar className="mr-1 size-3" />
              {experience.date}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Application Process */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <Building2 className="size-5" />
            <h4>Application Process</h4>
          </div>
          <p className="text-gray-300 leading-relaxed pl-7">{experience.applicationProcess}</p>
        </div>

        {/* Interview Experience */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-pink-400 font-semibold">
            <CheckCircle2 className="size-5" />
            <h4>Interview Experience</h4>
          </div>
          <p className="text-gray-300 leading-relaxed pl-7">{experience.interviewExperience}</p>
        </div>

        {/* Resources Used */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <BookOpen className="size-5" />
            <h4>Resources Used</h4>
          </div>
          <ul className="space-y-1 pl-7">
            {experience.resources.map((resource, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{resource}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Things Differently */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-pink-400 font-semibold">
            <RefreshCw className="size-5" />
            <h4>What I'd Do Differently</h4>
          </div>
          <p className="text-gray-300 leading-relaxed pl-7">{experience.thingsDifferently}</p>
        </div>

        {/* Tips */}
        <div className="space-y-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <Lightbulb className="size-5" />
            <h4>Pro Tips</h4>
          </div>
          <p className="text-gray-300 leading-relaxed pl-7">{experience.tips}</p>
        </div>
      </CardContent>
    </Card>
  )
}
