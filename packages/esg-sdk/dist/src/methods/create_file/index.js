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
const file_content_1 = require("../../models/file_content");
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api';
/**
 * Creates a file with the specified content at the given path.
 * @param {FileContent} file - The file content parameters.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file creation was successful.
 */
function createFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `${BASE_URL}/create?type=create&path=${file.path}/${file.name}.mdx`;
            const requestBody = {
                content: file.content
            };
            const response = yield axios_1.default.post(url, requestBody);
            // Assuming the API returns a FileContent-like object
            const createdFile = new file_content_1.FileContent(response.data);
            // Assuming the creation is considered successful if the SHA property is present
            return Boolean(createdFile.sha);
        }
        catch (error) {
            console.error('Error creating file:', error);
            throw new Error('File creation failed'); // You can customize the error message as needed
        }
    });
}
exports.default = createFile;
