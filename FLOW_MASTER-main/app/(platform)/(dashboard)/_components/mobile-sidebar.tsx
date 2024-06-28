"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);
    // whenever url changes, sidebar closes

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button
                onClick={onOpen}
                className='block md:hidden mr-2'
                variant='ghost'
                size='sm'

            >
                <Menu className='h-4 w-4' />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side='left'
                    className='p-2 pt-10'
                >
                    <Sidebar
                        storageKey='f-sidebar-mobile-state'
                    />
                </SheetContent>
            </Sheet>
        </>
    );
};


// Hydration errors happen when we use "use client"
// each component even when it is in "use client" is going to be server side rendered atleast for first iteration of it.
// when we use these models, sheets and disc type components is that on server side there is a specific state like "closed" and on client side it suddenly opened!
// At that time the Hydration error occurs.