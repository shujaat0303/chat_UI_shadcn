import { useState } from 'react'

import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './AppSideBar'


function App() {


  return (
    <>
     <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
          
      </main>
    </SidebarProvider>

    </>
  )
}

export default App
