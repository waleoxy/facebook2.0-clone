import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useState } from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Modal from '../components/Modal'
import SideBar from '../components/SideBar'

export default function Home({session}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!session) {return <Login/>}

  console.log('cl', isModalOpen);

  const openModal = () => {
    setIsModalOpen(true)   
}
 const closeModal = () => {
    setIsModalOpen(false) 
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
        <Feed click={openModal}/>
      </main>
      {isModalOpen &&
     <div className="w-2/5 absolute top-16 left-1/3 
            rounded-2xl right-1/3 bg-white pb-3">
        <Modal clickClose={closeModal}/>
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
