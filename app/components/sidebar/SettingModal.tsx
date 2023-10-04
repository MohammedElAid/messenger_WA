'use client'

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";


interface SettingModalProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User
}



const SettingModal = (
    { isOpen, onClose, currentUser }: SettingModalProps
) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
        }
    })
    const image = watch('image')

    const handelUpload = (result: any) => {
        setValue('image', result?.info?.serure_url, {
            shouldValidate: true
        })
    }


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/settings', data)
            .then(() => {
                router.refresh();
                onClose()
            })
            .catch(() => {
                toast.error("something went wrong ! ")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div>
            Setting Modal
        </div>
    )
}

export default SettingModal
