export function validateName(name) {
    if (!name || name.trim() === '') return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (!/^[A-Za-z\s\u00C0-\u017F]+$/.test(name)) return 'Name must contain only letters';
    return '';
  }
  
  export function validateEmail(email) {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
  }
  
  export function validatePassword(password) {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must contain a lowercase letter';
    if (!/[0-9]/.test(password)) return 'Password must contain a number';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'Password must contain a special character';
    return '';
  }
  
  export function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) return 'Confirm password is required';
    if (password !== confirmPassword) return 'Passwords do not match';
    return '';
  }
  
  export function validateDateOfBirth(dateOfBirth) {
    if (!dateOfBirth) return 'Date of birth is required';
  
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = regex.exec(dateOfBirth);
    if (!match) return 'Date must be in dd/mm/yyyy format';
  
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);
  
    const birthDate = new Date(year, month, day);
    if (birthDate > new Date()) return 'Date of birth cannot be in the future';
  
    const today = new Date();
    let age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() === month && today.getDate() < day)
    ) {
      age--;
    }
  
    if (age < 13) return 'You must be at least 13 years old';
    return '';
  }
  