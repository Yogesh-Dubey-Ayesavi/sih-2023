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
const file_model_1 = require("../../models/file_model");
/**
 * Fetches a list of FileModel instances from the specified API endpoint.
 * @param {string} dir - The directory parameter for the API endpoint, Must be one of **environment**, **social**, **governance**.
 * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
 */
function fetchFiles(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api/?list=${dir}`;
            const response = yield axios_1.default.post(url);
            // Assuming the API returns an array of FileModel-like objects
            return response.data.map((fileData) => new file_model_1.FileModel(fileData));
        }
        catch (error) {
            // Handle errors here (e.g., log, throw, etc.)
            console.error('Error fetching file models:', error);
            throw error;
        }
    });
}
exports.default = fetchFiles;
