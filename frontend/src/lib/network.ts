// httpHelper.ts

// Define types for HTTP methods and options
interface RequestOptions {
  headers?: Record<string, string>;
  body?: any;
}

// Helper function to handle response
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    // throw new Error(Error: ${response.status} ${response.statusText});
    const ErrResponse = await response.json();
    throw ErrResponse.error;
  }
  const resp = await response.json();
  return resp.data;
};

// GET request
export const get = async (
  url: string,
  options: RequestOptions = {}
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("GET Request Error:", error);
    throw error;
  }
};

// POST request
export const post = async (
  url: string,
  data: any,
  options: RequestOptions = {}
): Promise<any> => {
  try {
    console.log(`url: ${url}`)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("POST Request Error:", error);
    throw error;
  }
};

// PUT request
export const put = async (
  url: string,
  data: any,
  options: RequestOptions = {}
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("PUT Request Error:", error);
    throw error;
  }
};

// DELETE request
export const del = async (
  url: string,
  options: RequestOptions = {}
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("DELETE Request Error:", error);
    throw error;
  }
};
