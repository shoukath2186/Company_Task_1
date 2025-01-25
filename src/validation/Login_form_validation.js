export const validateFormLogIn = (formData) => {
    let validationErrors = {};


    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    

    // Password Validation
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    
    
    return {status:Object.keys(validationErrors).length === 0,data:validationErrors} 
  };