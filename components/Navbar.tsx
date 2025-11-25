"use client"

import { FileTextIcon, LayoutGrid, LayersIcon, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Lora } from "next/font/google";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const lora = Lora({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const navigationLinks = [
	{ href: "https://dataedu.vercel.app", label: "Dashboard", icon: LayoutGrid  },
  { href: "https://github.com/caioamaral-io/Dashboard", label: "Github", icon: Github },
	{ href: "https://docsedu.vercel.app", label: "Documentation", icon: FileTextIcon },
  { href: "#", label: "Site", icon: LayersIcon },
];

const Navbar = () => {
	const { setTheme } = useTheme();

	return (
		<header className="border-b px-4 md:px-6">
			<div className="flex h-14 items-center justify-between gap-4">
				<div className="flex items-center">
					<span className={`${lora.className} font-regular text-lg`}>Dash Enem</span>
				</div>
				<div />
				<div className="flex items-center gap-4">
					<NavigationMenu>
						<NavigationMenuList className="gap-2">
							<TooltipProvider>
								{navigationLinks.map((link) => (
									<NavigationMenuItem key={link.label}>
										<Tooltip>
											<TooltipTrigger asChild>
												<NavigationMenuLink
													href={link.href}
													className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
												>
													<link.icon size={18} aria-hidden="true" />
													<span className="sr-only">{link.label}</span>
												</NavigationMenuLink>
											</TooltipTrigger>
											<TooltipContent
												side="bottom"
												className="px-3 py-1 text-xs rounded-md border border-border bg-background text-foreground shadow-sm"
											>
												<p className="leading-none">{link.label}</p>
											</TooltipContent>
										</Tooltip>
									</NavigationMenuItem>
								))}
							</TooltipProvider>
						</NavigationMenuList>
					</NavigationMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon" className="h-8 w-8">
								<Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
								<Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="py-1 px-1 text-xs min-w-[6rem]">
							<DropdownMenuItem className="py-2 text-xs" onClick={() => setTheme("light")}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem className="py-2 text-xs" onClick={() => setTheme("dark")}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem className="py-2 text-xs" onClick={() => setTheme("system")}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Navbar