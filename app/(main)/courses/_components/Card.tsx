import { cn } from '@/lib/utils'
import { Check, Circle, Divide } from 'lucide-react'
import Image from 'next/image'

type cardProps = {
  title: string
  id: number
  imageSrc: string
  onClick: (id: number) => void
  disabled?: boolean
  active?: boolean
}

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: cardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'min-h[217px] flex h-full min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2',
        disabled && 'pointer-events-none opacity-50'
      )}
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active ? (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="strope-[4] h-4 w-4 text-white" />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-md bg-blue-100 p-1.5">
            <Circle className="strope-[4] h-4 w-4 text-white" />
          </div>
        )}
      </div>

      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />

      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  )
}
