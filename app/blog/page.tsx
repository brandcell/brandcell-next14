import Link from "next/link"

import Posts from "../components/Posts"

export const revalidate = 10

async function Blog() {



  // throw new Error('not today!')
  return (
    <>
      <header className="py-20"><h1 className="text-5xl font-semibold text-center mb-8">Our Blog</h1>
        <h2 className="text-center text-xl">No Fluff. Tips, tricks and tactics to help you run your e-commerce store

        </h2></header>


      <Posts />



    </>

  )
}

export default Blog