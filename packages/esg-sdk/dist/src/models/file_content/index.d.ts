/**
 * Represents a file content model with properties related to a file.
 * @interface
 */
interface IFileContent {
    /**
     * The SHA hash of the file.
     * @type {string}
     */
    sha: string;
    /**
     * The path of the file, including the file name.
     * @type {string}
     */
    path: string;
    /**
     * The name of the file.
     * @type {string}
     */
    name: string;
    /**
     * The type of the file.
     * @type {string}
     */
    type: string;
    /**
     * The content of the file.
     * @type {string}
     */
    content: string;
}
/**
 * Represents a file content model with properties related to a file.
 * @class
 * @implements {IFileContent}
 /**
* Example usage:
*
* const fileContentData: IFileContent = {
*   sha: "abc123",
*   path: "docs/environment/file1.mdx",
*   name: "file1.md",
*   type: "file",
*   content: "content string"
* };
*
* const fileContentInstance = new FileContent(fileContentData);
*
* // Accessing properties
* console.log(fileContentInstance.sha);      // Output: abc123
* console.log(fileContentInstance.path);     // Output: docs/environment/file1.mdx
* console.log(fileContentInstance.name);     // Output: file1.md
* console.log(fileContentInstance.type);     // Output: file
* console.log(fileContentInstance.content);  // Output: content string
*/
declare class FileContent implements IFileContent {
    /**
     * The SHA hash of the file.
     * @type {string}
     */
    sha: string;
    /**
     * The path of the file, including the file name.
     * @type {string}
     */
    path: string;
    /**
     * The name of the file.
     * @type {string}
     */
    name: string;
    /**
     * The type of the file.
     * @type {string}
     */
    type: string;
    /**
     * The content of the file.
     * @type {string}
     */
    content: string;
    /**
     * Creates an instance of FileContent.
     * @param {IFileContent} data - The data to initialize the file content model.
     */
    constructor(data: IFileContent);
}
//# sourceMappingURL=index.d.ts.map