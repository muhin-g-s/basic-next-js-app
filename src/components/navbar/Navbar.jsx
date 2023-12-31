"use client"

import Link from 'next/link';
import React from 'react'
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import DarkMode from '../DarkMode/DarkMode';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];


const Navbar = () => {

  //const session = useSession()
//
  return (
    <nav className={styles.container}>
        <Link href='/' className={styles.logo}>App</Link>
          <div className={styles.links}>
          <DarkMode/>
            {links.map((link) => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
            {/* <button className={styles.logout}>Logout</button> */}
          </div>     
    </nav>
  )
}

export default Navbar