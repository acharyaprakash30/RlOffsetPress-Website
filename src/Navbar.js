import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: RefreshIcon,
    },
  ]
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkAltIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
  ]
  const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            
              <span className="sr-only">Workflow</span>
              <img
                className="h-12 w-auto sm:h-16"
                src='data:image/png;base64,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'
                alt=""
              />
            
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                           <div>
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                           
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <p
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <p className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
              Pricing
            </p>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
              Docs
            </p>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <p className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <p className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </p>
            <p
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </p>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-16 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <p
                      key={item.name}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </p>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </p>

                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </p>
                {resources.map((item) => (
                  <p
                    key={item.name}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div>
                <p
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </p>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <p className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </p>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar