import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'

type DropwdownProps = {
  name: string
  page: string
}

type MainProp = {
  name: string
  elements: Array<DropwdownProps>
}

const Dropdown = ({ name, elements }: MainProp) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-10 w-40">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md items-center bg-white h-10 px-8 py-2 text-sm font-medium text-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {name}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-green-600 ring-opacity-5 focus:outline-none">
          {elements.map((element) => (
            <div key={element.name} className="px-1 py-1">
              <Link href={element.page}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-green-600 text-white' : 'text-green-600'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {element.name}
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
