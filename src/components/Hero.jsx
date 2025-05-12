import { Button, Grid, Typography } from "@mui/material";

export default function Hero() {
    
    return (
        <Grid display="flex" height="100vh" container>
            <Grid sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                rowGap: "20px",
                  height:"100vh"
                
            }}>
            <Typography variant="h1" gutterBottom>Momen Ehab</Typography>
                <Typography sx={{ fontSize: 24 }}>Software Engineer</Typography>
                <Button component="a"  href="#contact" sx={{color:"white",marginTop:"50px"}} variant="outlined">Contact Me</Button>
            </Grid>
        </Grid>
    )


}