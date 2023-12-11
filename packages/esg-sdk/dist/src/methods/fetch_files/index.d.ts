import { FileModel } from '../../models/file_model';
/**
 * Fetches a list of FileModel instances from the specified API endpoint.
 * @param {string} dir - The directory parameter for the API endpoint, Must be one of **environment**, **social**, **governance**.
 * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
 */
export default function fetchFiles(dir: string): Promise<FileModel[]>;
//# sourceMappingURL=index.d.ts.map