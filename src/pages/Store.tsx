import storeItems from "../data/items.json";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box";
import MediaCard from "../components/Card/Card"
export const Store = ()=> {
    return (
        <div>
                 <Box sx={{width:'100%',display: 'flex', justifyContent: 'center'}}>
                    <Grid
                  
                    container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 } } justifyContent="center">
                        {storeItems.map((data, index) => (
                            <Grid 
                            justifyContent="center"

                            key={index} item xs={3}>
                                <MediaCard {...data} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
        </div>
    );
}