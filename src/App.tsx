import { SideBar } from './components/SideBar';


import './styles/global.scss'


export function App() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      {/* <Content /> teve seu componente deixado dentro do SideBar */} 
    </div>
    </>
  )
}