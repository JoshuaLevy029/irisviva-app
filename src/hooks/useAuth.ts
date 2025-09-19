import { useSession } from "@/context/auth"
import { User } from "@/entities/user.entity"
import { useState } from "react"

export default function useAuth () {
    const { getSession } = useSession()
    const [user, setUser] = useState<User | null>(null)

    const retrieveUser = async (loading: boolean = false): Promise<void> => {
        if (!loading) {
            const user = await getSession()
            console.log('Retrieving user...')
            setUser(user)
        }
    }

    return { user, retrieveUser }
}