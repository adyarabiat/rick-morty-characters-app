export const numberToArr = (num: number) => {
    let epsodesIds: number[];
    epsodesIds = [];
    for (let i = 1; i <= num; i++) {
        epsodesIds.push(i);
    }
    return epsodesIds;
};
