import { baseURL } from "./useGetData";

const usePostData = async (endpoint, options) => {
    try {
        const response = await fetch(`${baseURL}${endpoint}`, { ...options });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        throw new Error(err.message || "Something went wrong");
    }
};

export default usePostData;
