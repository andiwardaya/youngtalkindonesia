import React from "react";
import Navbar2 from "../../components/Navbar2";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../../components/Footer";

const faqPage = () => {
  return (
    <>
      <Navbar2 />
      <main className="pt-[7rem] pb-[5rem]">
        <h1 className="text-center text-blue-500 font-extrabold text-4xl md:text-5xl mb-8">
          Have any question?
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="md:flex-[50%]">
            <Image className="" src="/faq.svg" width="920" height="300" />
          </div>
          <div className="md:flex-[50%] w-full px-4  border border-blue-500">
            {/* DISCLOSUREE */}
            <div className="mx-auto w-full max-w-md py-3 px-3 rounded-2xl bg-blue-400 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex w-full justify-between ${
                        !open ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
                      }  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                    >
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-purple-900 bg-purple-200 rounded-bl-lg rounded-br-lg">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex w-full justify-between ${
                        !open ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
                      }  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                    >
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-purple-900 bg-purple-200 rounded-bl-lg rounded-br-lg">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex w-full justify-between ${
                        !open ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
                      }  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                    >
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-purple-900 bg-purple-200 rounded-bl-lg rounded-br-lg">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default faqPage;
