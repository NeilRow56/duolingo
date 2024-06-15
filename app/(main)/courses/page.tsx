import { getCourses, getUserProgress } from '@/db/queries'
import { List } from './_components/List'

const CoursesPage = async () => {
  const courses = await getCourses()
  const userProgress = await getUserProgress()
  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  )
}

export default CoursesPage
