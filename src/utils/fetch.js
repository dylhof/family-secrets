import { cleanData } from './cleanData';

export const fetchData = async (path, options, id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/v1/${path}`, options)
  if (response.status >= 300) {
    const error = await response.json()
    throw new Error(error)
  } else if(response.status === 204){ 
    return id
  } else {
    let data = await response.json()
    if(data.data) {
      data = cleanData(data)
      return data
    }
      return data 
  }
};

export const createOptions = (method, data) => ({
  method,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
});
