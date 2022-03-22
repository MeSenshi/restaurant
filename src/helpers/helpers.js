export const occupiedTables = (tables, orders) => {
    const table = [...tables];
    const order = [...orders];
    const arr = [];
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < table.length; j++) {
            if (
                order[i].Diners === table[j].Diners &&
                !arr.find(
                    (x) => table[j].Table === x?.Table || order[i].Mobile === x?.Mobile
                )
            ) {
                arr.push({ ...order[i], ...table[j] });
            }
        }
    }
    return arr;
};

