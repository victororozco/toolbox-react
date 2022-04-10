import Api from './axios-api.utils';

const get_all_files = () => Api().get(`/api/v1/files/data`);
const get_file = (fileName) => Api().get(`/api/v1/files/${fileName}`);

const exportFilesAPIs = {
  get_all_files,
  get_file,
}

export default exportFilesAPIs
