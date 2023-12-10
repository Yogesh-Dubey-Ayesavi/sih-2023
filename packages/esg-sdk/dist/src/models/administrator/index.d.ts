/**
 * Represents an administrator with properties related to an admin user.
 * @interface
 */
export interface IAdministrator {
    /**
     * The name of the administrator.
     * @type {string}
     */
    name: string;
    /**
     * The avatar URL of the administrator.
     * @type {string}
     */
    avatar_url: string;
    /**
     * The ID of the administrator.
     * @type {string}
     */
    id: string;
    /**
     * The creation timestamp of the administrator.
     * @type {string}
     */
    created_at: string;
    /**
     * Indicates whether the user is an administrator.
     * @type {boolean}
     */
    is_admin: boolean;
}
/**
 * Represents an administrator with properties related to an admin user.
 * @class
 * @implements {IAdministrator}
 */
export declare class Administrator implements IAdministrator {
    /**
     * The name of the administrator.
     * @type {string}
     */
    name: string;
    /**
     * The avatar URL of the administrator.
     * @type {string}
     */
    avatar_url: string;
    /**
     * The ID of the administrator.
     * @type {string}
     */
    id: string;
    /**
     * The creation timestamp of the administrator.
     * @type {string}
     */
    created_at: string;
    /**
     * Indicates whether the user is an administrator.
     * @type {boolean}
     */
    is_admin: boolean;
    /**
     * Creates an instance of Administrator.
     * @param {IAdministrator} data - The data to initialize the administrator model.
     */
    constructor(data: IAdministrator);
}
//# sourceMappingURL=index.d.ts.map