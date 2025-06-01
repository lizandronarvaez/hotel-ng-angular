import dotenv from "dotenv";
import { writeFileSync, mkdirSync } from "fs";

dotenv.config();

const targetPath = "./src/environments/environments.ts";
const envFileContent = `
    export const environments = {
        backendApiUrl: "${process.env.URL_API_BACKEND}"};
`;
mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
