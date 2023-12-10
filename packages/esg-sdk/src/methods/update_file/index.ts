import { FileContent } from "../../models/file_content";
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api';

/**
 * Updates a file with the specified content at the given path.
 * @param {FileContent} file - The file content parameters.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file update was successful.
 */
export default async function updateFile(file: FileContent): Promise<boolean> {
  try {
    const url = `${BASE_URL}/update?type=update&path=${file.path}/${file.name}.md&sha=${file.sha}`;
    const requestBody = {
      content: file.content
    };

    const response: AxiosResponse<FileContent> = await axios.post(url, requestBody);

    // Assuming the API returns a FileContent-like object
    const updatedFile = new FileContent(response.data);

    // Assuming the update is considered successful if the SHA property is present
    return Boolean(updatedFile.sha);
  } catch (error) {
    console.error('Error updating file:', error);
    throw new Error('File update failed'); // You can customize the error message as needed
  }
}
