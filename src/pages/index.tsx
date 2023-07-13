'use client'

import Banner from '@/app/components/banner'
import '../app/globals.css'
import React from "react"
import Head from 'next/head'
import Navbar from '@/app/components/navbar'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Darth Vader</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Banner />
    </main>
  )
}
