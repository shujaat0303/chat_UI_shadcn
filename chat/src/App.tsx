

import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from './AppSideBar'
import { AppSidebar } from './components/app-sidebar'
import { BreadcrumbWithCustomSeparator } from './BreadCrumbWithCustomSeperator'



function App() {


  return (
    <>
    
     <SidebarProvider>
     
      <AppSidebar />
      <main>
        <SidebarTrigger />
          
      </main>
      <BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>

    </SidebarProvider>

    

    
    </>
  )
}

export default App
