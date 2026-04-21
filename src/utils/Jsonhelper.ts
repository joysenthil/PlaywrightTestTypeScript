import fs from 'fs';
import path from 'path';
import { ModuleTestData } from '../Interface/Module.interface';

/**
 * author Testers Talk
 */
export async function loadTestData() {
    const environment = `${process.env.ENV}` || 'qa';
    const directoryPath = path.join(__dirname, `../../test-data/`, environment);

    const jsonData: ModuleTestData = {};
    fs.readdirSync(directoryPath).forEach(file => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(directoryPath, file);
            const fileContent: ModuleTestData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            Object.assign(jsonData, fileContent); // Merge the content into a single object
        }
    });
    return jsonData;
}