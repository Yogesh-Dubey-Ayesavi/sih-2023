"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = void 0;
/**
 * Represents an administrator with properties related to an admin user.
 * @class
 * @implements {IAdministrator}
 */
class Administrator {
    /**
     * Creates an instance of Administrator.
     * @param {IAdministrator} data - The data to initialize the administrator model.
     */
    constructor(data) {
        this.name = data.name;
        this.avatar_url = data.avatar_url;
        this.id = data.id;
        this.created_at = data.created_at;
        this.is_admin = data.is_admin;
    }
}
exports.Administrator = Administrator;
