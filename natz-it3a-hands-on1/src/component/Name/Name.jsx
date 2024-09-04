import './Name.css'; // CSS File path

function Name({ Fname, Lname }) {
  return (
    <div>
      <h1 className='text-gray'>
        <span className='Fname-color'>{Fname}</span>
        <span className='Lname-color'>{Lname}</span>
      </h1>
    </div>
  );
}

export default Name;