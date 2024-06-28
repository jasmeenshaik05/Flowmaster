import Link from "next/link"
import Image from "next/image"
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const headingFont = localFont({
    src: '../public/fonts/font.woff2'
});

export const Logo = () => {
    return (
        <Link href='/'>
            <div className='hover::opacity-75 transition items-center gap-x-2 hidden md:flex'>
                <Image src='/logo.svg'
                    alt='Logo'
                    height={30}
                    width={30}
                />
                <p className={cn(
                    'text-lg text-neutral-700',
                    headingFont.className,
                )}>
                    FlowMaster
                </p>
            </div>
        </Link>
    )
}


// () -> organizational folder: not visible in url but the files present in it can be rendered using their name directly without using folder name
// _  -> underscire folder: cannot be rendered at any cost

// export default can be written in only layouts and pages but not individual components