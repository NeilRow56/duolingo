'use client'

import { Check, Crown, Star } from 'lucide-react'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type lessonButtonProps = {
  id: number
  index: number
  totalCount: number
  locked?: boolean
  current?: boolean
  percentage: number
}

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: lessonButtonProps) => {
  const cycleLength = 8
  const cycleIndex = index % cycleLength
  let indentationlevel

  if (cycleIndex <= 2) {
    indentationlevel = cycleIndex
  } else if (cycleIndex <= 4) {
    indentationlevel = 4 - cycleIndex
  } else if (cycleIndex <= 6) {
    indentationlevel = 4 - cycleIndex
  } else {
    indentationlevel = cycleIndex - 8
  }

  const rightPosition = indentationlevel * 40
  const isFirst = index === 0
  const isLast = index === totalCount

  const isCompleted = !current && !locked

  const Icon = isCompleted ? Check : isLast ? Crown : Star

  const href = isCompleted ? `/lesson/${id}` : '/lesson'

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? 'none' : 'auto' }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="relative h-[102px] w-[102px]">
            <div className="absolute -top-6 left-2.5 z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 font-bold uppercase tracking-wide text-green-500">
              Start
              <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent" />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: '#4ade80',
                },
                trail: {
                  stroke: '#e5e7eb',
                },
              }}
            >
              <Button
                variant={locked ? 'locked' : 'secondary'}
                size="rounded"
                className="h-[70px] w-[70px] border-b-8"
              >
                <Icon
                  className={cn(
                    'h-10 w-10',
                    locked
                      ? 'fill-neutral-400 stroke-neutral-400 text-neutral-400'
                      : 'fill-primary-foreground text-primary-foreground',
                    isCompleted && 'fill-none stroke-[4]'
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            variant={locked ? 'locked' : 'secondary'}
            size="rounded"
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                'h-10 w-10',
                locked
                  ? 'fill-neutral-400 stroke-neutral-400 text-neutral-400'
                  : 'fill-primary-foreground text-primary-foreground',
                isCompleted && 'fill-none stroke-[4]'
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  )
}