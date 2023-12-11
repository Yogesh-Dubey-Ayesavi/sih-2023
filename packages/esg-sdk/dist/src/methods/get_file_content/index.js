"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * Fetches a list of FileContent instances from the specified API endpoint.
 * @param {string} dir - The directory parameter, Must be one of environment, social, governance.
 * @param {string} fileName - The name of the file without extension.
 * @returns {Promise<FileContent>} - A Promise that resolves to an array of FileContent instances.
 */
function getFileContent(dir, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?get_content=${dir}/${fileName}.mdx`;
            const response = yield axios_1.default.post(url);
            // Assuming the API returns an array of FileContent-like objects
            return response.data;
        }
        catch (error) {
            // Handle errors here (e.g., log, throw, etc.)
            console.error('Error fetching file contents:', error);
            throw error;
        }
    });
}
exports.default = getFileContent;
