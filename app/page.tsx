import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { WorkExperience } from '@/components/WorkExperience'
import { Education } from '@/components/Education'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getImageProps } from 'next/image'
import { MailTo } from '@/components/MailTo'

import { experiences, header, profile, educations, aboutMe } from '@/data'

export default function Resume() {
  const avatarProps = getImageProps({
    width: 128,
    height: 128,
    src: header.avatarPath,
    alt: header.name,
  })

  return (
    <main className="min-h-screen bg-background p-8 text-foreground md:p-16">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <header className="flex flex-col items-start gap-8 md:flex-row print:flex-row">
          {/* Note: Setting the size to 32 (which is 128px) doesn't work because of the border, the image resize makes it fuzzy */}
          <Avatar className="h-[134px] w-[134px] border-[3px] border-violet-500/50">
            <AvatarImage {...avatarProps.props} />
            <AvatarFallback>
              {header.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">{header.name}</h1>
            <h2 className="text-2xl text-muted-foreground md:text-3xl">{header.title}</h2>

            <p className="max-w-2xl text-lg leading-relaxed">{header.summary}</p>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <MailTo
                encodedEmail={header.emailBase64}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
                prefix={<Mail className="h-4 w-4" />}
              />
              <a
                href={`https://github.com/${header.githubHandle}`}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
              >
                <Github className="h-4 w-4" />
                github.com/{header.githubHandle}
              </a>
              <a
                href={`https://linkedin.com/in/${header.linkedinHandle}`}
                className="flex items-center gap-2 transition-colors hover:text-violet-500 dark:hover:text-violet-400"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/{header.linkedinHandle}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {header.location}
              </span>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section>
          <h3 className="mb-4 text-2xl font-semibold">Profile</h3>
          <div className="space-y-4">
            {profile.map((item, index) => (
              <p key={`profile-${index}`} className="text-muted-foreground">
                <span className="font-semibold text-foreground">{item.heading}</span>
                {' - '}
                {item.content}
              </p>
            ))}
          </div>
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
