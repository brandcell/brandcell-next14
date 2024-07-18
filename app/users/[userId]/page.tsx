import getUserPosts from "@/app/lib/getUserPosts"
import getOneUser from "@/app/lib/getUser"
import { Suspense } from "react"
import UserPosts from "@/app/components/UserPosts"

import { Metadata } from "next"
import getAllUsers from "@/app/lib/getAllUsers"

import { notFound } from "next/navigation"

//create types for params you will receive
type Params = {
    params: {
        userId: string
    }
}

//generateMetadata allows you to generate dynamic Metadata 
export async function generateMetadata({
    params: { userId }
}: Params): Promise<Metadata> {

    const userData: Promise<User> = getOneUser(userId)

    const user: User = await userData

    if (!user.name) {
        return {
            title: "User Not Found"
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`

    }

}


async function UserPage({
    params: { userId }
}: Params) {

    //these are requesting in parallel

    const userData: Promise<User> = getOneUser(userId)

    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData,userPostsData])

    const user = await userData

    if (!user.name) return notFound()


    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>

                <UserPosts promise={userPostsData} />

            </Suspense>

        </>
    )
}

//show the username while waiting for the post I pass in a promise that will resolve slower

export default UserPage


//because we know the params before hand 
export async function generateStaticParams() {

    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    //provide the params in advance so next can build it and just host it statically, before that it had to literally hit the page for it to render it on the server as the path is dynamic

    return users.map(user => (
        {
            userId: user.id.toString()
        }
    ))


}