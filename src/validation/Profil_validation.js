export const validateForm = (formData) => {
    let validationErrors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      validationErrors.fullName = 'Full Name is required';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Phone Number Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      validationErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }

    // Password Validation
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    

    
    
    return {status:Object.keys(validationErrors).length === 0,data:validationErrors} 
  };