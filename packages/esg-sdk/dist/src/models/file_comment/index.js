"use strict";
/**
 * Represents a file comment model with properties related to a comment.
 * @class
 * @implements {IFileComment}
 */
class FileComment {
    /**
     * Creates an instance of FileComment.
     * @param {IFileComment} data - The data to initialize the file comment model.
     */
    constructor(data) {
        this.ip_address = data.ip_address;
        this.text = data.text;
        this.id = data.id;
        this.time = data.time;
        this.page_id = data.page_id;
    }
}
