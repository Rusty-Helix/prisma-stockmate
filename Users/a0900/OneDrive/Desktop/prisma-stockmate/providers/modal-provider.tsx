'use client'

import {useEffect, useState} from 'react'

import { StoreModal } from '@/components/modals/store-modal'

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true) // is ModalProvider is called, set is mounted to true
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
            <>
                <StoreModal />
            </>
        )

}