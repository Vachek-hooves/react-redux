import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';

// * THIS COMPONENT SHOULD BE PLACED IN APP.JS
const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage); // show error message
      dispatch(clearError()); // clear error message from state
    }
  }, [errorMessage, dispatch]);
  return <ToastContainer position="top-right" autoClose={2000} />;
};
export default Error;
