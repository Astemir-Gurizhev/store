import Link from "next/link"
import { BigContainer } from "../big-container/bigContainer"
import cn from "./topHeader.module.scss"
export const TopHeader = () => {
    return (
        <div className={cn.topHeader}>
            <BigContainer>
                <div className={cn.row}>
                    <Link href='' className={cn.left}>
                        Мы на WB      
                    </Link> 
                    <ul className={cn.menu}>
                        <li><Link href=''>О нас</Link></li>
                        <li><Link href=''>Оплата и доставка</Link></li>
                        <li><Link href=''>Часто задаваемые вопросы</Link></li>
                        <li><Link href=''>Программа лояльности</Link></li>
                        <li><Link href=''>Контакты</Link></li>
                    </ul>
                    <Link href='' className={cn.right}>
                        Мы на Ozon
                    </Link>
                </div>
                
            </BigContainer>
        </div>
    )
}