import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from './ui/button'


// img
import img1 from "../assets/img/CodeAnt Ai.png"

// icons
import { SeparatorVertical, Home, Cloud, BookText, Settings, Phone, LogOut, Menu, X } from "lucide-react"

const navigationItems = [
  { title: 'Repositories', icon: <Home /> },
  { title: 'AI Code Review', icon: <SeparatorVertical /> },
  { title: 'Cloud Security', icon: <Cloud /> },
  { title: 'How to Use', icon: <BookText /> },
  { title: 'Settings', icon: <Settings /> },
  { title: 'Support', icon: <Phone /> },
  { title: 'Logout', icon: <LogOut /> },
];



const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex justify-between items-center">
            <img src="/logo.png" alt="CodeAnt AI" className="h-8" />
            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <Select>
            <SelectTrigger className="w-full rounded-lg border border-gray-300">
              <SelectValue placeholder="UtkarshDhairyaPanwar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">UtkarshDhairyaPanwar</SelectItem>
              <SelectItem value="user2">User 2</SelectItem>
            </SelectContent>
          </Select>
        </SheetHeader>
        <div className="py-4">
          {navigationItems.map((item) => (
            <button
              key={item.title}
              className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
