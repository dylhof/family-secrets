export const fetchData = async (path, options) => {
  // may need to account for different responses in my conditional
  const response = await fetch(`https://sheltered-badlands-12986.herokuapp.com/api/v1/${path}`, options)
  if (response.status >= 300) {
    const error = await response.json()
    throw new Error(error)
  } else { 
    return response.json
  }
};

export const createOptions = (method, data) => ({
  method,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
});

