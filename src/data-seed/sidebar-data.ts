import {
  IconChecklist,
  IconLayoutDashboard,
} from '@tabler/icons-react'
import { type SidebarData } from "@/types/sidebar-data";

export const sidebarData: SidebarData = {
  user: {
    name: 'admin',
    email: 'admin@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Todo',
          url: '/todo',
          icon: IconChecklist,
        }
      ],
    },
  ],
}