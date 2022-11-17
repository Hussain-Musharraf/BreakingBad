
import { Card,styled, Tooltip, Typography,Box} from '@mui/material'
import React from 'react'
const Image=styled('img')({
    height:300,
    width:"100%",
    objectFit:'cover'
})
const Character = ({character}) => {
  return (
    <Card>
        <Tooltip title={
            <Box>
                <Typography>Name:{character.name}</Typography>
                <Typography>Real Name:{character.portrayed}</Typography>
                <Typography>Nickname:{character.nickname}</Typography>
                <Typography>Birthday:{character.birthday}</Typography>
                <Typography>Status:{character.status}</Typography>
            </Box>
        } arrow placement='top'
        >
            <Image src={character.img} alt=""character/>
        </Tooltip>
    </Card>
  )
}

export default Character