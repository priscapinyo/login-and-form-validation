const config = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Please enter a valid email address."
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      errorMessage: "Password must be 8+ characters, include upper/lowercase, number, and symbol."
    }
  };
  
  function validateField(id, rules) {
    const value = document.getElementById(id).value.trim();
    if (rules.required && value === '') {
      return `${id} is required.`;
    }
    if (rules.minLength && value.length < rules.minLength) {
      return `${id} must be at least ${rules.minLength} characters.`;
    }
    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.errorMessage;
    }
    return null;
  }
  
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let errors = [];
  
    for (let field in config) {
      const error = validateField(field, config[field]);
      if (error) errors.push(error);
    }
  
    const errorDiv = document.getElementById('loginErrors');
    if (errors.length > 0) {
      errorDiv.innerHTML = errors.join('<br>');
    } else {
      errorDiv.innerHTML = '';
      alert('Login Successful (simulated)');
    }
  });
  