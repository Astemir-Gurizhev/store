
import cn from "./container.module.scss"
import React from 'react'

interface Props {
    className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return(
        <div className={cn.container}>{children}</div>
    )
}