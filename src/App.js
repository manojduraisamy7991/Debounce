export default function App() {
  const handleSearch = debounce((text) => {
    console.log("Searching:", text);
  }, 500);
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  return (
    <div className="App">
      <h1> Debounce</h1>
      <input onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}
