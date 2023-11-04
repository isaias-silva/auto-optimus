
"use client"
import { Notifications } from '@mui/icons-material';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Link from 'next/link';

import React, { useState } from 'react'


export default function Notify() {
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false)
    return (
        <>


            <button className=' rounded-lg w-12 h-12 overflow-hidden border-2 duration-300 ease-in-out hover:scale-110  hover:bg-gray-700 hover:bg-opacity-50' onClick={() => setVisibleNotify(!visibleNotify)}>
                <Notifications shapeRendering='true' />
            </button>
            {visibleNotify ?
                <List onPointerLeave={() => {
                    setVisibleNotify(false)
                }} className=' bg-init-component absolute w-96 top-16 right-0 z-50' >
                    <Link href="/myUrl" passHref>
                        <ListItem alignItems="flex-start" className=' text-init-text'>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <p className=' text-init-text'> Ali Connors</p>
                                        </Typography>
                                        <p className=' text-init-text'>texto</p>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                    </Link>
                    <Divider variant="inset" component="li" />

                </List>
                : <>

                </>}

        </>
    )
}



