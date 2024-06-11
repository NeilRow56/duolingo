import { Button } from '@/components/ui/button'
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[998px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/logo2.svg" alt="Hero Image" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="font=bold max-w-[480px] text-center text-xl text-neutral-600 lg:text-3xl">
          Learn, practice, and master new languages with Lingo
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="space-y-4">
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignUpUrl="/learn"
                  afterSignInUrl="/learn"
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>

                <SignInButton
                  mode="modal"
                  afterSignUpUrl="/learn"
                  afterSignInUrl="/learn"
                >
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
            <SignedIn>
              <Button asChild size="lg" variant="secondary" className="w-full">
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </main>
  )
}
