// import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { enqueueSnackbar } from "notistack";

const Succes = (message , variant) => {
  enqueueSnackbar( message, { variant });
};
export default Succes;
// enqueueSnackbar('This is a success message!',{ variant: "success"} );
// window.onload = handleClickVariant('success')
// return (
//   <div>
//     <SnackbarProvider autoHideDuration={2500} />
//   {/* <button onClick={ handleClickVariant('success')}>hhhh</button> */}
//   </div>
// );
