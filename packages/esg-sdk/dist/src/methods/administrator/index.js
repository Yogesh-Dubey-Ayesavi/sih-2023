"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const administrator_1 = require("../../models/administrator");
let administrator = new administrator_1.Administrator({
    name: "shaswat",
    id: "a34",
    is_admin: false,
    avatar_url: "sdbc",
    created_at: "abc"
});
console.log(administrator.name);
