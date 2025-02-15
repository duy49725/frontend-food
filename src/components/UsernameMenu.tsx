import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="mt-2">
                    <Link
                        to="/user-profile"
                        className="font-bold hover:text-orange-500 m-2"
                    >
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-2">
                    <Link
                        to="/user-restaurant"
                        className="font-bold hover:text-orange-500 m-2"
                    >
                        User Manage Restaurant
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenu>
                    <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500 mt-2">
                        Logout
                    </Button>
                </DropdownMenu>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;