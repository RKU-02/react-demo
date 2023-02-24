
import './App.css';
import Counter from './component/Counter';
import Title from './component/Title';
import Home from './pages/Home';


function App(props) {
  return (
   <div className='app'>

        {/*  DAY-1.  render HTML code */}
              {/* <Title/>
                  <Home/>      
              */}
       
        {/*  DAY-2. same output display three times using rendering.*/}
                    
                    {/*  <Title titles='tatwasoft'/>
                         <Title titles='tatwasoft'/>
                    */}
                    
                    
                    {/*  <Title titles='tatwasoft'/>
                         <Title titles='tatwa-soft'/>
                         <Title titles='tatwa--soft'/>    
                    */}     
     
        {/*  Day-3.  destruturing of title and description*/}

                    {/*
                        <Home/>
                        <Title title='tatwasoft'
                               description='Hello this is a tatwasoft'/>
                    */}   

        {/*  Day-4.  destruturing of title and description*/}         

                  <Counter/>



   </div>
  );
}

export default App;
