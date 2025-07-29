import {
  IconChecklist,
  IconLayoutDashboard,
  IconPackages,
  IconMessages,
  IconUsers,
  IconLockAccess,
  IconBug,
  IconSettings,
  IconHelp
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
          title: 'Tasks',
          url: '/todo',
          icon: IconChecklist,
        },
        {
          title: 'Apps',
          url: '/todo',
          icon: IconPackages,
        },
        {
          title: 'Chats',
          url: '/todo',
          icon: IconMessages,
        },
        {
          title: 'Users',
          url: '/todo',
          icon: IconUsers,
        },
        {
          title: 'Secured By Clerk',
          icon: IconChecklist,
          items: [
            {
              title: 'Sign In',
              url: '/todo'
            },
            {
              title: 'Sign Up',
              url: '/todo'
            },
            {
              title: 'User Management',
              url: '/todo'
            }
          ]
        }
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          url: '/todo',
          icon: IconLockAccess,
        },
        {
          title: 'Errors',
          url: '/todo',
          icon: IconBug,
        }
      ]
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Setting',
          url: '/todo',
          icon: IconSettings,
        },
        {
          title: 'Help Center',
          url: '/todo',
          icon: IconHelp,
        }
      ]
    }
  ],
}