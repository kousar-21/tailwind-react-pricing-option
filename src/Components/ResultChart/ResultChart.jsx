import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "id": 1,
        "name": "Alice",
        "physics": 85,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 2,
        "name": "Bob",
        "physics": 72,
        "chemistry": 65,
        "math": 80
    },
    {
        "id": 3,
        "name": "Charlie",
        "physics": 91,
        "chemistry": 88,
        "math": 95
    },
    {
        "id": 4,
        "name": "David",
        "physics": 68,
        "chemistry": 70,
        "math": 75
    },
    {
        "id": 5,
        "name": "Eva",
        "physics": 77,
        "chemistry": 82,
        "math": 89
    },
    {
        "id": 6,
        "name": "Frank",
        "physics": 89,
        "chemistry": 76,
        "math": 84
    },
    {
        "id": 7,
        "name": "Grace",
        "physics": 94,
        "chemistry": 90,
        "math": 97
    },
    {
        "id": 8,
        "name": "Henry",
        "physics": 63,
        "chemistry": 55,
        "math": 60
    },
    {
        "id": 9,
        "name": "Isabella",
        "physics": 80,
        "chemistry": 75,
        "math": 83
    },
    {
        "id": 10,
        "name": "Jack",
        "physics": 75,
        "chemistry": 72,
        "math": 78
    }
]




const ResultChart = () => {
    console.log(resultData)
    return (
        <div>
            <LineChart width={1000} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                {/* <XAxis dataKey="name" /> */}
                <YAxis dataKey=""></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='orange'></Line>

            </LineChart>


        </div>
    );
};

export default ResultChart;