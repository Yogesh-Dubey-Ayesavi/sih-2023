"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileContent = void 0;
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
class FileContent {
    /**
     *
     *   * Creates an instance of FileContent.
    * @param {IFileContent} data - The data to initialize the file content model.
   
   Example usage:
   ```javascript

 const fileContentData: IFileContent = {
   sha: "abc123",
   path: "docs/environment/file1",
   name: "file1.md",
   type: "file",
   content: "content string"
 };
   ```
    */
    constructor(data) {
        var _a;
        this.sha = data.sha;
        this.path = data.path;
        this.name = data.name;
        this.type = (_a = data.type) !== null && _a !== void 0 ? _a : "file";
        this.content = data.content;
    }
}
exports.FileContent = FileContent;
