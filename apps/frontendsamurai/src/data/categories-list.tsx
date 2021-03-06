import React from 'react';
import { indigo } from "./colors"

interface Screen {
  title: string;
  subtitle: string;
  paragraphs: Array<string | JSX.Element>;
}

interface Category {
  name: string;
  color: string;
  previousColor: string;
  screens: Screen[];
}

export const categories: Category[] = [
  {
    name: 'Yourself',
    color: indigo[0],
    previousColor: indigo[0],
    screens: [
      {
        title: 'Be yourself',
        subtitle: 'but not too much!',
        paragraphs: [
          "Strip away anything that doesn't express your core values. Let your true self shine.",
        ],
      },
      {
        title: 'Build yourself',
        subtitle: `but don't forget others`,
        paragraphs: [
          <>
            Even the highest levels of technical excellence{' '}
            <em>working on your own</em> are nothing compared to{' '}
            <em>collaborating with your colleagues</em>. No one is too simple
            for you to learn from. No one is too smart that you can't pick their
            brains.
          </>,
        ],
      },
      {
        title: 'Share yourself',
        subtitle: 'but only what the world is ready for',
        paragraphs: [
          'Before you can give to others from your heart, you must first understand theirs. Stop and think how your words will be heard - if at all - and tailor your message to the target audience.',
        ],
      },
    ],
  },
  {
    name: 'Your Team',
    color: indigo[1],
    previousColor: indigo[0],
    screens: [
      {
        title: 'Build a team',
        subtitle: 'with acceptance',
        paragraphs: [
          'Teammates you can rely on are essential for building a foundation of trust. A samurai must prioritize individual responsibilities within the team so that everyone else can focus on doing their own job.',
        ],
      },
      {
        title: 'Put the team first',
        subtitle: `above the sum of the parts`,
        paragraphs: [
          'Consistent coding patterns and shared development workflows are the glue that bind the unit. A samurai can see the bigger picture and tries to be flexible for everyone???s benefit.',
        ],
      },
      {
        title: 'Write for the team',
        subtitle: 'not just for the compiler',
        paragraphs: [
          'Like the UX for your end users, good Developer Experience boosts team morale and productivity. Upgrading your hardware is a lot easier than improving your collective skillset, so code must be intuitive for every member of the team to understand.',
        ],
      },
    ],
  },
  {
    name: 'Leadership',
    color: indigo[2],
    previousColor: indigo[1],
    screens: [
      {
        title: 'Lead by example',
        subtitle: 'with integrity',
        paragraphs: [
          'A leader must serve as a role model by living and breathing the code of the samurai. They must guide their fellow samurais on the path with patience and compassion.',
        ],
      },
      {
        title: 'Lead by motivating',
        subtitle: 'with empathy',
        paragraphs: [
          `To hear what motivates people, your ear must be open to their needs and opinions. Give them what they need to thrive whenever you can and preempt any potential friction when you can't.`,
        ],
      },
      {
        title: 'Lead by letting go',
        subtitle: 'with acceptance',
        paragraphs: [
          'A samurai leader shares an inspiring vision for success yet anticipates bumps in the road. This allows the team to work creatively to reach the goal by having the courage to risk failure along the way.',
        ],
      },
    ],
  },
  {
    name: 'Balance',
    color: indigo[3],
    previousColor: indigo[2],
    screens: [
      {
        title: 'Life-Work Balance',
        subtitle: 'health before wealth',
        paragraphs: [
          `If heart surgeons can - and must - take regular breaks, programmers can't risk burning out either. The long-term quality and quantity of our work depend on it.`,
        ],
      },
      {
        title: 'Find your own balance',
        subtitle: 'happiness before heroism',
        paragraphs: [
          `Beyond the sprint cycle, life is a marathon. Pace yourself and you'll get there in the end.`,
        ],
      },
      {
        title: 'Beyond balance',
        subtitle: 'harmony before hedonism',
        paragraphs: [
          `Find a job that you love and a hobby that's constructive. Make every minute of your day fulfilling.`,
        ],
      },
    ],
  },
];
