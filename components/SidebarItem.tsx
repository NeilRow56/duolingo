'use client'

import {
  ArrowDownUp,
  Clapperboard,
  Cog,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
  ShieldQuestion,
  ShoppingCart,
  Users2,
} from 'lucide-react'

import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'

const links = [
  { href: '/learn', icon: Home, label: 'Learn' },
  {
    href: '/leaderboard',
    label: 'Leaderboard',
    icon: ArrowDownUp,
  },
  {
    href: '/quests',
    label: 'Quests',
    icon: ShieldQuestion,
  },
  {
    href: '/shop',
    label: 'Shop',
    icon: ShoppingCart,
  },
]

type SidebarItemProps = {
  label: string
  iconSrc: string
  href: string
}

export const SidebarItem = () => {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        const active = pathname === link.href

        return (
          <Button
            asChild
            key={link.href}
            className="h-[52px] justify-start gap-2"
            variant={active ? 'sidebarOutline' : 'sidebar'}
          >
            <Link href={link.href}>
              <LinkIcon className="w-6 text-blue-600" />
              {link.label}
            </Link>
          </Button>
        )
      })}
    </>
  )
}
