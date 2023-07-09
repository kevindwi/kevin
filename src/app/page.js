"use client";
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import AnimateOnScroll from '@/utils/AnimateOnScroll'

export default function Home() {
  const [content, setContent] = useState({});

  useEffect(() => { (async() => {
    const f = await (await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRmOybqUn4wVEiegvmfWCVpvU9Kl_ACr6MginnZR2zvwhsFvbhSxoNnaTKoIAEOEqW1lgcVlEK_BzxV/pub?output=xlsx")).arrayBuffer();
    const wb = read(f);
    const hero = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
    const project = utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]); 
    setContent({hero, project});
  })(); }, []);

  return (
    <main className=" px-10 lg:px-28">
      <Navbar />
      { Object.keys(content).length > 0 &&
        <>
          <AnimateOnScroll children={<Hero content={content.hero} />}/>
          <AnimateOnScroll children={<Project content={content.project} />}/>
          <AnimateOnScroll children={<Contact />}/>
          <Footer />
        </>
      }
      
    </main>
  )
}
