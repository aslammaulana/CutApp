import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { HiChevronDown } from "react-icons/hi"

export default function MenuDekstop() {
    return (
        <div className="hidden md:flex items-center justify-center space-x-5 text-[15px] font-medium">
            {/* Home Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center cursor-pointer text-[#3a3f3e]">
                        <p>Home</p>
                        <HiChevronDown className="ml-2" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/">
                            <p>Beranda</p>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/vision">
                            Our Vision
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products">
                            Products
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/achievement">
                            Achievement
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/team">
                            Team
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Product Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center cursor-pointer text-[#3a3f3e]">
                        <p>Product</p>
                        <HiChevronDown className="ml-2" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/products/serviceoffer">
                            Service Offer
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products/playground">
                            Playground
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products">
                            Products
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products/achievement">
                            Achievement
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products/team">
                            Team
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Price Menu */}
            <Link href="/price">
                <div className="flex items-center cursor-pointer text-[#3a3f3e]">
                    <p>Price</p>
                </div>
            </Link>

            {/* Achievement Menu */}
            <Link href="/achievement">
                <div className="flex items-center cursor-pointer text-[#3a3f3e]">
                    <p>Achievement</p>
                </div>
            </Link>

            {/* About Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center cursor-pointer text-[#3a3f3e]">
                        <p>About</p>
                        <HiChevronDown className="ml-2" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/about/">
                            About Ludesc
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/about/mission">
                            Our Mission
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/about/vision">
                            Our Vision
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/about/achievement">
                            Achievement
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/about/team">
                            Team
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
