import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from './SidebarItem'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

type SidebarProps = {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 bg-slate-50 px-4 lg:fixed lg:w-[256px]',
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-2 pt-8">
          <Image src="/logo.svg" alt="logo" height={40} width={40} />
          <h1 className="text-xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  )
}
