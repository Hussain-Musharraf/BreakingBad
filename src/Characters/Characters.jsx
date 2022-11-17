import { useEffect ,useState} from 'react'
import { Box,Grid } from '@mui/material'
import React from 'react'
import fetchData from '../service/api'
import Character from '../components/Character'

const Characters = ({text}) => {
    const [characters,setCharacters]=useState([]);
    useEffect(()=>{
        getData();
    },[text]);

    const getData=async ()=>{
        let response=await fetchData(text);
        console.log(response);
        setCharacters(response.data)
    }
  return (
    <Box style={{margin:20}}>
        <Grid container spacing={3}>
        {
            characters.map(character =>(
                <Grid item xs={3}>
                    <Character character={character}/>
                </Grid>
            ))
        }
        </Grid>
    </Box>
  )
}

export default Characters