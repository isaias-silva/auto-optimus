"use client";

import { Notifications } from '@mui/icons-material';
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Link from 'next/link';

import React, { useState } from 'react'


export default function Notify() {
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false)
    return (
        <>


            <Button size='small' variant='text' className=' relative' onClick={() => setVisibleNotify(!visibleNotify)}>
                <Notifications shapeRendering='true' className=' text-light-text' />
            </Button>
            {visibleNotify ? <div>
                <List className=' bg-gray-50 absolute h-full top-10 right-0 z-50'>
                    <Link href="/myUrl" passHref>
                        <ListItem alignItems="flex-start">
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
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </Link>
                    <Divider variant="inset" component="li" />

                </List>
            </div> : <>

            </>}

        </>
    )
}



