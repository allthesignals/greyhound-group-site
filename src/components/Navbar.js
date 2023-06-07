import React, { Fragment } from 'react'
import { Link } from "gatsby";
import { Disclosure, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "../img/logo.png";


const services = [
  { name: 'Brokerage', href: '#' },
  { name: 'Development', href: '#' },
  { name: 'Property Management', href: '#' },
];

const navigation = [
  { name: 'About', href: '/about', current: true },
  { name: 'Careers', href: '/careers', current: false },
  { name: 'Connect', href: '/contact', current: false },
  { name: 'Listings', href: '/listings', current: false },
  {
      markup: () => 
      <Popover className="relative flex grow items-center justify-center">
        <Popover.Button className="flex items-center gap-x-1 text-md text-white hover:text-white font-extrabold uppercase">
          Services
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
            {services.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </Popover.Panel>
        </Transition>
      </Popover>
  },
  { name: 'Login', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sm:sticky sm:top-0 sm:z-20">
      {({ open }) => (
        <>
          <div className="mx-auto p-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 sm:h-32">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 sm:items-center sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className=" sm:relative sm:-right-6" title="Logo">
                    <img
                      className="sm:h-10 h-16 w-auto"
                      src={logo}
                      alt="Greyhound Group"
                    />
                  </Link>
                </div>
                <div className="flex grow hidden sm:block bg-gg-light-green border-solid border-4 border-gg-lavender rounded-lg">
                  <div className="flex grow">
                    {navigation.map((item) => {
                      if (item.markup) {
                        return <item.markup/>;
                      }

                      return <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'flex grow items-center justify-center text-md text-white hover:text-white font-extrabold uppercase'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-1000"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      'block px-3 py-2 text-base sm:text-white font-extrabold uppercase' 
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
};
