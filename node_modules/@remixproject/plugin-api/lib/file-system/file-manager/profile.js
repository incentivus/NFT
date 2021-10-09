"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filSystemProfile = void 0;
exports.filSystemProfile = {
    name: "fileManager",
    displayName: "Native Filemanager for Remix vscode plugin",
    description: "Provides communication between vscode filemanager and remix-plugin",
    location: "sidePanel",
    documentation: "https://remix-ide.readthedocs.io/en/latest/solidity_editor.html",
    version: "0.0.1",
    methods: [
        "getFolder",
        "getCurrentFile",
        "getFile",
        "setFile",
        "switchFile",
        // NextFileSystemAPI
        "open",
        "writeFile",
        "readFile",
        "rename",
        "copyFile",
        "mkdir",
        "readdir",
    ],
};
//# sourceMappingURL=profile.js.map