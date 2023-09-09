import Swal from 'sweetalert2';

export const ErrorForm = ({ field, errors }) => {
  return errors?.find((err) => err.field === field) ? (
    <p className='text-danger'>{errors.find((err) => err.field === field).message}</p>
  ) : (
    ''
  );
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ErrorMessage = ({ errors }) => {
  return errors?.filter((err) => !err.hasOwnProperty('field'))
    ? errors
        ?.filter((err) => !err.hasOwnProperty('field'))
        .map((err) => Toast.fire({ icon: 'error', message: err.message }))
    : '';
};
