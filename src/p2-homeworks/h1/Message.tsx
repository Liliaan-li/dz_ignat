import React from 'react'
import classes from "./Message.module.css"

export type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div>
            <div className={classes.message}>
                <div className={classes.ava_block}>
                    <img src={props.avatar} className={classes.ava} alt='#'/>
                </div>
                <div className={classes.main}>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.text}>{props.message}</p>
                    <p className={classes.time}>{props.time}</p>
                    {/*Код стыбжен с телеги и немного подправлен)))*/}
                    <div className={classes.svg_appendix}>
                        <svg width="9" height="19.5">
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="white" className={classes.corner}>
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
