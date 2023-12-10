"use strict";
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
     * Creates an instance of FileContent.
     * @param {IFileContent} data - The data to initialize the file content model.
     */
    constructor(data) {
        this.sha = data.sha;
        this.path = data.path;
        this.name = data.name;
        this.type = data.type;
        this.content = data.content;
    }
}
