import { Button } from '@/components/ui/button'
import { InfinityIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type UserProgressProps = {
  activeCourse: { imageSrc: string; title: string } // REPLACE with database types later
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            className="rounded-md border"
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-yellow-500">
          <Image
            className="bg-yellow mr-2"
            width={28}
            height={28}
            src="/lightning.svg"
            alt="points"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            className="mr-2"
            width={22}
            height={22}
            src="/hearts.svg"
            alt="Hearts"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  )
}
