import { Grid, Typography } from '@mui/material';
import sumValues from '../../utils/sumValues';
import Field from './Field';

interface RowProps {
    items: number[] | null[];
    yindex: number;
}

const Row: React.FC<RowProps> = ({ items, yindex }) => {
    const rows = items.map((value, xindex) => {
        return <Field value={value}
                      position={
                          { x: xindex, y: yindex }}
                      key={xindex}/>;
    });
    rows.push(<Typography align="center">{sumValues(items)}</Typography>);
    return <Grid item
                 key={yindex}>{rows}</Grid>;
};

export default Row;