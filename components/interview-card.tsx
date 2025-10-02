"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, CheckCircle2, Lightbulb, BookOpen, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"

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
    <Link href={`/blogs/${experience.id}`} className="block hover:no-underline">
      <Card className="bg-[#1e2235]/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full">
        <CardHeader className="space-y-4">
          <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-2xl font-bold text-white">{experience.authorName}</h3>
                    <Badge className={getOutcomeColor(experience.outcome)}>{experience.outcome}</Badge>
                  </div>
                  <p className="text-gray-400 text-lg">{experience.role} at {experience.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getOpportunityColor(experience.opportunityType)}>{experience.opportunityType}</Badge>
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    <Calendar className="mr-1 size-3" />
                    {experience.date}
                  </Badge>
                </div>
              </div>

              {/* Preview Content */}
              <div className="space-y-4">
                <p className="text-gray-300 line-clamp-3">
                  {experience.interviewExperience}
                </p>
                <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="font-medium">Read full experience</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
