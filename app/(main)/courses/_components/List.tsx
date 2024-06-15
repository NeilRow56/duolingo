'use client'

import { courses } from '@/types'
import { Card } from './Card'

type ListProps = {
  courses: courses[]
  activeCourseId?: any
}

export const List = ({ activeCourseId, courses }: ListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}
