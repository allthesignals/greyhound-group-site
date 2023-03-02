import React from 'react'
import { Link } from "gatsby";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../img/logo.png";
import smLogo from "../img/logo-sm.png";

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Careers', href: '#', current: false },
  { name: 'Connect', href: '#', current: false },
  { name: 'Listings', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sm:sticky sm:top-0 sm:z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 sm:h-32">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto m-4 lg:hidden"
                    src={smLogo}
                    alt="Greyhound Group"
                  />
                  {/* <Link to="/" className="block h-8 w-auto lg:hidden" title="Logo">
                  </Link> */}
                  <img
                    className="hidden h-12 w-auto lg:block sm:relative -right-6"
                    src={logo}
                    alt="Greyhound Group"
                  />
                </div>
                <div className="flex grow hidden sm:block bg-gg-light-green border-solid border-4 border-gg-lavender rounded-lg">
                  <div className="flex grow">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'flex grow items-center justify-center text-md text-white hover:text-white font-extrabold uppercase'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'block px-3 py-2 text-base text-white font-extrabold uppercase' 
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
};
