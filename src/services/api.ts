/**
 * IMPORTS
 */
import axios from 'axios';

/**
 * CODE
 */
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

/**
 * EXPORTS
 */
export {api};
