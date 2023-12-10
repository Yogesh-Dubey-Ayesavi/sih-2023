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
 * Deletes a file at the specified path.
 * @param {FileContent} fileContent - The file content model representing the file to be deleted.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
 */
function deleteFile(fileContent) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api?type=delete&path=${fileContent.path}&sha=${fileContent.sha}`;
            const response = yield axios_1.default.post(url);
            // Assuming the API returns a boolean indicating success
            return response.data;
        }
        catch (error) {
            // Handle errors here (e.g., log, throw, etc.)
            console.error('Error deleting file:', error);
            throw error;
        }
    });
}
exports.default = deleteFile;
