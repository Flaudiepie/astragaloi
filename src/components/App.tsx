import { Box, Grid, Paper } from '@mui/material';
import Dice from 'react-dice-roll';
import { connect, useDispatch } from 'react-redux';
import { setRolledValue } from '../state';
import { StoreState } from '../state/store';
import Board from './Grid/Board';

interface AppProps {
    grid: number[][] | null[][];
    diceValue: number | null;
}

const App: React.FC<AppProps> = ({ grid, diceValue }) => {
    const dispatch = useDispatch();

    return <Box flex={1}>
        <Grid container
              height="100vh">
            <Grid item
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center">
                <Paper sx={{ padding: 15 }}>
                    <Dice size={100}
                          disabled={diceValue !== null}
                          onRoll={(value) => dispatch(setRolledValue(value))}/>
                </Paper>
            </Grid>
            <Grid item
                  xs={4}
                  display="flex"
                  justifyContent="space-between"
                  direction="column"
                  paddingTop={5}
                  paddingBottom={5}>
                <Box>
                    <Board grid={grid}/>
                </Box>
                <Box>
                    <Board grid={grid}/>
                </Box>
            </Grid>
            <Grid item
                  xs={4}>

            </Grid>
        </Grid>
    </Box>;
};

const mapStateToProps = (state: StoreState) => {
    return { grid: state.gridSlice.grid, diceValue: state.gridSlice.diceValue };
};

export default connect(mapStateToProps)(App);