import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { WorkExperience } from '@/components/WorkExperience';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { experiences } from './data'

export default function Resume() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row gap-8 items-start">
          <Avatar className="w-32 h-32 border-2 border-violet-500/20">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
              alt="John Doe"
              className="object-cover"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4 flex-1">
            <h1 className="text-4xl md:text-5xl font-bold">Mark Fullbrook</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">Senior Software Engineer</h2>
            
            <p className="text-lg leading-relaxed max-w-2xl">
              Passionate software engineer with 8+ years of experience building scalable web applications
              and leading engineering teams. Specialized in React, Node.js, and cloud architecture.
            </p>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <a href="mailto:john@example.com" className="flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                <Mail className="h-4 w-4" />
                john@example.com
              </a>
              <a href="https://github.com/johndoe" className="flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                <Github className="h-4 w-4" />
                github.com/johndoe
              </a>
              <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/johndoe
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </span>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Overview</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Led development of a microservices architecture serving 1M+ daily active users</li>
            <li>Managed and mentored a team of 5 software engineers, improving team velocity by 40%</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
            <li>Contributed to open-source projects with 1000+ GitHub stars</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <WorkExperience
                key={experience.company}
                {...experience}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="text-violet-500 dark:text-violet-400 font-medium">Stanford University</p>
              </div>
              <div className="text-right">
                <div className="text-muted-foreground">2014 - 2018</div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Stanford, CA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More About Me Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">More About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-violet-500 dark:text-violet-400 mb-2">
                  I want to work for a company that...
                </h4>
                <p className="text-muted-foreground">
                  Values innovation, promotes work-life balance, and encourages continuous learning. 
                  I thrive in environments that embrace new technologies and foster collaboration.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-violet-500 dark:text-violet-400 mb-2">
                  I'm interested in roles...
                </h4>
                <p className="text-muted-foreground">
                  That combine technical leadership with hands-on development. I enjoy mentoring 
                  others while staying deeply involved in architecture and coding.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-violet-500 dark:text-violet-400 mb-2">
                  Outside of work I...
                </h4>
                <p className="text-muted-foreground">
                  Contribute to open-source projects, enjoy hiking, and practice photography. 
                  I also run a tech meetup group in San Francisco.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-violet-500 dark:text-violet-400 mb-2">
                  I'm currently learning...
                </h4>
                <p className="text-muted-foreground">
                  Rust for systems programming and exploring machine learning with PyTorch. 
                  I'm also deepening my knowledge of distributed systems design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}