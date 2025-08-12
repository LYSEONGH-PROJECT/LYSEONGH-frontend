import DashboardSidebar from "@/components/layout/dashboard/sidebar"
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout
