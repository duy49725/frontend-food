import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CircleUserRound, Menu } from "lucide-react"
import { Separator } from "./ui/separator"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLink from "./MobileNavLink"
 
export function MobileNav() {
  const {isAuthenticated, loginWithRedirect, user} = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500 size-10" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                {
                  isAuthenticated ? (
                      <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-orange-500" />
                      </span>
                  ) : (
                    <span>Welcome to MernEats.com!</span>
                  )
                }
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col gap-4">
              {
                isAuthenticated ? (
                  <MobileNavLink />
                ) : (
                  <Button
                    onClick={() => loginWithRedirect()}
                    className="flex-1 font-bold bg-orange-500"
                  > 
                    Log In2
                  </Button>
                )
              }
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}