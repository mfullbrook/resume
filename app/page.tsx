import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { WorkExperience } from '@/components/WorkExperience'
import { Education } from '@/components/Education'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getImageProps } from 'next/image'
import { MailTo } from '@/components/MailTo'

import { experiences, profile, overview, educations, aboutMe } from '@/data'

export default function Resume() {
  const avatarProps = getImageProps({
    width: 128,
    height: 128,
    src: profile.avatarPath,
    alt: profile.name,
  })

  return (
    <main className="min-h-screen bg-background p-8 text-foreground md:p-16">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <header className="flex flex-col items-start gap-8 md:flex-row">
          {/* Note: Setting the size to 32 (which is 128px) doesn't work because of the border, the image resize makes it fuzzy */}
          <Avatar className="h-[134px] w-[134px] border-[3px] border-violet-500/50">
            <AvatarImage {...avatarProps.props} />
            <AvatarFallback>
              {profile.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">{profile.name}</h1>
            <h2 className="text-2xl text-muted-foreground md:text-3xl">{profile.title}</h2>

            <p className="max-w-2xl text-lg leading-relaxed">{profile.introduction}</p>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <MailTo
                encodedEmail={profile.emailBase64}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
                prefix={<Mail className="h-4 w-4" />}
              />
              <a
                href={`https://github.com/${profile.githubHandle}`}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
              >
                <Github className="h-4 w-4" />
                github.com/{profile.githubHandle}
              </a>
              <a
                href={`https://linkedin.com/in/${profile.linkedinHandle}`}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/{profile.linkedinHandle}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section>
          <h3 className="mb-4 text-2xl font-semibold">Overview</h3>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            {overview.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="mb-6 text-2xl font-semibold">Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <WorkExperience key={'exp-' + index} experience={experience} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="mb-4 text-2xl font-semibold">Education</h3>
          <div className="space-y-4">
            {educations.map((education, index) => (
              <Education key={`edu-${index}`} education={education} />
            ))}
          </div>
        </section>

        {/* More About Me Section */}
        <section>
          <h3 className="mb-6 text-2xl font-semibold">More About Me</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {aboutMe.map((item, index) => (
              <div key={`about-${index}`} className="space-y-4">
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-violet-500 dark:text-violet-400">
                    {item.headline}
                  </h4>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
