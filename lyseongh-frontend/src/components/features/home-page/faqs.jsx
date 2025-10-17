'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";
import Image from "next/image";

const Faqs = () => {

  const subHeadingVariant = {
    initial: {
      y: 30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
        transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      }
    },
  };

  const headingVariant = {
    initial: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const FAQs = [
    {
      id: 1,
      question: "What services does Lyseon GH offer?",
      answer: "We provide a range of professional electrical and technical solutions, including: CCTV installation & maintenance, DSTV installation and signal optimization, Electrical wiring, upgrades, new installations, LAN/network cabling and infrastructure, Capacity building and consulting in electrical systems",
    },
    {
      id: 2,
      question: "Do you offer services for both homes and businesses?",
      answer: "Yes we handle residential, commercial, and industrial projects. Whether you have a small home setup or a large business facility, we deliver solutions that suit your needs.",
    },
    {
      id: 3,
      question: "How long does an installation take?",
      answer: "The timeline depends on the scope and complexity of the project. For CCTV or DSTV setups, simple installs may take a few hours. For full electrical wiring in a new build, it could span days. We’ll provide you with a detailed schedule after assessing your specific requirements.",
    },
    {
      id: 4,
      question: "Can I get maintenance or support after installation",
      answer: "Yes we offer ongoing maintenance, troubleshooting, and support packages. You can choose periodic inspections, emergency call-out services, or on-demand assistance.",
    },
    {
      id: 5,
      question: "What areas do you service?",
      answer: "We are based in Gbawe, Ghana (Top Base Road region). We service Accra, Greater Accra, and surrounding suburbs. For locations further afield, contact us and we’ll see how we can accommodate.",
    },
  ];

  return (
    <div className="md:px-6 mb-3">

      <div className='bg-blue-100 py-12 lg:py-32 md:min-h-auto rounded-lg'>
        <div className='flex flex-col md:flex-row gap-x-12 container max-w-4/5 mx-auto'>
          <div className="flex-1/3">
            <div className="">
              <motion.span 
              className="inline-flex items-center font-bold text-blue-700 uppercase tracking-wider"
              variants={subHeadingVariant}
              initial={subHeadingVariant.initial}
              whileInView={subHeadingVariant.animate}
              viewport={{ once: true }}
              >
              FAQs
              </motion.span>
              <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={headingVariant}
              initial={headingVariant.initial}
              whileInView={headingVariant.visible}
              viewport={{ once: true }}
              >
              Frequenly Asked <span className="text-blue-600">Questions</span>
              </motion.h2>
            </div>

            {/* <div className="mt-6">
              <p className="text-md text-gray-700">The feedback from our clients speaks volumes about the quality of our services. Read how we’ve helped them with reliable solutions.</p>
            </div> */}

            {/* <div className="h-[400px] w-[800px] mt-12">
              <Image 
                src="/images/home/electrical-wiring3.jpeg"
                alt=""
                width={800}
                height={50}
                className="w-[2/3] h-full object-cover rounded-lg"
              />
            </div> */}
          </div>

          <div className="flex-2/3 mt-6 md:mt-0">
            <div className="w-full">
              <Accordion type="multiple" className="w-full" collapsible="true">
                {FAQs.map((faq) => {
                  return (
                    <AccordionItem value={faq.id} key={faq.id} className="border-b border-gray-600">
                      <AccordionTrigger className="text-lg md:text-3xl font-semibold text-gray-800 hover:no-underline cursor-pointer">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
