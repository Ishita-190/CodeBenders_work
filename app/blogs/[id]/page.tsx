"use client";

import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Building2, CheckCircle2, BookOpen, Lightbulb, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { interviewExperiences } from '../page';

interface InterviewExperience {
  id: number;
  authorName: string;
  company: string;
  role: string;
  opportunityType: string;
  date: string;
  applicationProcess: string;
  interviewExperience: string;
  resources: string[];
  thingsDifferently: string;
  outcome: string;
  tips: string;
}

// This would normally fetch from your database/API
const getBlogPost = (id: number): InterviewExperience | undefined => {
  return interviewExperiences.find((exp: InterviewExperience) => exp.id === Number(id));
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(Number(params.id));
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blogs" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-3xl font-bold text-white">{post.authorName}'s Experience at {post.company}</h1>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400">
                {post.role}
              </span>
            </div>
            <p className="text-gray-400">{post.date} • {post.opportunityType}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-cyan-400 flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  Application Process
                </h2>
                <p className="mt-2 text-gray-300">{post.applicationProcess}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Interview Experience
                </h2>
                <p className="mt-2 text-gray-300 whitespace-pre-line">{post.interviewExperience}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-400 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Resources Used
                </h2>
                <ul className="mt-2 space-y-2">
                  {post.resources.map((resource, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  What I'd Do Differently
                </h2>
                <p className="mt-2 text-gray-300">{post.thingsDifferently}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-400 flex items-center gap-2">
                  <RefreshCw className="h-6 w-6" />
                  Tips for Future Applicants
                </h2>
                <p className="mt-2 text-gray-300 whitespace-pre-line">{post.tips}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
