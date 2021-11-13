import { readdir, readFileSync } from "fs";
import { compressBR, compressGZ, writeToFile } from "./src/compression.js";

const srcFolder = "./src";
const brotliFolder = "./br/";
const gzipFolder = "./gzip/";

/**
 * @description
 * @param {any} srcFolder
 * @param {any} err
 * @param {any} fileNames
 * @returns {any}
 */

const getCompressed = (srcFolder) => {
    readdir(srcFolder, (err, fileNames) => {
        //Read all files from src folder and compress it
        fileNames.forEach(function (fileName) {
            //Brotli compression
            let brCompressed = compressBR(readFileSync(srcFolder + "/" + fileName));
            if (brCompressed) {
                writeToFile(brotliFolder + fileName, brCompressed);
            } else {
                console.log(`Brotli compression failed for ${fileName}`);
            }

            //GZIP compression
            let gzipCompressed = compressGZ(readFileSync(srcFolder + "/" + fileName));
            if (gzipCompressed) {
                writeToFile(gzipFolder + fileName, gzipCompressed);
            } else {
                console.log(`GZIP compression failed for ${fileName}`);
            }
        });
    });
};

export default { getCompressed };
