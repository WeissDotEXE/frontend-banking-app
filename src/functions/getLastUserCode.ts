const getLastUserCode = (id: string): string => {
    return id.slice(-4);
};

export default getLastUserCode;