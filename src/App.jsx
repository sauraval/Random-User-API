import './App.css'
import AxiosApiFetch from './AxiosApiFetch'

function App() {

  return (
    <>
     <div style={{height:"700px", width:'500px',border:'5px solid',marginLeft:'100px'}} className='d-flex justify-content-center align-items-center '>
        <div style={{width:'500px',height:'600px',marginLeft:'100px'}} className='bg-primary border rounded-5'>
        <AxiosApiFetch/>
        </div>
     </div>
    </>
  )
}

export default App