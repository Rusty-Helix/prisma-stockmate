'use client'

// import { UserButton } from "@clerk/nextjs";
import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal'

import {Modal} from '@/components/ui/modal';

export default function SetupPage() {

  const onOpen = useStoreModal((state)=>state.onOpen)
  const isOpen = useStoreModal((state)=>state.isOpen)
  
  useEffect(()=>{
    if(!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return null
}