import { Link, usePage } from "@inertiajs/react";
import { ShoppingCart, Package, BarChart3, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar";

const items = [
    { title: "বিক্রয় (POS)", url: "/", icon: ShoppingCart },
    { title: "পণ্য", url: "/products", icon: Package },
    { title: "রিপোর্ট", url: "/reports", icon: BarChart3 },
    { title: "সেটিংস", url: "/settings", icon: Settings },
];

export function AppSidebar() {
    const { url } = usePage();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="p-4 font-semibold">POS</SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        render={<Link href={item.url} />}
                                        tooltip={item.title}
                                        isActive={url === item.url}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4">Logout</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
