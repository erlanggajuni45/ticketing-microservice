export default function ErrorForm({ field, errors }) {
  return errors.find((err) => err.field === field) ? (
    <p className='text-danger'>{errors.find((err) => err.field === field).message}</p>
  ) : (
    ''
  );
}
