const drawLine = (arr: number[] = [], COLUMN_WIDTH: number = 50): string => {
    return arr
        .map((item, index) => {
            const stt: number = index + 1;
            const obj = {
                x: stt * COLUMN_WIDTH,
                y: item
            };
            return obj.x + "," + obj.y;
        })
        .join();
};

export default drawLine;
