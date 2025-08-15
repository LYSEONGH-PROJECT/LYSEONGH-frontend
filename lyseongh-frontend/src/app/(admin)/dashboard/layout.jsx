import DashboardSidebar from "@/components/layout/dashboard/sidebar"
import TopBar from "@/components/layout/dashboard/topbar"
import { SidebarProvider } from "@/components/ui/sidebar"


const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full relative">
        <TopBar />
        <div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout
