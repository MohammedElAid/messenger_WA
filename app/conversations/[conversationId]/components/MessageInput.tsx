'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string
    id: string;
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const MessageInput = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}: MessageInputProps) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-2
                    px-4
                    w-full
                    rounded-full
                    bg-neutral-100
                    focus:outline-none"
            />

        </div>
    )
}

export default MessageInput
