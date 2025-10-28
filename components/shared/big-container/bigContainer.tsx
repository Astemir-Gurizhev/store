
import cn from "./bigContainer.module.scss"
import React from 'react'

interface Props {
    className?: string
}

export const BigContainer: React.FC<React.PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return(
        <div className={cn.bigContainer}>{children}</div>
    )
}