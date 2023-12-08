interface FormProps {
  title: string;
}

export const Form = ({ title }: FormProps) => {
  return (
    <form className={title}>
      <input className={`${title}-input`} />
      <button className={`${title}-button`} type="submit">
        Найти
      </button>
    </form>
  );
};
