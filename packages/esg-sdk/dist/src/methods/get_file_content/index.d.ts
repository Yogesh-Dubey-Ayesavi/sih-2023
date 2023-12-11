import { FileContent } from "../../models/file_content";
/**
 * Fetches a list of FileContent instances from the specified API endpoint.
 * @param {string} dir - The directory parameter, Must be one of environment, social, governance.
 * @param {string} fileName - The name of the file without extension.
 * @returns {Promise<FileContent>} - A Promise that resolves to an array of FileContent instances.
 */
export default function getFileContent(dir: string, fileName: string): Promise<FileContent>;
//# sourceMappingURL=index.d.ts.map