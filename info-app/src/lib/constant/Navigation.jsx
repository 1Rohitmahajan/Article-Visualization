import {
	HiOutlineViewGrid,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout
} from 'react-icons/hi'
import {IoStatsChartSharp} from 'react-icons/io5';
import {AiFillContacts} from 'react-icons/ai';
import {FcAbout} from 'react-icons/fc';
import {PiArticleLight} from 'react-icons/pi';
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Article',
		label: 'Article',
		path: '/Article',
		icon: <PiArticleLight />
	},
	{
		key: 'Charts',
		label: 'Charts visualization',
		path: '/Charts',
		icon: <IoStatsChartSharp />
	},
	{
		key: 'About',
		label: 'About',
		path: '/About',
		icon: <FcAbout />
	},
	{
		key: 'Contact',
		label: 'Contact',
		path: '/Contact',
		icon: <AiFillContacts />
	},

	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]