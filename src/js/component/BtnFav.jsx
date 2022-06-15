import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/BotonFav.css'
import { Context } from '../store/appContext';
import { AiOutlineDelete } from "react-icons/ai";


export const BtnFav = ({ favoritos }) => {

    const { store, actions } = useContext(Context);
    const favorites = store.favorites;

    const [displayLista, setDisplayLista] = useState(false)


    const click = (ident) => {
        actions.transforFavorites(ident)
        favorites.length === 1 && actions.transforFavorites(null);
    }

    const display =()=>{
        setDisplayLista((displey)=> displey = !displey)
    }




    return (
        <div className="col-10 col-enlace-demo">
            <div className="ml-auto">

                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-button botonFav" onClick={display} aria-expanded="false">
                        Fav List
                    </button>
                </div>

                <ul className="listaFavs">

                    {
                            favoritos && favoritos.map((ele) => {



                                const listaFavs = [];
                                const ident = ele && ele.id
                                if (ele) {
                                    const fav =
                                        <li className={displayLista ? "visible"  : "noVisible"} key={ident} >
                                            <div className="row">
                                                <div className="col-9">
                                                    <div>{ele && ele.name}</div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="botonDelete" id={ident} onClick={() => click(ele.id)}>
                                                        <AiOutlineDelete></AiOutlineDelete>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    listaFavs.push(fav)

                                }
                                return listaFavs


                            })

                        }

                </ul>

            </div>

        </div>

    );
};
