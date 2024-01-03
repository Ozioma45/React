export default function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Get a Message</button>
    </div>
  );
}
