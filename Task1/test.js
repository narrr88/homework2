const PathAnalyzer = require('./pathAnalyzer.js');
const analyzer = new PathAnalyzer();

const testPath = "/home/user/documents/report.pdf"; // Absolute path

console.log("Testing with path:", testPath);
console.log("Base Name:", analyzer.getBaseName(testPath));
console.log("Directory Name:", analyzer.getDirName(testPath));
console.log("Extension:", analyzer.getExtension(testPath));
console.log("Is Absolute Path:", analyzer.isAbsolutePath(testPath));

const testPath2 = "documents/report.pdf"; // Relative path

console.log("\nTesting with path:", testPath2);
console.log("Base Name:", analyzer.getBaseName(testPath2));
console.log("Directory Name:", analyzer.getDirName(testPath2));
console.log("Extension:", analyzer.getExtension(testPath2));
console.log("Is Absolute Path:", analyzer.isAbsolutePath(testPath2));