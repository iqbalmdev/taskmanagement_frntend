const registerUser = async (userData) => {
    try {
      const response = await fetch('http://172.24.192.1:4001/api/registerOrg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        // Handle non-successful response
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  };

  export {
    registerUser
  }