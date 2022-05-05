import React, {Fragment, useState} from "react";
import "./main.css"
import Button from "./components/button";
import axios from "axios"

function App() {
    const [userData, setUserDate] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeUser, setActiveUser] =useState(false);
    const [activeLink, setActiveLink] = useState(0);

    const onClickHandler = () =>{
        setLoading(true);
         axios.get("https://randomuser.me/api/").then(response=>{
             // console.log(response.data.results);
             setUserDate(response.data.results)
         }).catch(err=>{
             console.log(err);
             setLoading(true)
         }).finally(()=>{
             setLoading(false);
             setActiveUser(true)
         })
    };

    const icons = [
        'fas fa-user fa-4x',
        'fas fa-envelope fa-4x',
        'fas fa-calendar-alt fa-4x',
        'fas fa-map-marker fa-4x',
        'fas fa-phone fa-4x',
        'fas fa-lock fa-4x',
    ];

    const PhraseGenerator = ({user}) =>{

        const phrases = [
            `Salom meni ismim ${user.name.first} ${user.name.last}`,
            `Meni elektron manzilim ${user.email}`,
            `Men tugilgan sana ${user.dob.date.slice(0,10)}`,
            `Menig vatanim ${user.location.country}`,
            `Meni telefon raqamim ${user.phone}`,
            `Meni parolim ${user.login.password}`,
        ]

        return <h1>{phrases[activeLink]}</h1>
    };

    const activeLinkHandler = (index) =>{
        setActiveLink(index)
    };

    const style = {
        color:"black"
    }

  return (
    <div className="App">
       <h1 className="text-center">Tasodifiy foydalanuvchi generatori ilovasi</h1>
        <Button isActive={activeUser} clicked={onClickHandler}/>
        {loading ?
            (<h1>Yuklanmoqda...</h1>):

            (<div className="app__user">
                    { userData.map((user)=>(
                        <Fragment key={user.cell}>
                            <img src={user.picture.large} alt=""/>
                               <PhraseGenerator user={user}/>
                            <div className="app__icons">
                                {icons.map((icon, index)=>(
                                    <i className={icon} key={index} onMouseEnter={()=>activeLinkHandler(index)} style={style}></i>
                                ))}
                                {/*{icons.map(icon, index =>(*/}
                                {/*    <i className={"icon"} key={index}></i>*/}
                                {/*))}*/}
                            </div>
                        </Fragment>
                    ))}
                </div>
            )}
    </div>
  );
}

export default App;
