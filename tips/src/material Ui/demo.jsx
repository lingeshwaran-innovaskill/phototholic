import * as React from 'react';
import Button from "@mui/material/Button";
import { Avatar, Grid, Paper } from '@mui/material';

import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

function MaterialUi() {

    const con = () =>{
        console.log("hello lee")
    }

    const styles =  {
        padding:20,
        height:"50vh",
        width:"50vw",
        margin:"0 auto",
        borderRadius:"20px"
    }

    const iconsStyle = {
        backgroundColor:"teal"
    }

    return (<>

        <Grid>
            <Paper elevation={5} style={styles}>
                
                <Grid align={'center'}>
                    <Avatar style={iconsStyle}> lee </Avatar>
                    <h2> Sign-up </h2>
                </Grid>

                <Grid align={"center"}>

                <TextField id="outlined-basic"  label="Outlined"  variant='outlined'/>
                <TextField id="filled-basic"  label="Filled"  variant="filled"/>
                <TextField required id="standard-basic"  label="Standard" variant="standard"/>
            
                </Grid>

            </Paper>
        </Grid>

    </>);
}
export default MaterialUi;

//     function LightBulbIcon(props) {
//       return (
//         <SvgIcon {...props}>
//           <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
//         </SvgIcon>
//       );
//     }

//   function ProTip() {
//       return (
//         <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
//           <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//           {'Pro tip: See more '}
//           <Link href="https://mui.com/material-ui/getting-started/templates/">templates</Link>
//           {' in the Material UI documentation.'}
//         </Typography>
//       );
//     }