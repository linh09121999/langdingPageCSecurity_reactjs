import yaml from 'js-yaml';

let API_BASE_URL = '';
let is_required = '';

export const loadConfig = async () => {
    try {
        const response = await fetch('config.yaml'); 
        const yamlText = await response.text(); 
        const config = yaml.load(yamlText); 
        API_BASE_URL = config.api_base_url; 
        is_required = config.is_required;
        
    } catch (error) {
        console.error("Lỗi khi tải hoặc parse config.yaml:", error);
        throw new Error("Không thể load config.yaml");
    }
};

export const getApiBaseUrl = () =>  API_BASE_URL;
export const getIsRequired = () => is_required;

