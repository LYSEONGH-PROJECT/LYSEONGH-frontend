import DashboardSidebar from "@/components/layout/dashboard/sidebar"
import TopBar from "@/components/layout/dashboard/topbar"
import { SidebarProvider } from "@/components/ui/sidebar"


const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full relative">
        <TopBar />
        <div className="bg-gray-100 pt-3">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout
