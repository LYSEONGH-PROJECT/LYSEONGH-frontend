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

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { id: 'products', label: 'Products', icon: Package, href: '/admin/products' },
  { id: 'services', label: 'Services', icon: Wrench, href: '/admin/services' },
  { id: 'projects', label: 'Projects', icon: FileText, href: '/admin/projects' },
  { id: 'media', label: 'Media', icon: Image, href: '/admin/media' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/admin/settings' }
];


const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
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
