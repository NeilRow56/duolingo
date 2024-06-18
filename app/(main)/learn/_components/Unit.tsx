import { LessonButton } from './LessonButton'
import { UnitBanner } from './UnitBanner'

type unitProps = {
  id: number
  order: number
  description: string
  title: string
  lessons: any
  activeLesson: any
  activeLessonPercentage: number
}

export const Unit = ({
  id,
  order,
  description,
  title,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: unitProps) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="relative flex flex-col items-center">
        {lessons.map((lesson: { id: any; completed: any }, index: any) => {
          const isCurrent = lesson.id === activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent
          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </>
  )
}
