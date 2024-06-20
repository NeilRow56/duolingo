import { Progress } from '@/components/ui/progress'
import { useExitModal } from '@/store/use-exit-modal'
import { InfinityIcon, X } from 'lucide-react'
import Image from 'next/image'

type HeaderProps = {
  hearts: number
  percentage: number
  hasActiveSubscription: boolean
}

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const { open } = useExitModal()
  return (
    <header className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <X
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
        onClick={open}
      />
      <Progress value={percentage} className="bg-slate-100" />

      <div className="flex items-center font-bold text-rose-500">
        <Image
          src="/hearts.svg"
          alt="heart"
          height={28}
          width={28}
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  )
}
