import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useState } from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Modal from '../components/Modal'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'

export default function Home({session}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isWithInsert, setIsWithInsert] = useState(false)

  if (!session) {return <Login/>}

  const openModal = () => {
    setIsModalOpen(true)   
}
 const closeModal = () => {
    setIsModalOpen(false)
    setIsWithInsert(false)
}
 const addModalInsert = () => {
    setIsWithInsert(true) 
    setIsModalOpen(true)  
}
  

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
     </Head>
     <Header/>
     <section className="relative">
      <main className="flex">
        <SideBar/>
        <Feed addModalInsert={addModalInsert} click={openModal}/>
        <Widgets/>
      </main>
      {isModalOpen &&
     <div className="w-2/5 absolute top-4 left-1/3 
            rounded-2xl right-1/3 bg-white pb-3">
        <Modal clickClose={closeModal} isWithInsert={isWithInsert}/>
      </div>
      }
     </section>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props: {
      session,
    },
  };
}
