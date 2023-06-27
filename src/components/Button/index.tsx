const Button = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log('!');
        }}
      >
        버튼
      </button>
      <div>
        <input type="text" />
      </div>
    </>
  );
};

export default Button;
