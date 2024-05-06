export default function Style()
{
    const [mode,setMode] = useState('Enable Dark Mode');
    const [myStyle,setMyStyle] = useState({
    color:'white',
    backgroundColor : 'black',
  }
  );
  function changeMode()
  {
    if(mode == 'Enable Dark Mode')
    {
      setMyStyle({
        color : 'white',
        backgroundColor : 'black'
      });
      setMode('Enable Light Mode');
    }
    else{
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
      });
      setMode('Enable Dark Mode');
    }
  }
}