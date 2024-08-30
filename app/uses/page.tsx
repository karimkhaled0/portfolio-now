import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Intel core i5 13600K, RTX 30360, 32GB RAM.">
            I was using and Intel i5 13600K prior to this and the difference is
            night and day. I’ve never heard the fans turn on a single time, even
            under the incredibly heavy loads I put it through with our various
            launch simulations.
          </Tool>
          <Tool title="Logitech g305 and Womier S-K71 keyboard.">
            The keyboard I use is Womier S-K71 which is a wonderful keyboard
            that I use every day. I’ve used lots of different keyboards over the
            years but this one is the one I use the most. Also the mouse is
            amazing.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I use VS Code for all of my development needs. It’s the best
            editor/IDE for the job. I’ve used Sublime Text before but VS Code is
            the best editor/IDE for the job.
          </Tool>
          <Tool title="Ubuntu">
            I use Ubuntu for all of my development needs. It’s the best
            operating system for the job. I’ve used Windows before but Ubuntu is
            the best operating system for the job. It has a great community and
            is very easy to use. ALSO the best feature I found is the multiple
            workspaces feature. I can have multiple projects open at once and
            switch between them easily.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Technology">
          <Tool title="GitHub and Bitbucket">
            I use GitHub and Bitbucket for all of my projects. Github is for my
            projects and Bitbucket is for work related projects. Both are great
            tools for version control and collaboration. but I liked Bitbucket
            and how the UI is more intuitive.
          </Tool>
          <Tool title="Notion">
            I use Notion for all of my projects. It’s the best note taking
            software for the job. I’ve used Evernote before but Notion is the
            best note taking software for the job.
          </Tool>
          <Tool title="Vercel">
            I use Vercel for all of my projects. It’s the best hosting platform
            for the job. I’ve used Netlify before but Vercel is the best hosting
            platform for the job.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Stack">
          <Tool title="Next.js">
            I use Next.js for all of my projects. It’s the best framework for
            the job. I’ve used Gatsby before but Next.js is the best framework
            for the job.
          </Tool>
          <Tool title="Tailwind CSS">
            I use Tailwind CSS for all of my projects. It’s the best CSS
            framework for the job. I’ve used Bootstrap before but Tailwind CSS
            is the best CSS framework for the job.
          </Tool>
          <Tool title="TypeScript">
            I use TypeScript for all of my projects. It’s the best language for
            the job. I’ve used JavaScript before but TypeScript is the best
            language for the job.
          </Tool>
          <Tool title="Node.js">
            I use Node.js for all of my projects. It’s the best language for the
            job. I’ve used JavaScript before but Node.js is the best language
            for the job.
          </Tool>
          <Tool title="Express.js">
            I use Express.js for all of my projects. It’s the best framework for
            the job. I’ve used Django before but Express.js is the best
            framework for the job.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
