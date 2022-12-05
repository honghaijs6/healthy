import { iGraphData } from "components/LineChart";

const converValue = (max: number = 250, arr: iGraphData[]): iGraphData[] => {
    return arr.map((item) => {
        return {
            ...item,
            value: max - item.value
        };
    });
};

export default converValue;
