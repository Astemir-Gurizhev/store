import Link from 'next/link'
import cn from './logo.module.scss'
export const Logo = () => {
    return (
        <Link href={'/'} className={cn.logo}>
            <img className={cn.img} src="/header/logo/1.png" alt="" />
            <img className={cn.text} src="/header/logo/2.png" alt="" />
        </Link>
    )
}