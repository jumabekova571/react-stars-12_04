import Stars from './components/Stars';

function App() {
  return (
    <div className='container'>
      <h1 className="text-center">Stars</h1>
      <h2>Примеры</h2>
      <div className='mt-2'>
        <div>{'<Stars/>'}</div>
        <Stars/>
      </div>
      <div className='mt-2'>
        <div>{'<Stars activeStarsCount={2}/>'}</div>
        <Stars activeStarsCount={2}/>
      </div>
      <div className='mt-2'>
        <div>{'<Stars maxStarsCount={10} activeStarsCount={7}/>'}</div>
        <Stars maxStarsCount={10} activeStarsCount={7}/>
      </div>
      <div className='mt-2'>
        <div>{'<Stars fillColor="red" strokeColor="red"/>'}</div>
        <Stars fillColor="red" strokeColor="red"/>
      </div>
    </div>
  );
}

export default App;
