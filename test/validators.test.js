// src/__tests__/validators.test.js
import { describe, it, expect } from 'vitest';

import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateDateOfBirth } from '../src/utils/validators';


describe('Validation Tests', () => {

  describe('Name Validation', () => {
    it('should return error for empty name', () => {
      expect(validateName('')).toBe('Name is required');
    });

    it('should return error for name with only spaces', () => {
      expect(validateName('   ')).toBe('Name is required');
    });

    it('should return error for too short name', () => {
      expect(validateName('A')).toBe('Name must be at least 2 characters');
    });

    it('should return error for name with numbers', () => {
      expect(validateName('John123')).toBe('Name must contain only letters');
    });

    it('should return error for name with special characters', () => {
      expect(validateName('John@')).toBe('Name must contain only letters');
    });

    it('should pass for name with unicode characters', () => {
      expect(validateName('José')).toBe('');
    });

    it('should pass for name with spaces between', () => {
      expect(validateName('Mary Jane')).toBe('');
    });
  });
  describe('Email Validation', () => {
    it('should return error for empty email', () => {
      expect(validateEmail('')).toBe('Email is required');
    });

    it('should return error for invalid email without domain', () => {
      expect(validateEmail('test@')).toBe('Invalid email format');
    });

    it('should return error for invalid email missing @', () => {
      expect(validateEmail('testexample.com')).toBe('Invalid email format');
    });

    it('should return error for email with spaces', () => {
      expect(validateEmail(' test@example.com ')).toBe('Invalid email format');
    });

    it('should pass for valid email with subdomain', () => {
      expect(validateEmail('user@mail.example.com')).toBe('');
    });

    it('should pass for valid email with plus sign', () => {
      expect(validateEmail('user+label@example.com')).toBe('');
    });
  });
  describe('Password Validation', () => {
    it('should return error for empty password', () => {
      expect(validatePassword('')).toBe('Password is required');
    });

    it('should return error for password without uppercase letter', () => {
      expect(validatePassword('password1!')).toBe('Password must contain an uppercase letter');
    });

    it('should return error for password without lowercase letter', () => {
      expect(validatePassword('PASSWORD1!')).toBe('Password must contain a lowercase letter');
    });

    it('should return error for password without a number', () => {
      expect(validatePassword('Password!')).toBe('Password must contain a number');
    });

    it('should return error for password without a special character', () => {
      expect(validatePassword('Password1')).toBe('Password must contain a special character');
    });

    it('should return error for short password', () => {
      expect(validatePassword('Pa1!')).toBe('Password must be at least 8 characters');
    });

    it('should pass for strong password with symbols', () => {
      expect(validatePassword('P@ssw0rd!')).toBe('');
    });

    it('should pass for long password', () => {
      expect(validatePassword('StrongPassword123!@#')).toBe('');
    });
  });

});
