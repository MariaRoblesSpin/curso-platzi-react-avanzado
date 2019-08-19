import React from 'react'
import { Svg } from './styles'
export const Logo = props => (
  <Svg
    width={303.26}
    height={99.28}
    viewBox='98.37 25.36 303.26 99.28'
    style={{
      background: '0% 0%'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='prefix__editing-outline-gradient'
        x1={-0.414}
        x2={1.414}
        y1={0.093}
        y2={0.907}
      >
        <stop offset={0} stopColor='#ee4208' />
        <stop offset={1} stopColor='#4139ff' />
      </linearGradient>
      <filter
        id='prefix__editing-outline'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feMorphology
          in='SourceGraphic'
          operator='dilate'
          radius={2}
          result='outline'
        />
        <feComposite operator='out' in='outline' in2='SourceAlpha' />
      </filter>
    </defs>
    <path
      d='M23.67-3.36q-2.06 2.09-4.88 3.21Q15.97.98 13.18.98q-2.79 0-3.77-.49L7.89 8.82l-9.95.98L4.7-24.99l7.99-.83-.64 3.38q2.06-3.48 6.33-3.48 4.8 0 7.35 3.09 2.25 2.79 2.25 7.05t-1.13 7.3q-1.12 3.04-3.18 5.12zM12.59-17.1L10-2.74q1.03.88 2.3.88 1.27 0 2.01-.49.73-.49 1.27-1.47 1.47-2.65 2.65-10.68.34-2.36.34-4.66 0-2.3-.51-3.04-.52-.73-1.5-.73-2.99 0-3.97 5.83zm38.17 8.82q1.23.83 1.23 2.67 0 1.84-.93 3.01-.93 1.18-2.45 1.96Q45.47.98 42.09.98q-3.38 0-5.36-.74-1.99-.73-3.31-2.1-2.6-2.6-2.6-7.35 0-7.4 4.02-11.91 4.31-4.85 11.81-4.85 4.65 0 6.96 1.96 1.71 1.47 1.71 3.87 0 8.62-14.89 8.62-.2 1.28-.2 2.36 0 2.25 1 3.11 1.01.86 2.87.86t3.85-.86q1.98-.86 2.81-2.23zm-9.99-5.34q3.48 0 5.49-2.16 2.01-2.06 2.01-5.34 0-1.13-.42-1.74-.42-.61-1.25-.61-.83 0-1.54.32-.72.32-1.45 1.39-1.81 2.45-2.84 8.14zm17 8.72q0-1.32.69-4.65l2.59-13.24h-2.89l.2-1.47q5.88-1.76 11.56-6.07h2.36l-1.18 5.34h3.82l-.44 2.2h-3.77l-2.5 13.24q-.64 3.03-.64 4.06 0 2.35 2.06 2.84Q69.14-.98 67.38 0q-1.77.98-4.27.98-2.5 0-3.92-1.57T57.77-4.9zm20.19-15.58q1.67-2.35 4.19-3.92 2.52-1.57 5.61-1.57 3.09 0 4.56.98l9.6-.98-3.33 18.82q-1.72 9.6-5.34 13.37Q89.77 9.8 83.01 9.8q-5.15 0-8.09-1.62-2.94-1.61-2.94-4.31 0-2.01 1.52-3.16 1.52-1.15 3.87-1.15 2.06 0 3.63.93.93.49 1.37 1.18-1.13.98-1.13 2.59 0 2.11 1.96 2.11 3.29 0 5.15-7.74.54-2.11.98-4.22-2.21 2.7-7.21 2.7-3.47 0-5.48-1.67-2.01-1.66-2.01-5.58 0-2.45.83-5.22.83-2.77 2.5-5.12zM84.33-10q0 3.34 1.71 3.34 1.18 0 2.31-1.28.88-1.03 1.22-2.55l2.5-12.59q-.24-.05-.49-.15-.49-.19-1.13-.19-2.98 0-4.75 4.9-1.37 3.82-1.37 8.52zm34.84-3.77q1.76-3.14 1.76-6.32 0-2.11-1.52-2.11-1.17 0-2.4 2.01-1.27 2.01-1.66 4.61L112.8 0l-10.14.98 4.99-25.97 8.09-.98-.88 4.95q2.4-4.95 7.79-4.95 2.84 0 4.38 1.47 1.55 1.47 1.55 4.48 0 3.02-1.99 4.93-1.98 1.91-5.36 1.91-1.47 0-2.06-.59zm12.32 12.3q-1.15-1.27-1.66-3.28-.52-2.01-.52-5.29 0-3.29 1.13-6.28t3.18-5.14q4.22-4.51 11.18-4.51 2.49 0 4.31.83l8.38-.83-3.63 19.11q-.15.59-.15 1.67 0 1.07.66 1.76.67.69 1.65.78-.49 1.67-2.28 2.65-1.79.98-3.8.98t-3.36-.76q-1.34-.76-1.74-2.03-.78 1.22-2.45 2.01-1.66.78-3.89.78-2.23 0-4.04-.59-1.82-.59-2.97-1.86zm10.34-19.89q-.56.88-1.05 2.37-.49 1.5-1.3 5.49t-.81 6.84q0 2.84.44 3.67.44.83 1.23.83 1.56 0 2.72-1.49 1.15-1.5 1.59-4.14l2.6-14.36q-1.03-.88-2.23-.88t-1.92.39q-.71.39-1.27 1.28zM195.41.98q-5.93 0-5.93-4.61 0-2 .86-5.9.86-3.9 1.15-5.46.69-3.58.69-4.71 0-2.5-1.86-2.5-1.23 0-2.4 1.69-1.18 1.69-1.72 5.07L183.16 0l-9.55.98 2.64-13.33q.44-2.2.84-4.7.39-2.5.39-2.89 0-2.26-1.67-2.26-1.12 0-2.35 1.67-1.22 1.66-1.91 5.09L168.56 0l-9.65.98 5.14-25.97 7.99-.98-.83 4.95q1.27-2.65 3.62-3.8t6.03-1.15q2.11 0 3.48 1.03t1.81 2.69q.83-1.71 2.97-2.72 2.13-1 4.75-1t3.92.56q1.3.57 2.08 1.5 1.32 1.71 1.32 4.85 0 3.09-1.32 9.51-.68 3.13-.68 4.28 0 1.15.66 1.84.66.69 1.64.78Q201-.98 199.31 0q-1.69.98-3.9.98z'
      fill='url(#prefix__editing-outline-gradient)'
      transform='translate(149.263 95.064)'
      filter='url(#prefix__editing-outline)'
    />
    <style />
  </Svg>
)
