'use client'

import { useCallback, useState } from 'react'
import {
    FieldValues,
    FormSubmitHandler,
    useForm
} from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        }
        else {
            setVariant('LOGIN')
        }
    }, [variant])
    const { register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }

    })

    const onSubmit: FormSubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === "LOGIN") {
            //Axios register
        }
        if (variant === "REGISTER") {
            //NextAuth login
        }
    }
    const socialAction = (action: string) => {
        setIsLoading(true)
    }
    return (
        <div>
            Auth Form !
        </div>
    )
}

export default AuthForm
