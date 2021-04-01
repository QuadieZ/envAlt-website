import React, {useEffect} from 'react';
import { ResponsiveLine } from '@nivo/line';
import a from '../data';

const f = [{
    data:[]
}]
// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const Line = ({d}) => {
    useEffect(() => {
        if (d !== undefined) {
            for (let i=0;i<d.length;i++) {
                f[0].data.push(d[i])
                //console.log(f)
            }
        }
    })
    
    
    return(
    <ResponsiveLine
    data={f}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: 'Time',
        legendOffset: 45,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Electricity Usage',
        legendOffset: -40,
        legendPosition: 'middle'
    }}
    colors="#F9999E"
    pointSize={11}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={5}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    areaBaselineValue={20}
    areaOpacity={0.15}
    useMesh={true}
/>)
};

export default Line;
