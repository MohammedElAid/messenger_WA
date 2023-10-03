'use client'

import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import { useMemo } from "react"
import { format } from "date-fns"

interface ProfileDrawerProps {
    isOpen: boolean,
    onClose: () => void,
    data: Conversation & {
        users: User[]
    }
}
const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data,
}) => {
    const otherUser = useOtherUser(data);

    const joinedDate = useMemo(() => {
        return format(new Date(data.createdAt), "PP")
    }, [otherUser.createdAt])

    const title = useMemo(() => {
        return data.name || otherUser.name
    }, [data.name, otherUser.name])

    const statusText = useMemo(() => {
        if (data.isGroup) {
            return `${data.users.length} members`
        }
        return 'Active'
    }, [data])



    return (
        <div>
            Profile Drawer
        </div>
    )
}

export default ProfileDrawer
