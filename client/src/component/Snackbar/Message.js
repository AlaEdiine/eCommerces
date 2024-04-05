// import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { enqueueSnackbar } from "notistack";

const Message = (message , variant) => {
  enqueueSnackbar( message, { variant });
};
export default Message;
