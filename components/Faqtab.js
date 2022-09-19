import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";

const faqtab = ({ tanya, jawab }) => {
  return (
    <>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between ${
                !open ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
              }  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>{tanya}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-purple-900 bg-purple-200 rounded-bl-lg rounded-br-lg">
              {jawab}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default faqtab;
