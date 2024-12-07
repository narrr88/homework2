const PathNormalizer = require("./pathNormalizer.js");

const normalizer = new PathNormalizer();

const pathToNormalize = "./user/../user/documents//file.txt";
const joinedPath = normalizer.joinPaths("/home", "user", "documents", "file.txt");

console.log("Normalized Path: ", normalizer.normalizePath(pathToNormalize))
console.log("Joined Path: ", normalizer.joinPaths(joinedPath))