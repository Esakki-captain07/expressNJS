const files = [];

const createFile = () => {
    let now = new Date();
    let fileName = `${now.toISOString().replace(/[:.]/g, '-')}.txt`;
    let fileContent = now.toString();
    files.push({ fileName, fileContent });
    return fileName;
};

const getFiles = () => {
    return files;
};

export default {
    createFile,
    getFiles
};
