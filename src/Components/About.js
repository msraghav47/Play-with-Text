export default function About(props)
{
    return (
        <>
        <div className='container'>
            <h1 className={`text-${props.mode==='light'? 'dark' : 'light'}`}>In this application you can play with text such as copy text, change in upper case, 
                change in lower text, Clear the text and others so on</h1> 
                <p className={`text-${props.mode==='light'? 'dark' : 'light'}`}>If you want any technical support you can contact with us </p>
                <p className={`text-${props.mode==='light'? 'dark' : 'light'}`}>Mobile No. : 8868817068</p>
                <p className={`text-${props.mode==='light'? 'dark' : 'light'}`}>Email : msraghav47@gmail.com</p>
        </div>
        </>
    )
};