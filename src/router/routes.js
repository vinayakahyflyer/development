// Layouts
import Layout1 from '@/views/layout/Layout1'
import LayoutWithoutNavbar from '@/views/layout/LayoutWithoutNavbar'
import LayoutBlank from '@/views/layout/LayoutBlank'
export var routes =  [
{
	path: '/p/jobs',
	component: LayoutBlank,
	children: [{
		path: ':id/view',
		name:'jobs.public.view',
		component: () => import('@/views/jobs/public/view')
	}]
},
{
	path: '/login',
	component: LayoutBlank,
	children: [{
		path: '',
		name:'auth.login',
		component: () => import('@/views/auth/login')
	}]
},
{
	path: '/password/email',
	component: LayoutBlank,
	children: [{
		path: '',
		name:'auth.password.email',
		component: () => import('@/views/auth/passwords/email')
	}]
},
{
	path: '/password/reset/:token',
	component: LayoutBlank,
	children: [{
		path: '',
		name:'auth.password.reset',
		component: () => import('@/views/auth/passwords/reset')
	}]
},
{
	path: '/profile',
	component: Layout1,
	meta:{requiresAuth:true},
	children: [
		{
			path: '',
			name:'profile.view',
			component: () => import('@/views/profile/view')
		},
	]
},
{
	path: '/notifications',
	component: Layout1,
	meta:{requiresAuth:true},
	children: [
		{
			path: '',
			name:'notifications.index',
			component: () => import('@/views/notifications/index')
		},
	]
},
{
	path: '/organisations',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser']},
	children: [
		{
			path: '',
			name:'organisations.index',
			component: () => import('@/views/organisations/index')
		},
		{
			path: ':id/view',
			name:'organisations.view',
			component: () => import('@/views/organisations/view')
		},
		{
			path: ':organisation_id/users/:id/view',
			name:'organisations.users.view',
			component: () => import('@/views/organisations/users/view')
		}
	]
},
{
	path: '/users',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Admin']},
	children: [
		{
			path: '',
			name:'users.index',
			component: () => import('@/views/users/index')
		},
		{
			path: ':id/view',
			name:'users.view',
			component: () => import('@/views/users/view')
		}
	]
},
{
	path: '/skillsets',
	component: Layout1,
	meta:{requiresAuth:true},
	children: [
		{
			path: '',
			name:'skillsets.index',
			component: () => import('@/views/skillsets/index')
		},
		/*{
			path: ':id/view',
			name:'skillsets.view',
			component: () => import('@/views/skillsets/view')
		},*/
	]
},
{
	path: '/rectags',
	component: Layout1,
	meta:{requiresAuth:true},
	children: [
		{
			path: '',
			name:'rectags.index',
			component: () => import('@/views/recruiter_tags/index')
		},
		/*{
			path: ':id/view',
			name:'rectags.view',
			component: () => import('@/views/recruiter_tags/view')
		},*/
	]
},
{
	path: '/superusers',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser']},
	children: [
		{
			path: '',
			name:'superusers.index',
			component: () => import('@/views/superusers/index')
		},
		{
			path: ':id/view',
			name:'superusers.view',
			component: () => import('@/views/superusers/view')
		},
	]
},
{
	path: '/companies',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser','Admin','Data Encoder','Recruiter']},
	children: [
		{
			path: '',
			name:'companies.index',
			component: () => import('@/views/companies/index')
		},
		{
			path: ':id/view',
			name:'companies.view',
			component: () => import('@/views/companies/view')
		}
	]
},
{
	path: '/jobs',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser','Admin','Data Encoder','Recruiter']},
	children: [
		{
			path: '',
			name:'jobs.index',
			component: () => import('@/views/jobs/index')
		},
		{
			path: ':id',
			name:'jobs.view',
			component: () => import('@/views/jobs/view')
		},
	]
},
{
	path: '/candidates',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser','Admin','Data Encoder','Recruiter']},
	children: [
		{
			path: '',
			name:'candidates.index',
			component: () => import('@/views/candidates/index')
		},
		{
			path: ':id/view',
			name:'candidates.view',
			component: () => import('@/views/candidates/view')
		}
	]
},
{
	path: '/elasticsearch',
	component: Layout1,
	meta:{requiresAuth:true,roles:['Superuser','Admin','Data Encoder','Recruiter']},
	children: [
		{
			path: '',
			name:'elasticsearch.index',
			component: () => import('@/views/candidates/index')
		},
		{
			path: ':id/view',
			name:'elasticsearch.view',
			component: () => import('@/views/candidates/view')
		}
	]
},
]