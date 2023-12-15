"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "@/constants";
import Image from "next/image";
import Suscribe from "./Suscribe";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileMenuProps) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={mobileMenuRef}
          exit={{ opacity: 0 }}
          key={new Date().getTime()}
          className=" flex justify-center items-center w-[100vw] h-[100vh] z-50 absolute top-0 right-0 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute cursor-pointer top-0 right-0 p-4"
          >
            <Image src="/close.svg" alt="Close" width={30} height={30} />
          </motion.div>
          <div>
            <motion.div
              initial={{ bottom: 0, scale: 0 }}
              animate={{ bottom: "50%", scale: [0, 100] }}
              exit={{ scale: [100,0], bottom: "-50%" }}
              transition={{ duration: 1.3 }}
              className="w-6 h-6 bg-green-100 absolute -bottom-[2rem] right-[45%] -z-50 rounded-full "
            />
            <motion.ul className="text-[1.5rem] text-white flex flex-col items-center gap-[4rem] justify-around uppercase">
              {NavLinks.map((link) => (
                <motion.li
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.5 }}
                  exit={{ opacity: [1, 0] }}
                  key={link.key}
                >
                  <Link href={link.href}>{link.text}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
