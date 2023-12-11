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
const create_file_1 = __importDefault(require("./methods/create_file"));
const delete_file_1 = __importDefault(require("./methods/delete_file"));
const fetch_files_1 = __importDefault(require("./methods/fetch_files"));
const get_file_content_1 = __importDefault(require("./methods/get_file_content"));
const update_file_1 = __importDefault(require("./methods/update_file"));
/**
 * The EsgSDK class provides methods for file management using the ESG API.
 * It follows the Singleton pattern to ensure a single instance is used throughout the application.
 * @class
 */
class EsgSDK {
    /**
     * Private constructor to prevent direct instantiation. Use the `initialize` method instead.
     */
    constructor() { }
    /**
     * Initializes and returns the singleton instance of the EsgSDK class.
     * @returns {EsgSDK} - The singleton instance of the EsgSDK class.
     */
    static initialize() {
        if (!EsgSDK.instance) {
            EsgSDK.instance = new EsgSDK();
        }
        return EsgSDK.instance;
    }
    /**
     * Creates a file with the specified content at the given path.
     * @param {FileContent} file - The file content parameters.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file creation was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "content string"
     * });
     * const success = await esgSDK.createFile(fileContentInstance);
     * console.log("File creation success:", success);
     */
    createFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, create_file_1.default)(file);
        });
    }
    /**
     * Fetches a list of FileModel instances from the specified API endpoint.
     * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
     * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const directory = "environment";
     * const files = await esgSDK.fetchFiles(directory);
     * console.log("Fetched Files:", files.map(file => new FileModel(file)));
     */
    fetchFiles(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, fetch_files_1.default)(dir);
        });
    }
    /**
     * Updates a file with the specified content at the given path.
     * @param {FileContent} file - The file content parameters.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file update was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "updated content string"
     * });
     * const success = await esgSDK.updateFile(fileContentInstance);
     * console.log("File update success:", success);
     */
    updateFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, update_file_1.default)(file);
        });
    }
    /**
     * Fetches the content of a file from the specified API endpoint.
     * @param {string} dir - The directory parameter. Must be one of "environment", "social", "governance".
     * @param {string} fileName - The name of the file without extension.
     * @returns {Promise<FileContent>} - A Promise that resolves to the content of the specified file.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const dir = "environment";
     * const fileName = "file1";
     * const fileContentInstance = await esgSDK.getFileContent(dir, fileName);
     * console.log("File Content:", new FileContent(fileContentInstance));
     */
    getFileContent(dir, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, get_file_content_1.default)(dir, fileName);
        });
    }
    /**
     * Deletes a file at the specified path.
     * @param {FileContent} fileContent - The file content model representing the file to be deleted.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "content string"
     * });
     * const success = await esgSDK.deleteFile(fileContentInstance);
     * console.log("File deletion success:", success);
     */
    deleteFile(fileContent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, delete_file_1.default)(fileContent);
        });
    }
}
