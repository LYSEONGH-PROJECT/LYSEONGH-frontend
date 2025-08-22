import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,  
} from "@/components/ui/sidebar"
import { 
  LayoutDashboard, 
  Package, 
  Wrench, 
  FileText, 
  Image, 
  Settings, 
  LogOut,
  Menu,
  X,
  Home
} from 'lucide-react';
import Link from "next/link";

const menuItems = [
  { id: 'home', label: 'Home', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'products', label: 'Products', icon: Package, href: '/dashboard/products' },
  { id: 'services', label: 'Services', icon: Wrench, href: '/dashboard/services' },
  { id: 'projects', label: 'Projects', icon: FileText, href: '/dashboard/projects' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/dashboard/settings' }
];


const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon" >
      {/* <SidebarHeader /> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu className="flex space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="focus:bg-blue-600 focus:text-white">
                      <item.icon className="text-2xl"/>
                      <span className="">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default DashboardSidebar
