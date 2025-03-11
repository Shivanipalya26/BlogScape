import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: 'top-right' as const,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light' as const,
};

export const loginSuccessToast = () => {
  toast.success('Logged in successfully!', toastOptions);
};

export const loginFailedToast = () => {
  toast.error('Login failed. Please try again.', toastOptions);
};

export const registrationSuccessToast = () => {
  toast.success('Account created successfully!', toastOptions);
};

export const registrationFailedToast = () => {
  toast.error('Registration failed. Please try again.', toastOptions);
};

export const blogPostSuccessToast = () => {
  toast.success('Blog post published successfully!', toastOptions);
};

export const blogPostFailedToast = () => {
  toast.error('Failed to publish blog post.', toastOptions);
};

export const errorToast = (message: string) => {
  toast.error(`${message}`, toastOptions);
};

export const successToast = (message: string) => {
  toast.success(`${message}`, toastOptions);
};

export const infoToast = (message: string) => {
  toast.info(`ℹ️ ${message}`, toastOptions);
};
