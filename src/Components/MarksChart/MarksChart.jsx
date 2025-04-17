import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksPromiseRes = use(marksPromise)
    // console.log(marksPromiseRes)
    const marksData = (marksPromiseRes.data)
    // console.log(marksData)

    // data Processing Fot the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            Physics: studentData.marks.Physics,
            Chemistry: studentData.marks.Chemistry,
            Math: studentData.marks.Math
        }
        const avg = (student.Chemistry + student.Math + student.Physics) / 3;
        student.avg = avg;
        return student;
    })
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={1200} height={500} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="avg" fill='cyan'></Bar>
                <Bar dataKey="Math" fill='lime'></Bar>
                <Bar dataKey="Chemistry" fill='pink'></Bar>
                <Bar dataKey="Physics" fill='orange'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;