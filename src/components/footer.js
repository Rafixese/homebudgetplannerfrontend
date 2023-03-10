import * as React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles";


export const Footer = (props: Props) => {
    const theme = useTheme()
    console.log(theme.palette.mode)
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
                backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))':'',
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.contrastText} variant="h5">
                            Home Budget Planner
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={theme.palette.primary.contrastText} variant="subtitle1">
                            &#169;{`${new Date().getFullYear()}`} by CatDev Rafał Hrabia
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer