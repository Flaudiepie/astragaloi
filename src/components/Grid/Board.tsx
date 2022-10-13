import { Grid } from '@mui/material';
import Row from './Row';

interface BoardProps {
    grid: number[][] | null[][];
}

const Board: React.FC<BoardProps> = ({ grid }) => {
    const board = grid.map((row, y) => {
        return <Row items={row}
                    yindex={y}/>
    });
    return <Grid container
                 spacing={1}>
        {board}
    </Grid>
};

export default Board;
